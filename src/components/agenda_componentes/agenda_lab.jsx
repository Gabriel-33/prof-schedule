import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {CardComponentLab} from "./card_componente";
import axios from 'axios';
const AgendaLab = (prop) => {
    const { register,reset,handleSubmit, formState: { errors } } = useForm();


    const [horarios, SetHorarios] =

        useState(["8-10h", "10-12h", "12-13:30h", "13:30 - 15:30", "15:30 - 17:30"]);

    const [dias, SetDias] =

        useState(["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"]);

    const [curso,setCurso] = useState([]);

    const [prof,setProf] = useState([]);

    const [labKey, setLabKey] = useState(false);

    const [localKey, setLocalKey] = useState(false);

    const [diaKey, setDiaKey] = useState(false);

    const [horarioKey, setHorarioKey] = useState(false);


    const onSubmit = (data) => {
        /* navigate("/dashboard"); */
    };

    
    const adicionarAgendaLab = (prop) => {
        
        const KeyLab = prop.target.getAttribute("data-lab");

        const KeyLocal = prop.target.getAttribute("data-semestre");

        const KeyDia = prop.target.getAttribute("data-dia");

        const KeyHorario = prop.target.getAttribute("data-horario");

        setLabKey(parseInt(KeyLab));
        setLocalKey(parseInt(KeyLocal));
        setDiaKey(parseInt(KeyDia));
        setHorarioKey(parseInt(KeyHorario));
        reset();
    }
    const onCadastrarAgenda = async(data) => {
        prop.agendaLab[data.indice_lab].local[data.indice_local].horario.push({
            "horario": data.horario,
            "dia": data.dia,
            "disciplina": data.disciplina,            
            "professor": data.nome_professor,
            "local_nome":data.numero_local,
            "local_numero":data.numero_local,
            "curso":data.id_curso,
            "capacidade":50
        });
        let novo_horario_semestre = prop.agendaLab[data.indice_lab].local[data.indice_local].horario;
        console.log(novo_horario_semestre);
        try {
            const response = await axios.put('http://localhost:8080/local/editar_local_horario', 
            { novo_horario: novo_horario_semestre,id_semestre:data.id_semestre },
            {headers: {
                'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
            }});
            console.log(response.data);
            //edite o curso
        } catch (error) {
            console.error(error);
        };
        reset();
        setLabKey(false);
        setLocalKey(false);
        setHorarioKey(false);
        setDiaKey(false);
    }
    const onEditarAgenda = async(data) => {
        const id_semestre = data.id_semestre;

        const KeyLab = data.indice_lab;

        const KeyLocal = data.indice_local;

        const KeyDia = data.dia;

        const KeyHorario = data.horario;
        
        setLabKey(parseInt(KeyLab));
        setLocalKey(parseInt(KeyLocal));
        setDiaKey(parseInt(KeyDia));
        setHorarioKey(parseInt(KeyHorario));

        const novo_horario = {
            "horario": data.horario,
            "dia": data.dia,
            "disciplina": data.disciplina,            
            "professor": data.nome_professor,
            "local_nome":data.numero_local,
            "local_numero":data.numero_local,
            "curso":data.id_curso,
            "capacidade":50
        };    

        const buscar_horario_lab = prop.agendaLab[data.indice_lab].local[data.indice_local];
        const index = buscar_horario_lab.horario.findIndex((value) => 
        value.dia == KeyDia && value.horario == KeyHorario);
        let id_lab = buscar_horario_lab.id_curso;
        if(index!=-1){
            try {
                let novo_horario_lab = prop.agendaLab[data.indice_lab].local[data.indice_local].horario;

                novo_horario_lab.splice(index, 1,novo_horario);
                const response = await axios.put('http://localhost:8080/local/editar_local_horario', 
                { novo_horario: novo_horario_lab,id_semestre:id_semestre },
                {headers: {
                    'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                }});
                console.log(response.data);
                //edite o curso
            } catch (error) {
                console.log(error);
            };
        }
        reset();
        setLabKey(false);
        setLocalKey(false);
        setHorarioKey(false);
        setDiaKey(false);
    }
    const onExcluirAgenda = async(data) => {
        
        const id_semestre = data.target.getAttribute("data-id-semestre");
        console.log(id_semestre)
        const KeyLab = data.target.getAttribute("data-lab");

        const KeyLocal = data.target.getAttribute("data-semestre");  

        const KeyDia = data.target.getAttribute("data-dia");

        const KeyHorario = data.target.getAttribute("data-horario");

        const buscar_horario_lab = prop.agendaLab[KeyLab].local[KeyLocal];
        const index = buscar_horario_lab.horario.findIndex((value) => 
        value.dia == KeyDia && value.horario == KeyHorario);
        let id_lab = buscar_horario_lab.id_curso;
        if(index!=-1){
            try {
                let novo_horario_lab = prop.agendaLab[KeyLab].local[KeyLocal].horario;

                novo_horario_lab.splice(index, 1);
                const response = await axios.put('http://localhost:8080/local/editar_local_horario', 
                { novo_horario: novo_horario_lab,id_semestre:id_semestre },
                {headers: {
                    'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                }});
                //console.log(response.data);
                //edite o curso
            } catch (error) {
                console.log(error);
            };
        }
        reset();
        setLabKey(false);
        setLocalKey(false);
        setHorarioKey(false);
        setDiaKey(false);
    }
    useEffect(() => {
        axios.get('http://localhost:8080/curso/listar_curso',{headers: {
            'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
        }}).then(response => {
            setCurso(response.data);
            //console.log(response.data);
        }).catch(error => {
            console.error(error);
        });

        axios.get('http://localhost:8080/professor/listar_professor',{headers: {
            'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
        }}).then(response => {
            setProf(response.data);
            //console.log(response.data);
        }).catch(error => {
            console.error(error);
        });
        //console.log(prop.agendaLab)
    }, []);
    return (
        <React.Fragment>
            <table className="table table-striped table-hover table-bordered border-primary">
                {prop.agendaLab.map((lab, indexLab) => {
                const { local: localLab, horario, professor, disciplina } = lab;
                return (
                    <React.Fragment key={indexLab}>
                    {localLab.map((local, indexLocal) => {
                        return (
                        <React.Fragment key={`${indexLab}-${indexLocal}`}>
                            <thead>
                            <tr key={`header-${indexLocal}`}>
                                <th>lab<br></br>{local.numero_local}</th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                            </tr>
                            </thead>
                            <tbody>
                            {horarios.map((horario, indexHorario) => {
                                return (
                                    <tr key={`row-${indexHorario}`}>
                                        <td>{horario}</td>
                                        {dias.map((dia, indexDia) => {
                                            let form_value = local.horario.find((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia }));
                                            return local.horario.some((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia })) ? (
                                                    indexLab === labKey &&
                                                    indexLocal === localKey &&
                                                    indexDia === diaKey &&
                                                    indexHorario === horarioKey?(
                                                    <td key={`form-${indexLab}-${indexLocal}-${indexDia}-${indexHorario}`}>
                                                        <div style={{backgroundColor:"white"}}>
                                                            <div className="card-body"> 
                                                                <form onSubmit={handleSubmit(onEditarAgenda)}>
                                                                    <center><label>Editar horário</label></center>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">*Disciplina:</label>
                                                                        <input type="text" defaultValue="" {...register("disciplina",{required:true,maxLength:60,value:form_value.disciplina})} className="form-control" placeholder="Disciplina"/>
                                                                        {errors?.disciplina?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                        {errors?.disciplina?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
                                                                    </div>
                                                                    <input type="hidden" {...register("id_semestre",{value:local.id_curso})} className="form-control"/>
                                                                    <input type="hidden" {...register("indice_lab",{value:indexLab})} className="form-control"/>
                                                                    <input type="hidden" {...register("indice_local",{value:indexLocal})} className="form-control" />
                                                                    <input type="hidden" {...register("dia",{value:diaKey})} className="form-control" />
                                                                    <input type="hidden"  {...register("horario",{value:horarioKey})} className="form-control"/>
                                                                    <div className="input-group mb-3">
                                                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Curso:</label>
                                                                        <select className="form-select" id="inputGroupSelect01" {...register("id_curso",{required:true,maxLength:60})}>
                                                                            {
                                                                                curso.map((curso,indexCurso)=>{
                                                                                    return(
                                                                                        <option key={indexCurso} value={curso._id}>{curso._id}</option>
                                                                                    );
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                    <div className="input-group mb-3">
                                                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Professor:</label>
    
                                                                        <select className="form-select" id="inputGroupSelect01" {...register("nome_professor", { required: true, maxLength: 60 })}>
                                                                            {
                                                                                prof !== undefined && prof.map((prof, indexProfessor) => {
                                                                                    return(
                                                                                        <option key={indexProfessor}>{prof.prof_nome}</option>
                                                                                    );
                                                                                })
                                                                            }
                                                                        </select>
    
                                                                    </div>
                                                                    <div className="d-grid gap-2">
                                                                        <input type="submit" className="btn btn-success" value="SALVAR"/>
                                                                        <button className="btn btn-secondary" onClick={adicionarAgendaLab}>CANCELAR</button>
                                                                    </div> 
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </td>
                                                ):(
                                                    <td key={`card-${indexLab}-${indexLocal}-${indexDia}-${indexHorario}`}>
                                                        {local.horario.map((localHorario, localHorarioIndex) => {
                                                        
                                                        return (
                                                            JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: localHorario.horario, dia: localHorario.dia }) && (
                                                            <CardComponentLab 
                                                                key={localHorarioIndex}
                                                                txt1={localHorario.disciplina}
                                                                txt2={localHorario.professor}
                                                                txt3={localHorario.curso}
                                                                idSemestre={local.id_curso}
                                                                dataLab={indexLab}
                                                                dataSemestre={indexLocal}
                                                                dataDia={indexDia}
                                                                dataHorario={indexHorario}
                                                                editarAgenda={adicionarAgendaLab}
                                                                excluirAgenda={onExcluirAgenda}
                                                            />
                                                            )
                                                        );
                                                        })}
                                                    </td>
                                                )
                                            ) : (
                                            <td key={`empty-${indexLab}-${indexLocal}-${indexDia}-${indexHorario}`}>
                                                {indexLab === labKey &&
                                                    indexLocal === localKey &&
                                                    indexDia === diaKey &&
                                                    indexHorario === horarioKey ? (
                                                        <div style={{backgroundColor:"white"}}>
                                                            <div className="card-body"> 
                                                                <form onSubmit={handleSubmit(onCadastrarAgenda)}>
                                                                    <center><label>Novo horário</label></center>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">*Disciplina:</label>
                                                                        <input type="text" defaultValue="" {...register("disciplina",{required:true,maxLength:60})} className="form-control" placeholder="Disciplina"/>
                                                                        {errors?.disciplina?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                        {errors?.disciplina?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
                                                                    </div>
                                                                    <input type="hidden" {...register("id_semestre",{value:local.id_curso})} className="form-control"/>
                                                                    <input type="hidden" {...register("indice_lab",{value:indexLab})} className="form-control"/>
                                                                    <input type="hidden" {...register("indice_local",{value:indexLocal})} className="form-control" />
                                                                    <input type="hidden" {...register("dia",{value:diaKey})} className="form-control" />
                                                                    <input type="hidden"  {...register("horario",{value:horarioKey})} className="form-control"/>
                                                                    <div className="input-group mb-3">
                                                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Curso:</label>
                                                                        <select className="form-select" id="inputGroupSelect01" {...register("id_curso",{required:true,maxLength:60})}>
                                                                            {
                                                                                curso.map((curso,indexCurso)=>{
                                                                                    return(
                                                                                        <option key={indexCurso} value={curso._id}>{curso._id}</option>
                                                                                    );
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                    <div className="input-group mb-3">
                                                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Professor:</label>
    
                                                                        <select className="form-select" id="inputGroupSelect01" {...register("nome_professor", { required: true, maxLength: 60 })}>
                                                                            {
                                                                                prof !== undefined && prof.map((prof, indexProfessor) => {
                                                                                    return(
                                                                                        <option key={indexProfessor}>{prof.prof_nome}</option>
                                                                                    );
                                                                                })
                                                                            }
                                                                        </select>
    
                                                                    </div>
                                                                    <div className="d-grid gap-2">
                                                                        <input type="submit" className="btn btn-success" value="SALVAR"/>
                                                                        <button className="btn btn-secondary" onClick={adicionarAgendaLab}>CANCELAR</button>
                                                                    </div> 
                                                                </form>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        indexHorario !== 2 ? (
                                                            <h6 key={`${indexLab}-${indexLocal}-${indexDia}-${indexHorario}`}
                                                            data-semestre={indexLocal}
                                                            data-lab={indexLab}
                                                            data-dia={indexDia}
                                                            data-horario={indexHorario}
                                                            onClick={adicionarAgendaLab}>
                                                            +
                                                            </h6>
                                                        ) : (
                                                            <h6 key={`${indexLab}-${indexLocal}-${indexDia}-${indexHorario}`}>almoço</h6>
                                                        )
                                                    )}
                                            </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </React.Fragment>
                        );
                    })}
                    </React.Fragment>
                );
                })}
            </table>
        </React.Fragment>

    );
}
export default AgendaLab;
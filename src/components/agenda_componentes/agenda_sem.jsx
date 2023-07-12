import React from "react";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import {CardComponentSem} from "./card_componente";
import axios from 'axios';
const AgendaSemestre = (prop)=>{
    
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();

    const [professor,setProfessor] = useState([]);

    const [horarios,SetHorarios] = 

    useState(["8-10h","10-12h","12-13:30h","13:30 - 15:30","15:30 - 17:30"]);

    const [dias,SetDias] = 

    useState(["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA"]);

    const [cursoKey,setCursoKey] = useState(false);

    const [cadeiraKey,setCadeiraKey] = useState(false);

    const [horarioKey,setHorarioKey] = useState(false);
    
    const [diaKey,setDiaKey] = useState(false);

    const onCadastrarAgenda = async(data) => {
        setCursoKey(false);
        setCadeiraKey(false);
        setHorarioKey(false);
        setDiaKey(false);
        prop.agenda[data.indice_curso].semestre[data.indice_cadeira].horario.push({
            "horario": data.horario,
            "dia": data.dia,
            "disciplina": data.disciplina,            
            "professor": data.nome_professor
        });
        let novo_horario_semestre = prop.agenda[data.indice_curso].semestre[data.indice_cadeira];
        try {
            const response = await axios.put('http://localhost:8080/curso/editar_curso', 
            { data: novo_horario_semestre,id_semestre:data.id_semestre },
            {
                headers: {
                    'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                }
            }
            );
            //console.log(response.data);
            //edite o curso
        } catch (error) {
            console.error(error);
        };
    }
    const editarHorario = (prop)=>{
        const dataExcluir = prop.target.getAttribute('data-excluir');

        const KeyCurso = prop.target.getAttribute("data-curso");

        const keyCadeira= prop.target.getAttribute("data-cadeira");

        const KeyHorario = prop.target.getAttribute("data-horario");

        const KeyDia = prop.target.getAttribute("data-dia");
        
        reset();
        if(!dataExcluir){
            setCursoKey(parseInt(KeyCurso));
            setCadeiraKey(parseInt(keyCadeira));
            setHorarioKey(parseInt(KeyHorario));
            setDiaKey(parseInt(KeyDia));
        }
    }
    const onEditarHorario = async(data)=>{
        console.log(prop.agenda);
        const KeyCurso = data.indice_curso;

        const keyCadeira= data.indice_cadeira;

        const KeyHorario = data.horario;

        const KeyDia = data.dia;

        const horario_atualizado = {
            "horario": data.horario,
            "dia": data.dia,
            "disciplina": data.disciplina,            
            "professor": data.nome_professor
        };

        const buscar_horario_semestre = prop.agenda[KeyCurso].semestre[keyCadeira];
        const index = buscar_horario_semestre.horario.findIndex((value) => 
        value.dia == KeyDia && value.horario == KeyHorario);
        let id_semestre = buscar_horario_semestre.id_curso;
        let novo_horario_semestre = prop.agenda[data.indice_curso].semestre[data.indice_cadeira];

        if(index!=-1){
            buscar_horario_semestre.horario.splice(index, 1,horario_atualizado);
            try {
                const response = await axios.put('http://localhost:8080/curso/editar_curso', 
                { data: novo_horario_semestre,id_semestre:data.id_semestre },
                {
                    headers: {
                        'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                    }
                }
                );
                //console.log(response.data);
            } catch (error) {
                console.error(error);
            };
        }
        /* let novo_horario = buscar_horario_semestre.horario.splice(index,1,buscar_horario_semestre); */
        reset();
        setCursoKey(false);
        setCadeiraKey(false);
        setHorarioKey(false);
        setDiaKey(false);
    }
    const onExcluirHorario = async(data)=>{
        
        const KeyCurso = data.target.getAttribute("data-curso");
        const keyCadeira= data.target.getAttribute("data-cadeira");
        const KeyHorario = data.target.getAttribute("data-horario");
        const KeyDia = data.target.getAttribute("data-dia");
        const buscar_horario_semestre = prop.agenda[KeyCurso].semestre[keyCadeira];
        const index = buscar_horario_semestre.horario.findIndex((value) => 
        value.dia == KeyDia && value.horario == KeyHorario);
        let id_semestre = buscar_horario_semestre.id_curso;
        let novo_horario = buscar_horario_semestre.horario.splice(index,1)
        if(index!=-1){
            try {
                const response = await axios.put('http://localhost:8080/curso/editar_curso', 
                { data: buscar_horario_semestre,id_semestre:id_semestre },
                {headers: {
                    'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                }}
                );
                reset();
                setCursoKey(false);
                setCadeiraKey(false);
                setHorarioKey(false);
                setDiaKey(false);
            } catch (error) {
                console.error(error);
            };
        }
    }
    useEffect(() => {
        axios.get('http://localhost:8080/professor/listar_professores',
        {
            headers: {
                'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
            }
        })
        .then(response => {
            setProfessor(response.data);
            console.log(professor);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    return(
        <React.Fragment>
            <table className="table table-striped table-hover table-bordered border-primary">
                {prop.agenda.map((curso, indexCurso) => {
                    const { _id: nome_curso, semestre:semestre } = curso;

                    return (
                    <React.Fragment key={indexCurso}>
                        <thead>
                            <tr>
                                <th colSpan={6}>
                                <center>
                                    <h2>{nome_curso}</h2>
                                </center>
                                </th>
                            </tr>
                        </thead>
                        {semestre.map((itemCadeira, indexCadeira) => {
                            
                            const {cadeira:cadeiraItem,horario: horarioValue } = itemCadeira;
                            return (
                                <React.Fragment key={indexCadeira}>
                                    <thead>
                                        <tr>
                                            <th>{nome_curso}-{itemCadeira.numero_semestre}</th>
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
                                                <tr key={indexHorario}>
                                                    <td>{horario}</td>
                                                    {dias.map((dia, indexDia) => {
                                                        return(
                                                            <td
                                                                key={indexDia}
                                                            >
                                                                {horarioValue.map((value, indexHagenda) => { 
                                                                    return JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({horario:value.horario,dia:value.dia}) &&(
                                                                        indexCurso === cursoKey &&
                                                                        indexCadeira === cadeiraKey &&
                                                                        indexHorario === horarioKey &&
                                                                        indexDia === diaKey ? (
                                                                            
                                                                            <h3 key={indexHagenda}>
                                                                                <div style={{backgroundColor:"white"}}>
                                                                                    <div className="card-body"> 
                                                                                        <form onSubmit={handleSubmit(onEditarHorario)}>
                                                                                            <center><label>Editar horário</label></center>
                                                                                            <div className="mb-3">
                                                                                                <label className="form-label">*Disciplina:</label>
                                                                                                <input type="text" defaultValue="" {...register("disciplina",{required:true,maxLength:60,value:value.disciplina})} className="form-control" placeholder="Disciplina"/>
                                                                                                {errors?.disciplina?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                                                {errors?.disciplina?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
                                                                                            </div>
                                                                                            <input type="hidden" {...register("id_semestre",{value:itemCadeira.id_curso})} className="form-control"/>
                                                                                            <input type="hidden" {...register("indice_curso",{value:cursoKey})} className="form-control"/>
                                                                                            <input type="hidden" {...register("indice_cadeira",{value:cadeiraKey})} className="form-control" />
                                                                                            <input type="hidden" {...register("dia",{value:diaKey})} className="form-control" />
                                                                                            <input type="hidden"  {...register("horario",{value:horarioKey})} className="form-control"/>
                                                                                            <div className="input-group mb-3">
                                                                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Professor:</label>
                                                                                                <select className="form-select" id="inputGroupSelect01" {...register("nome_professor",{required:true,maxLength:60})}>
                                                                                                    {
                                                                                                        professor[indexCurso]!=undefined?
                                                                                                        professor[indexCurso].professor.map((professor_nome,indexProfessor)=>{
                                                                                                            return(
                                                                                                                <option defaultValue={value.professor} key={indexProfessor}>{professor_nome.professor_nome}</option>
                                                                                                            );
                                                                                                        })
                                                                                                        : <option key={-1}>Sem professor</option>
                                                                                                    }
                                                                                                
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="d-grid gap-2">
                                                                                                <input type="submit" className="btn btn-success" value="SALVAR"/>
                                                                                                <button className="btn btn-secondary" onClick={editarHorario}>CANCELAR</button>
                                                                                            </div> 
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </h3>
                                                                        ):(
                                                                            <h6 key={indexHagenda} onClick={editarHorario}
                                                                            >
                                                                                <CardComponentSem 
                                                                                    txt1={value.disciplina} 
                                                                                    txt2={value.professor}
                                                                                    dataCurso={indexCurso}
                                                                                    dataCadeira={indexCadeira}
                                                                                    dataHorario={indexHorario}
                                                                                    dataDia={indexDia}
                                                                                    onExcluirHorario={onExcluirHorario}
                                                                                    onEditarHorario={onEditarHorario}
                                                                                    
                                                                                />
                                                                            </h6>
                                                                        )
                                                                    )   
                                                                })}
                                                                {horarioValue.some((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia })) ? null : (
                                                                    indexCurso === cursoKey &&
                                                                    indexCadeira === cadeiraKey &&
                                                                    indexHorario === horarioKey &&
                                                                    indexDia === diaKey ? (
                                                                        
                                                                        <h3>
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
                                                                                        <input type="hidden" {...register("id_semestre",{value:itemCadeira.id_curso})} className="form-control"/>
                                                                                        <input type="hidden" {...register("indice_curso",{value:cursoKey})} className="form-control"/>
                                                                                        <input type="hidden" {...register("indice_cadeira",{value:cadeiraKey})} className="form-control" />
                                                                                        <input type="hidden" {...register("dia",{value:diaKey})} className="form-control" />
                                                                                        <input type="hidden"  {...register("horario",{value:horarioKey})} className="form-control"/>
                                                                                        <div className="input-group mb-3">
                                                                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Professor:</label>
                                                                                            <select className="form-select" id="inputGroupSelect01" {...register("nome_professor",{required:true,maxLength:60})}>
                                                                                                {
                                                                                                    professor[indexCurso]!=undefined?
                                                                                                     professor[indexCurso].professor.map((professor_nome,indexProfessor)=>{
                                                                                                        return(
                                                                                                            <option key={indexProfessor}>{professor_nome.professor_nome}</option>
                                                                                                        );
                                                                                                    })
                                                                                                    : <option key={-1}>Sem professor</option>
                                                                                                }
                                                                                            
                                                                                            </select>
                                                                                        </div>
                                                                                        <div className="d-grid gap-2">
                                                                                            <input type="submit" className="btn btn-success" value="SALVAR"/>
                                                                                            <button className="btn btn-secondary" onClick={editarHorario}>CANCELAR</button>
                                                                                        </div> 
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </h3>
                                                                    ):(
                                                                        indexHorario != 2?(
                                                                            <h6
                                                                                data-curso={indexCurso}
                                                                                data-cadeira={indexCadeira}
                                                                                data-horario={indexHorario}
                                                                                data-dia={indexDia}
                                                                                onClick={editarHorario}
                                                                            >
                                                                                +
                                                                            </h6>
                                                                        ):(
                                                                            <h6>
                                                                                almoço
                                                                            </h6>
                                                                        )
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
export default AgendaSemestre;
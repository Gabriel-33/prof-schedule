import React from 'react';
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import {CardComponentProf} from "./card_componente";
import axios from 'axios';

const AgendaProf = (props) => {
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();

    const [cadeiraSelecionada,setCadeiraSelecionada] = useState(0);
    const[cursos,setCursos] = useState([]);
    const [horarios,SetHorarios] = 

    useState(["8-10h","10-12h","12-13:30h","13:30 - 15:30","15:30 - 17:30"]);

    const [dias,SetDias] = 

    useState(["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA"]);

    const [cursoKey,setCursoKey] = useState(false);

    const [profKey,setProfKey] = useState(false);

    const [horarioKey,setHorarioKey] = useState(false);
    
    const [diaKey,setDiaKey] = useState(false);
    const [novo_horario_professor,setNovoHorarioProfessor] = useState({});
    const onCadastrarHorario = async(data) => {
        reset();
        props.agenda[data.area].professor[data.indice_professor].horario_professor.push({
            "horario": data.horario,
            "dia": data.dia,
            "disciplina": data.cadeira,
            "_id": data.id_professor
        });
        const novo_horario_professor = props.agenda[data.area].professor[data.indice_professor].horario_professor;
        setNovoHorarioProfessor(novo_horario_professor);
        setCursoKey(false);
        setProfKey(false);
        setHorarioKey(false);
        setDiaKey(false);
        try {
            const response = await axios.put('http://localhost:8080/editar_professor_horario', { data: novo_horario_professor,id_professor:data.id_professor });
            //console.log(response.data);
        } catch (error) {
            console.error(error);
        };
    };
    const onEditarHorario = async(data) => {
        
        const novo_horario_professor = props.agenda[data.area].professor[data.indice_professor].horario_professor;
        
        const horario_atualizado = {
            "horario": data.horario,
            "dia": data.dia,
            "disciplina": data.cadeira,            
            "_id": data.id_horario
        };
        
        const index = novo_horario_professor.findIndex((value) => 
        horario_atualizado._id === value._id && horario_atualizado.dia === value.dia && 
        horario_atualizado.horario === value.horario);
        if (index !== -1) {
            novo_horario_professor.splice(index, 1,horario_atualizado);
            try {
                const response = await axios.put('http://localhost:8080/editar_professor_horario', { data: novo_horario_professor,id_professor:data.id_professor });
                //console.log(response.data);
            } catch (error) {
                console.error(error);
            };
        }
        reset();
        setCursoKey(false);
        setProfKey(false);
        setHorarioKey(false);
        setDiaKey(false);
    }
    const onExcluirHorario = async(data) => {
        const indice_professor = data.target.getAttribute("data-indice-professor");
        const curso = data.target.getAttribute("data-curso");
        const id_horario = data.target.getAttribute("data-id-horario");
        const horario = data.target.getAttribute("data-horario");
        const dia = data.target.getAttribute("data-dia");
        const buscar_horario_professor = props.agenda[curso].professor[indice_professor];
        const index = buscar_horario_professor.horario_professor.findIndex((value) => 
        id_horario == value._id && dia == value.dia && 
        horario == value.horario);
        if(index!=-1){
            buscar_horario_professor.horario_professor.splice(index,1);
            //console.log(buscar_horario_professor.horario_professor);
            try {
                const response = await axios.put('http://localhost:8080/editar_professor_horario', { data: buscar_horario_professor.horario_professor,id_professor:buscar_horario_professor.id_professor });
                //console.log(buscar_horario_professor.horario);
            } catch (error) {
                console.error(error);
            };
        }
    }
    const editarHorario = (prop)=>{
        reset();
        const KeyCurso = prop.target.getAttribute("data-curso");

        const KeyProf = prop.target.getAttribute("data-prof");

        const KeyHorario = prop.target.getAttribute("data-horario");

        const KeyDia = prop.target.getAttribute("data-dia");

        setCursoKey(parseInt(KeyCurso));
        setProfKey(parseInt(KeyProf));
        setHorarioKey(parseInt(KeyHorario));
        setDiaKey(parseInt(KeyDia));
    }
    useEffect(() => {
        axios.get('http://localhost:8080/listar_cursos')
        .then(response => {
            setCursos(prevCursos => [...prevCursos, ...response.data.map(curso => curso._id)]);
        })
        .catch(error => {
            console.error(error);
        });
    },[]) 
    return(
        <React.Fragment>
            <table className="table table-striped table-hover table-bordered border-primary">
                {props.agenda.map((value, indexCurso) => {
                    const { _id: nome_curso, professor } = value;
                    return (
                    <React.Fragment key={indexCurso}>
                        <thead>
                            <tr>
                                <th colSpan={6}>
                                <center>
                                    <h2>Professores de {cursos[nome_curso]}</h2>
                                </center>
                                </th>
                            </tr>
                        </thead>
                        {professor.map((professor, indexProfessor) => {
                            const { professor_nome: professor_nome, horario_professor: horarioProf } = professor;

                            const dataArray = JSON.stringify(horarioProf[0]);

                            return (
                                <React.Fragment key={indexProfessor}>
                                    <thead>
                                        <tr>
                                            <th>{professor_nome}</th>
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
                                                                {horarioProf.map((value, indexHagenda) => { 
                                                                    
                                                                    return JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({horario:value.horario,dia:value.dia}) &&(
                                                                        indexCurso === cursoKey &&
                                                                        indexProfessor === profKey &&
                                                                        indexHorario === horarioKey &&
                                                                        indexDia === diaKey ? (
                                                                            <h3 key={indexHagenda}>
                                                                                <div className="" style={{backgroundColor:"white"}}>
                                                                                    <div className="card-body"> 
                                                                                        <form onSubmit={handleSubmit(onEditarHorario)}>
                                                                                            <center><label>Editar horário</label></center>
                                                                                            <div className="mb-3">
                                                                                            <label className="form-label">*Disciplina:</label>
                                                                                            <input type="text" defaultValue="" {...register("cadeira",{required:true,maxLength:60,value:value.disciplina})} className="form-control" placeholder="Disciplina"/>
                                                                                            {errors?.disciplina?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                                            {errors?.disciplina?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
                                                                                        </div>
                                                                                        <input type="hidden" {...register("id_professor",{required:true,maxLength:60,value:professor.id_professor})} className="form-control"/>
                                                                                        <input type="hidden" {...register("id_horario",{required:true,maxLength:60,value:value._id})} className="form-control"/>
                                                                                        <input type="hidden" {...register("indice_professor",{value:profKey})} className="form-control"/>
                                                                                        <input type="hidden" {...register("area",{value:indexCurso})} className="form-control"/>
                                                                                        <input type="hidden" {...register("dia",{value:indexDia})} className="form-control"/>
                                                                                        <input type="hidden" {...register("horario",{value:indexHorario})} className="form-control"/>
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
                                                                                <CardComponentProf 
                                                                                    txt1={value.disciplina} 
                                                                                    txt2={cursos[nome_curso]}
                                                                                    dataIdHorario={value._id}
                                                                                    dataCurso={indexCurso}
                                                                                    dataProf={indexProfessor}
                                                                                    dataHorario={indexHorario}
                                                                                    dataDia={indexDia}
                                                                                    dataindice_professor={profKey}
                                                                                    dataArea={indexCurso}
                                                                                    onExcluirHorario={onExcluirHorario}
                                                                                />
                                                                            </h6>
                                                                        )
                                                                    )   
                                                                })}
                                                                {horarioProf.some((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia })) ? null : (

                                                                    indexCurso === cursoKey &&
                                                                    indexProfessor === profKey &&
                                                                    indexHorario === horarioKey &&
                                                                    indexDia === diaKey ? (
                                                                        <h3>
                                                                            <div className="" style={{backgroundColor:"white"}}>
                                                                                <div className="card-body"> 
                                                                                    <form onSubmit={handleSubmit(onCadastrarHorario)}>
                                                                                        <center><label>Cadastrar horário</label></center>
                                                                                        <div className="mb-3">
                                                                                            <label className="form-label">*Disciplina:</label>
                                                                                            <input type="text" defaultValue="" {...register("cadeira",{required:true,maxLength:60})} className="form-control" placeholder="Disciplina"/>
                                                                                            {errors?.disciplina?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                                            {errors?.disciplina?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
                                                                                        </div>
                                                                                        <input type="hidden" {...register("id_professor",{required:true,maxLength:60,value:professor.id_professor})} className="form-control"/>
                                                                                        <input type="hidden" {...register("indice_professor",{value:profKey})} className="form-control"/>
                                                                                        <input type="hidden" {...register("area",{value:indexCurso})} className="form-control"/>
                                                                                        <input type="hidden" {...register("dia",{value:indexDia})} className="form-control"/>
                                                                                        <input type="hidden" {...register("horario",{value:indexHorario})} className="form-control"/>
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
                                                                                data-prof={indexProfessor}
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
export default AgendaProf;

import React from "react";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import {CardComponentSem} from "./card_componente";
const AgendaSemestre = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [cadeiraSelecionada,setCadeiraSelecionada] = useState(0);

    const [horarios,SetHorarios] = 

    useState(["8-10h","10-12h","12-13:30h","13:30 - 15:30","15:30 - 17:30"]);

    const [dias,SetDias] = 

    useState(["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA"]);

    const [cursoKey,setCursoKey] = useState(false);

    const [cadeiraKey,setCadeiraKey] = useState(false);

    const [horarioKey,setHorarioKey] = useState(false);
    
    const [diaKey,setDiaKey] = useState(false);

    const onSubmit = (data) => {
        /* navigate("/dashboard");  */ 
    };

    const agenda = [
        {
            id_curso: 1,
            curso: 'computação',
            cadeira: [
            {
                id_cadeira: 1,
                semestre:'1',
                fk_curso:1,
                horario: [
                    { horario: 3, dia: 0 ,disciplina:'lógica',professor:'alexandre'},
                    { horario: 0, dia: 0 ,disciplina:'poo',professor:'alexandre'},
                    { horario: 1, dia: 1 ,disciplina:'web',professor:'alexandre'},
                    { horario: 3, dia: 2 ,disciplina:'lógica',professor:'alexandre'},
                    { horario: 0, dia: 2 ,disciplina:'poo',professor:'alexandre'},
                    { horario: 1, dia: 4 ,disciplina:'web',professor:'alexandre'},
                ],
            }],
        },
        {
            id_curso: 2,
            curso: 'software',
            cadeira: [
            {
                id_cadeira: 2,
                semestre:'2',
                fk_curso:2,
                horario: [
                    { horario: 3, dia: 0 ,disciplina:'lógica',professor:'alexandre'},
                    { horario: 0, dia: 0 ,disciplina:'poo',professor:'alexandre'},
                    { horario: 1, dia: 1 ,disciplina:'web',professor:'alexandre'},
                    { horario: 3, dia: 2 ,disciplina:'lógica',professor:'alexandre'},
                    { horario: 0, dia: 2 ,disciplina:'poo',professor:'alexandre'},
                    { horario: 1, dia: 4 ,disciplina:'web',professor:'alexandre'},
                ],
            }
            ],
        },
    ]
    const editarHorario = (prop)=>{

        const KeyCurso = prop.target.getAttribute("data-curso");

        const keyCadeira= prop.target.getAttribute("data-cadeira");

        const KeyHorario = prop.target.getAttribute("data-horario");

        const KeyDia = prop.target.getAttribute("data-dia");

        setCursoKey(parseInt(KeyCurso));
        setCadeiraKey(parseInt(keyCadeira));
        setHorarioKey(parseInt(KeyHorario));
        setDiaKey(parseInt(KeyDia));
    }
    useEffect(() => {
        
          
    }, [cursoKey,horarioKey,diaKey]);
    return(
        <React.Fragment>
            <table className="table table-striped table-hover table-bordered border-primary">
                {agenda.map((curso, indexCurso) => {
                    const { curso: course, cadeira:cadeiraValue } = curso;

                    return (
                    <React.Fragment key={indexCurso}>
                        <thead>
                            <tr>
                                <th colSpan={6}>
                                <center>
                                    <h2>{course}</h2>
                                </center>
                                </th>
                            </tr>
                        </thead>
                        {cadeiraValue.map((itemCadeira, indexCadeira) => {
                            const {cadeira:cadeiraItem,horario: horarioValue } = itemCadeira;
                            return (
                                <React.Fragment key={indexCadeira}>
                                    <thead>
                                        <tr>
                                            <th>{course}-{itemCadeira.semestre}</th>
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
                                                                        indexCadeira === cadeiraKey &&
                                                                        indexHorario === horarioKey &&
                                                                        indexDia === diaKey ? (
                                                                            <h3 key={indexHagenda}>
                                                                                <div style={{backgroundColor:"white"}}>
                                                                                    <div className="card-body"> 
                                                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                                                            <center><label>Novo horário</label></center>
                                                                                            <div className="input-group mb-3">
                                                                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Cadeira:</label>
                                                                                                <select className="form-select" id="inputGroupSelect01" defaultValue="0" {...register("area_professor",{required:true,maxLength:60})}>
                                                                                                    <option value="0">lógica</option>
                                                                                                    <option value="1">lfa</option>
                                                                                                    <option value="2">Mat. comp.</option>
                                                                                                    <option value="3">Poo</option>
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="input-group mb-3">
                                                                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Professor:</label>
                                                                                                <select className="form-select" id="inputGroupSelect01" defaultValue="0" {...register("area_professor",{required:true,maxLength:60})}>
                                                                                                    <option value="0">Alexandre</option>
                                                                                                    <option value="1">Bomfim</option>
                                                                                                    <option value="2">Tati</option>
                                                                                                    <option value="3">Eurinardo</option>
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
                                                                                />
                                                                            </h6>
                                                                        )
                                                                    )   
                                                                })}
                                                                {horarioValue.some((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia })) ? null : (
                                                                    indexCadeira === cadeiraKey &&
                                                                    indexHorario === horarioKey &&
                                                                    indexDia === diaKey ? (
                                                                        <h3>
                                                                            <div style={{backgroundColor:"white"}}>
                                                                                <div className="card-body"> 
                                                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                                                        <center><label>Novo horário</label></center>
                                                                                        <div className="input-group mb-3">
                                                                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Cadeira:</label>
                                                                                            <select className="form-select" id="inputGroupSelect01" defaultValue="0" {...register("area_professor",{required:true,maxLength:60})}>
                                                                                                <option value="0">lógica</option>
                                                                                                <option value="1">lfa</option>
                                                                                                <option value="2">Mat. comp.</option>
                                                                                                <option value="3">Poo</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div className="input-group mb-3">
                                                                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Professor:</label>
                                                                                            <select className="form-select" id="inputGroupSelect01" defaultValue="0" {...register("area_professor",{required:true,maxLength:60})}>
                                                                                                <option value="0">Alexandre</option>
                                                                                                <option value="1">Bomfim</option>
                                                                                                <option value="2">Tati</option>
                                                                                                <option value="3">Eurinardo</option>
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
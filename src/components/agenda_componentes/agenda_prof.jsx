import React from "react";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import CardComponent from "./card_componente";

const AgendaProf = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [prof,SetProf] = useState(["Alexandre","Eurinardo","Bomfim","Tati"]);

    const [cadeira,SetCadeira] = useState(["Computação","Software","Civíl","Produção","Mecânica"]);

    const [cadeiraSelecionada,setCadeiraSelecionada] = useState(0);

    const [horarios,SetHorarios] = 

    useState(["8-10h","10-12h","12-13:30h","13:30 - 15:30","15:30 - 17:30"]);

    const [dias,SetDias] = 

    useState(["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA"]);

    const [cursoKey,setCursoKey] = useState(false);

    const [profKey,setProfKey] = useState(false);

    const [horarioKey,setHorarioKey] = useState(false);
    
    const [diaKey,setDiaKey] = useState(false);

    const onSubmit = (data) => {
        navigate("/dashboard");  
    };

    const agenda = [
    {
        id_curso: 1,
        curso: 'computação',
        prof: [
        {
            id_prof: 1,
            prof:'Alexandre',
            fk_curso:1,
            horario: [
            { horario: 3, dia: 0 ,disciplina:'lógica'},
            { horario: 0, dia: 0 ,disciplina:'poo'},
            { horario: 1, dia: 1 ,disciplina:'web'},
            { horario: 3, dia: 2 ,disciplina:'lógica'},
            { horario: 0, dia: 2 ,disciplina:'poo'},
            { horario: 1, dia: 4 ,disciplina:'web'},
            ],
        },
        {
            id_prof: 2,
            prof:'Tati',
            fk_curso:1,
            horario: [
                { horario: 3, dia: 0 ,disciplina:'ed'},
                { horario: 0, dia: 0 ,disciplina:'mat.comp'},
                { horario: 3, dia: 2 ,disciplina:'ed'},
                { horario: 0, dia: 2 ,disciplina:'mat.comp'},
            ],
        },
        ],
    },
    {
        id_curso: 2,
        curso: 'software',
        prof: [
        {
            id_prof: 1,
            prof:'Bomfim',
            fk_curso:2,
            horario: [
                { horario: 3, dia: 0 ,disciplina:'i.a'},
                { horario: 0, dia: 0 ,disciplina:'eda'},
                { horario: 3, dia: 2 ,disciplina:'i.a'},
                { horario: 0, dia: 2 ,disciplina:'eda'},
            ],
        },
        {
            id_prof: 2, 
            prof:'eurinardo',
            fk_curso:2,
            horario: [
                { horario: 3, dia: 0 ,disciplina:'lfa'},
                { horario: 0, dia: 0 ,disciplina:'paa'},
                { horario: 3, dia: 2 ,disciplina:'lfa'},
                { horario: 0, dia: 2 ,disciplina:'paa'},
                { horario: 0, dia: 1 ,disciplina:'int.eng.software'},
                { horario: 0, dia: 3 ,disciplina:'int.eng.software'},
            ],
        },
        ],
    }
    ];      
    const editarHorario = (prop)=>{

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
        agenda.forEach((curso) => {
            const { curso: course, prof } = curso;
            
            /* console.log(`Course: ${course}`); */

            prof.forEach((professor) => {
                const { prof: professorName, horario } = professor;
                
                /* console.log(`- Professor: ${professorName}`);
                console.log('- Schedule:'); */
                
                horario.forEach((schedule) => {
                  const { horario: time, dia: day } = schedule;
                  
                  /* console.log({time,day}); */
                });
            });

            /* console.log('---'); */
          });
          
    }, [profKey,horarioKey,diaKey]);
    return(
        <React.Fragment>
            {/* <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Área:</label>
                <select className="form-select" defaultValue={0} id="inputGroupSelect01">
                    <option value="0">Computação</option>
                    <option value="1">Software</option>
                    <option value="2">Civíl</option>
                    <option value="3">Produção</option>
                    <option value="4">Mecânica</option>
                    <option value="5">Todos</option>
                </select>
            </div> */}
            <table className="table table-striped table-hover table-bordered border-primary">
                {agenda.map((curso, indexCurso) => {
                    const { curso: course, prof } = curso;

                    return (
                    <React.Fragment key={indexCurso}>
                        <thead>
                            <tr>
                                <th colSpan={6}>
                                <center>
                                    <h2>Professores de {course}</h2>
                                </center>
                                </th>
                            </tr>
                        </thead>
                        {prof.map((professor, indexProfessor) => {
                            const { prof: professorName, horario: horarioProf } = professor;
                            return (
                                <React.Fragment key={indexProfessor}>
                                    <thead>
                                        <tr>
                                            <th>{professorName}</th>
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
                                                        return indexCurso === cursoKey &&
                                                            indexProfessor === profKey &&
                                                            indexHorario === horarioKey &&
                                                            indexDia === diaKey ? (
                                                                <td key={indexDia}>
                                                                    <div className="card">
                                                                        <div className="card-body"> 
                                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                                <center><label>PROFESSOR</label></center>
                                                                                <div className="mb-3">
                                                                                    <label className="form-label">SIAPE:</label>
                                                                                    <input type="text" defaultValue="" {...register("email_prof",{ required: true})} className="form-control" placeholder="name@example.com"/>
                                                                                    {errors?.email_prof?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                                </div>
                                                                                <div className="mb-3">
                                                                                    <label className="form-label">SENHA:</label>
                                                                                    <input type="password" defaultValue="" {...register("senha_prof",{ required: true})} className="form-control" placeholder="name@example.com"/>
                                                                                    {errors?.senha_prof?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                                                                                </div> 
                                                                                <div className="d-grid gap-2">
                                                                                    <input type="submit" className="btn btn-success" value="ENTRAR"/>
                                                                                </div> 
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            ) : (
                                                                <td
                                                                    key={indexDia}
                                                                >
                                                                    {horarioProf.map((value, indexHagenda) => { 
                                                                        return JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({horario:value.horario,dia:value.dia}) &&(
                                                                            <h6 key={indexHagenda}>
                                                                                <CardComponent txt1={value.disciplina} txt2={course}/>
                                                                            </h6>
                                                                        )   
                                                                    })}
                                                                     {horarioProf.some((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia })) ? null : (
                                                                        <h6
                                                                            data-curso={indexCurso}
                                                                            data-prof={indexProfessor}
                                                                            data-horario={indexHorario}
                                                                            data-dia={indexDia}
                                                                            onClick={editarHorario}
                                                                            >
                                                                            +
                                                                        </h6>
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
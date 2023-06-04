import React from "react";
import { useState,useEffect } from "react";

const AgendaProf = ()=>{
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
            { horario: 3, dia: 0 },
            { horario: 0, dia: 0 },
            { horario: 0, dia: 1 },
            { horario: 1, dia: 1 },
            { horario: 2, dia: 2 },
            { horario: 2, dia: 2 },
            { horario: 1, dia: 3 },
            { horario: 0, dia: 3 },
            { horario: 2, dia: 4 },
            { horario: 3, dia: 4 },
            ],
        },
        {
            id_prof: 2,
            prof:'Tati',
            fk_curso:1,
            horario: [
            { horario: 1, dia: 0 },
            { horario: 0, dia: 0 },
            { horario: 0, dia: 1 },
            { horario: 1, dia: 1 },
            { horario: 2, dia: 2 },
            { horario: 2, dia: 2 },
            { horario: 1, dia: 3 },
            { horario: 0, dia: 3 },
            { horario: 2, dia: 4 },
            { horario: 3, dia: 4 },
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
            { horario: 1, dia: 0 },
            { horario: 0, dia: 0 },
            { horario: 0, dia: 1 },
            { horario: 1, dia: 1 },
            { horario: 2, dia: 2 },
            { horario: 2, dia: 2 },
            { horario: 1, dia: 3 },
            { horario: 0, dia: 3 },
            { horario: 2, dia: 4 },
            { horario: 3, dia: 4 },
            ],
        },
        {
            id_prof: 2, 
            prof:'Pablo',
            fk_curso:2,
            horario: [
            { horario: 1, dia: 0 },
            { horario: 0, dia: 0 },
            { horario: 0, dia: 1 },
            { horario: 1, dia: 1 },
            { horario: 2, dia: 2 },
            { horario: 2, dia: 2 },
            { horario: 1, dia: 3 },
            { horario: 0, dia: 3 },
            { horario: 2, dia: 4 },
            { horario: 3, dia: 4 },
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
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Área:</label>
                <select className="form-select" defaultValue={0} id="inputGroupSelect01">
                    <option value="0">Computação</option>
                    <option value="1">Software</option>
                    <option value="2">Civíl</option>
                    <option value="3">Produção</option>
                    <option value="4">Mecânica</option>
                    <option value="5">Todos</option>
                </select>
            </div>
            <div>
            </div>
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
                    const { hor } = horario;
                    return (
                        <tr key={indexHorario}>
                            <td>{horario}</td>
                            {dias.map((dia, indexDia) => {
                                return indexCurso === cursoKey &&
                                    indexProfessor === profKey &&
                                    indexHorario === horarioKey &&
                                    indexDia === diaKey ? (
                                        <td key={indexDia}>Editar</td>
                                    ) : (
                                        <td
                                            key={indexDia}
                                            data-curso={indexCurso}
                                            data-prof={indexProfessor}
                                            data-horario={indexHorario}
                                            data-dia={indexDia}
                                            onClick={editarHorario}
                                        >
                                            {horarioProf.map((value, indexHagenda) => {
                                                return JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify(value) ? (
                                                    <h6 key={indexHagenda}>
                                                        {professorName}
                                                    </h6>
                                                ) : (
                                                    <h6 key={indexHagenda}></h6>
                                                );
                                            })}
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
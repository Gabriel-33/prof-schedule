import React from "react";
import { useState,useEffect } from "react";

const AgendaProf = ()=>{
    const [prof,SetProf] = useState(["Alexandre","Eurinardo","Bomfim","Tati"]);

    const [horarios,SetHorarios] = 

    useState(["8-10h","10-12h","12-13:30h","13:30 - 15:30","15:30 - 17:30"]);

    const [dias,SetDias] = 

    useState(["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA"]);

    const [subIndexSelect,setSubIndexSelect] = useState(0);

    const [profKey,setProfKey] = useState(false);

    const [horarioKey,setHorarioKey] = useState(false);
    
    const [diaKey,setDiaKey] = useState(false);

    const agenda = [{
        id_prof: 1,
        horario: [{horario:0,dia:0},{horario:0,dia:1}],
        // Add more arrays or properties as needed
    },{
        id_prof: 2,
        horario: [{horario:0,dia:0},{horario:1,dia:0},{horario:2,dia:1}],
        // Add more arrays or properties as needed
    },
    {
        id_prof: 3,
        horario: [{horario:0,dia:0},{horario:1,dia:0}],
        // Add more arrays or properties as needed
    },
    {
        id_prof: 4,
        horario: [{horario:0,dia:0},{horario:1,dia:1}],
        // Add more arrays or properties as needed
    }];      
    const editarHorario = (prop)=>{
        const KeyProf = prop.target.getAttribute("keyProf");
        const KeyHorario = prop.target.getAttribute("keyHorario");
        const KeyDia = prop.target.getAttribute("keyDia");
        setProfKey(parseInt(KeyProf));
        setHorarioKey(parseInt(KeyHorario));
        setDiaKey(parseInt(KeyDia));
    }
    useEffect(() => {

    }, [profKey,horarioKey,diaKey]);
    return(
        <table className="table table-striped table-hover table-bordered border-primary">
            {Object.entries(prof).map(([key, value], indexProf) => (
            <React.Fragment key={indexProf}>
                <thead>
                <tr>
                    <th>{value}</th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                </tr>
                </thead>
                <tbody key={indexProf}>
                    {Object.entries(horarios).map(([key, value], indexHorario) => (
                        <tr key={indexHorario}>
                            <td>{value}</td>
                            {Object.entries(dias).map(([key, value], indexDia) => (profKey === indexProf && horarioKey === indexHorario && diaKey === indexDia ? (
                                    <td key={indexDia} keyprof={indexProf} keyhorario={indexHorario} keydia={indexDia} onClick={(e) => editarHorario(e)}>
                                        editar
                                    </td>
                                ) : (
                                    <td key={indexDia} keyprof={indexProf} keyhorario={indexHorario} keydia={indexDia} onClick={(e) => editarHorario(e)}>
                                        {Object.entries(agenda[indexProf].horario).map(([key, value], index) => (
                                           JSON.stringify({horario:indexHorario,dia:indexDia}) === JSON.stringify(value) ? (
                                                <h1 key={index}>aula</h1>
                                            ) : (
                                                <h1 key={index}></h1>
                                            )
                                        ))}
                                    </td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </React.Fragment>
            ))}
        </table>
    );
}
export default AgendaProf;
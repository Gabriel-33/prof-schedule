import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {CardComponentLab} from "./card_componente";
const AgendaLab = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [prof, SetProf] = useState(["Alexandre", "Eurinardo", "Bomfim", "Tati"]);

    const [cadeira, SetCadeira] = useState(["Computação", "Software", "Civíl", "Produção", "Mecânica"]);

    const [cadeiraSelecionada, setCadeiraSelecionada] = useState(0);

    const [horarios, SetHorarios] =

        useState(["8-10h", "10-12h", "12-13:30h", "13:30 - 15:30", "15:30 - 17:30"]);

    const [dias, SetDias] =

        useState(["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"]);

    const [labKey, setLabKey] = useState(false);

    const [diaKey, setDiaKey] = useState(false);

    const [horarioKey, setHorarioKey] = useState(false);


    const onSubmit = (data) => {
        navigate("/dashboard");
    };

    const laboratorio = [
        {
            "id_lab": 1,
            "lab": "lab1",
            "capacidade": 55,
            "horario": [
                {
                    "horario": 1,
                    "dia": 0,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 2,
                    "dia": 0,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 3,
                    "dia": 0,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 3,
                    "dia": 1,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 3,
                    "dia": 2,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                }
            ]
        },
        {
            "id_lab": 2,
            "lab": "lab2",
            "capacidade": 50,
            "horario": [
                {
                    "horario": 1,
                    "dia": 0,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 2,
                    "dia": 0,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 3,
                    "dia": 0,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 3,
                    "dia": 1,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                },
                {
                    "horario": 3,
                    "dia": 2,
                    "disciplina": "lógica",
                    "curso": "cc",
                    "professor": "alexandre"
                }
            ]
        }
    ];
    const adicionarAgendaLab = (prop) => {

        const KeyLab = prop.target.getAttribute("data-lab");

        const KeyDia = prop.target.getAttribute("data-dia");

        const KeyHorario = prop.target.getAttribute("data-horario");

        setLabKey(parseInt(KeyLab));
        setDiaKey(parseInt(KeyDia));
        setHorarioKey(parseInt(KeyHorario));
    }
    useEffect(() => {
        laboratorio.map((lab, indexLab) => {
            const { laboratorio: laboratorio, horario, professor, disciplina } = lab;
        });

    }, [horarioKey, diaKey]);
    return (
        <React.Fragment>
            <table className="table table-striped table-hover table-bordered border-primary">
                {laboratorio.map((lab, indexLab) => {
                    const { laboratorio, horario, professor, disciplina } = lab;
                    return (
                    <React.Fragment key={indexLab}>
                        <thead>
                        <tr>
                            <th>{lab.lab}<br></br>{lab.capacidade} alunos</th>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                        </tr>
                        </thead>
                        <tbody>
                        {horarios.map((value, indexHorario) => {
                            return (
                            <React.Fragment key={indexHorario}>
                                <tr>
                                <td>{value}</td>
                                {dias.map((dia, indexDia) => {
                                    return lab.horario.map((labH, indexLabh) => {
                                        return (
                                            JSON.stringify({ horario: labH.horario, dia: labH.dia }) ===
                                            JSON.stringify({ horario: indexHorario, dia: indexDia }) && (
                                            indexLab === labKey && indexDia === diaKey && indexHorario == horarioKey ? (
                                                    <td
                                                        key={indexDia}
                                                        data-lab={indexLab}
                                                        data-dia={indexDia}
                                                        data-horario={indexHorario}
                                                        onClick={adicionarAgendaLab}
                                                    >
                                                        editar
                                                    </td>
                                                ) : (
                                                    <td key={indexDia} onClick={adicionarAgendaLab}>
                                                        <CardComponentLab 
                                                            key={indexDia}
                                                            dataLab={indexLab}
                                                            dataDia={indexDia}
                                                            dataHorario={indexHorario} 
                                                            txt1={labH.professor} 
                                                            txt2={labH.disciplina} 
                                                            txt3={labH.curso}
                                                        />
                                                    </td>
                                                )
                                            )
                                        );
                                    });
            
                                })}
                                {dias.map((dia, indexDia) => {
                                    return lab.horario.some((value) => JSON.stringify({ horario: indexHorario, dia: indexDia }) === JSON.stringify({ horario: value.horario, dia: value.dia })) ? null : (
                                    indexLab === labKey && indexDia === diaKey && indexHorario == horarioKey ? (
                                        <td
                                        key={indexDia}
                                        data-lab={indexLab}
                                        data-dia={indexDia}
                                        data-horario={indexHorario}
                                        onClick={adicionarAgendaLab}
                                        >
                                        cadastrar
                                        </td>
                                    ) : (
                                        <td
                                        key={indexDia}
                                        data-lab={indexLab}
                                        data-dia={indexDia}
                                        data-horario={indexHorario}
                                        onClick={adicionarAgendaLab}
                                        >
                                        +
                                        </td>
                                    )
                                    );
            
                                })}
                                </tr>
                            </React.Fragment>
                            );
                        })}
                        </tbody>
                    </React.Fragment>
                    );
                })}
            </table>
        </React.Fragment>
    );
}
export default AgendaLab;
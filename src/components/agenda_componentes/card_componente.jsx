import {React} from 'react';
export const CardComponentProf = (prop)=>{
    return (
        <div className="card">
            <p 
                data-curso = {prop.dataCurso} 
                data-prof={prop.dataProf}
                data-horario={prop.dataHorario}
                data-dia={prop.dataDia}>Editar
            </p>
            <div className="card-body">
                <p>({prop.txt1})</p>
                <p>({prop.txt2})</p>
            </div>
        </div>
    );
}
export const CardComponentLab = (prop)=>{
    return (
        <div className="card">
            <p  
                data-lab={prop.dataLab}
                data-dia={prop.dataDia}
                data-horario={prop.dataHorario} 
            >
                Editar
            </p>
            <div className="card-body">
                <p>({prop.txt1})-({prop.txt2})</p>
                <p>({prop.txt3})</p>
            </div>
        </div>
    );
}
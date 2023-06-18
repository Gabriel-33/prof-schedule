import {React} from 'react';
const CardComponent = (prop)=>{
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
export default CardComponent;
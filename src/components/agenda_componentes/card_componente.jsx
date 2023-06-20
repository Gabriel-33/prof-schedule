import {React} from 'react';
const CardComponent = (prop)=>{
    return (
        <div className="card">
            <div className="card-body">
                <p>({prop.txt1})</p>
                <p>({prop.txt2})</p>
            </div>
            <button
                className='btn btn-primary' 
                data-curso = {prop.dataCurso} 
                data-prof={prop.dataProf}
                data-horario={prop.dataHorario}
                data-dia={prop.dataDia}>Editar  
            </button>
        </div>
    );
}
export default CardComponent;
import {React} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export const CardComponentProf = (prop)=>{
    return (
        <div className="card">
            <div className="card-body">
                <p>({prop.txt1})</p>
                <p>({prop.txt2})</p>
            </div>
                <button   
                    data-curso = {prop.dataCurso} 
                    data-prof={prop.dataProf}
                    data-horario={prop.dataHorario}
                    data-dia={prop.dataDia}
                    className='btn btn-primary'>
                    <FontAwesomeIcon icon={faPencil}/> 
                </button> 
        </div>
    );
}
export const CardComponentLab = (prop)=>{
    return (
        <div className="card">
            <div className="card-body">
                <p>({prop.txt1})-({prop.txt2})</p>
                <p>({prop.txt3})</p>
            </div>
            <button 
                className='btn btn-primary'
                data-lab={prop.dataLab}
                data-dia={prop.dataDia}
                data-horario={prop.dataHorario}
            >
                <FontAwesomeIcon
                    icon={faPencil}  
                />
            </button>
        </div>
    );
}
export const CardComponentSem = (prop)=>{
    return (
        <div className="card">
            <div className="card-body">
                <p>{prop.txt1}</p>
                <p>({prop.txt2})</p>
            </div>
            <button 
                className='btn btn-primary'
                data-curso={prop.dataCurso}
                data-cadeira={prop.dataCadeira}
                data-dia={prop.dataDia}
                data-horario={prop.dataHorario}
            >
                <FontAwesomeIcon
                    icon={faPencil}  
                />
            </button>
        </div>
    );
}
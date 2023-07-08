import {React} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
                <br></br>
                <button 
                    className='btn btn-danger'
                    data-indice-professor={prop.dataProf}
                    data-id-horario={prop.dataIdHorario}
                    data-curso={prop.dataCurso}
                    data-cadeira={prop.dataCadeira}
                    data-dia={prop.dataDia}
                    data-horario={prop.dataHorario}
                    onClick={prop.onExcluirHorario}
                >
                    <FontAwesomeIcon
                        icon={faTrash}  
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
            <br></br>
            <button 
                className='btn btn-danger'
                data-cadeira={prop.dataCadeira}
                data-curso={prop.dataCurso}
                data-dia={prop.dataDia}
                data-horario={prop.dataHorario}
                onClick={prop.onExcluirHorario}
            >
                <FontAwesomeIcon
                    icon={faTrash}  
                />
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
                editar
            </button>           
        </div>
    );
}
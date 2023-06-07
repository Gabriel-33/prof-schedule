import {React} from 'react';
const CardComponent = (prop)=>{
    return (
        <div className="card">
            <div className="card-body">
                <p>({prop.txt1})</p>
                <p>({prop.txt2})</p>
            </div>
        </div>
    );
}
export default CardComponent;
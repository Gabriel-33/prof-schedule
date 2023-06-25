import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import LoginProf from "./login_prof";
import LoginCordena from "./login_cordena";
const login = ()=>{
    const[tipo_user,setTipoUser] = useState(1);
    return (
        <>
            <div className="containter mx-auto login_container">
                <div className="row login_row">
                    <div className="card login_forms">
                        <div className="card-body">
                            {/* <div className="mb-3 tipo_user">
                                <button className={tipo_user === 1 ? "btn btn-light form-control active":"btn btn-primary form-control"} type="button" onClick={()=>setTipoUser(1)}>CORDENAÇÃO</button>
                                <button className={tipo_user === 2 ? "btn btn-light form-control active":"btn btn-primary form-control"} type="button" onClick={()=>setTipoUser(2)}>PROFESSOR</button>
                            </div>
                            {tipo_user === 1 ?(
                                <LoginCordena/>
                            ):(
                                <LoginProf/>
                            )} */}
                            <LoginCordena/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default login;
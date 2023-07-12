import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import LoginCordena from "./login_cordena";
const login = ()=>{
    const[tipo_user,setTipoUser] = useState(1);
    return (
        <>
            <div className="containter mx-auto login_container">
                <div className="row login_row">
                    <div className="card login_forms">
                        <div className="card-body">
                            <LoginCordena/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default login;
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
const LoginCordena = () =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate("/dashboard");
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <center><label>CORDENAÇÃO</label></center>
            <div className="mb-3">
                <label className="form-label">EMAIL:</label>
                <input type="text" defaultValue="" {...register("email_cordenacao",{required:true})} className="form-control"  placeholder="email"/>
                {errors?.email_cordenacao?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">SENHA:</label>
                <input type="password" defaultValue="" {...register("senha_cordenacao",{required:true})} className="form-control" placeholder="senha"/>
                {errors?.senha_cordenacao?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
            </div> 
            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-success" value="ENTRAR"/>
            </div> 
        </form>
    );
};
export default LoginCordena;

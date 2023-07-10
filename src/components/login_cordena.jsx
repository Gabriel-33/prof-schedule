import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
const LoginCordena = (data) =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const email_cordenacao = data.email_cordenacao;
        const senha_cordenacao = data.senha_cordenacao;

        try {
            axios.post('http://localhost:8080/login', {
                email: email_cordenacao,
                senha: senha_cordenacao
            }).then(response => {
                console.log(response.data);
                navigate("/dashboard");
            }).catch(error => {
                console.error('Error:', error);
            });

        } catch (error) {
            console.error(error)
        };

        //console.log(data)
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

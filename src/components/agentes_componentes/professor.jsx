import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect, useState } from "react";
const Professor = ()=>{
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [cursos,setCursos] = useState([]);
    const onSubmit = async(data) => {
        reset();
         try {
            await axios.post('http://localhost:8080/professor/cadastrar_professor', 
                { 
                    prof_nome: data.nome_professor,
                    prof_area: data.area_professor,
                    prof_horario: '',
                },
                {
                    headers: {
                        'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                    }
                }
            );
            toast.success('Professor cadastrado com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(()=>{
        if(cursos.length === 0){
            axios.get('http://localhost:8080/curso/listar_curso',{
                headers: {
                    'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                }
            })
            .then(response => {
                setCursos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        }
    },[]); 
    return(
        <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
            <center><label>PROFESSOR</label></center>
            <div className="mb-3">
                <label className="form-label">*NOME:</label>
                <input type="text" defaultValue="" {...register("nome_professor",{required:true,maxLength:60})} className="form-control" placeholder="Professor"/>
                {errors?.nome_professor?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.nome_professor?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Área:</label>
                <select className="form-select" id="inputGroupSelect01" defaultValue="0" {...register("area_professor",{required:true,maxLength:60})}>
                    {
                        cursos.map((curso,indexCurso)=>(
                            <option value={indexCurso} key={indexCurso}>{curso._id}</option>
                        ))
                    };
                </select>
            </div>
            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-success" value="SALVAR"/>
            </div> 
        </form>
        </>
    )
}
export default Professor
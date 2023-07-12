import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Local = ()=>{
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        reset();
        for(let i = data.intervalo1; i <= data.intervalo2; i++){
            try {
                const response = await axios.post('http://localhost:8080/local/cadastrar_local', 
                {local_nome: data.local,local_numero:i},
                {
                    headers: {
                        'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
                    }
                });
             } catch (error) {
                 console.error(error);
             };    
        }
        toast.success('Local cadastrado com sucesso!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
    };
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
                <center><label>LOCAL</label></center>
                <div className="mb-3">
                    <label className="form-label">LOCAL:</label>
                    <input type="text" defaultValue="" {...register("local",{required:true,maxLength:30})} className="form-control" placeholder="Local(Ex:Laborátorio)"/>
                    {errors?.local?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                    {errors?.local?.type === "maxLength" && <p className="text-danger">*Insira até 30 caracteres</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">DE:</label>
                    <input type="number" defaultValue="" {...register("intervalo1",{required:true,maxLength:1})} className="form-control" placeholder="De 1..., por exemplo"/>
                    {errors?.intervalo1?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                    {errors?.intervalo1?.type === "maxLength" && <p className="text-danger">*Insira até 3 caracteres</p>}
                </div> 
                <div className="mb-3">
                    <label className="form-label">Á:</label>
                    <input type="number" defaultValue="" {...register("intervalo2",{required:true,maxLength:20})} className="form-control" placeholder="Até 4..., por exemplo"/>
                    {errors?.intervalo2?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                    {errors?.intervalo2?.type === "maxLength" && <p className="text-danger">*Insira até 3 caracteres</p>}
                </div> 
                <div className="d-grid gap-2">
                    <input type="submit" className="btn btn-success" value="SALVAR"/>
                </div> 
            </form>
        </>
    )
}
export default Local
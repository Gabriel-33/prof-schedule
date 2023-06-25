import { useForm } from "react-hook-form";
const Curso = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert("Form válido!");
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <center><label>CURSO</label></center>
            <div className="mb-3">
                <label className="form-label">CURSO:</label>
                <input type="text" defaultValue=""  {...register("curso",{required:true,maxLength:30})} className="form-control" placeholder="curso(Ex:computação)"/>
                {errors?.curso?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.curso?.type === "maxLength" && <p className="text-danger">*Insira até 30 caracteres</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">DE:</label>
                <input type="number" defaultValue="" {...register("intervalo1",{required:true,maxLength:3})} className="form-control" placeholder="De 1..., por exemplo"/>
                {errors?.intervalo1?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.intervalo1?.type === "maxLength" && <p className="text-danger">*Insira até 3 caracteres</p>}
            </div> 
            <div className="mb-3">
                <label className="form-label">Á:</label>
                <input type="number" defaultValue="" {...register("intervalo2",{required:true,maxLength:3})} className="form-control" placeholder="Até 8..., por exemplo"/>
                {errors?.intervalo2?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.intervalo2?.type === "maxLength" && <p className="text-danger">*Insira até 3 caracteres</p>}
            </div> 
            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-success" value="SALVAR"/>
            </div> 
        </form>
    )
}
export default Curso
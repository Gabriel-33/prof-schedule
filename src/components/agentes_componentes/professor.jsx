import { useForm } from "react-hook-form";
const Professor = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <center><label>PROFESSOR</label></center>
            <div className="mb-3">
                <label className="form-label">*NOME:</label>
                <input type="text" defaultValue="" {...register("nome_professor",{required:true,maxLength:60})} className="form-control" placeholder="name@example.com"/>
                {errors?.nome_professor?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.nome_professor?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Área:</label>
                <select className="form-select" id="inputGroupSelect01" defaultValue="0" {...register("area_professor",{required:true,maxLength:60})}>
                    <option value="0">Computação</option>
                    <option value="1">Software</option>
                    <option value="2">Civíl</option>
                    <option value="3">Produção</option>
                    <option value="4">Mecânica</option>
                </select>
            </div>
            {/* <div className="mb-3">
                <label className="form-label">*SIAPE:</label>
                <input type="number" defaultValue="" {...register("siape_professor",{required:true, min: 1000, max: 9999 })} className="form-control" placeholder="name@example.com"/>
                {errors?.siape_professor?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.siape_professor?.type === "min" && <p className="text-danger">*Insira um siape válido(entre 1000 e 9999)</p>}
                {errors?.siape_professor?.type === "max" && <p className="text-danger">*Insira um siape válido(entre 1000 e 9999)</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">*SENHA:</label>
                <input type="password" defaultValue="" {...register("senha_professor",{required:true,maxLength:60})} className="form-control" placeholder="name@example.com"/>
                {errors?.senha_professor?.type === "required" && <p className="text-danger">*campo obrigatório</p>}
                {errors?.senha_professor?.type === "maxLength" && <p className="text-danger">*Insira até 60 caracteres</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">IMAGEM:</label>
                <input type="file" defaultValue=""  className="form-control" placeholder="name@example.com"/>
            </div>  */}
            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-success" value="SALVAR"/>
            </div> 
        </form>
    )
}
export default Professor
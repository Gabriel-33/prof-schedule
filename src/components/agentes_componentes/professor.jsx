const Professor = ()=>{
    return(
        <form>
            <center><label>PROFESSOR</label></center>
            <div className="mb-3">
                <label className="form-label">*SIAPE:</label>
                <input type="text" defaultValue=""  className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label className="form-label">*NOME:</label>
                <input type="text" defaultValue=""  className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label className="form-label">*SENHA:</label>
                <input type="password" defaultValue="" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label className="form-label">IMAGEM:</label>
                <input type="file" defaultValue=""  className="form-control" placeholder="name@example.com"/>
            </div> 
            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-success" value="SALVAR"/>
            </div> 
        </form>
    )
}
export default Professor
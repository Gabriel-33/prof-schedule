const Curso = ()=>{
    return(
        <form>
            <center><label>CURSO</label></center>
            <div className="mb-3">
                <label className="form-label">CURSO:</label>
                <input type="text" defaultValue=""  className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label className="form-label">DE:</label>
                <input type="number" defaultValue="" className="form-control" placeholder="name@example.com"/>
            </div> 
            <div className="mb-3">
                <label className="form-label">Á:</label>
                <input type="number" defaultValue="" className="form-control" placeholder="name@example.com"/>
            </div> 
            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-success" value="SALVAR"/>
            </div> 
        </form>
    )
}
export default Curso
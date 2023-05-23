const Local = ()=>{
    return(
        <form>
            <center><label>LOCAL</label></center>
            <div className="mb-3">
                <label className="form-label">LOCAL:</label>
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
export default Local
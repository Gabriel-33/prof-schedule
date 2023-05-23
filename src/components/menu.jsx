const Menu = (prop) =>{
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-sm menu">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">Navbar</span>
          <div className="ml-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={prop.page === 1?"text text-warning nav-link active":"nav-link"} href="#agentes" onClick={()=>prop.setPage(1)}>Agentes</a>
              </li>
              <li className="nav-item">
                <a className={prop.page === 2?"text text-warning nav-link active":"nav-link"} href="#agendamento" onClick={()=>prop.setPage(2)}>Agendamento</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Menu;
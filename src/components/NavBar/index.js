import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../router/constants"

const NavBar = () => {


    const { user, handleLogout } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-expand ">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">


                        <li className="nav-item active">
                            <a className="nav-link" href={ROUTES.products}>Products <span className="sr-only">(current)</span></a>
                        </li>

                        {
                            !user ? <>

                                <li className="nav-item">
                                    <a className="nav-link" href={ROUTES.login}>Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={ROUTES.signup}>Signup</a>
                                </li>
                            </>

                                :
                                <>

                                    

                                    <div className="navbar-container right">
                                    <li className="nav-item active">
                                        <a className="nav-link" href={ROUTES.profile}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg><span className="sr-only">(current)</span></a>
                                    </li>

                                        <li className="nav-item ">
                                            <a className="nav-link" href={ROUTES.cart}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></a>
                                        </li>



                                        {
                                            user.isAdmin && <li className="nav-item">
                                                <a className="nav-link" href={"/adm"}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></a>
                                            </li>
                                        }
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={handleLogout} href={ROUTES.aboutus}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
  <path d="M7.5 1v7h1V1h-1z"/>
  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
</svg></a>
                                        </li>
                                    </div>
                                </>
                        }
                    </ul>

                </div>


            </nav>
        </div>
    )
}




export default NavBar


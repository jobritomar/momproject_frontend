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
                
                            <li className="nav-item active">
                            <a className="nav-link" href={ROUTES.profile}>Profile <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" onClick={handleLogout} href={ROUTES.aboutus}>Logout</a>
                            </li>

                            </>
                    }
                    </ul>

                </div>
            

            </nav>
        </div>
    )
}




export default NavBar


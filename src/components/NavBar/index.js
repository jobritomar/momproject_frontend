import { ROUTES } from "../../router/constants"

const NavBar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-expand ">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href={ROUTES.aboutus}>About Us <span class="sr-only">(current)</span></a>
                        </li>

                        <li class="nav-item active">
                            <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href={ROUTES.login}>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={ROUTES.signup}>Signup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={ROUTES.logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}




export default NavBar

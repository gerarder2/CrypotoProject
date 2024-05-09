import { useContext } from "react"
import { CryptoContext } from "../context"

export const Navbar = ({name, lastname,  email, phone}) => {

    const {logout} = useContext(CryptoContext);

  return (
    <>
        <nav className="navbar navbar-light back3">
            <div className="container">
                <span className="navbar-item mb-0 h5">{name+" "+lastname}</span>
                <span className="navbar-item mb-0  h5">{email}</span>
                <span className="navbar-item mb-0  h5">{phone}</span>
                <button className="btn btn-danger" onClick={logout}>Logout <i className="bi bi-box-arrow-right"></i></button>
            </div>
        </nav>
    </>
  )
}

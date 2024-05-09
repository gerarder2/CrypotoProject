import { useContext, useEffect } from "react"
import { CryptoContext } from "../context"
import { getCrypto } from "../API/getCrypto";
import { useNavigate } from "react-router";

export const Navbar = ({name, lastname,  email, phone}) => {

    const {isLoading, setIsLoading, logout, update} = useContext(CryptoContext);

    const actualizar = async () => {
      setIsLoading(true);
      const newInfo = await getCrypto();
      update(newInfo);
      setIsLoading(false);
    }

    useEffect(() => {
      const inverval = setInterval(() => {
        actualizar();
      }, 10000)
   
    
      return () => {
        clearInterval(inverval);
      }
    }, [])
    
    
  
    const nav = useNavigate();
  const onLogout = async (e) => {
    e.preventDefault();
    nav("/");
    logout();
  }
  return (
    <>
        <nav className="navbar navbar-light back3">
            <div className="container">
                <span className="navbar-item mb-0 h5">{name+" "+lastname}</span>
                <span className="navbar-item mb-0  h5">{email}</span>
                <span className="navbar-item mb-0  h5">{phone}</span>
                <button className="btn btn-danger" 
                  onClick={onLogout}>Logout <i className="bi bi-box-arrow-right"></i></button>
            </div>
        </nav>
    </>
  )
}

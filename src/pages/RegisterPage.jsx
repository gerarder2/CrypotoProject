import { useContext } from 'react'

import '../index.css'
import { CryptoContext } from '../context';
import { useForm } from '../hooks/useForm';
import { Loading } from '../components/Loading';

export const RegisterPage = () => {

    const {login, isLoading, setIsLoading} = useContext(CryptoContext);
    const {name,lastname, email, phone, onInputChange} = useForm(
        {
            name:'',
            lastname:'', 
            email:'',
            phone:''
        }
    );

    const onLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if(validateEmail() && validatePhone()){
           await login(name,lastname,email,phone)
        }
        setIsLoading(false);
    }

    const validateEmail = () => {
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (validEmail.test(email)) {
            return true;
        }else{
            alert('Email is invalid, skip form submission');
            return false;
        }
    }
    
    const validatePhone = () => {
        const validPhone =  /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
        if(validPhone.test(phone) && (phone.length == 10)){
            return true;
        }else{
            alert('Phone is invalid, must contain 10 numbers');
            return false;
        }
    }

  return (
    <>
        <div className="back vh-100 d-flex justify-content-center flex-column align-items-center">
              <div className="p-5 container mainContainer">
                <div className='mb-5'>
                    <h2>Welcome to CryptoPage!</h2>
                    {/* <small>Please register first</small> */}
                </div>
              <form onSubmit={onLogin}>
                  <div className="form-group">
                      <h5>Name</h5>
                      <input type="text" className="form-control" name="name" autoComplete="false" aria-describedby="mainName" placeholder="Gera" onChange={onInputChange} required />
                  </div>
                  <div className="form-group mt-2">
                      <h5 >Last Name</h5>
                      <input type="text" className="form-control" name="lastname" autoComplete="false" aria-describedby="mainLastName" placeholder="Zazueta" onChange={onInputChange} required />
                  </div>
                  <div className="form-group mt-2">
                      <h5 >Email</h5>
                      <input type="email" className="form-control" name="email" autoComplete="false" aria-describedby="mainEmail" placeholder="example@example.com" onChange={onInputChange} required />
                  </div>
                  <div className="form-group mt-2 mb-2">
                      <h5>Phone Number</h5>
                      <input type="number" className="form-control" name="phone" autoComplete="false" placeholder="667*******" onChange={onInputChange} required />
                  </div>
                  {/* <Loading /> */}
                  {isLoading ? <Loading /> : <button type="submit" className="btn button-submit">Submit</button>}
              </form>
              </div>
        </div>
    </>
  )
}

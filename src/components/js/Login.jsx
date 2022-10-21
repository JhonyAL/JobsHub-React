import '../css/Login.css'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../images/jobshub-logo.png'
import { Link } from 'react-router-dom'

export default function Login() {
    const closeLogin = () => {
        const login = document.querySelector('.Login')
        login.classList.add('display-none')
    }

    const labels = document.querySelectorAll('label')

    return (
        <div className='Login'>   
            <div className="login-box">
                <AiOutlineClose className='close-icon' id='close-icon' onClick={closeLogin}/>
                <img src={logo} alt="Logo of the JobsHub" />
                <h1>Entrar</h1>
                <div className="login-inputs">
                    <label htmlFor="email" className=''>
                        <input type="email" id='email'/>
                        <span>Email</span>
                    </label>
                    <label htmlFor="email" className=''>
                        <input type="password" id='password' />
                        <span>Senha</span>
                        <Link to="/" className='pass'>Esqueceu a senha?</Link>
                    </label>
                </div>
            </div>
        </div>
    )
}
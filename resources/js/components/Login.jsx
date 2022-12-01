import '../bootstrap'
import React from "react";
import '../../css/components/app.css'

const Login = () => {
    return(
        <div className='container'>
            <div className='box'>
                <h1>Login</h1>
                <input type = 'email' placeholder='email@gmail.com'/>
                <input type='password' placeholder=' Senha: max 11 dígitos' />
                <button>Login</button>
                <h4>ou</h4>
                <button><a href="/signin">Registrar-se</a></button>
            </div>
        </div>
    )
}

export default Login
import '../bootstrap'
import React from "react";
import '../../css/components/app.css'

const Signin = () => {
    return(
        <div className='container'>
            <div className='box'>
            <h1>Registrar</h1>
                <input type = 'name' placeholder='Nome Completo'/>
                <input type = 'email' placeholder='email@gmail.com'/>
                <input type = 'cpf' placeholder='CPF'/>
                <input type='password' placeholder=' Senha: máximo 11 dígitos' />
                <input type='password' placeholder=' Confirme a senha' />
                <button>Registrar-se</button>
                <h4>ou</h4>
                <a href="/login"><button>Login</button></a>
            </div>
        </div>
    )
}

export default Signin
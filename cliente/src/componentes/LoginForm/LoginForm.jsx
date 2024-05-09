import React from 'react'
import './LoginForm.css'
import { PiUserFill } from 'react-icons/pi';
import { IoLockClosed } from 'react-icons/io5';
import myImage from '../Assets/pngegg.png';

const LoginForm = () => {
    return (
        <div className='body'>
    
            <div className='wrapper'>

                <img src={myImage} alt="My image" />

                <div className="logo"></div>

                <h2 className='text-rigth'>Bienvenido</h2>

                <div className='form-wrapper login'>
                    <h2 className='sesion'>Inicia sesión</h2>
                    <div className='input-box'>
                        <PiUserFill className="icon" />
                        <input type="text" placeholder='Usuario' required />
                    </div>
                    <div className='input-box'>
                        <IoLockClosed className="icon" />
                        <input type="password" placeholder='Contraseña' required />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Mostrar contraseña
                        </label>
                    </div>
                    <button type="submit">Acceder</button>
                    <div className="register-link">
                        <p>Cooperativa 8 de Marzo Ltda.®</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm

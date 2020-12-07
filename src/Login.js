import React from 'react'
import './login.css'

import { Link } from 'react-router-dom'

export default function Login(props) {
    return (

        <div className="login">
            <div className="login__container">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Allegro.pl_sklep.svg/1280px-Allegro.pl_sklep.svg.png" alt="" />

                </Link>

                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__singInButton">Sign In</button>
                </form>

                <p>Poprzez zalogowanie zgadzasz się na wszystkie warunki użytkowania. Proszę przejdź do polityki prywatności jeśli masz jakieś wątpliowści</p>

                <button className="loginRegisterButton">Utwórz konto na Amazonie </button>
            </div>

        </div>
    )
}

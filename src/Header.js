import React from 'react'
import './header.css'
import { Link, useHistory } from 'react-router-dom'


import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider'
import { auth } from './firebase'





export default function Header() {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()


    const authentication = () => {
        if (user) {
            auth.signOut()
        } else {
            // history.pushState('/login')
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Allegro.pl_sklep.svg/1280px-Allegro.pl_sklep.svg.png"
                    alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            <div className="header__nav">
                <Link to={!user && './login'}>

                    <div onClick={authentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user? user.email: "Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign out' : "Sign in"}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Zwroty
                    </span>
                    <span className="header__optionLineTwo">
                        i zamówienia
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Twój
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

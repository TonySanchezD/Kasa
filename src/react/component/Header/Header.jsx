import logo from '../../../layout/logo.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={logo} alt="Logo Kasa" className='logo'/>
            </h1>
            <nav className='nav'>
                <Link to="/" className='nav--link'>Accueil</Link>
                <Link to="/about" className='nav--link nav--link__last'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
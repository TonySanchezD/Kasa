import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav'>
            <Link to="/" className='nav--link'>Accueil</Link>
            <Link to="/about" className='nav--link nav--link__last'>A Propos</Link>
        </nav>
    )
}

export default Nav
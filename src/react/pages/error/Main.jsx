import {Link} from 'react-router-dom'

function Main() {
    return (
        <main className='error'>
            <h2 className='error--code'>404</h2>
            <h3 className='error--text'>Oups! La page que <br className='error--text__br' /> vous demandez n'existe pas.</h3>
            <Link to='/' className='error--link-home'>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Main
import data from '../../../data/rentals.json';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main>
            <div className="banner">
                <div className="banner--filter-black"></div>
                <h2 className="banner--title">Chez vous, partout et ailleurs</h2>
                <div className="banner--img banner--img__home"></div>
            </div>
            <div className="rentals">
                {data.map(rental => (
                    <Link className='rental' key={rental.id} to={`/housing?id=${rental.id}`}>
                        <div className='rental--filtre'></div>
                        <img className='rental--img' src={rental.cover} alt={rental.title} />
                        <h3 className='rental--title'>{rental.title}</h3>
                    </Link>
            ))}
            </div>
        </main>
    )
}

export default Main
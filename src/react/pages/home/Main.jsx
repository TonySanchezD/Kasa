import data from '../../../data/rentals.json'

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
                    <a className='rental' key={rental.id} href={`./housing?id=${rental.id}`}>
                        <div className='rental--filtre'></div>
                        <img className='rental--img' src={rental.cover} alt={rental.title} />
                        <h3 className='rental--title'>{rental.title}</h3>
                    </a>
            ))}
            </div>
        </main>
    )
}

export default Main
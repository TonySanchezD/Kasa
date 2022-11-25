import data from '../data/rentals.json'

function Rentals() {
    console.log(data)
    console.log('cover', data[1].cover)
    return (
        <div className="rentals">
            {data.map(rental => (
                <div className='rental' key={rental.id}>
                    <div className='rental--filtre'></div>
                    <img className='rental--img' src={rental.cover} alt={rental.title} />
                    <h3 className='rental--title'>{rental.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Rentals
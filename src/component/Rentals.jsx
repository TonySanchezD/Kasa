import data from '../data/rentals.json'

function Rentals() {
    console.log(data)
    console.log('cover', data[1].cover)
    return (
        <div className="rentals">
            {data.map(rental => (
                <div key={rental.id}>
                    <img src={rental.cover} alt={rental.title} />
                    <h3>{rental.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Rentals
import imgStarOrange from '../../layout/star_orange.png';
import imgStarGrey from '../../layout/star_grey.png';


function Stars(props) {
    const rating = props.rating

    const arrayStarsOrange = []
    for (let i = 0; i < rating; i++) {
        arrayStarsOrange.push(`star-${i}`)
    }

    const arrayStarsGrey = []
    for (let i = 5; i > rating; i--) {
        arrayStarsGrey.push(`star-${i}`)
    }

    return (
        <div className='info-additional--stars'>
            <div>
                {arrayStarsOrange.map( starOrange => (
                    <img className='info-additional--stars--one-star' key={`orange-star-${starOrange}`} src={imgStarOrange} alt="Étoile orange" />
                ))}
            </div>
            <div>
                {arrayStarsGrey.map( starGrey => (
                    <img className='info-additional--stars--one-star' key={`grey-star-${starGrey}`} src={imgStarGrey} alt="Étoile grise" />
                ))}
            </div>
        </div>
    )
}

export default Stars
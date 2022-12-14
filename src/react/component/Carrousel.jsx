import { useState } from 'react';
import arrowLeft from '../../layout/arrow-left.png';
import arrowRight from '../../layout/arrow-right.png';



function Carrousel(props) {
    const housing = props.housing

    const [positionImg, setImgPosition] = useState(0)
    const imgCarrousel = housing.pictures[positionImg]

    return (
        <div className='carrousel'>
            <img className='carrousel--img' src={imgCarrousel} alt={housing} />
            <button onClick={() => setImgPosition(positionImg - 1)}>
                <img className='carrousel--arrow-left'  src={arrowLeft} alt='arrow left' />
            </button>
            <button>
                <img className='carrousel--arrow-right' onClick={() => setImgPosition(positionImg + 1)} src={arrowRight} alt='arrow right' />
            </button>
            <p>{positionImg}</p>
        </div>
    )
}

export default Carrousel
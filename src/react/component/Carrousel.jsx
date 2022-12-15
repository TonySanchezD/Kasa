import { useState } from 'react';
import arrowLeft from '../../layout/arrow-left.png';
import arrowRight from '../../layout/arrow-right.png';


function Carrousel(props) {
    const housing = props.housing

    //<On défini l'image a afficher dans la carrousel>
    let [positionImg, setImgPosition] = useState(0)   
                                                            
    if (positionImg === -1) {                               
        setImgPosition(housing.pictures.length - 1)         
    } else if (positionImg === housing.pictures.length) {   
        setImgPosition(0)                                   
    }

    const imgCarrousel = housing.pictures[positionImg]
    //</On défini l'image a afficher dans la carrousel> 

    return (
        <div className='carrousel'>
            <img className='carrousel--img' src={imgCarrousel} alt={housing.title} />
            <button className='carrousel--backgroun-arrow carrousel--backgroun-arrow__left' onClick={() => setImgPosition(positionImg - 1)}>
                <img className='carrousel--arrow-left'  src={arrowLeft} alt='arrow left' />
            </button>
            <button className='carrousel--backgroun-arrow carrousel--backgroun-arrow__right' onClick={() => setImgPosition(positionImg + 1)}>
                <img className='carrousel--arrow-right'  src={arrowRight} alt='arrow right' />
            </button>
            <p className='carrousel--counter'>{positionImg + 1}/{housing.pictures.length}</p>
        </div>
    )
}

export default Carrousel
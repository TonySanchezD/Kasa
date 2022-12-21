import Collapse from '../../component/Collapse';
import Carrousel from '../../component/Carrousel';
import Stars from '../../component/Stars';
import rentalsData from '../../../data/rentals.json';

import Error from '../error/Error';

function getDataHousing() {
    //Récupérer l'id du logement
    const urlParams = new URLSearchParams(window.location.search);
    const idHousing = urlParams.get('id');  
    //

    const housing = rentalsData.find(housing => housing.id === idHousing)

    return housing
}


function Main() {
    const housing = getDataHousing()

    if (housing === undefined) {
        return <Error />
    }
    
    const hostName = housing.host.name.split(' ')

    console.log(document.querySelectorAll(".collapse"))
    
    return (
        <main className="main-housing">
            <Carrousel housing={housing} />
            <div className='all-info'>
                <div className='info-essential'>
                    <h2 className='info-essential--title'>{housing.title}</h2>
                    <p className='info-essential--location'>{housing.location}</p>
                    <ul className='info-essential--box-tags'>
                        {housing.tags.map( tag => (
                            <li className='info-essential--box-tags--tag' key={`${housing}-${tag}`}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className='info-additional'>
                    <Stars rating={housing.rating} />
                    <div className='info-additional--host'>
                        <div className='info-additional--host--name'>
                            <p>{hostName[0]}</p> 
                            <p>{hostName[1]}</p> 
                        </div>
                        <img className='info-additional--host--picture' src={housing.host.picture} alt={`${housing.host.name}`} />
                    </div>            
                </div>
            </div>
            <div className='collapses'>
               <Collapse title='Description' description={housing.description} />
               <Collapse title='Équipements' description={housing.equipments} />
            </div>
        </main>
    )
}

export default Main
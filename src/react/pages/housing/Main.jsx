import Collapse from '../../component/Collapse';
import Carrousel from '../../component/Carrousel';
import data from '../../../data/rentals.json';

function getDataHousing() {
    //Récupérer l'id du logement
    const urlParams = new URLSearchParams(window.location.search);
    const idHousing = urlParams.get('id');  
    //

    const housing = data.find(housing => housing.id === idHousing)

    return housing
}


function Main() {
    const housing = getDataHousing()
    

    return (
        <main className="main-housing">
            <Carrousel housing={housing} />
            <div className='all-info'>
                <div className='info-essential'>
                    <h2 className='info-essential--title'>{housing.title}</h2>
                    <p className='info-essential--location'>{housing.location}</p>
                    <ul className='info-essential--tags'>
                        {housing.tags.map( tag => (
                            <li key={`${housing}-${tag}`}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className='info-additoinal'>
                    <div className='info-additional--rating'></div>
                    <div>
                        <div className='info-additional--name'>{housing.host.name}</div> 
                        <img src={housing.host.picture} alt={`Photo de ${housing.host.name}`} />
                    </div>
                                       
                </div>
            </div>
            <div className='collapses-housing'>
               <Collapse title='Description' description={housing.description} />
               <Collapse title='Équipements' description={housing.equipments} />
            </div>
        </main>
    )
}

export default Main
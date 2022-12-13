import Collapse from '../../component/Collapse';
import data from '../../../data/rentals.json'

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

    console.log('housing', housing)
    
    return (
        <main className="main-housing">
            <div className='carrousel'></div>
            <div className='all-info'>
                <div className='info-essential'>
                    <h2 className='info-essential--title'>{housing.title}</h2>
                    <p className='info-essential--location'></p>
                    <li className='info-essential--tags'>
                        <ul></ul>
                        <ul></ul>
                    </li>
                </div>

                <div className='info-additoinal'>
                    <div className='info-additional--name'></div>
                    <div className='info-additional--rating'></div>
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
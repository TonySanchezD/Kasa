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
        <main className="housing">

        </main>
    )
}

export default Main
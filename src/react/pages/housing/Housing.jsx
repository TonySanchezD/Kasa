import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import Main from './Main'


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


function Housing() {
  const housing = getDataHousing()

  if (housing === undefined) {
      console.log("housing is undefined")
      return <Error />
  }

  return (
    <div className="Housing">
      <Header />
      <Main housing={housing}/>
      <Footer />
    </div>
  );
}
  
  export default Housing
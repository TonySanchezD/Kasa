import Collapse from '../../component/Collapse';
import Carrousel from '../../component/Carrousel';
import Stars from '../../component/Stars';


function Main(props) {
    const housing = props.housing

    
    const hostName = housing.host.name.split(' ')
    
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
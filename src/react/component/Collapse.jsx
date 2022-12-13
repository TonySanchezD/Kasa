import { useState } from 'react'
import arrowUp from '../../layout/vector_arrow-up.png'
import arrowDown from '../../layout/vector_arrow-down.png'

function Collapse(props) {
    const title = props.title
    const description = props.description
    const index = props.index

    const [isOpen, setIsOpen] = useState(false)
    
    return isOpen ? (   //Collapse ouverte
        <div className="collapse" onClick={() => setIsOpen(false)}>
            <div className="collapse--to-activate" key={`${title}-${index}-title`}>
                <h2 className="collapse--to-activate--title">{title}</h2>
                <img className="collapse--to-activate--arrow"src={arrowUp} alt='arrow' />
            </div>
            <div className="collapse--description" key={`${title}-${index}-decription`}>
                <p>{description}</p>
            </div>
        </div>
    ) : (   //Collapse fermé 
        <div className="collapse" onClick={() => setIsOpen(true)}>
            <div className="collapse--to-activate" key={`${title}-${index}-title`}>
                <h2 className="collapse--to-activate--title">{title}</h2>
                <img className="collapse--to-activate--arrow"src={arrowDown} alt='arrow' />
            </div>
        </div>
    )
}

export default Collapse
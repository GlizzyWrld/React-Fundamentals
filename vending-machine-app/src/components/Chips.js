import {Link} from 'react-router-dom'
 
function Chips () {
    return(
        <div>
            <h2>Lays Chips</h2>
            <p><Link to='/'>Back to Vending Machine</Link></p>
            <div>
                <img src="https://www.zoro.com/static/cms/product/full/Dot%20Foods_594487xx0xx20200929xx111952AM.jpg" alt="Lays" />
            </div>
        </div>

    )
}

export default Chips;
import {Link} from 'react-router-dom'; 

export function Doglist() {
    return (
        <ul>
            <li><Link to='/Dogs/Whiskey'>Whiskey</Link></li>
            <li><Link to='/Dogs/Duke'>Duke</Link></li>
            <li><Link to='/Dogs/Perry'>Perry</Link></li>
        </ul>
    )
}

export function Dogs () {
    return (
        <div>
            <h1>Dogs</h1>
            <h3>Select a Dog for more information</h3>
            <Doglist/>
        </div>
    )
}

export default Dogs
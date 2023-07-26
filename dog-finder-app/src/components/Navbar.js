import { NavLink } from 'react-router-dom';

const  Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink exact to='/Dogs'>Dogs</NavLink>
            <NavLink exact to='/Dogs/Whiskey'>Whiskey</NavLink>
            <NavLink exact to='/Dogs/Duke'>Duke</NavLink>
            <NavLink exact to='/Dogs/Perry'>Perry</NavLink>
        </nav>
    )
}

export default Navbar;
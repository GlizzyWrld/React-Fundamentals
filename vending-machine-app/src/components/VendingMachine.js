import {Link} from 'react-router-dom'; 

function SnackList() {
    return (
        <ul>
            <li><Link to='/Chips'>Chips</Link></li>
            <li><Link to='/ProteinBar'>Protein Bar</Link></li>
            <li><Link to='/Candy'>Candy</Link></li>
        </ul>
    )
}

function VendingMachine() {
    return(
       <div>
        <h1>Vending Machine</h1>
        <p>Please Select Your Item:</p>
        <SnackList/>
       </div> 
    )
}

export default VendingMachine;
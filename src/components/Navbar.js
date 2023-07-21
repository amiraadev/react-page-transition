import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="/" className='nav-link'> CodeGrid</Link> 
        </div>
        <div className="nav-links">

                <div className='nav-link'>
                        <div className="nav-items">
                            <Link to="/" className='nav-link'> Home</Link> 
                        </div>       
                </div>
                <div className='nav-link'>
                        <div className="nav-items">
                            <Link to="/contact" className='nav-link'> Contact</Link> 
                        </div>       
                </div>
                <div className='nav-link'>
                        <div className="nav-items">
                            <Link to="/about" className='nav-link'> About</Link> 
                        </div>       
                </div>
        </div>
    </div>
  )
}

export default Navbar

import {Link} from 'react-router-dom';
import './../App.css';
import {useState} from 'react';



function Navbar(){
    const [isMobile,setIsMobile] = useState(false)
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                {/* <h4><span>The</span>
                <span className="siren">Siren</span>
                </h4> */}
                <div className="flex">
                <div className="the">The</div>
                <div className="sir">Siren</div>
                </div>
                
            </div>
            
            <ul className = {isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={()=> setIsMobile(false)}>
                <Link to = "/" className = "home">
                    <li>Home</li>
                </Link>
               
                <Link to = "/bollywood" className = "bollywood">
                    <li>Bollywood</li>
                </Link>
               
                <Link to = "/technology" className = "technology">
                    <li>Technology</li>
                </Link>
               
                <Link to = "/hollywood" className = "hollywood">
                    <li>Hollywood</li>
                </Link>
               
                <Link to = "/fitness" className = "fitness">
                    <li>Fitness</li>
                </Link>
               
                <Link to = "/food" className = "food">
                    <li>Food</li>
                </Link>
               
            </ul>
            <button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? (<i className = "fas fa-times"></i>):( <i className="fas fa-bars"></i>)}
            </button>
            
            
        </nav>
        <hr />
         </>
    );
}
export default Navbar;
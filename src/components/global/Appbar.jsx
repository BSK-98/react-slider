import './styles/appbar.css';
import logo from './../../assets/images/white.svg'

const Appbar = () => {
    return (
        <header className='appbar'>
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="LOGO" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#" className='active'>home</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>
            <button>Sign Up</button>
        </header>
    );
}

export default Appbar;
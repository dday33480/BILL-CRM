import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" onClick={ () => navigate("/") } />
            </div>
            <div className="controls-container">
                <div className="icon" onClick={() => navigate('/jobs')}>
                    Jobs
                </div>
                <hr />
                <div className="icon" onClick={() => navigate('/quotes')}>
                    Devis
                </div>
                <hr />
                <div className="icon" onClick={() => navigate('/')}>
                    Accueil
                </div>
            </div>
        </nav>
    )
}

export default Nav
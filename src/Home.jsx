import { useNavigate } from "react-router-dom"
import './layouts/home.css'


export const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/quiz');
    }

    return (
        <div className="background">
            <div className="container">
                <h1>Imod-quiz</h1>
                <p>Teste seus conhecimentos sobre as personagens Imogen Temult e Laudna da webserie Critical Role.</p>
                <button onClick={handleClick}>JOGAR</button>
            </div>
        </div>
    )
}
import React from "react"
import Logo from "../../assets/images/Logo.png";
import "../menu/Menu.css"
//import ButtonLink from "../components/buttonLink";
import Button from "../button"
import {Link} from "react-router-dom"

function Menu(){
    return (
<nav className="Menu">
    <Link to="/">
    <img className="Logo" src={Logo} alt="Aluraflix logo"/>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo video</Button>

</nav>
    );
}
export default Menu
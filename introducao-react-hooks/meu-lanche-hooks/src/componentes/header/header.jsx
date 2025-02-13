import { Cabecalho, FotoPerfil, Container, Button } from "../../styles-components/header/header";
import logo from '../../../src/logo.svg';


const Header = () => {
    return (

        <Container>
            <h1>Olá, eu sou Lucas da Costa :)</h1>
            <Button>Dowloand do CV</Button>
            <Cabecalho>
                <div>
                    <FotoPerfil src={logo} className="App-logo" alt="logo" />
                </div>
            </Cabecalho>
        </Container>
    );
}

export default Header;
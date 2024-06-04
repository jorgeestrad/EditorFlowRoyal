import {Link} from  'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>{"  "}
            <Link to="about">Abouts Us</Link> {"  "}
            <Link to="createTemplate">Crear Plantilla</Link>
        </div>
    );
}



export default Navbar;

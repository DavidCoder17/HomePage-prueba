
import arrowDown from '../../public/images/arrowDown@3x.png'
import navBarLogo from '../../public/images/navbarLogo@3x.png'

export const HomeHeader = () => {

    return (
        <header className="homeHeader">
            <nav className="navBar">
                <span className="productList">
                    <span>Productos</span>
                    <img src={arrowDown} alt="arrowDown" />
                </span>
                <img className="logo" src={navBarLogo} alt="logo" />
                <a href="#" className='contact'>Contacto</a>
            </nav>

            <div className="info">
                <h1 className="textHeader">EL MEJOR DEPORTE</h1>
                <p className="textSubHeader">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href="#" className="btnPrimary">COMPRAR AHORA</a>
            </div>
        </header>
    )
}

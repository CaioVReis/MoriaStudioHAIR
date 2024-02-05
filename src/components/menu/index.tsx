import Icon from "../icons";


const MenuBar = () => {
    return (

        <div id="menu" className="relative">
            <label htmlFor="toogle"><Icon icon="Barras" /></label>
            <input id="toogle" type="checkbox" name="menu"></input>
            
                 <nav className="ml-2 mt-[22px]" >

                <ul id="bar" itemType="checkbox">
                    <li>
                        <a className="flex mt-5">
                            <Icon icon="Home" />
                            <div className="ml-1">Home</div>
                        </a>
                    </li>
                    <li>
                        <a className="flex mt-5">
                            <Icon icon="User" />
                            <div className="ml-1">Usuário</div>
                        </a>
                    </li>
                    <li>
                        <a className="flex mt-5">
                            <Icon icon="Agenda" />
                            <div className="ml-1">Agenda</div>
                        </a>
                    </li>
                    <li>
                        <a className="flex mt-5">
                            <Icon icon="SobreNos" />
                            <div className="ml-1">Sobre Nós</div>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}


function NewMenu() {
    return (
        <div>
            <ul className="menu">

                <li title="home"><a href="#" className="menu-button home">menu</a></li>
            </ul>

            <ul className="menu-bar">
                <li><a href="#" className="menu-button">Menu</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Editorial</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    );
}

export {
    MenuBar,
    NewMenu,
}
import React from 'react';
import "./Sidebar.css";
import logo from "../assets/logoCaracol.png"
import { Link} from "react-router-dom"


const Sidebar = () => {

    return (
        <>
            <div>
                <div className="sidebar__menu">
                    <div className='sidebar__link active_menu_link'>
                        <i className="fa fa-home"></i>
                        <Link to={'/'}> Listado</Link>
                    </div>
                    <h2>Procesos</h2>
                    <div className="sidebar__link">
                        <i className="fa fa-user-secret"></i>
                        <a href="www.caracolradio.com">Ordenes de Salida</a>
                    </div>
                   
                    <div className="sidebar__link">
                        <i className="fa fa-building-o"></i>
                        <Link to={'/crear'}> Crear</Link>
                    </div>

                    <div className="sidebar__link">
                        <i className="fa fa-building-o"></i>
                        <Link to={'/editar'}> Editar</Link>
                    </div>
                    
                    <div className="sidebar__logout">
                        <i className="fa fa-power-off"></i>
                        <a href="www.caracolradio.com">Log out</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;

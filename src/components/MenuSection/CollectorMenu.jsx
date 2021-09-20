import React ,{Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../sass/Collector.scss';


class CollectorMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:true
        }
    }

    handleBars = () => {
        this.setState({count:!this.state.count});
    }

    render() { 
        return (  
            <header className={this.state.count ? "NavHeader" : "NavHeader NavFixed"}>
                <nav className="NavCenter">
                    <div className="NavLogo">
                        <div className="logo"><img src="img/logo.svg" alt="rasm topilmadi"/></div>
                        <div className="Bars" onClick={() => this.handleBars()}> 
                        {this.state.count ? <FaBars className="Fabars"/> : <AiOutlineClose className="Fabars"/>} </div>
                    </div>
                    <div className={this.state.count ? "MenuItem" : "MenuItem MenuHeight"}>
                        <ul className="ulItem">
                            <li className="liItem">
                                <NavLink activeClassName="selected" to="/asosiy">Главная</NavLink>
                            </li>
                            <li className="liItem">
                                <NavLink to="/kurs">Курсы</NavLink>
                            </li>
                            <li className="liItem">
                                <NavLink to="/raspi">Расписание</NavLink>
                            </li>
                            <li className="liItem">
                                <NavLink to="/prepo">Преподаватели</NavLink>
                            </li>
                            <li className="liItem">
                                <NavLink to="/ras">Рассылка</NavLink>
                            </li>
                            <li className="liItem">
                                <NavLink to="/kontakt">Контакты</NavLink>
                            </li>
                            <div className="liItem contactLink">
                                <div className="contact">
                                <NavLink to="/kabinet">Зайти в кабинет</NavLink>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>  
        );
    }
}

export default CollectorMenu;
import React from 'react';
import '../sass/Footer.scss';

const Footer = () => {
    return (
        <div className="footer_section">
            <h1>Статьи каждую неделю</h1>
            <p>
                Больше 90% учеников прошли полный курс и смогли <br /> собрать свой
                первый компьютер
            </p>
            <div className="input_email">
                <input type="email" className="email_chek" placeholder="E-mail" />
                <button type="button" className="btn">
                    <p className="text">Подписаться</p>
                </button>
            </div>
            <div className="btn-block">
                <div className="footer_img">
                    <img src="img/Vector.svg" alt="rasm topilmadi" />
                </div>
                <div className="footer_img">
                    <img src="img/Youtube.svg" alt="rasm topilmadi" />
                </div>
                <div className="footer_img">
                    <img src="img/Facebook.svg" alt="rasm topilmadi" />
                </div>
                <div className="footer_img">
                    <img src="img/instagram.svg" alt="rasm topilmadi" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
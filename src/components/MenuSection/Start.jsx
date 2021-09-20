import React from 'react';
import '../sass/Start.scss'

const Start = () => {
    return (
        <div className="start">
            <div className="startOne">
                <div className="images">
                    <img src="img/Ellipse 1 (Stroke).svg" alt="" />
                </div>
                <h1>Быстрый старт</h1>
            </div>
            <h5>
                Больше 90% учеников прошли полный курс и <br />
                смогли собрать свой первый компьютер
            </h5>
            <div className="percentage">
                <div className="line">
                    <div className="linear">
                        <h1>100%</h1>
                        <div className="linearGradient"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                        eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                        fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
                <div className="line">
                    <div className="linear">
                        <h1>75%</h1>
                        <div className="linearGradient"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                        eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                        fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
                <div className="line">
                    <div className="linear">
                        <h1>50%</h1>
                        <div className="linearGradient"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                        eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                        fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
                <div className="line">
                    <div className="linear">
                        <h1>Итог</h1>
                        <div className="linearGradient"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                        eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                        fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Start;
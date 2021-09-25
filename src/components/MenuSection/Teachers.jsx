import React from 'react';
import { getGenresId } from '../DataBase/seychasMep';
import '../sass/Teachers.scss';

const Teachers = () => {
    return (
        <div className="teachers">
            <div className="startOne">
                <div className="images">
                    <img src="img/Ellipse 1 (Stroke).svg" alt="" />
                </div>
                <h1>Ваши преподаватели</h1>
            </div>
            <div className="wrap">
                {getGenresId().map((item) => (
                    <article key={item._id} className="komp">
                        <img src={item.img} alt="rasm toilmadi" />
                        <h1>{item.author}</h1>
                        <p>{item.text}</p>
                        <button className="btn">Биография</button>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Teachers;
import React from "react";
import { getGenres } from "../DataBase/seychasMep";
import '../sass/Seychas.scss';


const Seychas = () => {
    return (
        <div className="seychas">
            <h1>Получите профессию прямо сейчас</h1>
            <div className="wrap">
                {
                    getGenres().map(item => <article key={item._id} className="komp">
                    <img src={item.img} alt="rasm toilmadi" />
                    <h1>
                        {item.author}
                    </h1>
                    <p>
                        {item.text}
                    </p>
                </article>
                    )
                }
            </div>
        </div>
    );
};

export default Seychas;

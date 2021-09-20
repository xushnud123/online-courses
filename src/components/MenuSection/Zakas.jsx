import React from "react";
import "../sass/style.scss";

const CoursePurchase = () => {
  return (
    <section className="course-purchase">
      <div className="course-purchase__container">
        <button type="button" className="buy-btn">
          Заказать курс
        </button>
        <div className="course-about">
          <div className="course-about__text">
            <p>Учеников всего:</p>
            <p>Успешно закончили курс:</p>
          </div>
          <div className="course-about__content">
            <h2>200</h2>
            <h2>190</h2>
          </div>
        </div>
        <div className="money-from__students-section">
          <div className="money">
            <p>Заработано учениками:</p>
            <h2>400 000₽</h2>
          </div>
          <div className="process">
            <div className="line-color">
              <div className="purple-line__color"></div>
              <div className="white-line__color"></div>
            </div>
            <div className="process-number">
              <p>0</p>
              <p>1 000 000₽</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePurchase;

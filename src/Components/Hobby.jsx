import React from "react";
import img4 from "../Imgae/2023-03-16 15.25.47.jpg";
import img5 from "../Imgae/2023-03-16 15.25.51.jpg";
import img6 from "../Imgae/2023-03-16 15.25.59.jpg";

const Hobby = () => {
  return (
    <div>
      <div className="container__list">
        <p>
          Так же у меня довольно много хобби есть: я люблю делать что-то своими
          руками и мастерить, так я в школьные года делал из дерева подставки
          для телефона и на этом зарабатывал, так же делал браслеты из проволок
          и их тоже продавал. Мне нравится электроника и техники, так же
          научился играть на гитаре, и очень нравится делать красивые видео и
          фото. Могу сказать что я творческий человек.
        </p>
      </div>
      <div className="container__list_friend">
        <p>Я с другом Эмир</p>

        <div className="blockList_friend">
          <div className="container__list_img">
            <img className="imgForResume" src={img4} alt="" />
          </div>
          <div className="container__list_img">
            <img className="imgForResume" src={img5} alt="" />
          </div>
          <div className="container__list_img">
            <img className="imgForResume" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;

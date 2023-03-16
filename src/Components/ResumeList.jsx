import React, { useState } from "react";
import "./ResumeList.css";
import img from "../Imgae/2023-03-16 14.16.08.jpg";
import img1 from "../Imgae/2023-03-16 14.17.21.jpg";
import img2 from "../Imgae/2023-03-16 14.26.39.jpg";
import { Button, Offcanvas } from "react-bootstrap";

const ResumeList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container__list">
        <p>
          Если коротко рассказывать обо мне, то на данный момент я студент курса
          "Makers". В этом курсе я учусь на программирование в JavsSkript. В
          будущем планирую развиваться в этой сфере и стать специалистом своего
          дела. Если честно сказать то я с дедтства интересовался техниками и
          как они устроены. Помню много смотрел мультик "Фиксики" 😅. Конечно же
          вся моя жизинь не приковывается только к программированию у меня так
          же есть хорошие хобби, это можете простмотреть в отделе хобби с верху.
        </p>
        <p>Я по темпераменту характера сангвиник, а по стихии земля.</p>
      </div>
      <div className="blockSideBar">
        <Button className="sideBar" onClick={handleShow}>
          Дополнительно
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Кстати чуть не забыл</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Меня зовут Бекзат, мне 18 лет.</Offcanvas.Body>
        <Offcanvas.Body>Ps 😏 скоро мне будет 19 🤫</Offcanvas.Body>
      </Offcanvas>
      <div className="blockList">
        <div className="container__list_img">
          <img className="imgForResume" src={img} alt="" />
        </div>
        <div className="container__list_img">
          <img className="imgForResume" src={img1} alt="" />
        </div>
        <div className="container__list_img">
          <img className="imgForResume" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResumeList;

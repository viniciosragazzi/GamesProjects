import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineStar, AiFillLock } from "react-icons/ai";
import App from "./style";
import { Link } from "react-router-dom";

const QuizNiveis = () => {
  return (
    <App>
      <div className="app-top">
        <Link className="back-area" to="/app">
          {" "}
          <IoMdArrowBack className="icon-back" />
        </Link>
        <h2>Niveis</h2>
      </div>

      <div className="app-niveis">
        <div className="nivel-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
          <Link className="card-name" to="/">
            <span>Nivel 1</span>
          </Link>
        </div>
        <div className="nivel-card locked">
          <div className="icon-lock">
            < AiFillLock/>
          </div>
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/">
            <span>Nivel 2</span>
          </Link>
        </div>

        <div className="nivel-card locked">
          <div className="icon-lock">
            < AiFillLock/>
          </div>
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/">
            <span>Nivel 3</span>
          </Link>
        </div>
        <div className="nivel-card locked">
          <div className="icon-lock">
            < AiFillLock/>
          </div>
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/">
            <span>Nivel 4</span>
          </Link>
        </div>
        <div className="nivel-card locked">
          <div className="icon-lock">
            < AiFillLock/>
          </div>
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/">
            <span>Nivel 5</span>
          </Link>
        </div>

        <div className="nivel-card locked">
          <div className="icon-lock">
            < AiFillLock/>
          </div>
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/">
            <span>Nivel 6</span>
          </Link>
        </div>
      </div>
    </App>
  );
};

export default QuizNiveis;

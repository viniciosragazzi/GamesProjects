import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import App from "./style";
import { Link } from "react-router-dom";

const AppPage = () => {
  return (
    <App>
      <div className="app-top">
        <Link className="back-area" to="/">
          {" "}
          <IoMdArrowBack className="icon-back" />
        </Link>
        <h2>Categorias</h2>
      </div>

      <div className="app-categorias">
        <div className="categoria-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
          <Link className="card-name" to="/app/niveis">
            <span>C#</span>
          </Link>
        </div>
        <div className="categoria-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/app/niveis">
            <span>C#</span>
          </Link>
        </div>

        <div className="categoria-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/app/niveis">
            <span>C#</span>
          </Link>
        </div>
        <div className="categoria-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/app/niveis">
            <span>C#</span>
          </Link>
        </div>
        <div className="categoria-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/app/niveis">
            <span>C#</span>
          </Link>
        </div>

        <div className="categoria-card">
          <div className="card-star">
            <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
           <Link className="card-name" to="/app/niveis">
            <span>C#</span>
          </Link>
        </div>
      </div>
    </App>
  );
};

export default AppPage;

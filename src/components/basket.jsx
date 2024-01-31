import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import back from "./../assets/back.png";
import ColorChanging from "../hooks/ColorChanging1";
import { useDispatch, useSelector } from "react-redux";
import tShirt from "./../assets/t-shirt.svg";
const Basket = function ({ basketList }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  useEffect(() => {
    console.log(basket);
  }, []);
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  return (
    <div>
      <Link to={"/"} className=" link back-to-menu">
        <img src={back} alt="back-to-main-menu" />
      </Link>
      <h2>BASKET</h2>
      <div className="basket-container">
        {basket.length > 0 ? (
          basket.map((item, index) => (
            <div className="basket-item" key={index}>
              <div
                className="delete-item-basket"
                onClick={() => deleteItem(item.id)}
              >
                X
              </div>
              <span style={{ fontSize: 30 }}>{index + 1})</span>
              <p className="basket-item-text">
                SIZE: <span>{item.size}</span>
              </p>
              <p className="basket-item-text">
                Price: <span>{item.price}</span>
              </p>

              <div className="basket-img-container">
                <ColorChanging
                  src={tShirt}
                  className="color-changing-img-basket"
                  color={item.color}
                  width={550}
                />
                <div className="picts-container">
                  {item.images.map((i, k) => {
                    return (
                      <img
                        src={i.src}
                        key={k}
                        className="t-shirt-img"
                        style={{ width: i.size, top: i.top, left: i.left }}
                      ></img>
                    );
                  })}
                  {item.texts.map((i, k) => {
                    return (
                      <p
                        key={k}
                        className="t-shirt-text"
                        style={{
                          left: i.left,
                          fontSize: i.fontSize + "px",
                          top: i.top,
                          color: i.color,
                        }}
                      >
                        {i.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="fly-basket-element">EMPTY</div>
        )}
      </div>
    </div>
  );
};

export default Basket;

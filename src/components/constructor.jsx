import React, { useEffect, useState } from "react";
import tShirt from "./../assets/t-shirt.svg";
import { Link } from "react-router-dom";
import ColorChanging from "../hooks/ColorChanging1";
import back from "./../assets/back.png";
import left from "./../assets/editing-form/left.png";
import top from "./../assets/editing-form/top.png";
import right from "./../assets/editing-form/right.png";
import bottom from "./../assets/editing-form/bottom.png";
import fontUp from "./../assets/editing-form/fontUp.png";
import fontDown from "./../assets/editing-form/fontDown.png";
import increase from "./../assets/editing-form/increase.png";
import decrease from "./../assets/editing-form/decrease.png";
import { useDispatch, useSelector } from "react-redux";

const Constructor = ({}) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(1000);
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  useEffect(() => {
    let newPrice = 1000;
    newPrice = newPrice + images.length * 200;
    newPrice = newPrice + texts.length * 150;
    setPrice(newPrice);
    console.log(images);
    console.log(texts);
  }, [images, texts]);
  const tShirtClass = "main-item color-changing-img";
  const tShirtSrc = tShirt;

  const addText = () => {
    if (text.length > 0) {
      const id = new Date().getTime();
      console.log(id);
      setTexts((prevTexts) => [
        ...prevTexts,
        { text: text, id: id, left: 0, top: 0, color: "#102030", fontSize: 10 },
      ]);
    } else {
      alert("Пустая строка");
    }

    setText("");
  };
  const addImg = () => {
    const img = new Image();
    img.src = link;

    img.onload = function () {
      const id = new Date().getTime();
      console.log(id);
      setImages((prevImages) => [
        ...prevImages,
        { src: link, id: id, left: 0, top: 0, color: "#102030", size: 50 },
      ]);
    };

    img.onerror = function () {
      alert("Ошибка загрузки изображения. Ссылка недействительна.");
    };
    setLink("");
  };
  const editSize = (id, value) => {
    setImages((prevImages) => {
      return prevImages.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            size: item.size + value,
          };
        }
        return item;
      });
    });
  };
  const editPosition = (type, value, id, typeOfItem) => {
    if (typeOfItem == "text") {
      setTexts((prevTexts) => {
        return prevTexts.map((item) => {
          if (item.id === id) {
            console.log(id);
            if (type === "left") {
              return {
                ...item,
                left: item.left + value,
              };
            } else if (type === "top") {
              return {
                ...item,
                top: item.top + value,
              };
            }
          }
          return item;
        });
      });
    } else if (typeOfItem == "image") {
      setImages((prevImages) => {
        return prevImages.map((item) => {
          if (item.id === id) {
            if (type === "left") {
              return {
                ...item,
                left: item.left + value,
              };
            } else if (type === "top") {
              return {
                ...item,
                top: item.top + value,
              };
            }
          }
          return item;
        });
      });
    }
  };
  const updateColor = (value, id) => {
    setTexts((prevTexts) => {
      return prevTexts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            color: value,
          };
        }
        return item;
      });
    });
  };
  const fontSizeUpdating = (type, id) => {
    setTexts((prevTexts) => {
      return prevTexts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            fontSize:
              type === "increment" ? item.fontSize + 1 : item.fontSize - 1,
          };
        }
        return item;
      });
    });
  };
  const deleteItem = (id) => {
    setTexts((prevTexts) => {
      return prevTexts.filter((item) => item.id !== id);
    });
    setImages((prevImages) => {
      return prevImages.filter((item) => item.id !== id);
    });
  };
  const formatText = (text) => {
    if (text.length < 10) {
      return text;
    } else {
      return text.slice(0, 10) + "...";
    }
  };
  const selector = useSelector((state) => state.basket);
  useEffect(() => {
    console.log(selector);
  }, [selector]);
  const addToBasket = () => {
    if (size) {
      const item = {
        id: new Date().getTime(),
        color: color,
        size: size,
        price: price,
        images: images,
        texts: texts,
      };
      dispatch({ type: "ADD_ITEM", payload: item });
      alert("Успешно добавлено в корзину");
    } else {
      alert("А размер?");
    }
  };
  return (
    <div className="wrapper constructor-wrapper">
      <Link to={"/"} className=" link back-to-menu">
        <img src={back} alt="back-to-main-menu" />
      </Link>
      <div className="form-conctructor">
        <div className="color-container">
          <label className="label-color">
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="main-color"
            />
            <div className="circle">
              <br />
              T-shirt <br /> color
            </div>
          </label>
        </div>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="size"
              value="XS"
              onChange={(e) => setSize(e.target.value)}
            />
            XS
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="S"
              onChange={(e) => setSize(e.target.value)}
            />
            S
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="M"
              onChange={(e) => setSize(e.target.value)}
            />
            M
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="L"
              onChange={(e) => setSize(e.target.value)}
            />
            L
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="XL"
              onChange={(e) => setSize(e.target.value)}
            />
            XL
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="XXL"
              onChange={(e) => setSize(e.target.value)}
            />
            XXL
          </label>
        </div>
        <div className="form-item">
          <p>Write the text</p>
          <input
            type="text"
            placeholder={`TEXT `}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn" onClick={addText}>
            Add
          </button>
        </div>
        <div className="form-item">
          <p>Link to picture</p>
          <input
            type="text"
            placeholder={`LINK `}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button className="btn" onClick={addImg}>
            Add
          </button>
        </div>
        {texts.map((i, k) => {
          return (
            <div className="form-item edit-parent-item" key={k}>
              <div className="delete-item" onClick={() => deleteItem(i.id)}>
                X
              </div>
              <h3>{formatText(i.text.trim())}</h3>
              <div className="editing-form">
                <img
                  src={left}
                  onClick={() => editPosition("left", -2, i.id, "text")}
                ></img>
                <img
                  src={right}
                  onClick={() => editPosition("left", +2, i.id, "text")}
                ></img>
                <img
                  src={top}
                  onClick={() => editPosition("top", -2, i.id, "text")}
                ></img>
                <img
                  src={bottom}
                  onClick={() => editPosition("top", +2, i.id, "text")}
                ></img>
                <img
                  src={fontUp}
                  onClick={() => fontSizeUpdating("increment", i.id)}
                ></img>
                <img
                  src={fontDown}
                  onClick={() => fontSizeUpdating("decrement", i.id)}
                ></img>
                <div className="color-container">
                  <input
                    type="color"
                    value={i.color}
                    className="editing-color"
                    onChange={(e) => updateColor(e.target.value, i.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
        {images.map((i, k) => {
          return (
            <div className="form-item edit-parent-item" key={k}>
              <div className="delete-item" onClick={() => deleteItem(i.id)}>
                X
              </div>
              <img src={i.src} alt="" className="edit-img" />
              <div className="editing-form">
                <img
                  src={left}
                  onClick={() => editPosition("left", -2, i.id, "image")}
                ></img>
                <img
                  src={right}
                  onClick={() => editPosition("left", +2, i.id, "image")}
                ></img>
                <img
                  src={top}
                  onClick={() => editPosition("top", -2, i.id, "image")}
                ></img>
                <img
                  src={bottom}
                  onClick={() => editPosition("top", +2, i.id, "image")}
                ></img>
                <img src={increase} onClick={() => editSize(i.id, +2)}></img>
                <img src={decrease} onClick={() => editSize(i.id, -2)}></img>
              </div>
            </div>
          );
        })}
        <button className="btn add-bskt-btn" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
      <div className="result-container">
        <div className="price">
          Total price: <span>{price}</span>
        </div>
        <div className="img-container">
          <ColorChanging
            src={tShirtSrc}
            className={tShirtClass}
            color={color}
            width={550}
          />
          <div className="picts-container">
            {images.map((i, k) => {
              return (
                <img
                  src={i.src}
                  key={k}
                  className="t-shirt-img"
                  style={{ width: i.size, top: i.top, left: i.left }}
                ></img>
              );
            })}
            {texts.map((i, k) => {
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
                  {i.text.trim()}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructor;

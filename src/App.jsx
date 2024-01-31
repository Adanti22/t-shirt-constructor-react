import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Constructor from "./components/constructor";
import Basket from "./components/basket";

import MainPage from "./components/mainPage";

function App() {
  const [basketList, setBasket] = useState([
    {
      title: "T-shirt",
      color: "rgba",
      img: "https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/mainimage/2023/09/g25.png?itok=rhAOxkqD",
      price: 10000,
      top: 10,
      left: 10,
      size: "",
      text: "",
    },
  ]);
  const addItem = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
    console.log(basketList);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/constructor"
            element={<Constructor addItem={addItem} />}
          />
          <Route path="/basket" element={<Basket basketList={basketList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
/* 

1. Роутер:
Выбор одежды, корзина )
2. Компонент конструктор
3. 



*/
export default App;

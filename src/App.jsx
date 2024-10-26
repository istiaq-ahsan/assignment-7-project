

import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Allplayers from "./components/Allplayers/Allplayers";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  })


  const handleIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "active"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "active"
      })
    }
  }
  console.log(isActive);



  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Allplayers handleIsActive={handleIsActive} isActive={isActive}></Allplayers>
      <div className="relative z-10 mt-32">
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
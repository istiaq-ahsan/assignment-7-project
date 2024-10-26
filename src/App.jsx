

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

  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleDelete = (id) => {
    const remainingPlayer = selectedPlayer.filter((p) => p.playerId !== id);
    setSelectedPlayer(remainingPlayer);
  }

  const handleSelectedPlayer = (player) => {

    const isExist = selectedPlayer.find((p) => p.playerId == player.playerId);
    if (isExist) {
      alert("Player Already Selected");
    }
    else {
      const newPlayers = [...selectedPlayer, player];
      setSelectedPlayer(newPlayers);
    }
  }
  console.log(selectedPlayer);


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
      <Allplayers
        selectedPlayer={selectedPlayer}
        handleSelectedPlayer={handleSelectedPlayer}
        handleIsActive={handleIsActive}
        isActive={isActive}
        handleDelete={handleDelete}
      >
      </Allplayers>

      <div className="relative z-10 mt-32">
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
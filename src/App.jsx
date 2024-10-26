

import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Allplayers from "./components/Allplayers/Allplayers";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import { toast } from 'react-toastify';



function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  })

  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const [price, setPrice] = useState(0);

  const handleIncreasePrice = (money) => {
    setPrice(price + money)
  }

  const deleteIncrease = (biddingPrice) => {
    setPrice(price + biddingPrice)
  }

  const handleDeletePrice = (id, biddingPrice) => {
    setPrice(price - biddingPrice)
  }

  const handleDelete = (id, biddingPrice) => {
    deleteIncrease(biddingPrice);
    const remainingPlayer = selectedPlayer.filter((p) => p.playerId !== id);
    setSelectedPlayer(remainingPlayer);
  }

  const handleSelectedPlayer = (player) => {

    if (selectedPlayer.length >= 6) {
      toast.error("You already added Six players");
      return;
    }

    if (price === 0) {
      toast.error("Insufficient Credit");
      return;
    }

    const isExist = selectedPlayer.find((p) => p.playerId == player.playerId);
    if (isExist) {
      toast.error("Player Already Selected");
    }
    else {
      toast(`Congrates!! ${player.name} is now in your squad`);
      const newPlayers = [...selectedPlayer, player];
      setSelectedPlayer(newPlayers);
      handleDeletePrice(player.playerId, player.biddingPrice);

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
      <Header price={price}></Header>
      <Banner handleIncreasePrice={handleIncreasePrice}></Banner>
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
import { useState } from "react";
import FriendsList from "./components/friendList/FriendList";
import FormAddFriend from "./components/formAddFriend/FormAddFriend";
import FormSplitBill from "./components/formSplitBill/FormSplitBill";
import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";

const initialFriends = [];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    if (!showWelcome) setShowAddFriend(false);
  }

  function handleSplitBill(bill, selectedFriends, payer) {
    const totalPeople = selectedFriends.length + 1;
    const share = bill / totalPeople;

    setFriends((prevFriends) =>
      prevFriends.map((friend) => {
        if (!selectedFriends.includes(friend.id)) return friend;

        const updatedBalance =
          payer === "user" ? friend.balance + share : friend.balance - share;

        return { ...friend, balance: updatedBalance };
      })
    );
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleSelection(friend) {
    setSelectedFriends((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleStartSpliting() {
    setShowWelcome(false);
    setShowAddFriend(true);
  }

  return (
    <>
      <Navbar />
      {showWelcome && friends.length === 0 ? (
        <div className="welcome">
          <button className="welcome-button" onClick={handleStartSpliting}>
            Start Splitting
          </button>
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        </div>
      ) : (
        <div className="app">
          <div className="sidebar">
            <FriendsList
              friends={friends}
              onSelection={handleSelection}
              selectedFriends={selectedFriends}
            />
            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
            <Button onClick={handleShowAddFriend}>
              {showAddFriend ? `close` : `Add friend`}
            </Button>
          </div>
          {selectedFriends && (
            <FormSplitBill friends={friends} onSplitBill={handleSplitBill} />
          )}
        </div>
      )}
    </>
  );
}

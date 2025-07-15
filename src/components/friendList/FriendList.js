import Friend from "../friend/Friend";

function FriendsList({ friends, onSelection, selectedFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriends}
        />
      ))}
    </ul>
  );
}

export default FriendsList;

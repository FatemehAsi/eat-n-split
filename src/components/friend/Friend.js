import Button from "../button/Button";
import { useTranslation } from "react-i18next";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  const { t } = useTranslation();

  return (
    <li className={isSelected ? "selected" : "default-style"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          {t("user_owes", {
            name: friend.name,
            amount: Math.abs(friend.balance).toFixed(2),
          })}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {t("owe_user", {
            name: friend.name,
            amount: Math.abs(friend.balance).toFixed(2),
          })}
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? t("buttons.close") : t("buttons.select")}
      </Button>
    </li>
  );
}

export default Friend;

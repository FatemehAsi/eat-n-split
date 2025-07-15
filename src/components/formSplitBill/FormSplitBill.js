import { useState } from "react";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

function FormSplitBill({ friends, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [payer, setPayer] = useState("user");
  const [selectedFriendIds, setSelectedFriendIds] = useState([]);
  const { t } = useTranslation();

  function handleToggleFriend(id) {
    setSelectedFriendIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || selectedFriendIds.length === 0) return;

    onSplitBill(Number(bill), selectedFriendIds, payer);
    setBill("");
    setSelectedFriendIds([]);
    setPayer("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>{t("buttons.split_bill")}</h2>
      <label>💸 {t("bill_value")}</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🤑 {t("who_pays")}</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">{t("you")}</option>
        {friends.map((friend) => (
          <option value={friend.id} key={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>

      <label>👩🏾‍🤝‍👩🏼 {t("select_friends")}</label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {friends.map((friend) => (
          <label key={friend.id}>
            <input
              type="checkbox"
              checked={selectedFriendIds.includes(friend.id)}
              onChange={() => handleToggleFriend(friend.id)}
            />
            {friend.name}
          </label>
        ))}
      </div>

      <Button labelKey="buttons.split_bill" />
    </form>
  );
}

export default FormSplitBill;

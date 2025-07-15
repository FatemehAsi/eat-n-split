import { useTranslation } from "react-i18next";

function Button({ labelKey, onClick, children }) {
  const { t } = useTranslation();

  return (
    <button className="button" onClick={onClick}>
      {labelKey ? t(labelKey) : children}
    </button>
  );
}

export default Button;

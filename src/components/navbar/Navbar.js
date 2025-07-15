import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  function toggleLang() {
    let newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "fa" ? "rtl" : "lrt";
  }

  return (
    <nav className="navbar">
      <h1>🍕 {t("title")}</h1>
      <button className="navbar-button" onClick={toggleLang}>
        <p>{i18n.language === "fa" ? "English" : "فارسی"}</p>
      </button>
    </nav>
  );
}

export default Navbar;

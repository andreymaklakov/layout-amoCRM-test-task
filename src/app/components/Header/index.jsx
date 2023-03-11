import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as WhatsappIcon } from "../../icons/whatsapp.svg";
import { ReactComponent as ViberIcon } from "../../icons/viber.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo_container}>
        <Logo />
        <p className={styles.logo_text}>
          крупный интегратор CRM <br />в Росcии и ещё 8 странах
        </p>
      </div>

      <div className={styles.content_container}>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link to="#">Услуги</Link>
            </li>
            <li>
              <Link to="#">Виджеты</Link>
            </li>
            <li>
              <Link to="#">Интеграции</Link>
            </li>
            <li>
              <Link to="#">Кейсы</Link>
            </li>
            <li>
              <Link to="#">Сертификаты</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.contact_container}>
          <span>+7 555 555-55-55</span>

          <div className={styles.contact_icons}>
            <Link to="#">
              <TelegramIcon />
            </Link>
            <Link to="#">
              <ViberIcon />
            </Link>
            <Link to="#">
              <WhatsappIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

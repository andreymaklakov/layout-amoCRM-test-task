import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as WhatsappIcon } from "../../icons/whatsapp.svg";
import { ReactComponent as ViberIcon } from "../../icons/viber.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.navigation_container}>
        <div className={styles.column_container}>
          <p>О компании</p>
          <Link to="/">Партнёрская программа</Link>
          <Link to="/">Вакансии</Link>
        </div>

        <div className={styles.menu_columns_wrapper}>
          <div className={styles.column_container}>
            <p>Меню</p>
            <Link to="/">Расчёт стоимости</Link>
            <Link to="/">Услуги</Link>
            <Link to="/">Виджеты</Link>
            <Link to="/">Интеграции</Link>
            <Link to="/">Наши клиенты</Link>
          </div>

          <div className={styles.column_container}>
            <p style={{ opacity: 0 }}>p</p>
            <Link to="/">Кейсы</Link>
            <Link to="/">Благодарственные письма</Link>
            <Link to="/">Сертификаты</Link>
            <Link to="/">Блог на Youtube</Link>
            <Link to="/">Вопрос / Ответ</Link>
          </div>
        </div>
      </div>

      <div className={`${styles.column_container} ${styles.lastColumn}`}>
        <p>Контакты</p>
        <span className={styles.number}>+7 555 555-55-55</span>
        <span className={styles.icons}>
          <Link to="#">
            <TelegramIcon />
          </Link>
          <Link to="#">
            <ViberIcon />
          </Link>
          <Link to="#">
            <WhatsappIcon />
          </Link>
        </span>
        <span>Москва, Путевой проезд 3с1, к 902</span>

        <div className={styles.confidentials}>
          <span>©WELBEX 2022. Все права защищены.</span>
          <span className={styles.underlined}>
            <Link to="#">Политика конфиденциальности</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

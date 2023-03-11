import React from "react";

import { ReactComponent as LineIcon } from "../../icons/line.svg";

import styles from "./RightContent.module.scss";

const RightContent = () => {
  return (
    <div className={styles.content_container}>
      <p className={styles.firstBlock}>
        Вместе с{" "}
        <span className={styles.coloredText}>
          <span>бесплатной </span>
          <br />
          <span>консультацией</span>
        </span>{" "}
        мы дарим:
      </p>

      <div className={styles.secondBlock}>
        <div>
          <p className={styles.header_mobile}>
            <LineIcon />
            Skype аудит
          </p>

          <p className={styles.header}>Виджеты</p>
          <p className={styles.content}>30 готовых решений</p>
        </div>

        <div>
          <p className={styles.header_mobile}>
            <LineIcon />
            30 виджетов
          </p>

          <p className={styles.header}>Dashboard</p>
          <p className={styles.content}>с показателями вашего бизнеса</p>
        </div>

        <div>
          <p className={styles.header_mobile}>
            <LineIcon />
            Dashboard
          </p>

          <p className={styles.header}>Skype Аудит</p>
          <p className={styles.content}>отдела продаж и CRM системы</p>
        </div>

        <div>
          <p className={styles.header_mobile}>
            <LineIcon />
            Месяц аmoCRM
          </p>

          <p className={styles.header}>35 дней</p>
          <p className={styles.content}>использования CRM</p>
        </div>
      </div>

      <button>Получить консультацию</button>
    </div>
  );
};

export default RightContent;

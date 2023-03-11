import React from "react";

import styles from "./LeftContent.module.scss";

const LeftContent = () => {
  return (
    <div>
      <p className={styles.firstLine}>
        Зарабатывайте <br />
        больше
      </p>

      <p className={styles.secondLine}>с WELBEX</p>

      <p className={styles.thirdLine}>
        Развиваем и контролируем <br />
        продажи за вас
      </p>
    </div>
  );
};

export default LeftContent;

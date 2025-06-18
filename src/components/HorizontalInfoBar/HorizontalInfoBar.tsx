import styles from "./HorizontalInfoBar.module.scss";
import type { HorizontalInfoBarTypes } from "./HorizontalInfoBar.typse";
const HorizontalInfoBar = ({ title, info }: HorizontalInfoBarTypes) => {
  return (
    <div className={styles.HorizontalInfoBar}>
      <div className={styles.Left}>
        <div className={styles.Title}>{title}</div>
      </div>
      <div className={styles.Right}>
        <div>{info}</div>
      </div>
    </div>
  );
};

export default HorizontalInfoBar;

import styles from "./page.module.css";

export default function TopRightPage() {
  return (
    <div className={styles["top-right-card"]}>
      <h1 className={styles["profile-title"]}>个人资料</h1>
      <p className={styles["profile-description"]}>
        这是我的个人资料页面，展示了GitHub上的基本信息。
      </p>
    </div>
  );
}

import { getGitHubUser } from "@/lib/github";
import styles from "./page.module.css";

export default async function BottomRightPage() {
  const userData = await getGitHubUser();

  return (
    <div className={styles["bottom-right-card"]}>
      <div className={styles["repo-stats"]}>
        <h3 className={styles["stats-title"]}>仓库统计</h3>
        <div className={styles["repo-count"]}>
          <span className={styles["count-number"]}>{userData.public_repos}</span>
          <span className={styles["count-label"]}>个公开仓库</span>
        </div>
        <p className={styles["stats-description"]}>
          在GitHub上共有 {userData.public_repos} 个公开仓库
        </p>
      </div>
    </div>
  );
}

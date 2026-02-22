import { getGitHubUser } from "@/lib/github";
import styles from "./page.module.css";

export default async function BottomLeftPage() {
  const userData = await getGitHubUser();

  return (
    <div className={styles["bottom-left-card"]}>
      <a
        href={userData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles["github-link-button"]}
      >
        访问我的GitHub主页
        <span className={styles["link-arrow"]}>→</span>
      </a>
    </div>
  );
}

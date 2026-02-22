"use client";

import { useState, useEffect } from "react";
import { getGitHubUser, type GitHubUser as ApiGitHubUser } from "@/lib/github";
import Image from "next/image";
import styles from "./page.module.css";

interface ExtendedGitHubUser extends ApiGitHubUser {
  login?: string;
}

export default function TopLeftPage() {
  const [userData, setUserData] = useState<ExtendedGitHubUser | null>(null);
  const [activeTab, setActiveTab] = useState<"timeline" | "contact">("timeline");

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getGitHubUser();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div className={styles["top-left-card"]}>
        <div className={styles["loading-state"]}>
          <div className={styles["loading-spinner"]}></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["top-left-card"]}>
      <div className={styles["user-info"]}>
        <a 
          href={userData.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles["avatar-link"]}
        >
          <Image
            src={userData.avatar_url}
            alt={`${userData.name || "GitHub用户"}的头像`}
            className={styles["user-avatar"]}
            width={80}
            height={80}
            unoptimized={false}
          />
        </a>
        <div className={styles["user-details"]}>
          <h2 className={styles["user-name"]}>{userData.name || "未设置名称"}</h2>
          <div className={styles["user-location"]}>
            <span className={styles["location-icon"]}>City:</span>
            <span>{userData.location || "未设置位置"}</span>
          </div>
        </div>
      </div>

      {/* 切换按钮 */}
      <div className={styles["tab-buttons"]}>
        <button
          className={`${styles["tab-button"]} ${activeTab === "timeline" ? styles["active"] : ""}`}
          onClick={() => setActiveTab("timeline")}
        >
          Tool
        </button>
        <button
          className={`${styles["tab-button"]} ${activeTab === "contact" ? styles["active"] : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Find
        </button>
      </div>

      {/* 内容区域 */}
      <div className={styles["tab-content"]}>
        {activeTab === "timeline" ? (
          <div className={styles["timeline-content"]}>
            <h3 className={styles["content-title"]}>时间轴</h3>
            <p className={styles["content-description"]}>
              这个页面是时间轴，展示我的项目进展、学习历程和重要事件。
            </p>
            <div className={styles["timeline-items"]}>
              <div className={styles["timeline-item"]}>
                <div className={styles["timeline-date"]}>2024年1月</div>
                <div className={styles["timeline-text"]}>开始学习Next.js和React</div>
              </div>
              <div className={styles["timeline-item"]}>
                <div className={styles["timeline-date"]}>2024年3月</div>
                <div className={styles["timeline-text"]}>创建个人主页项目</div>
              </div>
              <div className={styles["timeline-item"]}>
                <div className={styles["timeline-date"]}>2024年5月</div>
                <div className={styles["timeline-text"]}>添加GitHub API集成</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles["contact-content"]}>
            <h3 className={styles["content-title"]}>联系我的方式</h3>
            <p className={styles["content-description"]}>
              这个页面是联系我的方式，您可以通过以下渠道与我取得联系。
            </p>
            <div className={styles["contact-methods"]}>
              <div className={styles["contact-method"]}>
                <div className={styles["contact-icon"]}>📧</div>
                <div className={styles["contact-details"]}>
                  <div className={styles["contact-label"]}>邮箱</div>
                  <div className={styles["contact-value"]}>example@email.com</div>
                </div>
              </div>
              <div className={styles["contact-method"]}>
                <div className={styles["contact-icon"]}>💬</div>
                <div className={styles["contact-details"]}>
                  <div className={styles["contact-label"]}>GitHub</div>
                  <a 
                    href={userData.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles["contact-link"]}
                  >
                    {userData.login || "GitHub主页"}
                  </a>
                </div>
              </div>
              <div className={styles["contact-method"]}>
                <div className={styles["contact-icon"]}>🌐</div>
                <div className={styles["contact-details"]}>
                  <div className={styles["contact-label"]}>个人网站</div>
                  <a 
                    href="https://example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles["contact-link"]}
                  >
                    https://example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

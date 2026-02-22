import React from "react";
import TopLeftPage from "./top-left/page";
import BottomLeftPage from "./bottom-left/page";
import TopRightPage from "./top-right/page";
import BottomRightPage from "./bottom-right/page";
import styles from "./layout.module.css";

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="profile-container">
      {/* 左右双栏布局 */}
      <div className={styles["two-column-layout"]}>
        {/* 左栏 */}
        <div className={styles["left-column"]}>
          <TopLeftPage />
          <BottomLeftPage />
        </div>

        {/* 右栏 */}
        <div className={styles["right-column"]}>
          <TopRightPage />
          <BottomRightPage />
        </div>
      </div>

      {/* 子页面内容 */}
      {children}
    </div>
  );
}

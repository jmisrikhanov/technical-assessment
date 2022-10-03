import React from "react";
import Button from "../../common/button/Button";
import landingImg from "../../../assets/svg/Landing-page-image.svg";
import styles from "../Landing.module.css";
import { useNavigate } from "react-router-dom";
import Image from "../../common/img/Image";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("create");

  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-alignment"]}>
        <h1 className={styles["inner-header-container"]}>
          <span className={styles["inner-header-item"]}>
            Imagine if
            <span
              className={`${styles["inner-header-item"]} ${styles["snapchat-text"]}`}
            >
              Snapchat
            </span>
            had events.
          </span>
        </h1>
        <p className={styles["paragraph-text"]}>
          Easiliy host and share events with your <br /> friends accross any
          social media
        </p>
      </div>
      <div className={styles["order-container"]}>
        <div className={styles["img-container"]}>
          <Image
            src={landingImg}
            alt="not found"
            width={"80%"}
            loading="lazy"
          />
        </div>
        <div className={styles["btn-container"]}>
          <Button
            type="button"
            onClick={handleNavigate}
            content={"🎉 Create my event"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

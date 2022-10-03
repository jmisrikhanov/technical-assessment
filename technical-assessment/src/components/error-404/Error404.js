import React from "react";
import Error404Img from "../../assets/images/error404.png";
import { useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import styles from "./Error404.module.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["error404-container"]}>
      <img src={Error404Img} alt="error404" width={"320px"} />
      <p className={styles["error404-content"]}>
        The page may have been removed or changed.
      </p>
      <div>
        <Button
          type="button"
          content={"Go Back"}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default Error404;

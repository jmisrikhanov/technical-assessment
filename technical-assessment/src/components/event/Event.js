import React, { useContext, useEffect } from "react";
import BirthdayCake from "../../assets/images/Birthday-cake.png";
import { AppDataContext } from "../../context/AppContext";
import Image from "../common/img/Image";
import CalendarSvg from "../common/svg-comp/Calendar";
import LocationSvg from "../common/svg-comp/Location";
import StrokeSvg from "../common/svg-comp/Stroke";
import styles from "./Event.module.css";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const { data } = useContext(AppDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data?.eventName) navigate("/create");
  }, [data?.eventName]);

  return (
    <div className={styles["event-page-container"]}>
      <div className={styles["birth-cake"]}>
        <Image src={data?.photo} alt="event image" className={styles.image} />
      </div>
      <div>
        <div
          className={styles["event-name"]}
          style={{ alignSelf: "flex-start" }}
        >
          <h1>{data?.eventName}</h1>
          <p>
            Hosted by <span>{data?.hostName}</span>
          </p>
        </div>
        <div>
          <div className={styles["date-place-div"]}>
            <div className={styles["display-flex"]}>
              <div className={styles["margin-right-1rem"]}>
                <CalendarSvg />
              </div>
              <div className={styles["date-place-font"]}>
                <p className={styles["purple-p"]}>
                  <span>{data?.startTime}</span>
                </p>
                <p>
                  to <span>{data?.endTime}</span> UTC +10
                </p>
              </div>
            </div>
            <div>
              <StrokeSvg />
            </div>
          </div>
          <div className={styles["date-place-div"]}>
            <div className={styles["display-flex"]}>
              <div className={styles["margin-right-1rem"]}>
                <LocationSvg />
              </div>
              <div className={styles["date-place-font"]}>
                <p className={styles["purple-p"]}>
                  <span>Street name</span>
                </p>
                <p>{data?.location}</p>
              </div>
            </div>
            <div className={styles["arrow-margin"]}>
              <StrokeSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

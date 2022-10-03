import React, { useContext } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../CreateEvent.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import FormInput from "../../common/form-input/FormInput";
import { imgHandler } from "../../../helper/imgUpload";
import { FILE_SIZE } from "../../../constants/constantVariables";
import BookingImg from "../../../assets/images/booking.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Image from "../../common/img/Image";
import { AppDataContext } from "../../../context/AppContext";

const CreateAppForm = () => {
  const [width] = useWindowSize();
  const navigate = useNavigate();

  const { data, setData } = useContext(AppDataContext);

  const initialValues = {
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    location: "",
    photo: "",
  };

  const validate = Yup.object({
    eventName: Yup.string()
      .trim()
      .min(2, "too short")
      .max(50, "must be less than 50 characters")
      .required("Required"),
    hostName: Yup.string()
      .trim()
      .min(2, "too short")
      .max(50, "must be 50 characters or less")
      .required("Required"),
    startTime: Yup.date().required("Must enter start date"),
    endTime: Yup.date().required("Must enter end date"),
    location: Yup.string()
      .trim()
      .min(10, "must be 10 or more characters")
      .max(255, "must be less than 255 characters ")
      .required("Required"),
    photo: Yup.mixed().required("Required"),
  });
  const handleSubmit = (values) => navigate(`/event`);

  return (
    <div
      className={styles["application-container"]}
      style={{
        justifyContent: width < 1024 && "center",
      }}
    >
      <div>
        <Image
          src={BookingImg}
          alt="filling form"
          loading="lazy"
          style={{ display: width < 1024 && "none", borderRadius: "1rem" }}
          width={width / 2}
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          setData(values);
          handleSubmit(values);
          resetForm({});
        }}
        validate={(values) => {
          const errors = {};
          if (values?.photo) {
            const base64str = values?.photo?.split("base64,")[1];
            const decoded = atob(base64str);
            if (decoded?.length > FILE_SIZE) {
              errors.photo =
                "Fotoğraf boyutunuz çok büyük 9MB altı yüklemeyi deneyin.";
              return errors;
            }
          }
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <div>
            <h1
              className={styles["form-header"]}
              style={{
                textAlign: width < 1024 && "center",
              }}
            >
              Create Event
            </h1>
            <Form>
              <FormInput label="Event Name" name="eventName" type="text" />
              <FormInput label="Host Name" name="hostName" type="text" />
              <FormInput
                label="Start Time"
                name="startTime"
                type="datetime-local"
              />
              <FormInput
                label="End Time"
                name="endTime"
                type="datetime-local"
              />
              <FormInput label="Location" name="location" type="textarea" />
              <div className={styles["main-file--container"]}>
                <div className={styles["file-input--container"]}>
                  <label style={{ marginBottom: "1rem" }}>Event Photo</label>
                  <input
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={(e) => imgHandler(e, "photo", setFieldValue)}
                  />
                  {errors.photo && touched.photo && (
                    <ErrorMessage
                      component="div"
                      name={"photo"}
                      className={styles.error}
                    />
                  )}
                </div>
                {values?.photo && (
                  <div className={styles["uploaded-img--container"]}>
                    <Image
                      src={values?.photo}
                      alt="uploaded_image"
                      width={"160px"}
                      height={"160px"}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
              <div className={styles["btn-container"]}>
                <Button type="submit" content={"Create"} />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateAppForm;

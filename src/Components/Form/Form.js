import "./Form.css";
import { Formik } from "formik";

function Form(props) {
  return (
    <Formik
      initialValues={
        props.type === "login"
          ? { login: "", password: "" }
          : { location: "", date: "", days: "" }
      }
      validate={(values) => {
        const errors = {};
        if (props.type === "login") {
          if (!values.login) {
            errors.login = "Это обязательное поле";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)
          ) {
            errors.login = "Неверный формат почты";
          }

          if (!values.password) {
            errors.password = "Это обязательное поле";
          } else if (/[а-яё]/i.test(values.password)) {
            errors.password = "Пароль не должен содержать кириллицу";
          } else if (values.password.length < 8) {
            errors.password = "Пароль должен содержать минимум 8 символов";
          }
        } else {
          if (!values.location) {
            errors.location = "Это обязательное поле";
          }

          if (!values.date) {
            errors.date = "Это обязательное поле";
          }

          if (!values.days) {
            errors.days = "Это обязательное поле";
          }
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        let date;
        props.type !== "login"
          ? (date = values.date.split(".").reverse().join("-"))
          : (date = "");
        props.type === "login"
          ? props.formSubmit()
          : props.formSubmit(date, values.days, values.location);
        resetForm(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        status,
      }) =>
        props.type === "login" ? (
          <form className="form form__login" onSubmit={handleSubmit}>
            <h2 className="form__heading">Simple Hotel Check</h2>
            <p
              className={`form__title ${
                errors.login && touched.login && errors.login
                  ? "form__title-error"
                  : ""
              }`}
            >
              Логин
            </p>
            <input
              className={`form__input ${
                errors.login && touched.login && errors.login
                  ? "form__input-error"
                  : ""
              }`}
              type="email"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            ></input>
            <span className="form__span-error">
              {errors.login && touched.login && errors.login}
            </span>
            <p
              className={`form__title ${
                errors.password && touched.password && errors.password
                  ? "form__title-error"
                  : ""
              }`}
            >
              Пароль
            </p>
            <input
              className={`form__input ${
                errors.password && touched.password && errors.password
                  ? "form__input-error"
                  : ""
              }`}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></input>
            <span className="form__span-error">
              {errors.password && touched.password && errors.password}
            </span>
            <button
              className="form__button"
              type="submit"
              disabled={`${
                (errors.login && touched.login && errors.login) ||
                (errors.password && touched.password && errors.password)
                  ? "disabled"
                  : ""
              }`}
            >
              Войти
            </button>
          </form>
        ) : (
          <form className="form form__search" onSubmit={handleSubmit}>
            <p
              className={`form__title form__title_bold ${
                errors.location && touched.location && errors.location
                  ? "form__title-error"
                  : ""
              }`}
            >
              Локация
            </p>
            <input
              className={`form__input ${
                errors.location && touched.location && errors.location
                  ? "form__input-error"
                  : ""
              }`}
              type="text"
              name="location"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
            ></input>
            <span className="form__span-error">
              {errors.location && touched.location && errors.location}
            </span>
            <p
              className={`form__title form__title_bold ${
                errors.date && touched.date && errors.date
                  ? "form__title-error"
                  : ""
              }`}
            >
              Дата заселения
            </p>
            <input
              className={`form__input ${
                errors.date && touched.date && errors.date
                  ? "form__input-error"
                  : ""
              }`}
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            ></input>
            <span className="form__span-error">
              {errors.date && touched.date && errors.date}
            </span>
            <p
              className={`form__title form__title_bold ${
                errors.days && touched.days && errors.days
                  ? "form__title-error"
                  : ""
              }`}
            >
              Количество дней
            </p>
            <input
              className={`form__input ${
                errors.days && touched.days && errors.days
                  ? "form__input-error"
                  : ""
              }`}
              type="number"
              name="days"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.days}
            ></input>
            <span className="form__span-error">
              {errors.days && touched.days && errors.days}
            </span>
            <button
              className="form__button"
              type="submit"
              disabled={`${
                (errors.location && touched.location && errors.location) ||
                (errors.date && touched.date && errors.date) ||
                (errors.days && touched.days && errors.days)
                  ? "disabled"
                  : ""
              }`}
            >
              Найти
            </button>
          </form>
        )
      }
    </Formik>
  );
}

export default Form;

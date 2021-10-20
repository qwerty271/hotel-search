import React from "react";
import "./Main.css";
import logoutButton from "../../images/exit_button.svg";
import Form from "../Form/Form";
import selected_switch from "../../images/selected_switch.svg";
import unselected_switch from "../../images/unselected_switch.svg";
import Hotel from "../Hotel/Hotel";
import pointer from "../../images/pointer.svg";
import hard_img_1 from "../../images/hard_img_1.png";
import hard_img_2 from "../../images/hard_img_2.png";
import hard_img_3 from "../../images/hard_img_3.png";
import { useDispatch, connect } from "react-redux";
import { getHotelPrice, sortByPrice, sortByStars } from "../Redux/actions";

function Main(props) {
  const [selected, setSelected] = React.useState("");
  const dispatch = useDispatch();
  const month =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const checkIn =
    new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
  const destructureDate = props.dateCalculation(1);

  React.useEffect(() => {
    dispatch(getHotelPrice(checkIn, destructureDate, "Москва", 1));
  }, [dispatch, checkIn, destructureDate]);

  function changeRating() {
    setSelected("price");
    dispatch(sortByPrice());
  }

  function changePrice() {
    setSelected("rating");
    dispatch(sortByStars());
  }

  function numberTranslation(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  return (
    <section className="main">
      <header className="header">
        <h1 className="header__title">Simple Hotel Check</h1>
        <img
          className="header__button"
          onClick={props.logout}
          alt="Выйти"
          src={logoutButton}
        />
      </header>
      <div className="main-content">
        <div className="side-bar">
          <Form formSubmit={props.formSubmit} />
          <div className="favorites">
            <h2 className="favorites__title">Избранное</h2>
            <button
              className={`rating ${
                selected === "rating" ? "rating_selected" : "rating_unselected"
              }`}
              type="button"
              onClick={changePrice}
            >
              Рейтинг{" "}
              <img
                className="rating__img"
                src={
                  selected === "rating" ? selected_switch : unselected_switch
                }
                alt="Выбор"
              />
            </button>
            <button
              className={`rating ${
                selected === "price" ? "rating_selected" : "rating_unselected"
              }`}
              type="button"
              onClick={changeRating}
            >
              Цена{" "}
              <img
                className="rating__img"
                src={selected === "price" ? selected_switch : unselected_switch}
                alt="Выбор"
              />
            </button>
            <div className="favorites-contain">
              {props.data.favorites.length > 0
                ? props.data.favorites.map((hotel) => {
                    return (
                      <div key={hotel.name}>
                        <Hotel
                          type="favorites"
                          date={hotel.date}
                          days={hotel.days}
                          name={hotel.name}
                          price={hotel.price}
                          stars={hotel.stars}
                        />
                        <hr className="line" />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="hotels">
          <div className="hotels__header">
            <h2 className="hotels__title">
              Отели
              <img className="hotels__pointer" src={pointer} alt="стрелка" />
              {props.data.location}
            </h2>
            <p className="hotels__date">{props.data.dateRu}</p>
          </div>
          <div className="slider">
            <div className="slide-track">
              <img className="slide" alt="картинка" src={hard_img_1} />
              <img className="slide" alt="картинка" src={hard_img_2} />
              <img className="slide" alt="картинка" src={hard_img_3} />
              <img className="slide" alt="картинка" src={hard_img_1} />
              <img className="slide" alt="картинка" src={hard_img_2} />
              <img className="slide" alt="картинка" src={hard_img_3} />
              <img className="slide" alt="картинка" src={hard_img_1} />
              <img className="slide" alt="картинка" src={hard_img_2} />
              <img className="slide" alt="картинка" src={hard_img_3} />
            </div>
          </div>
          <p className="hotels_favorites">
            Добавлено в Избранное:{" "}
            <span className="hotels_favorites hotels_favorites_bold">
              {props.data.favorites.length}
            </span>{" "}
            {numberTranslation(props.data.favorites.length, [
              "отель",
              "отеля",
              "отелей",
            ])}
          </p>
          <div className="hotels__contain">
            {props.data.hotels !== null
              ? props.data.hotels.data.map((hotel) => {
                  return (
                    <div key={hotel.hotelId}>
                      <Hotel
                        name={hotel.hotelName}
                        price={hotel.priceFrom}
                        stars={hotel.stars}
                      />
                      <hr className="line" />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps)(Main);

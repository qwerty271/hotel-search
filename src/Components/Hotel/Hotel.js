import React from "react";
import "./Hotel.css";
import active_star from "../../images/active_star.svg";
import inactive_star from "../../images/inactive_star.svg";
import like_active from "../../images/like_active.svg";
import like_inactive from "../../images/like_inactive.svg";
import { useDispatch, connect } from "react-redux";
import { addHotel, deleteHotel } from "../Redux/actions";

function Hotel(props) {
  const [likeState, setLikeState] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (props.data.favorites.find((hotel) => hotel.name === props.name)) {
      setLikeState(true);
    } else {
      setLikeState(false);
    }
  }, [props.data.favorites, props.name]);

  function priceChange() {
    const price = Math.round(props.price).toString().split("");
    let total;
    if (props.price) {
      if (price.length === 4) {
        total = price[0] + " " + price[1] + price[2] + price[3];
      } else if (price.length === 5) {
        total = price[0] + price[1] + " " + price[2] + price[3] + price[4];
      } else if (price.length === 6) {
        total =
          price[0] + price[1] + price[2] + " " + price[3] + price[4] + price[5];
      } else if (price.length === 4) {
        total = props.price;
      }
    }
    return total;
  }

  function addToFavorites() {
    if (props.type !== "favorites") {
      if (!likeState) {
        setLikeState(true);
        dispatch(
          addHotel(
            props.name,
            props.data.dateEn,
            props.data.days,
            priceChange(),
            props.stars
          )
        );
      } else {
        setLikeState(false);
        dispatch(deleteHotel(props.name));
      }
    } else {
      dispatch(deleteHotel(props.name));
    }
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
    <div className="hotel">
      <div
        className={`hotel__img ${
          props.type === "favorites" ? "hotel__img_incative" : ""
        }`}
      />
      <ul className="hotel__list">
        <li className="hotel__item">
          <p className="hotel__name">{props.name}</p>
          <img
            className={`like ${props.type !== "favorites" ? "like_main" : ""}`}
            src={
              props.type === "favorites"
                ? like_active
                : likeState
                ? like_active
                : like_inactive
            }
            alt="Лайк"
            onClick={addToFavorites}
          />
        </li>
        <li className="hotel__item">
          <p className="hotel__date">
            {props.type !== "favorites" ? props.data.dateEn : props.date}{" "}
            <span className="dash">&#8211;</span>{" "}
            {props.type !== "favorites"
              ? props.data.days +
                " " +
                numberTranslation(props.data.days, ["день", "дня", "дней"])
              : props.days +
                " " +
                numberTranslation(props.days, ["день", "дня", "дней"])}
          </p>
        </li>
        <li className="hotel__item">
          <div>
            <img
              className="hotel__star"
              src={props.stars > 0 ? active_star : inactive_star}
              alt="звезда"
            />
            <img
              className="hotel__star"
              src={props.stars > 1 ? active_star : inactive_star}
              alt="звезда"
            />
            <img
              className="hotel__star"
              src={props.stars > 2 ? active_star : inactive_star}
              alt="звезда"
            />
            <img
              className="hotel__star"
              src={props.stars > 3 ? active_star : inactive_star}
              alt="звезда"
            />
            <img
              className="hotel__star"
              src={props.stars > 4 ? active_star : inactive_star}
              alt="звезда"
            />
          </div>
          <p
            className={`hotel__price ${
              props.type !== "favorites" ? "hotel__price_main" : ""
            }`}
          >
            price:{" "}
            <span className="hotel__price-number">
              {props.type !== "favorites" ? priceChange() : props.price}&#8381;
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps)(Hotel);

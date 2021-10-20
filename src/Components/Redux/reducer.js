import {
  GET_HOTEL_PRICE_SUCCESS,
  GET_HOTEL_PRICE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SORT_BY_PRICE,
  SORT_BY_STARS,
} from "../../Components/Redux/types";

const initialState = {
  hotels: null,
  favorites: [],
  dateRu: "",
  dateEn: "",
  location: "",
  days: "",
};

function creationDateRu(date) {
  const newDate = date.split("-");
  let newMonth;
  switch (newDate[1]) {
    case "1":
      newMonth = "Января";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "2":
      newMonth = "Февраля";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "3":
      newMonth = "Марта";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "4":
      newMonth = "Апреля";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "5":
      newMonth = "Мая";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "6":
      newMonth = "Июня";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "7":
      newMonth = "Июля";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "8":
      newMonth = "Августа";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "9":
      newMonth = "Сентября";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "10":
      newMonth = "Октября";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "11":
      newMonth = "Ноября";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    case "12":
      newMonth = "Декабря";
      return newDate[2] + " " + newMonth + " " + newDate[0];
    default:
      return "";
  }
}

function creationDateEn(date) {
  const newDate = date.split("-");
  let newMonth;
  switch (newDate[1]) {
    case "1":
      newMonth = "January";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "2":
      newMonth = "February";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "3":
      newMonth = "March";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "4":
      newMonth = "April";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "5":
      newMonth = "May";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "6":
      newMonth = "June";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "7":
      newMonth = "July";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "8":
      newMonth = "August";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "9":
      newMonth = "September";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "10":
      newMonth = "October";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "11":
      newMonth = "November";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    case "12":
      newMonth = "December";
      return newDate[2] + " " + newMonth + ", " + newDate[0];
    default:
      return "";
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL_PRICE:
      return {
        hotels: state.hotels,
        favorites: state.favorites,
        dateRu: creationDateRu(action.date),
        dateEn: creationDateEn(action.date),
        location: action.location[0].toUpperCase() + action.location.slice(1),
        days: action.daysNumber,
      };
    case GET_HOTEL_PRICE_SUCCESS:
      return {
        hotels: action.data,
        favorites: state.favorites,
        dateRu: state.dateRu,
        dateEn: state.dateEn,
        location: state.location[0].toUpperCase() + state.location.slice(1),
        days: state.days,
      };

    case ADD_TO_FAVORITES:
      return {
        hotels: state.hotels,
        favorites: [
          ...state.favorites,
          {
            name: action.name,
            date: action.date,
            days: action.days,
            price: action.price,
            stars: action.stars,
          },
        ],
        dateRu: state.dateRu,
        dateEn: state.dateEn,
        location: state.location,
        days: state.days,
      };
    case REMOVE_FROM_FAVORITES:
      return {
        hotels: state.hotels,
        favorites: state.favorites.filter(
          (hotel) => hotel.name !== action.name
        ),
        dateRu: state.dateRu,
        dateEn: state.dateEn,
        location: state.location,
        days: state.days,
      };
    case SORT_BY_PRICE:
      return {
        hotels: state.hotels,
        favorites: state.favorites.sort(function (a, b) {
          return (
            Number(a.price.split(" ").join("")) -
            Number(b.price.split(" ").join(""))
          );
        }),
        dateRu: state.dateRu,
        dateEn: state.dateEn,
        location: state.location,
        days: state.days,
      };
    case SORT_BY_STARS:
      return {
        hotels: state.hotels,
        favorites: state.favorites.sort(function (a, b) {
          return b.stars - a.stars;
        }),
        dateRu: state.dateRu,
        dateEn: state.dateEn,
        location: state.location,
        days: state.days,
      };
    default:
      return state;
  }
}

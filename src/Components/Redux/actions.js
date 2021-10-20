import {
  GET_HOTEL_PRICE,
  GET_HOTEL_PRICE_SUCCESS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SORT_BY_STARS,
  SORT_BY_PRICE,
} from "../Redux/types";

export const getHotelPrice = (date, daysDate, location, daysNumber) => {
  return {
    type: GET_HOTEL_PRICE,
    date: date,
    daysDate: daysDate,
    location: location,
    daysNumber: daysNumber,
  };
};

export const getHotelPriceSuccess = (data) => {
  return { type: GET_HOTEL_PRICE_SUCCESS, data: data };
};

export const addHotel = (name, date, days, price, stars) => {
  return {
    type: ADD_TO_FAVORITES,
    name: name,
    date: date,
    days: days,
    price: price,
    stars: stars,
  };
};

export const deleteHotel = (name) => {
  return { type: REMOVE_FROM_FAVORITES, name: name };
};

export const sortByPrice = () => {
  return { type: SORT_BY_PRICE };
};

export const sortByStars = () => {
  return { type: SORT_BY_STARS };
};

import { call, takeLatest, put } from "redux-saga/effects";
import { GET_HOTEL_PRICE } from "../types.js";
import axios from "axios";
import { getHotelPriceSuccess } from "../actions";

function* fetchHotelPrice(action) {
  try {
    const data = yield call(() => {
      return axios
        .get(
          `https://engine.hotellook.com/api/v2/cache.json?location=${action.location}&currency=rub&checkIn=${action.date}&checkOut=${action.daysDate}&limit=15`
        )
        .then((res) => res);
    });
    yield put(getHotelPriceSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* getHotelPriceSaga() {
  yield takeLatest(GET_HOTEL_PRICE, fetchHotelPrice);
}

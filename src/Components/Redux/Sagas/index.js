import { all } from "redux-saga/effects";
import getHotelPriceSaga from "../Sagas/GetHotelPriceSaga";

export default function* rootSaga() {
  yield all([getHotelPriceSaga()]);
}

import { createStore } from "redux";
import productsSlice from "./redux/productsSlice";

const store = createStore(productsSlice.reducer);

export default store;

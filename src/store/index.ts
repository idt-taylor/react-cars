import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./form-store";
import displayReducer from "./display-store";

const store = configureStore({
  reducer: { form: formReducer, display: displayReducer },
});

export default store;

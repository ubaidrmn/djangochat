import React from "react";
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "../../authentication/RegisterScreen";
import Navbar from "../Navbar";
import { rootStyle } from "./styles";

function Root() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={rootStyle}>
          <Navbar />
          <Routes>
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;

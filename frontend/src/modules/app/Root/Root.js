import React from "react";
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "../../authentication/RegisterScreen";
import { rootStyle } from "./styles";
import Sidebar from "../Sidebar/Sidebar";
import ChatScreen from "../../chat/ChatScreen/ChatScreen";

function Root() {

  const SidebarScreenWrapper = props => {
    return <div style={rootStyle}>
      <Sidebar />
      {props.children}
    </div>
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<SidebarScreenWrapper><ChatScreen /></SidebarScreenWrapper>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;

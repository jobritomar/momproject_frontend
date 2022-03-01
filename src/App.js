import React from "react";
import "./App.css";
import { AppRouter } from "./router";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;

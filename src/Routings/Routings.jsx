import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import FormikForm from "../LearnFormik/FormikForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar></NavBar>}></Route>
        <Route path="/create" element={<FormikForm></FormikForm>}></Route>
      </Routes>
    </Router>
  );
};

export default App;

// import { Route, Routes } from "react-router-dom";
// import Compopasser from "./Component/Compopasser";
// import RoutingCompo from "./Component/RoutingCompo";
// import Home from "./Header/Home";
// import About from "./Header/About";
// import Contact from "./Header/Contact";
// import NavBar from "./NavBar/NavBar.jsx";
// import Services from "./Header/Services";
// import More from "./Header/More";
// import DrawerLeft from "./Header/DrawerLeft";
// import QuizApp from "./Quiz/QuizApp";
// import Practise1 from "./Quiz/Practise1";
// import NewsArticle from "./Article/NewsArticle";
// import NepaliDate from "nepali-date-converter";
// import { useState } from "react";
// import TextToSpeak from "./Component/TexttoSpeak";

// import NewNewsArticle from "./Article/NewNewsArticle";
import Calculator from "./Calculator.js/Calculator";
// import Forms from "./Form/Forms";
// import FormPractise from "./Form/FormPractise";

function App() {
  //   const [date, setDate] = useState(new Date());
  //   const [convertedDate, setConvertedDate] = useState("");
  //   // let date1 = new NepaliDate(2054, 5, 24);
  //   const handleDateConverter = () => {
  //     let engDate = new Date(date);
  //     let date1 = new NepaliDate(
  //       new Date(engDate.getFullYear(), engDate.getMonth(), engDate.getDate())
  //     );
  //     setConvertedDate(date1);
  //   };
  return (
    <div>
      {/* <QuizApp></QuizApp> */}
      {/* <Practise1></Practise1> */}
      {/* <Practise1></Practise1> */}
      {/* <NewsArticle></NewsArticle> */}
      {/* <NewNewsArticle></NewNewsArticle> */}
      {/* <FormPractise></FormPractise> */}
      {/* <Forms></Forms> */}
      <Calculator></Calculator>
      {/* <Practise></Practise> */}
      {/* <Routes> */}
      {/* <Route path="/" exact element={<NavBar />}></Route> */}
      {/* <Route path="/" exact element={<QuizApp />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/services" element={<Services />}></Route>

        <Route exact path="/more" element={<More />}></Route>
      </Routes> */}
      {/* <DrawerLeft></DrawerLeft> */}
      {/* <Compopasser></Compopasser> */}
      {/* <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <button onClick={handleDateConverter}>Convert</button>
      {convertedDate.toLocaleString()} */}
      {/* <TextToSpeak></TextToSpeak> */}
    </div>
  );
}

export default App;

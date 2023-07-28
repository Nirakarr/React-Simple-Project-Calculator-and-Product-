import Productss from "./Products/Productss.js";

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
      <Productss></Productss>
      {/* <Routes> */}
      {/* <Route path="/" exact element={<NavBar />}></Route>
      
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/services" element={<Services />}></Route>

        <Route exact path="/more" element={<More />}></Route>
      </Routes>
      {/* <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <button onClick={handleDateConverter}>Convert</button>
      {convertedDate.toLocaleString()} */}
    </div>
  );
}

export default App;

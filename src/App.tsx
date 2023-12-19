import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import "./App.css";
import TopPage from "./components/TopPage";
import MidPage from "./components/MidPage";
import BottSelect from "./components/BottSelect";
import axios from "axios";

function App() {
  const [timings, setTimings] = useState({
    Fajr: "05:08",
    Dhuhr: "11:48",
    Asr: "14:37",
    Maghrib: "16:55",
    Isha: "18:25",
  });
  const [city, setCity] = useState({
    displayName: "القاهرة",
    apiName: "Cairo",
  });

  const getTimings = async () => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${city.apiName}&country=Egypt&method=8`
    );
    console.log(response);
    setTimings(response.data.data.timings);
  };
  useEffect(() => {
    getTimings();
  }, [city]);
  
  return (
    <>
      <div className="app">
        <Container maxWidth={"xl"}>
          <TopPage displayName={city.displayName} />
          <Divider
            variant="middle"
            style={{ borderColor: "whitesmoke", opacity: "0.5" }}
          />
          <MidPage timings={timings} />
          <BottSelect setCity={setCity} />
        </Container>
      </div>
    </>
  );
}

export default App;

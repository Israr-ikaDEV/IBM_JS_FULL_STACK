import { useState } from "react";
import "./App.css";
import CustomHookComponent from "./CustomHookComponent";
import AdviseComponent from "./AdviseComponent";
import ActivityComponent from "./ActivityComponent";
import CatFactComponent from "./CatFactComponent";
import ProgrammingJokeComponent from "./ProgrammingJokeComponent";
import KanyeWestComponent from "./kanyeWestComponent";

function App() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>API Demo Page</h1>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setActive("advice")}>Show Advice API</button>
        <button onClick={() => setActive("json")}>Show JSON Placeholder</button>
        <button onClick={() => setActive("activity")}>Show Bored API</button>
        <button onClick={() => setActive("cat")}>Show Cat Fact API</button>
        <button onClick={() => setActive("joke")}>Show Programming Joke API</button>
        <button onClick={() => setActive("kanye")}>Show Kanye Quote API</button>
      </div>

      <hr />

      <h2>API Result</h2>
      <div style={{ padding: "10px", border: "1px solid #ccc" }}>
        {active === "advice" && <AdviseComponent />}
        {active === "json" && <CustomHookComponent />}
        {active === "activity" && <ActivityComponent />}
        {active === "cat" && <CatFactComponent />}
        {active === "joke" && <ProgrammingJokeComponent />}
        {active === "kanye" && <KanyeWestComponent />}
        {!active && <p>Click a button to show API data</p>}
      </div>
    </div>
  );
}

export default App;

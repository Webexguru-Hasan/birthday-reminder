import { useState } from "react";
import "./App.css";
import BirthData from "./Component/BirthData";
import BirthList from "./Component/BirthList";

function App() {
  const [peoples, setPeoples] = useState(BirthData);
  return (
    <>
      <main>
        <section className="container">
          <h3>{peoples.length} birthdays today</h3>
          <BirthList peoples={peoples} />
          <button onClick={() => setPeoples([])}>clear all</button>
        </section>
      </main>
    </>
  );
}

export default App;

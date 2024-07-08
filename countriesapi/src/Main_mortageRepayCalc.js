import React, { useState } from "react";
import MortgageComp from "./mortgage/scripts/mortgageComp";
import ResultComp from "./mortgage/scripts/resultComp";
import "./mortgage/css/main.css";
export default function Main_mortageRepayCalc() {
  let [monthlyAndYears, setmonthlyAndYears] = useState([0, 0]);
  let [mortType, setmortType] = useState("");
  return (
    <div className="mainHolder">
      <MortgageComp
        setmonthlyAndYears={setmonthlyAndYears}
        setmortType={setmortType}
      ></MortgageComp>
      <ResultComp
        monthlyAndYears={monthlyAndYears}
        mortType={mortType}
      ></ResultComp>
    </div>
  );
}

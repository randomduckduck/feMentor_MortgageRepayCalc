import React, { useState } from "react";

export default function MortgageComp({ setmonthlyAndYears, setmortType }) {
  let [mortAmount, setmortAmount] = useState("");
  let [mortTerm, setmortTerm] = useState("");
  let [intRate, setintRate] = useState("");
  function getValuesObj(formElem) {
    //values for calculation
    let formDataObj = new FormData(formElem);
    let itr = formDataObj.values();
    let finalFormObj = {};
    for (itr of formDataObj) {
      finalFormObj[itr[0]] = itr[1];
    }
    return finalFormObj;
  }
  window.getValuesObj = getValuesObj;
  function calculateMonthly(finalFormObj) {
    let n = 12,
      P = parseFloat(finalFormObj.mortAmount),
      r = parseFloat(finalFormObj.intRate),
      t = parseFloat(finalFormObj.mortTerm);
    let res5 = P;
    res5 = res5 * (r / 1200);
    res5 = res5 * (1 + r / 1200) ** (t * 12);
    res5 = res5 / ((1 + r / 1200) ** (t * 12) - 1);
    console.log(res5);
    // return res5;
    setmonthlyAndYears([res5, t]);
  }
  function checkValidity(elems) {
    // let elems = e.target.elements;
    //validity check//Also show error and return bool - false if all inputs not valid
    let allValid = true;
    for (let elem of elems) {
      console.log(elem);
      if (elem.matches("input")) {
        let validity = elem.validity.valid;
        console.log("valid:", elem.validity.valid);
        if (validity == false) {
          allValid = false;
          //show error for this element
          let errorHolder = elem.closest(".indpSection");
          errorHolder.classList.add("errorShow");
        }
      }
    }
    return allValid;
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submit happened, e:", e);
    let allValid = checkValidity(e.target.elements);
    if (allValid == false) {
      return;
    }
    let finalformObj = getValuesObj(e.target);
    console.log(finalformObj);
    calculateMonthly(finalformObj);
  }
  function handleInput(stateSetterFunc, e) {
    let value = e.target.value;
    if (e.target.validity.valid) {
      //remove error
      console.log("remove error if applied");
      let errorHolder = e.target.closest(".indpSection");
      errorHolder.classList.remove("errorShow");
    } else {
      console.log("nt valid");
      let errorHolder = e.target.closest(".indpSection");
      errorHolder.classList.add("errorShow");
    }
    stateSetterFunc(value);
  }
  function handleFormReset() {
    let formElem = document.querySelector(".mortgageForm");
    formElem.querySelectorAll(".indpSection").forEach((elem) => {
      elem.classList.remove("errorShow");
    });
    setmortAmount("");
    setmortTerm("");
    setintRate("");
    setmortType("");
  }
  return (
    <div className="formHolder">
      <form
        className="mortgageForm"
        action=""
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="titleSection">
          <span className="mortTitle">Mortgage Calculator</span>
          <button type="reset" onClick={handleFormReset}>
            Clear All
          </button>
        </div>
        <div className="mortAmountSection indpSection ">
          <label className="sectionTitle" htmlFor="mortAmount">
            Mortgage Amount
          </label>
          <input
            type="number"
            id="mortAmount"
            name="mortAmount"
            value={mortAmount}
            onInput={(e) => handleInput(setmortAmount, e)}
            required
          ></input>
          <div className="errorField">This field is required</div>
        </div>
        <div className="midsection">
          <div className="mortTermSection indpSection ">
            <label className="sectionTitle" htmlFor="mortTerm">
              Mortgage Term
            </label>
            <input
              type="number"
              id="mortTerm"
              name="mortTerm"
              value={mortTerm}
              onInput={(e) => handleInput(setmortTerm, e)}
              required
            ></input>
            <div className="errorField">This field is required</div>
          </div>
          <div className="intrateSection indpSection ">
            <label className="sectionTitle" htmlFor="intRate">
              Interest Rate
            </label>
            <input
              type="number"
              id="intRate"
              name="intRate"
              value={intRate}
              onInput={(e) => handleInput(setintRate, e)}
              required
            />
            <div className="errorField">This field is required</div>
          </div>
        </div>
        <div className="mortTypeSection indpSection ">
          <span className="mortTypeTitle sectionTitle">Mortgage Type</span>
          <div>
            <label htmlFor="mortType-repay">
              <input
                type="radio"
                name="mortType"
                id="mortType-repay"
                value="repay"
                onClick={(e) => handleInput(setmortType, e)}
                required
              />
              Repayment
            </label>
          </div>
          <div>
            <label htmlFor="mortType-intOnly">
              <input
                type="radio"
                name="mortType"
                id="mortType-intOnly"
                value="intOnly"
                onClick={(e) => handleInput(setmortType, e)}
                required
              />
              Interest Only
            </label>
          </div>
          <div className="errorField">This field is required</div>
        </div>
        <div className="calcBtnsection">
          <button className="calcBtn" type="submit">
            Calculate repayments
          </button>
        </div>
      </form>
    </div>
  );
}

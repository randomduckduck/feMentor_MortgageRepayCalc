import React from "react";

export default function ResultComp({ monthlyAndYears, mortType }) {
  let monthvalue = monthlyAndYears[0];
  let totalrepayvalue = monthvalue * 12 * monthlyAndYears[1];
  return (
    <div className="resultHolder">
      {monthvalue == 0 ? (
        <div>
          <p className="emptyResultTitle">Results shown here</p>

          <p className="emptyResultDetail">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div>
          <p className="resultTitle">Your results</p>
          <p className="resultDetail">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="resultSection">
            <div className="resultMonthpay">
              <p className="monthpaytitle">Your monthly repayments</p>
              <p className="monthPayResult">{monthvalue}</p>
            </div>
            <br />
            <div className="totalrepaysection">
              <p className="totalrepaytitle">
                Total you'll repay over the term
              </p>
              <p className="totalrepayvalue">{totalrepayvalue}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

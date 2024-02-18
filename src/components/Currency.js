import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  return (
    <div
      className="alert alert-success"
      style={{ backgroundColor: "lightgreen", color: "white" }}
    >
      Currency:
      {
        <select
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
          style={{
            backgroundColor: "lightgreen",
            color: "white",
            border: "none",
          }}
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
        </select>
      }
    </div>
  );
};

export default Currency;

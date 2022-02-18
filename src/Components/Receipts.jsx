import React, { useState } from "react";

const Receipts = ({ setMeal }) => {
  return (
    <div>
      <form action="">
        <input
          type="radio"
          id="food1"
          value="Самсы"
          name="meal"
          onClick={(event) => setMeal(event.target.value)}
        />
        <label htmlFor="food1">Самсы</label>
        <input
          type="radio"
          id="food2"
          value="Шашлык"
          name="meal"
          onClick={(event) => setMeal(event.target.value)}
        />
        <label htmlFor="food2">Шашлык</label>
        <input
          type="radio"
          id="food3"
          value="Манты"
          name="meal"
          onClick={(event) => setMeal(event.target.value)}
        />
        <label htmlFor="food3">Манты</label>
      </form>
    </div>
  );
};

export default Receipts;

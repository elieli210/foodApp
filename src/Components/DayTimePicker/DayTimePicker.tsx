// React
import  { useState } from "react";
// React
// CSS
import styles from "./DayTimePicker.module.css";
// CSS
// Models
// Models

const DayTimePicker = () => {
  const [selectedDay, setSelectedDay] = useState<"today" | "tomarrow">("today");
  return (
    <div className="w-full py-4 ">
      <div className={`${styles.daySelector} w-full flex flex-row-reverse`}>
        <button
          className={`${styles.today} ${
            selectedDay === "today" ? styles.selectedDay : null
          } w-1/2 pb-4`}
          onClick={() => {
            setSelectedDay("today");
          }}
        >
          امروز
        </button>
        <button
          className={`${styles.tomarrow} 
        ${selectedDay === "tomarrow" ? styles.selectedDay : null} w-1/2`}
          onClick={() => {
            setSelectedDay("tomarrow");
          }}
        >
          فردا
        </button>
      </div>
    </div>
  );
};

export default DayTimePicker;

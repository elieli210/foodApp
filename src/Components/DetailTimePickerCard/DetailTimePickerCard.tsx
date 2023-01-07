// React
import React from "react";
// React
// CSS
import "./DetailTimePickerCard.css";
// CSS
// Models
import { I_sendTime } from "../../Models/interfaces";
// Models

type DetailTimePickerCardProps = {
  data: I_sendTime;
  setCurrentSendTime: React.Dispatch<React.SetStateAction<I_sendTime>>;
  currentSendTime: I_sendTime;
};

const DetailTimePickerCard: React.FunctionComponent<
  DetailTimePickerCardProps
> = ({ data: { end, price, start }, currentSendTime, setCurrentSendTime }) => {
  return (
    <div
      className="flex flex-row-reverse mt-6 first-of-type:mt-4 cursor-pointer"
      onClick={() => {
        setCurrentSendTime({
          start,
          end,
          price,
        });
      }}
    >
      <input
        type="radio"
        onChange={() => {}}
        checked={
          JSON.stringify(currentSendTime) ===
          JSON.stringify({
            start,
            end,
            price,
          })
        }
      />
      <span className="mr-4 text-sm">
        {start} - {end}
      </span>
      <span className="mr-3 text-xs flex justify-center items-center">
        {price !== 0 ? (
          <>
            <span className="text-xs p-1">تومان</span>
            <span className="text-xs">
              {" "}
              {`${price}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </>
        ) : (
          price === 0 && "رایگان"
        )}
      </span>
    </div>
  );
};

export default DetailTimePickerCard;

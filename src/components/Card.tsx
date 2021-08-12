import React from "react";
import { CardProps } from "../types";

function Card(props: CardProps) {
  console.log(props.total);
  return (
    <div className="shadow-sm p-5 rounded bg-white">
      <div className="flex gap-5">
        <div className="block w-1/2">
          <h1 className="block font-bold text-lg">{props.total}</h1>
          <h2 className="text-gray-500 text-sm lg:my-3">{props.title}</h2>
        </div>
        <div className="w-1/2">
          <div
            className={
              "p-4 rounded-full card-circle float-right " +
              `bg-[${props.bgColor}]`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function Card(props: any) {
  return (
    <div className="shadow p-5 rounded bg-white">
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
                d="M16.5 13.202L13 15.535v3.596L19.197 15 16.5 13.202zM14.697 12L12 10.202 9.303 12 12 13.798 14.697 12zM20 10.869L18.303 12 20 13.131V10.87zM19.197 9L13 4.869v3.596l3.5 2.333L19.197 9zM7.5 10.798L11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15L11 19.131v-3.596l-3.5-2.333L4.803 15zM4 13.131L5.697 12 4 10.869v2.262zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15V9z"
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

import { useCallback, useState } from "react";
import type { Route } from "./+types/home";
import me from "~/images/me.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [on, setOn] = useState(true);
  const toggle = useCallback(() => setOn((prev) => !prev), []);

  return (
    <div className="flex flex-col-reverse items-stretch h-full z-10">
      <div className="bg-emerald-400 flex-grow flex z-0">
        <div
          className={`w-full flex align-center justify-center relative transition-all ease-in-out duration-500 ${
            on ? "p-8 " : "p-2 delay-1000"
          }`}
        >
          <h1
            style={{
              // lineHeight: "32px",
              marginBlockStart: "0",
              marginBlockEnd: "0",
            }}
            className={`w-full ${
              on ? "text-5xl" : "text-2xl delay-1000"
            } text-white font-semibold flex transition-all ease-in-out duration-500`}
            onClick={toggle}
          >
            <div className="grow text-right" style={{ lineHeight: "32px" }}>
              Russell
            </div>
            <div
              style={{ lineHeight: "32px" }}
              className={
                on
                  ? "w-4 transition-all ease-in-out duration-1000 delay-500"
                  : "w-32 transition-all ease-in-out duration-1000"
              }
            />
            <div className="grow text-left" style={{ lineHeight: "32px" }}>
              Dunphy
            </div>
          </h1>
        </div>
      </div>
      <div
        className={
          on
            ? "z-100 bg-pink-500 h-1/2 flex items-center transition-all ease-in-out duration-1000 p-2 delay-500"
            : "z-100 bg-pink-500 h-24 flex items-start transition-all ease-in-out duration-1000 delay-500 p-2"
        }
      >
        <div
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            zIndex: "1000",
          }}
          className={
            on
              ? "rounded-full size-72 border-8 border-white my-auto transition-all ease-in-out duration-1000 delay-1000 mx-auto"
              : "rounded-full size-32 border-8 border-white my-auto transition-all ease-in-out duration-1000 mx-auto"
          }
        />
      </div>
    </div>
  );
}

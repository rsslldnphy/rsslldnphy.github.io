import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import me from "~/images/me.jpg";

const NavLink = ({
  to,
  label,
  prefix = to,
}: {
  to: string;
  label: string;
  prefix?: string;
}) => {
  const location = useLocation();
  return (
    <Link
      className={
        location.pathname.startsWith(prefix) || location.pathname === to
          ? "border-b-2 pb-1 font-bold text-white"
          : "border-b-2 pb-1"
      }
      to={to}
    >
      {label}
    </Link>
  );
};

export const Chrome = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const on = location.pathname.split("/").length <= 2;
  console.log("pathname", location.pathname);

  return (
    <div className="flex flex-col-reverse min-h-full z-10">
      <div className="bg-emerald-400 flex-grow flex z-0 flex-col">
        <div
          className={`w-full gap-4 flex flex-col transition-all ease-in-out duration-500 ${
            on ? "p-8 " : "p-2 delay-1000"
          }`}
        >
          <h1
            style={{
              lineHeight: "32px",
              marginBlockStart: "0",
              marginBlockEnd: "0",
            }}
            className={`w-full ${
              on ? "text-5xl" : "text-2xl delay-500"
            } text-white font-semibold flex transition-all ease-in-out duration-500`}
          >
            <div className="grow text-right" style={{ lineHeight: "32px" }}>
              Russell
            </div>
            <div
              style={{ lineHeight: "32px" }}
              className={
                on
                  ? "w-4 transition-all ease-in-out duration-1000 delay-1000"
                  : "w-32 transition-all ease-in-out duration-1000"
              }
            />
            <div className="grow text-left" style={{ lineHeight: "32px" }}>
              Dunphy
            </div>
          </h1>
          <nav className="w-full mt-4 mb-8">
            <ul className="flex flex-row justify-center gap-3 text-neutral-200 font-semibold">
              <li>
                <NavLink to="/" label="Blog" prefix="/blog" />
              </li>
              <li>
                <NavLink to="/pictures" label="Pictures" />
              </li>
              <li>
                <NavLink to="/stories" label="Stories" />
              </li>
            </ul>
          </nav>
          {children}
        </div>
        <div className="mx-auto text-white mb-8 flex-grow flex items-end">
          © Copyright Russell Dunphy {new Date().getFullYear()}
        </div>
      </div>
      <div
        className={`
         shrink-0 z-100 bg-pink-500 duration-1000 ease-in-out transition-all flex p-2 relative ${
           on ? "h-80 p-2 delay-500" : "h-24 flex delay-1000"
         }`}
      >
        <Link
          to="/"
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
};

import type { Route } from "./+types/home";
import me from "~/images/me.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="bg-pink-500 p-4">
        <div
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-full size-72 border-8 border-white mx-auto"
        />
      </div>
      <div className="bg-emerald-400 p-4">
        <div className="w-full flex align-center justify-center">
          <h1 className="mx-auto text-3xl text-white uppercase font-semibold">
            Russell Dunphy
          </h1>
        </div>
      </div>
    </div>
  );
}

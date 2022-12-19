import { Ampersand } from "../ampersand/Ampersand";
import { Beautiful } from "../beautiful/Beautiful";
import "./greeting.css";

export const Greeting = () => {
  return (
    <div className="greeting">
      <Ampersand />

      <Beautiful />
    </div>
  );
};

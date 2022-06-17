import { useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("https://universities.hipolabs.com/search?country=sri+lanka", {
        accept: "application/json"
      })
      .then((response) => {
        console.log("result", response);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  return (
    <div className="App">
      <p>Dashboard page</p>
    </div>
  );
}

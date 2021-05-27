import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";
console.log("connected");

const query = async function () {
  try {
    const response = await fetch("http://numbersapi.com/1..50");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();

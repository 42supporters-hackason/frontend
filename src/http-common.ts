import axios from "axios";

export default axios.create({
  baseURL: "https://peerprogramming.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});

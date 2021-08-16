import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

const response = axios.get(url);
response.then((res) => {
  console.log(res.data);
});

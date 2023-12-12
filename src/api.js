import axios from "axios";

export default axios.create({
    baseURL: "https://api-amigo-secreto-e3987cc391dd.herokuapp.com",
    // baseURL: "http://localhost:2023",
    headers: {
        "Content-Type": "application/json",
    },
});

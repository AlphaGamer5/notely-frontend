const axios = require("axios");

const getData = async () => {
    const res = await axios.get("http://localhost:8000/notes/")
    console.log(res.data);
}

getData();

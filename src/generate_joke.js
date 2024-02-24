import axios from "axios";

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const data = await axios.get("url", config);
    const jokeDiv = document.getElementById("joke");
    jokeDiv.innerText = data.data.joke;
}

export default generateJoke;

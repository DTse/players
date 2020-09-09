import { PlayersTable } from "./components/PlayersTable";
import "./styles/normalize.css";
import "./styles/index.css";

function app() {
    let players = require("../public/data.json");

    /* Select the root div */
    var root = document.querySelector("#root");

    /* Append the tables to the root div - TODO: create a better way to insert elements */
    root.innerHTML = PlayersTable(players.badPlayers, "badPlayers") + PlayersTable(players.goodPlayers, "goodPlayers");
}

app();

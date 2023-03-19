import * as flsFunctions from "./modules/functions.js";
import { getRepos } from "./modules/getRepos.js";
import { addEventForm } from "./modules/getRepos.js";

window.onload = e => {
    flsFunctions.isWebp();
    // getRepos();
    addEventForm();
}
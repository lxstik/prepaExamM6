import {module1} from "./modules/module1.js";
import {module2} from "./modules/module2.js";

function base(){
    return `
        <h1>Esta es la función base</h1>
        ${module1()}
    `   
}

document.querySelector('#selector').innerHTML = base()

document.querySelector('#selector').innerHTML += module2()
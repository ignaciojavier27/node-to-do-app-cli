import { createInterface } from 'readline';
import chalk from "chalk";

const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

const displayMenu = () => {
    console.log(chalk.redBright.bold("👺👺 [ TO DO -- CLI ] 👺👺"));
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Salir");
}

const chooseOption = () => {
    rl.question("Ingresa una opción: ", (choice) => {
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                console.log("Listando tareas");
                break
            case "3":
                console.log("Completando tarea");
                break
            case "4":
                console.log(chalk.yellow("Saliendo"));
                rl.close();
                break
            default:
                console.log(chalk.red("Opción incorrecta \n"));
                displayMenu();
                chooseOption();
                break
        }
    })
}

const addTask = () => {
    rl.question("Escribe la tarea: ", (task) => {
        tasks.push(task);
        console.log(chalk.bgWhite.black("  TAREA AGREGADA  "));
    })
}

const main = () => {

    displayMenu();
    chooseOption();

}

main();



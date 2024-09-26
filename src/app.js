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
                listTasks();
                break
            case "3":
                completeTask();
                break
            case "4":
                console.log(chalk.yellow("Saliendo"));
                rl.close();
                break
            default:
                console.log(chalk.red("Opción incorrecta \n"));
                displayInfo();
                break
        }
    })
}

const displayInfo = () => {
    displayMenu();
    chooseOption();
}

const addTask = (tasks) => {
    console.clear();
    rl.question(chalk.bgBlack.white.bold("👉 Escribe la tarea: "), (task) => {
        tasks.push({
            task,
            completed: false
        });
        console.log(chalk.bgWhite.black.bold("✔️ TAREA AGREGADA \n"));
        displayInfo();
    });
}


const listTasks = () => {

    console.clear();
    console.log(chalk.redBright.bold("👺👺 [ LISTA DE TAREAS ] 👺👺 \n"))

    if(tasks.length === 0) {
        console.log("No hay tareas registradas 😁 \n");
        displayInfo();
    }else{        
        tasks.forEach((task, index) => {
            const status = task.completed 
                            ? chalk.bgGreen("✔️")
                            : chalk.bgRed("✘");
            console.log(`${index + 1}. ${status} ${task.task} \n`);
        })
    }
    displayInfo();
    
}

const completeTask = () => {
    rl.question(chalk.bgBlack.white.bold("👉 Escribe el número de la tarea: "), (numero) => {
        const index = parseInt(numero) - 1;
        if(index > tasks.length || index < 0) {
            console.log(chalk.red("INGRESA UN NÚMERO VÁLIDO \n"));
            displayInfo();
        }else if(tasks[index].completed){
            console.log(chalk.red("TAREA YA COMPLETADA \n"));
            displayInfo();
        }else{
            tasks[index].completed = true;
            console.log(chalk.green(`Tarea: ${tasks[index].task} completada \n`));
            displayInfo()
            ;
        }
        
    })
}


const main = () => {

    displayMenu();
    chooseOption();

}

main();



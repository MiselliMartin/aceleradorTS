class Task {
    constructor (id, title, description, dueDate, priority) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

class gestorTasks {
    constructor(initialTasks) {
        this.tasks = initialTasks
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }

    listTasks() {
        this.tasks.forEach(task => {
            console.log(`Título: ${task.title} \nDescription: ${task.description} \nPrioridad: ${task.priority} \nVence el: ${task.dueDate}\n**************************************\n`);
        });
    }
}

const initialTasks = [
    { id: 1, title: "Completar informe", description: "Finalizar informe trimestral", dueDate: "2024-03-15", priority: 2 },
    { id: 2, title: "Reunión con cliente", description: "Presentar propuesta de proyecto", dueDate: "2024-03-10", priority: 1 },
    { id: 3, title: "Actualizar software", description: "Instalar últimas actualizaciones", dueDate: "2024-03-20", priority: 3 }
  ];

  const initialTasksMadeActualTask = initialTasks.map((task) => new Task(task.id, task.title, task.description, task.dueDate, task.priority))

  reproductor = new gestorTasks(initialTasksMadeActualTask)

  const terminarLosEjercicios = new Task(4, "Terminar los ejercicios", "Hacer los ejercicios (?", "2024-10-10", 1)

  reproductor.addTask(terminarLosEjercicios)

  reproductor.listTasks()

  reproductor.removeTask(2)

  reproductor.sortByPriority()

  reproductor.listTasks()
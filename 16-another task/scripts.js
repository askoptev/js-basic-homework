const ToDoList = {
  tasks: [],
  lastId: 0,
  addTask(order = 0, name = "") {
    order = order < 0 ? 0 : order > 5 ? 5 : order;
    const id = ++this.lastId;
    this.tasks.push({
      id,
      order,
      name,
    });
    return this.tasks.at(-1);
  },
  updateTask(id, name, order) {
    const task = this.tasks.find((f) => f.id === id);
    if (!task) {
      console.log("Задача не найдена");
      return;
    }
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        order = order < 0 ? 0 : order > 5 ? 5 : order;
        item.order = order ? order : item.order;
      }
      return item;
    });
    return this.tasks.filter((item) => item.id === id);
  },
  deleteTask(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    return this.tasks;
  },
  sortTasks(id, order) {
    switch (true) {
      case id === -1:
        return this.tasks.sort((a, b) => b.id - a.id);
      case order === 1:
        return this.tasks.sort((a, b) => a.order - b.order);
      case order === -1:
        return this.tasks.sort((a, b) => b.order - a.order);
      default:
        return this.tasks.sort();
    }
  },
};

const newTask = {
  tasks: [],
  lastId: 0,
}

newTask.addTask = function(order = 0, name = "", description="") {
  const task = ToDoList.addTask.call(this, order, name);
  this.tasks.map(item => {
    if (item.id === task.id) {
      item.description = description;
    }
  })  
  return this.tasks.at(-1);
};

newTask.updateTask = function(id, order, name, description) {
  ToDoList.updateTask.call(this, id, order, name);
  const task = this.tasks.find((f) => f.id === id);
  if (!task) {
    console.log("Задача не найдена");
    return;
  }
  this.tasks.map((item) => {
    if (item.id === id) {
      item.description = description ? description : item.description;
    }
  });
  return this.tasks.filter((item) => item.id === id);
};

console.log(newTask.addTask(order=6, name="newName-1", description="newDesc-1"));
console.log(newTask.addTask(order=6, name="newName-2", description="newDesc-2"));
console.log(newTask.addTask(order=6, name="newName-3", description="newDesc-3"));
console.log(newTask.updateTask(id=2, name="updateName-2", order=1, description='updateDesc-2'));
console.log(ToDoList.deleteTask.call(newTask, id = 1));
console.log(ToDoList.sortTasks.call(newTask, id = 0, order=-1));

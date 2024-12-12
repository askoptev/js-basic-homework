const ToDoList = {
  tasks: [],
  addTask(order = 0, name = "") {
    order = order < 0 ? 0 : order > 5 ? 5 : order;
    this.tasks.push({
      id: this.tasks.length + 1,
      order: order,
      name: name,
    });
    return this.tasks.at(-1);
  },
  deleteTask(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    return this.tasks;
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


const newTasks = {
  tasks: [],
  lastId: 0,
  addTask(order = 0, name = "", description = "") {
    order = order < 0 ? 0 : order > 5 ? 5 : order;
    const id = ++this.lastId;
    this.tasks.push({
      id,
      order,
      name,
      description,
    });
    return this.tasks.at(-1);
  },
  updateTask(id, name, order, description) {
    const task = this.tasks.find((f) => f.id === id);
    if (!task) {
      console.log("Задача не найдена");
      return;
    }
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.description = description ? description : item.description;
        order = order < 0 ? 0 : order > 5 ? 5 : order;
        item.order = order ? order : item.order;
      }
      return item;
    });
    return this.tasks.filter((item) => item.id === id);
  },
};



newTasks.deleteTask = ToDoList.deleteTask;
newTasks.sortTasks = ToDoList.sortTasks;

console.log(newTasks.addTask(order=6, name="newOne", description="newDesc"));
console.log(newTasks.addTask(order=2, name="newTwo"));
console.log(newTasks.addTask(order=2, name="newThree"));
console.log(newTasks.deleteTask((id = 1)));
console.log(newTasks.updateTask(id=2, name="updateTwo", order=1, description='update'));
console.log(newTasks.sortTasks(id = 0, order=-1));

const ToDoList = {
  tasks: [],
  addTask(priority=0, title='') {
    priority = priority < 0 ? 0 : priority > 5 ? 5 : priority;
    this.tasks.push({
      id: this.tasks.length + 1,
      priority: priority,
      title: title 
    });
    return this.tasks.at(-1);
  },
  deleteTask(id) {
    this.tasks = this.tasks.filter(item => item.id !== id);
    return this.tasks;
  },
  updateTask(id, title, priority) {
    this.tasks = this.tasks.map(item => {
      if (item.id === id) {
        item.title = title ? title : item.title;
        priority = priority < 0 ? 0 : priority > 5 ? 5 : priority;
        item.priority = priority ? priority : item.priority;
      }
      return item;
    })       
    return this.tasks.filter(item => item.id === id);

  },
  sortTasks(id, priority) {
    switch (true) {
      case id === -1:        
        return this.tasks.sort((a, b) => b.id - a.id);
      case priority === 1: 
        return this.tasks.sort((a, b) => a.priority - b.priority);
      case priority === -1:
        return this.tasks.sort((a, b) => b.priority - a.priority);
      default:
        return this.tasks.sort();
    }

  }
}


console.log(ToDoList.addTask(priority=6, title="one"));
console.log(ToDoList.addTask(priority=-1, title="two"));
console.log(ToDoList.addTask(priority=2, title = "three"));
console.log(ToDoList.addTask(priority=3, title = "four"));
console.log(ToDoList.deleteTask(id=3));
console.log(ToDoList.updateTask(id=1, title='ee', priority=1));
console.log(ToDoList.sortTasks(id=-1));
console.log(ToDoList.sortTasks(priority=1));
console.log(ToDoList.sortTasks(id=1));
console.log(ToDoList.sortTasks(id=-1));
console.log(ToDoList.sortTasks(id=0, priority=1));
console.log(ToDoList.sortTasks(id=0, priority=-1));


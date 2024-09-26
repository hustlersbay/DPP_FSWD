// Task constructor function
function Task(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.subTasks = [];
}

// Prototype method using 'this'
Task.prototype.markComplete = function() {
    this.completed = true;
    console.log(`Task "${this.title}" is now completed.`);
};

// Method to add subtask (using regular function for proper 'this' binding)
Task.prototype.createSubTask = function(subTaskTitle) {
    const subTask = new Task(subTaskTitle, "");
    this.subTasks.push(subTask);
    console.log(`Subtask "${subTaskTitle}" has been added to "${this.title}".`);
};

// TaskManager constructor function
function TaskManager() {
    this.taskList = [];
}

// Method to add a task
TaskManager.prototype.insertTask = function(title, description) {
    const newTask = new Task(title, description);
    this.taskList.push(newTask);
    console.log(`Task "${title}" has been created.`);
    return newTask;
};

// Anonymous function for event handling (simulated)
TaskManager.prototype.notifyTaskCompletion = function(taskTitle) {
    setTimeout(function() {
        console.log(`Notification: Task "${taskTitle}" has been completed!`);
    }, 1500);
};

// Recursive function to complete all tasks and subtasks
TaskManager.prototype.finishAllTasks = function(taskArray) {
    for (let task of taskArray) {
        task.markComplete();
        if (task.subTasks.length > 0) {
            this.finishAllTasks(task.subTasks);
        }
    }
};

// Pure function example
function countCompletedTasks(tasks) {
    return tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0);
}

// Impure function example
TaskManager.prototype.clearCompletedTasks = function() {
    const initialCount = this.taskList.length;
    this.taskList = this.taskList.filter(task => !task.completed);
    console.log(`Cleared ${initialCount - this.taskList.length} completed tasks.`);
};

// Usage example
const manager = new TaskManager();
const taskA = manager.insertTask("Study JavaScript", "Deep dive into advanced JS concepts.");
taskA.createSubTask("Understand the 'this' context");
taskA.createSubTask("Explore closures");
const taskB = manager.insertTask("Develop an application", "Implement JS knowledge in a project.");

// Using the anonymous function
manager.notifyTaskCompletion(taskA.title);

// Complete all tasks (recursive function)
manager.finishAllTasks(manager.taskList);

// Using pure function
console.log("Number of completed tasks:", countCompletedTasks(manager.taskList));

// Using impure function
manager.clearCompletedTasks();

// Demonstrating 'this' behavior in different contexts
const standaloneFunction = taskA.markComplete;
standaloneFunction(); // 'this' is undefined or refers to the global object

const arrowFunc = () => {
    console.log(this); // 'this' is lexically bound
};
arrowFunc();

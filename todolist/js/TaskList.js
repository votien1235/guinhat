const $template = document.getElementById('task-list-template');
class TaskList extends HTMLElement {
    id = '';
    tasks = [];
    dateModified = '';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$formAddTask = this.shadowRoot.querySelector('form-add-task');
        this.$name = this.shadowRoot.getElementById('name');
        this.$tasks = this.shadowRoot.getElementById('tasks');
        this.$dateModified = this.shadowRoot.getElementById('date-modified');
        this.$taskList = this.shadowRoot.querySelector('.task-list');

        this.$taskList.addEventListener('add-task-event', (event) => {
            console.log(event.detail);
            this.addTask(event.detail);
        })
    }

    static get observedAttributes() {
        return ['id', 'date-modified'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'id') {
            this.id = newValue;
        }
        if (name == 'date-modified') {
            this.dateModified = newValue;
        }
        this.render();
    }


    setTasks(tasks) {
        this.tasks = tasks;
        this.render();
    }

    // set newTasks(tasks) {    // tên của setter và getter phải khác với tên thuộc tính

    //     this.tasks = tasks;
    //     this.render();
    // }

    addTask(task) {
        this.tasks.push(task);
        firebase.firestore().collection("taskLists").doc(this.getAttribute('id')).update({
            tasks: this.tasks
        })
        this.render();

    }

    updateTask() {

    }

    deleteTask() {

    }

    render() {
        this.$formAddTask.addTaskCallback = this.addTask;

        this.$name.innerHTML = 'Task list' + this.id;
        this.$dateModified.innerHTML = this.dateModified;
        this.$tasks.innerHTML = this.tasks.map(function (task) {
            return `<task-container id="${task.id}" content="${task.content}" is-completed="${task.isCompleted}" date-modified="${task.dateModified}"></task-container>`
        }).join('');
    }
}

window.customElements.define('task-list', TaskList);
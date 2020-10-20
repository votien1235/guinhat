const $template = document.getElementById('form-add-task-template');
class FormAddTask extends HTMLElement {
    addTaskCallback = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));



        this.$formAddTask = this.shadowRoot.querySelector('.form-add-task');
        this.$formAddTask.onsubmit = (event) => {
            event.preventDefault();
            this.handle();
            this.$formAddTask.reset();
        }

    }

    handle() {
        // lấy dữ liệu
        let content = this.$formAddTask.content.value.trim();

        if (content == "") {
            alert('Input your content')
        } else {
            // định nghĩa ra event

            let addTaskEvent = new CustomEvent('add-task-event', {
                bubbles: true,
                detail: {
                    id: 'bla bla',
                    content: content,
                    isCompleted: false,
                    dateModified: new Date().toISOString()
                }
            })
            // phát addTaskEvent từ form-add-task
            this.dispatchEvent(addTaskEvent);
        }

        console.log(content)


    }
}


window.customElements.define('form-add-task', FormAddTask);

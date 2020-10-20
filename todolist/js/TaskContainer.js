const $template = document.getElementById('task-container-template');
class TaskContainer extends HTMLElement {
    id = '';
    content = '';
    dateModified = '';
    isCompleted = '';
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$content = this.shadowRoot.getElementById('content');
        this.$dateModified = this.shadowRoot.getElementById('date-modified');
        this.$isCompleted = this.shadowRoot.getElementById('is-completed');
    }

    static get observedAttributes() {
        return ['id', 'content', 'date-modified', 'is-completed'];
    }


    // GÁN GIÁ TRỊ CHO THUỘC TÍNH
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(this.id, this.content, this.isCompleted, this.dateModified);
        switch (name) {
            case 'content':
                this.content = newValue;
                break;


            case 'date-modified':
                this.dateModified = newValue;
                break;

            case 'is-completed':
                this.isCompleted = newValue.toLowerCase() == "true";
                break;

            case 'id':
                this.id = newValue;
                break;
        }
        this.render();
    }

    // làm nhiệm vụ hiển thị nội dung và bắt sự kiện cho các element nằm bên trong
    render() {
        this.$content.innerHTML = this.content;
        this.$dateModified.innerHTML = this.dateModified;
        this.$isCompleted.checked = this.isCompleted;
    }
}

window.customElements.define('task-container', TaskContainer);
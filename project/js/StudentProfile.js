const $template = document.getElementById("student-profile-template");
export class StudentProfile extends HTMLElement {
    studentId = "";
    fullName = "";
    dateOfBirt = "";
    majors = "";
    course = "";
    dayRegister = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$studentId = this.shadowRoot.getElementById("student-id");
        this.$fullName = this.shadowRoot.getElementById("full-name");
        this.$dateOfBirth = this.shadowRoot.getElementById("date-of-birth");
        this.$majors = this.shadowRoot.getElementById("majors");
        this.$course = this.shadowRoot.getElementById("course");
        this.$dayRegister = this.shadowRoot.getElementById("day-register");
    }
    Write() {
        // Lấy dữ liệu
        let studentId = this.$studentId.value;
        let fullName = this.$fullName.value;
        let dateOfBirt = this.$dateOfBirt.value;
        let majors = this.$majors.value;
        let course = this.$course.value;
        let dayRegister = this.$dayRegister.value;

        console.log(studentId, fullName, dateOfBirt, majors, course, dayRegister);

    }
    static get observedAttributes() {
        return ["studentId", "fullName", "dateOfBith", "majors", "course", "dayRegister"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "studentId") {
            this.$studentId.innerHTML = newValue;
        } else if (name == "fullName") {
            this.$fullName.innerHTML = newValue;
        } else if (name == "dateOfBirth") {
            this.$dateOfBirth.innerHTML = newValue;
        } else if (name == "majors") {
            this.$majors.innerHTML = newValue;
        } else if (name == "course") {
            this.$course.innerHTML = newValue;
        } else if (name == "dayRegister") {
            this.$dayRegister.innerHTML = newValue;
        }
    }

    // setUsers(){
    //     this.users = users;
    //     this.render();
    // }
    // render(){
    //     this.$avatar.src = this.$avatar;
    //     this.$studentId.innerHTML = this.studentId;
    //     this.$fullName.innerHTML = this.fullName;
    //     this.$dateOfBirth = this.dateOfBirt;
    //     this.$majors.innerHTML = this.majors;
    //     this.$course.innerHTML = this.course;
    //     this.$dayRegister.innerHTML = this.dayRegister;
    //     this.$users = this.users.map(function(users){
    //         return `
    //             <inputwrapper-student id="student-id" label="Mã sinh viên:" value="${users.studentId}"></inputwrapper-student>
    //             <inputwrapper-student id="full-name" label="Họ và tên:" value="Nguyễn Văn A"></inputwrapper-student>
    //             <inputwrapper-student id="date-of-birth" label="Ngày sinh:" value="01/01/2001"></inputwrapper-student>
    //             <inputwrapper-student id="majors" label="Ngành học:" value="Công Nghệ thông tin"></inputwrapper-student>
    //             <inputwrapper-student id="course" label="Khóa học:" value="K24"></inputwrapper-student>
    //             <inputwrapper-student id="day-register" label="Ngày đăng ký:" value="2/1/2020"></inputwrapper-student>
    //         `
    //     })
    // }
}

window.customElements.define("student-profile", StudentProfile);
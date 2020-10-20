import "./TaskContainer.js"
import "./TaskList.js"
import "./FormAddTask.js"

// let rawTasks = [
//     { id: 1, content: 'đi chơi', isCompleted: true, dateModified: '2020/10/13' },
//     { id: 2, content: 'đi quẩy', isCompleted: false, dateModified: '2020/10/13' },
//     { id: 1, content: 'đi xem phim', isCompleted: true, dateModified: '2020/10/13' },
//     { id: 1, content: 'đi quẩy', isCompleted: true, dateModified: '2020/10/13' },
// ];
// let taskList = document.getElementById('task-list-01');
// taskList.setTasks(rawTasks);


(async (id) => {
    let result = await firebase
        .firestore()
        .collection('taskLists')
        .doc(id).get();

    let data = result.data();
    //tạo 1 task List với dữ liệu vừa lấy
    let $taskList = document.createElement('task-list');
    $taskList.setAttribute('id', id);
    $taskList.setAttribute('date-modified', data.dateModified);
    $taskList.setTasks(data.tasks);
    // chèn task List mới tạo vào app
    document.getElementById('app').appendChild($taskList);

})("eIAKPePmr2UCbBjlgD7J");
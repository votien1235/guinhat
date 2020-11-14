import { getCurrentUser, getDataFromDoc } from "./utils.js";

let $app = document.getElementById("app");
//
let root = null;
let useHash = true;
let hash = "#";
let router = new Navigo(root, useHash, hash)

// đăng nhập
router.on('/sign-in', function () {
    $app.innerHTML = `<form-login></form-login>`;
}).resolve();

// đăng kí
router.on('/sign-up', function () {
    $app.innerHTML = `<form-register></form-register>`;
}).resolve();

// quản lý các tasks
// router.on('/todolist', async function () {
//     let currentUser = getCurrentUser();
//     let result = await firebase
//         .firestore()
//         .collection('taskLists')
//         .where('owner', '==', currentUser.id)
//         .get();
    
//     console.log(getDataFromDoc(result.docs[0]));

//     let taskListData = getDataFromDoc(result.docs[0]);
    
    // $app.innerHTML = `<task-list id="${taskListData.id}"></task-list>`;
    // let $taskList = document.createElement('task-list');
    // $taskList.setAttribute('id', taskListData.id);
    // $taskList.setTasks(taskListData.tasks);
    // $app.appendChild($taskList);

// }).resolve();

// window.router = router;

router.on("/student-profile", async function(){
    let currentUser = getCurrentUser();
    let result = await firebase
        .filestore()
        .collection("   ")
});

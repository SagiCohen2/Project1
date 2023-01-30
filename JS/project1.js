var task = JSON.parse(localStorage.getItem("task")) || [];

window.onload = function() {
    newNoteData();
}

const whitePageInfo = () => {
    let newTask = new Object();
    newTask.TaskInfo = document.getElementById("taskInfo").value;
    newTask.TaskDate = document.getElementById("taskDate").value;
    newTask.TaskTime = document.getElementById("taskTime").value;
    //console.log(taskInfo,taskDate,taskTime);
    task.push(newTask);
    newNoteData();
    document.getElementById("resetForm").reset();
}

const pretyDate = (TaskDate) => {
    const myDate = TaskDate.split("-");
    return `${myDate[2]}/${myDate[1]}/${myDate[0]}`;
};

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
closebtns[i].addEventListener("click", function() {
this.parentElement.style.display = 'none';
    });
}

const newNoteData = () => {
    const newData = document.getElementById("noteData");
    var data = "";
    task.map((item) => {
        data += `
        <div class="note-img">
            <span class="close">x</span> 
            <p class="note-body">${item.TaskInfo}</p>
            <p class="note-footer">
            ${pretyDate(item.TaskDate)}<br>
            ${item.TaskTime}</p>
        </div>
        `;
        
    });
    
    newData.innerHTML = data;
}; 



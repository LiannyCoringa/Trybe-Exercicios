const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = 'orange';
const divEmergencyTasks = document.querySelectorAll(".emergency-tasks div");
for (let index = 0; index < divEmergencyTasks.length; index += 1) {
    divEmergencyTasks[index].style.backgroundColor = 'purple';
    divEmergencyTasks[index].style.height = '40px';
    divEmergencyTasks[index].style.marginBottom = '150px';
};
const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = 'yellow';
const divNoEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div");
for (let index = 0; index < divNoEmergencyTasks.length; index += 1) {
    divNoEmergencyTasks[index].style.backgroundColor = 'black';
    divNoEmergencyTasks[index].style.height = '40px';
    divNoEmergencyTasks[index].style.marginBottom = '150px';
};
const footer = document.getElementById("footer-container");
footer.style.backgroundColor = 'green';
const header = document.querySelector("#header-container");
header.style.backgroundColor = 'green';
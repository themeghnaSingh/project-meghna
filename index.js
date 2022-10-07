function addNewWorkfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workexp");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'enter here');

    let weOb = document.getElementById("Workex");
    let workexpAddButtonOb = document.getElementById("workexp")

    weOb.insertBefore(newNode, workexp);
}

function addnewProject() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("project");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'enter here');

    let proOb = document.getElementById("pro");
    let projectAddButtonOb = document.getElementById("project")

    proOb.insertBefore(newNode, project);
}


function addnewEduCol() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("project");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'enter here');

    let eduQOb = document.getElementById("eduQ");
    let EducationAddButtonOb = document.getElementById("edu")

    eduQOb.insertBefore(newNode, edu);
}

function generateCV() {
    let nameField = document.getElementById("name").value;
    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;

    document.getElementById ("contactT").innerHTML = document.getElementById("contact").value;

    document.getElementById("addressT").innerHTML = document.getElementById("address").value;

    document.getElementById('emailT').innerHTML =  document.getElementById('email').value;

    document.getElementById('linkedinT').innerHTML =  document.getElementById('linkedin').value;
    
    document.getElementById('gitHT').innerHTML =  document.getElementById('gitH').value;

    document.getElementById('objT').innerHTML =  document.getElementById('obj').value;

    //  lists
    let wes = document.getElementsByClassName("weField");
    let str = "";

    for(let e of wes){
        str =  str + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("WExp").innerHTML = str;

}


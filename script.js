var row=1;
var entry=document.getElementById("submit");
entry.addEventListener("click",displaydetail);


function displaydetail(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var address=document.getElementById("address").value;


    if(!fname || !lname || !email || !number || !address){
        alert("Please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1=newRow.insertCell(0);

    var cell2=newRow.insertCell(1);

    var cell3=newRow.insertCell(2);

    var cell4=newRow.insertCell(3);

    var cell5=newRow.insertCell(4);


    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = number;
    cell5.innerHTML = address;

    row++;
    

}
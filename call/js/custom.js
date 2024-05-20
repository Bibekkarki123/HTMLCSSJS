var students=[
    {id:1, name:"Ram", address:"Ktm"},
    {id:2, name:"Shyam", address:"Bkt"},
    {id:3, name:"Sita", address:"Lalitpur"},
    {id:4, name:"Krishna", address:"Ktm"}
]

function show(){
    let outPut="";
    students.map((student)=>{
        outPut+=`
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.address}</td>
            <td width="15%">
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        `;
        document.getElementById("students_list").innerHTML=outPut;
    });
}

show();


let incrementId=5;
function addStudent(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let address=document.getElementById("address").value;
    let insertData={
        id:incrementId,
        name:name,
        address:address
    }
    students.push(insertData);
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    show();

    incrementId++;
}
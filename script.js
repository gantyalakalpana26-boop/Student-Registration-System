
let form=document.getElementById("studentForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let python=Number(document.getElementById("python").value);
    let fullstack=Number(document.getElementById("fullstack").value);
    let maths=Number(document.getElementById("maths").value);
    let dsa=Number(document.getElementById("dsa").value);
    let ai=Number(document.getElementById("ai").value);
    let sql=Number(document.getElementById("sql").value);

    let total=python+fullstack+maths+dsa+ai+sql;
    let percentage=(total/600)*100;


    let status=(fullstack>=40 && python>=40 && maths>=40 && dsa>=40 && ai>=40 && sql>=40)?"Pass":"Fail";

    let student={
        name:document.getElementById("name").value,
        roll:document.getElementById("roll").value,
        email:document.getElementById("email").value,
        python:python,
        fullstack:fullstack,
        maths:maths,
        dsa:dsa,
        ai:ai,
        sql:sql,
        total:total,
        percentage:percentage,
        status:status
    }

    let studentJSON=JSON.stringify(student);
    console.log(studentJSON);

    let students=JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students",JSON.stringify(students));
    displayStudents();
    });

    function displayStudents(){
        let students=JSON.parse(localStorage.getItem("students")) || [];
        let records=document.getElementById("records");
        records.innerHTML="";
        students.forEach(function(student){
            records.innerHTML +=
            "<div class='student-record'>"+
                "<p>Name: "+student.name+"</p>" +
                "<p>Roll: "+student.roll+"</p>"+
                "<p>Email: "+student.email+"</p>"+  
                "<p>Total Marks: "+student.total+"/600</p>"+
                "<p>Percentage: "+student.percentage.toFixed(2)+"%</p>"+
                "<p>Status: "+student.status+"</p>"+
            "</div>";
        });


    }
    displayStudents();


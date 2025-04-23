

function getStudent(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    
}

getStudent("students.json");
getStudent("https://jsonplaceholder.typicode.com/users");



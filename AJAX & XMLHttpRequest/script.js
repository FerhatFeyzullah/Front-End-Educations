
///////EXAMPLE 1////////////

function prepareURL(url,id){
if(id===null){
    return url;
}
return `${url}?postId=${id}`
}


function getComment(url,id){
    let newURL = prepareURL(url,id)


    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange" , ()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET",newURL);
    xhr.send();
}
//getComment("https://jsonplaceholder.typicode.com/comments",1)

//////////EXAMPLE 2///////////

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(xhr.responseText);
        }
    })

    xhr.open("GET",url);
    xhr.send();


}

getData("https://jsonplaceholder.typicode.com/users");
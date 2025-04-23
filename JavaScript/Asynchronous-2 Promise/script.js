

function getUsers(url){
        return new Promise((resolved,rejected)=>{
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange',()=>{
                try {
                    if(xhr.readyState===4 && xhr.status===200){
                        resolved(JSON.parse(xhr.responseText));
                    }
                }
                 catch (error) {
                    rejected(error);
                }
            })
            xhr.open('GET',url)
            xhr.send();
        })
}

getUsers('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    data.forEach((user)=>{
        console.log(user.name)
    })

})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Veri Cekme basarili veya basarisiz denendi");
})


////Promise All//////

//hepsi resolve ise then a girer
//bir tanesi bile reject ise catch e girer

const p1 = Promise.resolve("Birinci Promise basarili");
const p2 = Promise.resolve("ikinci Promise basarili");
const p3 = Promise.resolve("ucuncu Promise basarili");

const p4 = Promise.reject("Promise basarisiz");

const p5 = new Promise((resolve,rejected)=>{
    resolve("besinci promise basarili");
})

Promise.all([p1,p2,p3,p4,p5])
.then((res)=>{
    console.log(res);
    for(let val of res){
        console.log(val);
    }
})
.catch((err)=>{
    console.log(err);
})


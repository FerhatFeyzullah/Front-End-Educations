
users = [
    {   userId : 1,
        post : "ferhatin 1.postu"
    },
    {
        userId : 2,
        post : "osmanin 1. postu"
    },
    {
        userId : 1,
        post : "ferhatin 2. postu"
    },
    {
        userId : 3,
        post : "ali nin 1. postu"
    }
]





//------------ASENKRON PROBLEMI---------------//

// function getUserId(){
//     setTimeout(()=>{
//         let userId = 1;   
//         return userId;           
//     },1000)
// }

// function getPostByUserId(userId){
//     console.log(userId)
//     setTimeout(()=>{
//         users.forEach((user)=>{
//             if(user.userId===userId){
//                 console.log(user.post);
//             }
//         })

//     },500)
// }

// let userId = getUserId();
// getPostByUserId(userId);

//-----------ASENKRON PROBLEMIN CALLBACK YONTEMI ILE DUZELTILMESI---------//

function getUserId(callback){
    setTimeout(()=>{
        let userId = 2;    
        callback(userId);   
    },1000)
}

function getPostByUserId(userId){
    console.log(userId)
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })

    },500)
}

getUserId(getPostByUserId);
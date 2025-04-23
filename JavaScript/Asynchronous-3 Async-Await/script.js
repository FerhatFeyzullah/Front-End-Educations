

//Promise Then ile Yapilisi

// document.querySelector('#button').addEventListener('click',()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response)=> response.json())
//     .then((post)=>{
//         console.log(post);
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response)=>response.json())
//         .then((comments)=>console.log(comments))
//     })
// })




// Async Await ile Yapilisi

document.querySelector('#button').addEventListener('click',async()=>{
    const post = await(await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()
    const comments = await(await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post,comments);
})
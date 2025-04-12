
// async function data(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const data =  awaitresponse.json()
   
// }

// data()
async function data() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const jsonData = await response.json(); // Await here is important

    console.log(jsonData); // Optional: log the data to see the result
}

data();
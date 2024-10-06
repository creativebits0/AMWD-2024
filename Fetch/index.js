function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err)=>console.log(err))
    .finally(()=> console.log("finally"))
}

function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err)=>console.log(err))
        .finally(()=> console.log("fy"))
}

function putData(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// ---------------------------------------------------------------------------------------------------------------------------


function dsplyData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    let arrayData = []
    json.forEach(element => {
      arrayData += 
        `<div class="details">
          <div class="line">
            <div class="id">${element.id}</div>
            <h2 class="title">${element.title}</h2>
        </div>
        <p class="body">${element.body}</p>
    </div>`
      
    });
    document.getElementById('row').innerHTML = arrayData;
})
  .catch((err)=>console.log(err))
  .finally(()=> console.log("finally"))
}

//-----------------------------------------------------------------------------------------------------------------

// function allDataAndDelete(){
//   try {
//     const res = await fetch ('https://jsonplaceholder.typicode.com/posts/1')
//     const data = await res.json();
//     console.log(data.id)
//     const res1 = await fetch ('https://jsonplaceholder.typicode.com/posts/' +data.id,{
//       method: 'DELETE',
//     })
//   }

// }
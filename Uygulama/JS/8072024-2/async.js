// custom async function

// function myAsyncFunction(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("İşlem tamamlandı"); // işlem başarılıysa "resolve" kullanılır.
//       reject("Bir hata oluştu!"); // işlemde hata varsa "reject" kullanılır
//     }, time);
//   });
// }

// myAsyncFunction(2000)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/todos";

const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else {
        callback("Hata: " + xhr.status, null);
      }
    }
  };

  xhr.send();
};
// GET isteği

// CALLBACK HELL
// get("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//     get("https://jsonplaceholder.typicode.com/todos/2", (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(data);
//         get("https://jsonplaceholder.typicode.com/todos/3", (err, data) => {
//           if (err) {
//             console.error(err);
//           } else {
//             console.log(data);
//             get("https://jsonplaceholder.typicode.com/todos/4", (err, data) => {
//               if (err) {
//                 console.error(err);
//               } else {
//                 console.log(data);
//                 get(
//                   "https://jsonplaceholder.typicode.com/todos/5",
//                   (err, data) => {
//                     if (err) {
//                       console.error(err);
//                     } else {
//                       console.log(data);
//                     }
//                   }
//                 );
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// PROMISE

const getRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject(`Hata! ${xhr.status}`);
        }
      }
    };
    xhr.open("GET", endpoint);
    xhr.send();
  });
};

// getRequest(`${jsonplaceholderURL}/1`).then((res) => {
//   console.log(res);
//   getRequest(`${jsonplaceholderURL}/2`).then((res) => {
//     console.log(res);
//     getRequest(`${jsonplaceholderURL}/3`).then((res) => {
//       console.log(res);
//       getRequest(`${jsonplaceholderURL}/4`).then((res) => {
//         console.log(res);
//         getRequest(`${jsonplaceholderURL}/5`).then((res) => {
//           console.log(res);
//         });
//       });
//     });
//   });
// });

// fetch

const newComment = {
  name: "Lorem Ipsum",
  email: "example@gmail.com",
  body: "lorem ipsum dolor sit amet non elit",
};

fetch(`${jsonplaceholderURL}/1`)
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch(jsonplaceholderURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newComment),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// async - await

  const getTodoById = async (todoId) => {
    const response = await fetch(`${jsonplaceholderURL}/${todoId}`)
    const data = await response.json()

    return data
  }


console.log(getTodoById(5))
//XHR

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";
const getRequest = (callbackFn, endpoint) => {
  const request = new XMLHttpRequest();
  console.log(request);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //api'dan gelen JSON stringini JS objesine çeviriyoruz.
      //api'dan JSON objesi değil de JSON stringi gelmesinin sebebi HTTP(Hyper Text Transfer Protocol) olması. Bir metin transferi.
      const data = JSON.parse(request.responseText);
      //         err, response
      callbackFn(null, data);
    } else if (request.readyState === 4) {
      //              err,                                     response
      callbackFn(`${request.status} - Could not fetch the data`, null);
    }
  });

  request.open("GET", endpoint);
  request.send();
};

getRequest((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
}, `${jsonplaceholderURL}albums/7`);

// onreadystatechange ile

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
get("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

const post = (url, data, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else {
        callback("Hata: " + xhr.status, null);
      }
    }
  };

  xhr.send(JSON.stringify(data));
};
// POST isteği
const postData = { name: "Cem", age: 30 };
post("https://jsonplaceholder.typicode.com/todos/", postData, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

const put = (url, data, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

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

  xhr.send(JSON.stringify(data));
};
// PUT isteği
const putData = { name: "Cem Mert" }; // isim güncellendi, yaş silindi
put("https://jsonplaceholder.typicode.com/users/1", putData, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

const patch = (url, data, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

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

  xhr.send(JSON.stringify(data));
};
// PATCH isteği
const patchData = { age: 40 }; // yalnızca yaş güncellendi
patch(
  "https://jsonplaceholder.typicode.com/users/1",
  patchData,
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);

const del = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(null);
      } else {
        callback("Hata: " + xhr.status);
      }
    }
  };

  xhr.send();
};

// DELETE isteği
del("https://jsonplaceholder.typicode.com/users/1", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Kayıt silindi.");
  }
});
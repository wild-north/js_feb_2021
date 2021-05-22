const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.send();

xhr.onload = function () {
  const data = JSON.parse(xhr.responseText);

  for (let i = 0; i < data.length; i++) {
    //    console.log(data[i].username);
    let li = document.createElement("li");
    li.innerHTML = data[i].username;
    ul.appendChild(li);
    document.body.append(ul);
  }
};

let ul = document.createElement("ul");

//...... FETCH

let url = "https://jsonplaceholder.typicode.com/users";

const makeCall = () =>
  new Promise(function (resolve, reject) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch((err) => console.warn(err));
  });

function renderData(data) {
  let ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = data[i].username;
    ul.appendChild(li);
  }
  document.body.append(ul);
}

makeCall();
//.... FETCH 2

const makeCall = () => fetch(url);

makeCall()
  .then((response) => response.json())
  .then((data) => renderData(data))
  .catch((err) => console.warn(err));

function renderData(data) {
  let ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = data[i].username;
    ul.appendChild(li);
  }
  document.body.append(ul);
}

//.... AWAIT

async function makeCallAwait() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.error(error);
  } finally {
  }
}

makeCallAwait();

import {createTable, renderData} from './helpers';

const getData = () =>
  new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);

          resolve(data);
        } catch (err) {
          reject(err);
        }
      }
    };

    xhr.onerror = reject;

    xhr.send();
  })

    .then(function (data) {
      createTable(renderData(data));
    })
    .catch(function (err) {
      console.log(err);
    });

getData();



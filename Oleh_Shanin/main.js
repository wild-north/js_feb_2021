let table = document.createElement('table');

document.body.append(table);

function createTable(size) {
  let counter = 0;

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < size; j++) {
      let td = document.createElement("td");

      td.innerHTML = counter;
      counter++;

      td.appendChild(td);
    }

    table.appendChild(tr);
  }
};

createTable(10);

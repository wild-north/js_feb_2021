let table = document.createElement("table");

function createTable(size) {
  let counter = 0;

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < size; j++) {
      let td = document.createElement("td");

      td.innerHTML = counter;
      counter++;

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
};

document.body.append(table);
createTable(10);

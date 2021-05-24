export function createTable(data) {
  let div = document.createElement("div");
  div.classList.add("dataTable");
  document.body.append(div);

  div.append(data);
}

export function renderData(data) {
  let ul = document.createElement("ul");

  for (let property in data) {
    let li = document.createElement("li");

    if (typeof data[property] !== "object") {
      li.innerHTML = `${property}: ${data[property]}`;
      ul.append(li);
    } else {
      li.innerHTML = `${property}: `;
      li.append(renderData(data[property]));
      ul.append(li);
    }
  }
  ul.style.cssText = `padding: 20px; border: 2px solid grey; margin-top: 5px;`;
  return ul;
}

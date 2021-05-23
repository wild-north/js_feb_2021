export function renderData(data) {
    let ul = document.createElement("ul");
  
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = data[i].username;
      ul.appendChild(li);
    }
    document.body.append(ul);
  }; 
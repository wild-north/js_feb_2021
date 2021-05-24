


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onload = function() {
    let obj = JSON.parse(xhr.responseText);
    for (let i = 0; i < obj.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = obj[i].username;
        ul.appendChild(li);
        document.body.append(ul);
    }
}
let ul = document.createElement("ul");


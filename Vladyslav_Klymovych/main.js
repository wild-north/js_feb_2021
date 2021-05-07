document.addEventListener('DOMContentLoaded', render);

const text = {
    header: 'This is the file for your home tasks',
    list: [
        'Please, write your JavaScript code in <strong>main.js</strong>',
        'Please, write your CSS code in <strong>styles.css</strong>',
        'Please, write your HTML right here in <strong>index.html</strong>'
    ]
};

function render() {
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = text.header;

    const ul = text.list.reduce((ul, text) => {
        const li = document.createElement('li');

        li.innerHTML = text;
        ul.append(li);

        return ul;
    }, document.createElement('ul'));

    main.append(h2);
    main.append(ul);
    document.body.append(main);
}
function createTable(size) {
    let str = '<table>';
    for (let i = 0; i < size; i++){
      str += '<tr>';
      for(let j = 1; j < size; j++){
        str += '<td>' + '1' + '</td>';

      }
      str += '</tr>';
    }
    str += '</table>';
    document.body.innerHTML = str;
}
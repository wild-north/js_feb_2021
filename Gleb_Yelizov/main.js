document.addEventListener('DOMContentLoaded', function () {

//---------------------------------------------------Lesson 19----------------------------------------- 

    let xhrOutput = [];
    let awaitOutput = [];
    let promiseOutput = [];

    setTimeout(() => xhrResponse('https://jsonplaceholder.typicode.com/users'), 20);
    setTimeout(() => awaitResponse('https://jsonplaceholder.typicode.com/users'), 40);
    setTimeout(() => promiseResponse('https://jsonplaceholder.typicode.com/users'), 60);
        
    //------------------------xhr-------------------------------

    function xhrResponse(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('Ошибка: ' + xhr.status);
                return;
            } else {
                try {
                    if (!Array.isArray(xhr.response)) {
                        throw new Error("Данные приняты не в виде массива");
                    }
                    responseToArr(xhr.response, xhrOutput);
                } catch (error) {
                    if (error.name == "Error") {
                        alert("JSON Error: " + error.message);
                    } else {
                        throw error;
                    }
                }
            }
            appendUl(xhrOutput, 'users_list');
            beforeH3('.users_list', 'List of users made by xhr:');
        };
        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                console.log(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
                console.log(`Получено ${event.loaded} байт`);
            }
        };
        xhr.onerror = function () {
            console.log('error');
        };
    }

    //-----------------------------await----------------------------------    

    async function awaitResponse(url) {
        let awaitResponse = await fetch(url);
        if (awaitResponse.ok) {
            let json = await awaitResponse.json();
            //json = JSON.stringify(json);   --> для проверки
            if (!Array.isArray(json)) {
                throw new Error("Данные приняты не в виде массива");
            }
            responseToArr(json, awaitOutput);
            appendUl(awaitOutput, 'users_list_2');
            beforeH3('.users_list_2', 'List of users made by await:');
        } else {
            alert("Ошибка HTTP: " + awaitResponse.status);
        }
    }

    //-----------------------------promis---------------------------------- 

    function promiseResponse(url) {
        fetch(url)
            .then(response => response.json())
            .then(users => responseToArr(users, promiseOutput))
            .then(() => appendUl(promiseOutput, 'users_list_3'))
            .then(() => beforeH3('.users_list_3', 'List of users made by promise:'))
            .catch(err => alert(err));
    }

    //----------------------------------Functions----------------------------

    function responseToArr(response, toArray) {
        response.map((item) => {
            toArray.push('User (id #' + item.id + ') - ' + item.name);
        });
    }


    function appendUl(result, ulName) {
        let ul = document.createElement('ul');

        ul.append(appendLi(result));

        document.body.append(ul);
        ul.className = ulName;
        ul.style.listStyle = 'none';
    }

    function appendLi(result) {
        let fragment = new DocumentFragment();

        for (let i = 0; i < result.length; i++) {
            let li = document.createElement('li');
            li.append(result[i]);
            fragment.append(li);
        }

        return fragment;
    }

    function beforeH3(elem, text) {
        let header = document.createElement('h3');
        document.querySelector(elem).before(header);
        header.innerHTML = text;
    }


    //---------------------------------------------------Lesson 20-----------------------------------------    


    class Blank {
        constructor(name, url) {
            this.name = name;
            this.url = url;
        }

        getAndBuild() {
            let section = document.createElement('section');
            section.id = `${this.name}`;

            /* let sectionHeader = document.createElement('h3');            
            sectionHeader.innerHTML = `Section: ${this.name}`;
            section.before(sectionHeader); */

            fetch(this.url)
                .then(response => response.json())
                .then(item => {
                    item.map((user) => {                        
                        section.append(this.build(user));
                        section.style.cssText = `display: flex; flex-wrap: wrap;
                            border: 1px black solid; margin: 10px;`;                        
                    });
                })
                .then(document.body.append(section))
                .catch(err => alert(err));
        }
        build(item) {
            let userUl = document.createElement('ul');

            for (let prop in item) {
                let userLi = document.createElement('li');
                if (typeof (item[prop]) !== 'object') {
                    userLi.innerHTML = `${prop}: ${item[prop]}`;
                    userUl.append(userLi);
                } else {
                    userLi.innerHTML = `${prop}: `;
                    userLi.append(this.build(item[prop]));
                    userUl.append(userLi);
                }
            }
            userUl.style.cssText = `min-width: 185px; max-width: 16%`;
            return userUl;
        }
    }

    let firstSection = new Blank('users1', 'https://jsonplaceholder.typicode.com/users');

    firstSection.getAndBuild();

    let secondSection = new Blank('users2', 'https://jsonplaceholder.typicode.com/users');

    secondSection.getAndBuild();


});



//----------------------------------------------------------------------------------------------

/* showUsers('https://jsonplaceholder.typicode.com/users');
    //debugger;
    function showUsers(url) {
        let sectionUsersData = document.createElement('section');

        fetch(url)
            .then(response => response.json())
            .then(item => {
                item.map((user) => {
                    sectionUsersData.append(appendIt(user));
                });
            })
            .then(document.body.append(sectionUsersData))
            .catch(err => alert(err));
    }

    function appendIt(item) {
        let userUl = document.createElement('ul');

        for (let prop in item) {
            let userLi = document.createElement('li');
            if (typeof (item[prop]) !== 'object') {
                userLi.innerHTML = `${prop}: ${item[prop]}`;

                userUl.append(userLi);
            } else {
                userLi.innerHTML = `${prop}: `;
                userLi.append(appendIt(item[prop]));
                userUl.append(userLi);
            }
        }
        return userUl;
    } */


    /* let promiseObj = {
        url: 'https://jsonplaceholder.typicode.com/users',

        getAndBuild(url) {
            let section = document.createElement('section');
            section.id = `${this}`;

            fetch(url)
                .then(response => response.json())
                .then(item => {
                    item.map((user) => {
                        section.append(this.build(user));
                    });
                })
                .then(document.body.append(section))
                .catch(err => alert(err));
        },

        build(item) {
            let userUl = document.createElement('ul');

            for (let prop in item) {
                let userLi = document.createElement('li');
                if (typeof (item[prop]) !== 'object') {
                    userLi.innerHTML = `${prop}: ${item[prop]}`;

                    userUl.append(userLi);
                } else {
                    userLi.innerHTML = `${prop}: `;
                    userLi.append(this.build(item[prop]));
                    userUl.append(userLi);
                }
            }
            return userUl;
        }
    };

    promiseObj.getAndBuild(promiseObj.url); */
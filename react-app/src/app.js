import React, { useState } from 'react';
import './style-component.css';
import { Form } from './form';
import { Task } from './task';

const getId = arr => arr.length ? arr[arr.length - 1].id + 1 : 1;

export const App = () => {
    const [taskList, setTaskList] = useState([]);

    const addItem = name => {
        const tmpList = [...taskList, {
            id: getId(taskList),
            name,
            done: false
        }];

        setTaskList(tmpList);
    };

    const setDone = id => {
        const tmpList = [...taskList];

        tmpList.forEach(item => {
            if (item.id === id) {
                item.done = !item.done;
            }
        });

        setTaskList(tmpList);
    };

    const clearList = () => {
        setTaskList([]);
    };

    return (
        <div>
            <Form addItem={ addItem } clearList={ clearList } />

            <div className="results">
                <ul>
                    {
                        taskList.map((taskItem, index) =>
                            <Task
                                key={ taskItem.id }
                                setDone={ setDone }
                                { ...taskItem }
                            />
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

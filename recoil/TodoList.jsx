import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from './state'
import { TodoItemCreator } from './TodoItemCreator'

export function TodoList() {
    const todoList = useRecoilValue(todoListState)
    return (
        <>
            <ul>
                {todoList.map(item => {
                    return (
                        <li key={item.key}>{item.text}, {item.isComplete ? 'completed' : 'incompleted'}</li>
                    );
                })}
            </ul>
            <TodoItemCreator />
        </>
    )
}
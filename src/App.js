import React from 'react';
import TodoList from './todolist/todolist/TodoList'; 

function App() {
    return (
        <div className="App">
            <h1>할 일 목록</h1>
            <TodoList /> {/* TodoList 컴포넌트를 렌더링합니다. */}
        </div>
    );
}

export default App;
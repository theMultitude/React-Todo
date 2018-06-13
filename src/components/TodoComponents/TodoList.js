import React from 'react';
import Todo from '/Todo';

const TodoList = props => {
	return(
	<div>
		{props.todo.map(todo => (
		<Todo
			handleToggleComplete={props.handleToggleComplete}
			key = {todo.id}
			todo = {todo}
		/>
		))}
	</div>
	);
};

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

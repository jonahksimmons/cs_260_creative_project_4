import axios from "axios";

const List = (props) => {
return (
	<div>
	<h1>Public Pastes</h1>
	{props.pastes.map( item => (
		<div key={item.id}>
		<a href={ "/paste/"+item._id }>-- {item.title}</a>
		</div>
	))}
	</div>
);
};

export default List;


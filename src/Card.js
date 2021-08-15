import React from 'react';
const Card = (props) => {
	return (
		<div className=" tc bg-light-green dib ma3 pa3 br3 grow">
		<img src={`https://robohash.org/${props.id}?200x200`} alt={props.name} />
		<div>
		<p id='inner'>{props.name}</p>
		<p id='inner'>{props.email}</p>
		 </div>
		</div>

);
}
export default Card;
import React from 'react';

const Name = (props) => {
	return (
		<div className='credit-box'>
			<p className='credit-name'> {props.name} </p>
			<img src={props.creditImageUrl} alt='person' className='credit-pic' />
		</div>
	)
}

export default Name;
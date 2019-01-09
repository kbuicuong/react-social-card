import React from 'react';

const Message = (props) => {
	return (
		<section className='message'>
			<h4 className='message-headline'> 
				{props.headline} 
			</h4>
			<p className='message-body'> 
				{props.message} 
			</p>
			<a href={props.url} className='message-url'> 
				{props.url} 
			</a>
		</section>
	)
}

export default Message;
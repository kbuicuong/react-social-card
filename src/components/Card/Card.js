import React from 'react';
import Logo from '../Logo/Logo';
import Headline from '../Headline/Headline';
import Name from '../Name/Name';
import Message from '../Message/Message';

const Card = (props) => {
	return(
		<div className='card'>
			<section className='main'>
				<Logo />
				<Headline headline={props.headline} />
				<Name 
					name={props.name} 
					creditImageUrl={props.creditImageUrl}
				/>
			</section>
			<Message 
				headline={props.headline}
				message={props.message} 
				url={props.url}
			/>
		</div>
	)
}

export default Card;
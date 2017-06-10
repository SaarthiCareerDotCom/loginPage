import React from 'react'

const Userinfo = ({personalInfo}) => {
	return(
		<div>
			<p>name is {personalInfo.name}</p>
			<p>image is {personalInfo.image}</p>
		</div>
	);
}

export default Userinfo
import React from 'react'
import PropTypes from 'prop-types'

const Icons = ({ icon, iconstyle, myStyle }) => {
	const isStyle = myStyle === 'text-gray-100'
	return (
		<i className="material-icons">
			<span className={isStyle ? myStyle : iconstyle}>{icon}</span>
		</i>
	)
}

Icons.propTypes = {
	icon: PropTypes.string.isRequired,
	iconstyle: PropTypes.string,
	myStyle: PropTypes.string,
}

export default Icons

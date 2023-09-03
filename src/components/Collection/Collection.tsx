import React from 'react'

import './Collection.scss'

const Collection: React.FC<any> = ({ otherClass }) => {
	return (
		<li className={`collection ${otherClass ? otherClass : ''}`}>
			<div className="collection__info">
				<h3 className="collection__title">
					Познакомьтесь с коллекцией ножей TUOTOWN
				</h3>
				<svg
					width="18"
					height="8"
					viewBox="0 0 18 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 
				0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 
				4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 
				14.1716 7.53553L17.3536 4.35355ZM-1.04975e-09 4.5L17 4.5L17 3.5L1.04975e-09 3.5L-1.04975e-09 4.5Z"
					/>
				</svg>
			</div>
		</li>
	)
}

export default Collection

import React from 'react'
import ReactDOM from 'react-dom'

var ListingContainer = React.createClass({
	getInitialState:function(){
		return{
			isShowing: false
		}
	},

	_handleClick: function(){

	},

	render: function(){
		return(
			<div className="listingContainer">
				<ul className="">
					<li className="listObj">
						<div className="listCard">
						<h3>Big Test</h3>
						<p>some descriptive text</p>
						</div>
					</li>
				</ul>
			</div>
			)
	}
})

export default ListingContainer
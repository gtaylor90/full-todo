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
					<ListingObjective listingKey={this.props.} />
				</ul>
			</div>
			)
	}
})

var ListingObjective = React.createClass({
	render: function(){
		return(
			{
			this.props.listingKey.map(function(todo){
				return <li>{todo}</li>
				})
		}
			)
		}
	}
})

export default ListingContainer
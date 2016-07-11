import React from 'react'
import ReactDOM from 'react-dom'

import ListingContainer from './ListingContainer.js'

var AView = React.createClass({
    getInitialState: function() {
    	console.log('initializing get initial state in the AView class')
        return {
        	toDo:[
            'Clean litter box',
			'Do Dishes',
			'Complete Homework'
			]
        }
    },

    _modifyToDoList: function() {
    	console.log('initializing Aview._modifyToDoList')
        var toDoCopy = this.state.toDo.map((copy) => {
            return copy })
        toDoCopy.push(payload)

        this.setState({
            toDo: toDoCopy
        })
    },

    render: function(){
    	console.log('initiating AView Render')
    	return (
    		<div>
    			<Header />
    			<ListingContainer />
    		</div>
    		)
    }


})

var Header = React.createClass({
	getInitialState: function(){
		return{
			someState: 'sure'
		}
	},

	render: function(){
		console.log('rendering Header')
		return(
			<div class="row">
				<h1>WOW WHAT A LIST</h1>
			</div>
			)
	}
})

export default AView

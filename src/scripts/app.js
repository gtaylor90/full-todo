import React from 'react'
import ReactDOM from 'react-dom'	

import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

import AView from './components/AppView.js'

const app = function() {

	var AppRouter = Backbone.Router.extend({
		routes: {

			// eventually…
			// 'lists/completed' : 'showCompletedTasks'
			// 'lists/pending' : 'showPendingTasks'
			'list/:user' : 'showUserLists',
			'*anything' : 'showHomeView'
		},

		showUserLists: function(){
			console.log('initializing show user lists')
			ReactDOM.render(<AView  />, document.querySelector('.container'))
		},

		showHomeView: function(){
			console.log('initiating showHomeView')
			ReactDOM.render(<AView />,document.querySelector('.container'))
		},
		initialize: function(){
			console.log('app routing')
			Backbone.history.start()
		}
	})


	var whatever = new AppRouter()
}

app()
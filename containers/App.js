import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

var App = React.createClass({

  render: function() {
    return (
      <div>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList todos={this.props.todos} actions={this.props.actions} />
      </div>
    )
  }
});

var mapStateToProps = function (state) {
  return state;
};

var mapDispatchToProps = function (dispatch) {
  return {
    //App에서 dispatch 메소드를 호출하지 않기 위해 사용
    //actions에 dispatch를 바인딩
    actions: bindActionCreators(actions, dispatch)
  };
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './src/reducers/todoListReducer';
import List from './src/components/reduxDemoList';
import Input from './src/components/reduxDemoInput';
import Title from './src/components/reduxDemoTitle';

import { Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import ListViewDemo from './src/components/ListView';
import ActivityIndicatorDemo from './src/components/ActivityIndicator';
import FlatListDemo from './src/components/FlatList';
import InputFieldDemo from './src/components/InputField';
import ScrollViewDemo2 from './src/components/ScrollView2';

type Props = {};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

class App extends Component<Props> {
	onAddTodo = (text) => {
		const { dispatch } = this.props

		dispatch(actionCreators.add(text))
	}

	onRemoveTodo = (index) => {
		const { dispatch } = this.props

		dispatch(actionCreators.remove(index))
	}
	render() {
		const { todos } = this.props
		return (
			<View>
				<Title>
					To-Do List
        		</Title>
				<Input
					placeholder={'Type a todo, then hit enter!'}
					onSubmitEditing={this.onAddTodo}
				/>
				<List
					list={todos}
					onPressItem={this.onRemoveTodo}
				/>
			</View>

		);
	}
}

export default connect(mapStateToProps)(App);
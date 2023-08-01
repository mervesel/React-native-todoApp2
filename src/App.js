import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import TodoData from './todoData.json';
const App = () => {
  const [todos, setTodos] = useState(TodoData);
  const [text, setText] = useState('');
  const renderTodo = ({item}) => (
    <TodoList
      todos={item}
      changeIsDone={isDoneChange}
      deleteTodo={deleteTodo}
    />
  );

  const handleAddTodo = () => {
    if (text === '') return Alert.alert('Boş bırakamazsınız.');
    setTodos([
      ...todos,
      {name: text, isDone: false, id: Date.now() + Math.random()},
    ]);
    setText('');
  };
  const isDoneChange = id => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  const deleteTodo = id => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Header todos={todos} />
      <View style={StyleSheet.inner_container}>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
      <Input text={text} setText={setText} handleAddTodo={handleAddTodo} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#102027',
  },
  inner_container: {
    flex: 1,
  },
});

export default App;

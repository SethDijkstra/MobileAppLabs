import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    if (tasks.includes(taskText)) {
      Alert.alert('Error', 'Task already exists!');
    } else if (taskText.trim() === "") {
      Alert.alert('Error', 'Task cannot be empty!');
    } else {
      setTasks(prevTasks => [...prevTasks, taskText]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;


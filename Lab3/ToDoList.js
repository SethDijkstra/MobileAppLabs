import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <TouchableOpacity key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;

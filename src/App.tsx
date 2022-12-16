import React from "react";

import styles from "./App.module.css";

import Header from "./components/Header";
import TaskListContainer from "./components/TaskListContainer";

import "./global.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <TaskListContainer />
    </div>
  );
}

export default App;

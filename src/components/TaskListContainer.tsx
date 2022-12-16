import React, { useState } from "react";

import styles from "./TaskListContainer.module.css";

import clipboardIcon from "../assets/clipboard.svg";

import { Task } from "../domain/Task";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";

const TaskListContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const createdTasks = tasks.length;
  const hasNoTasks = tasks.length === 0;
  const hasTasks = tasks.length !== 0;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  const addTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: text,
        isCompleted: false,
      },
    ]);
  };

  const changeStatusById = (id: number, isCompleted: boolean) => {
    setTasks(
      [...tasks].map((task) => {
        if (task.id === id) task.isCompleted = isCompleted;

        return task;
      })
    );
  };

  const deleteById = (id: number) => {
    setTasks([...tasks].filter((task) => task.id !== id));
  };

  return (
    <div className={styles.tasksContainer}>
      <AddTask onAddTask={addTask} />

      <div className={styles.taskListContainer}>
        <header>
          <div className={styles.createdTasks}>
            <span>Tarefas criadas</span>
            <div className={styles.numberCounter}>
              <strong>{createdTasks}</strong>
            </div>
          </div>

          <div className={styles.completedTasks}>
            <span>Concluidas</span>
            <div className={styles.numberCounter}>
              <strong>
                {completedTasks} de {createdTasks}
              </strong>
            </div>
          </div>
        </header>

        {hasNoTasks && (
          <div className={styles.noTasksContainer}>
            <div className={styles.noTasksContainerDetails}>
              <img src={clipboardIcon} width={56} />
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize sues itens a fazer</span>
              </div>
            </div>
          </div>
        )}

        {hasTasks && (
          <div className={styles.cardList}>
            {tasks
              .sort((task) => (task.isCompleted ? 1 : -1))
              .map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.task}
                    isCompleted={task.isCompleted}
                    onChangeStatus={changeStatusById}
                    onDelete={deleteById}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskListContainer;

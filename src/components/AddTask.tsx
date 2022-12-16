import React, { ChangeEvent, useState } from "react";

import styles from "./AddTask.module.css";

import plusIcon from "../assets/plus.svg";

interface Props {
  onAddTask: (text: string) => void;
}

const AddTask = ({ onAddTask }: Props) => {
  const [typedTask, setTypedTask] = useState<string>("");

  const handleOnChangeTypedTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTypedTask(event.target.value);
  };

  const handleAddTask = () => {
    onAddTask(typedTask);
    setTypedTask("");
  };

  return (
    <div className={styles.addTaskContainer}>
      <input
        value={typedTask}
        onChange={handleOnChangeTypedTask}
        placeholder="Adicione uma tarefa"
        className={styles.inputBar}
      />

      <button className={styles.addButton} onClick={handleAddTask}>
        <span>Criar</span>
        <img src={plusIcon} />
      </button>
    </div>
  );
};

export default AddTask;

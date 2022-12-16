import React from "react";

import styles from "./TaskCard.module.css";

import checkIcon from "../assets/check.svg";
import completedIcon from "../assets/completed.svg";
import trashIcon from "../assets/trash.svg";

interface Props {
  id: number;
  title: string;
  isCompleted: boolean;
  onChangeStatus: (id: number, isCompleted: boolean) => void;
  onDelete: (id: number) => void;
}

const TaskCard = ({
  id,
  title,
  isCompleted,
  onChangeStatus,
  onDelete,
}: Props) => {
  const handleChangeStatus = () => {
    onChangeStatus(id, !isCompleted);
  };

  const handleDeleteCard = () => {
    onDelete(id);
  };

  return (
    <div className={styles.card}>
      <img
        onClick={handleChangeStatus}
        src={isCompleted ? completedIcon : checkIcon}
      />
      <div className={styles.cardDetails}>
        <span
          className={isCompleted ? styles.textCardCompleted : styles.textCard}
        >
          {title}
        </span>
        <div className={styles.trashIcon} onClick={handleDeleteCard}>
          <img src={trashIcon} width={28} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

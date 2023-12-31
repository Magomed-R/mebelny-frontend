import React from "react";
import styles from './MyContainer.module.scss'

interface props {
  children: React.ReactNode
}

export const MyContainer = ({ children }: props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
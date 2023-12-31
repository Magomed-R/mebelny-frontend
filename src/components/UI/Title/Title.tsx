import React from "react";
import styles from "./Title.module.scss"

interface titleProps {
  children: React.ReactNode,
  mb: string,
  dark: boolean,
  className?: string
}

export const Title = (props: titleProps) => {

  const customStyle: {} = {
    '--mb': props.mb
  }

  return (
    <h2 className={`${props.dark ? styles.titleDark : styles.title} ${props.className}`} style={customStyle}>
      {props.children}
    </h2>
  )
}
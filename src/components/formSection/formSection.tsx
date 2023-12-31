import React from "react";
import styles from './formSection.module.scss'
import { MyContainer } from "../UI/MyContainer/MyContainer";
import { Form } from "./form/form";

interface props {
  image?: string
}

export const FormSection = ({ image }: props) => {
  const customStyles: {} = {
    '--bgImage': image
  }

  return (
    <div className={styles.formSection}>
      <MyContainer>
        <div className={styles.wrapper}>
          <Form
            title="Остались вопросы?"
          />
        </div>
      </MyContainer>
    </div>
  )
}
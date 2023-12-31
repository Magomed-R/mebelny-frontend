import React, { useState } from "react";
import styles from './sale.module.scss';
import { useSelector } from "react-redux";
import { MyContainer } from "../../UI";
import { serverAdress } from "../../../utils";

export const AdminSale = () => {
  const manufacturers = useSelector((state: any) => state.products.manufacturers);
  const [discountValue, setDiscountValue] = useState(0);
  const [selectedManufacturer, setSelectedManufacturer] = useState("Выберете производителя")
  const [submitSale, setSubmitSale] = useState(false);
  const [load, setLoad] = useState(false)


  const handleSubmit = async () => {
    setLoad(true)
    try {
      const accessToken = localStorage.getItem('accessToken')
      const request = await fetch(serverAdress + '/sale', {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          manufacturer: selectedManufacturer,
          sale: discountValue
        })
      })
      console.log(request)

      setLoad(false)
    }
    catch (err) {
      setLoad(false)
      alert(err)
    }
  }

  return (
    <MyContainer>
      {load ? 'Загрузка' :
        <>
          <div className={styles.select}>
            <select onChange={(e) => {
              setSelectedManufacturer(e.target.value)
            }}>
              <>
                <option key={''} value=''>Производитель не выбран</option>
                {manufacturers.map((item: any) => {
                  return <option key={item} value={item}>{item}</option>
                })}
              </>
            </select>
            <input
              type="number"
              placeholder="Скидка в процентах"
              onChange={(e) => {
                setDiscountValue(Number(e.target.value))
                console.log(discountValue)
              }} />
          </div>
          {submitSale ?
            <div>
              <p>Вы уверены, что хотите сделать скидку?</p>
              <button
                className={styles.submitBtn}
                onClick={handleSubmit}>Да</button>
              <button
                onClick={() => {
                  setSubmitSale(false)
                }}
              >Отменить</button>
            </div>
            :
            <button
              onClick={() => {
                setSubmitSale(true)
              }}
            >Подтвердить</button>
          }
        </>
      }
    </MyContainer>
  )
}
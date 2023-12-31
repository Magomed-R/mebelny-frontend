import { useEffect, useState } from "react";

export const useGetMainPageSildes = () => {
  const [slides, setSlides] = useState([]);
  const getSlides = () => {
    async function getDataFromServer() {
      const response = await fetch('http://localhost:4000/mainPageContent')
        .then(res => res.json())
        .then(data => setSlides(data.mainSlider))
      return response
    }

    return getDataFromServer()
  }

  useEffect(() => {
    getSlides()
  }, [])

  return slides
}
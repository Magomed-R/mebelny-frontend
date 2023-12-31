import { Dispatch, SetStateAction } from "react";
import { serverAdress } from "./serverAdress";
import imageCompression from "browser-image-compression";

interface props {
  title: string;
  adminTitle: string;
  price: number;
  description: string;
  characteristics: {
    name: string;
    text: string;
  }[];
  tags: string;
  manufacturer: string;
  discount: number;
}

type setLoading = Dispatch<SetStateAction<boolean>>
type setStatus = Dispatch<SetStateAction<string>>

export const addOrEditProduct = async (data: props, photos: any[], previewIndex: number, setStatus: setStatus, setLoading: setLoading, isEdit: boolean, id?: string) => {
  try {
    setLoading(true)
    const { title, adminTitle, price, description, characteristics, tags, manufacturer, discount } = data;

    const accessToken = localStorage.getItem('accessToken');

    console.log(photos)

    const photosId: string[] = [];

    for (let i = 0; i < photos.length; i++) {
      if (typeof photos[i] !== 'string') {
        console.log('file')

        const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
              }

        const compressedBlob = await imageCompression(photos[i], options);
        const compressedFile = new File([compressedBlob], compressedBlob.name);

        const formData = new FormData()

        formData.append('files', compressedFile)

        const sendFiles = await fetch(serverAdress + '/files/install', {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`
        },
        body: formData
        })

        const res = await sendFiles.json()

        photosId.push(res[0])

      } else {
        photosId.push(photos[i])
      }
    }

    const sendData = await fetch(serverAdress + `/furniture/${isEdit ? 'edit' : 'new'}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          id,
          title,
          adminTitle,
          preview: photosId[previewIndex],
          price,
          photos: photosId,
          description,
          characteristics,
          tags,
          manufacturer,
          discount
        })
      }).then(() => {
        setStatus('success')
        setLoading(false)
      }).catch((e) => {
        console.log(e)
        setStatus('fail')
        setLoading(false)
      })
        
  } catch (e) {
    setStatus('fail')
  }
}
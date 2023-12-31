import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addOrEditProduct, serverAdress } from "../../../utils";
import { Modal } from "../../modal/modal";
import { Image } from "./image/image";
import { MyContainer } from "../../UI";
import styles from "./addProduct.module.scss";

interface characteristic {
	name: string,
	text: string,
	_id?: string
}

export const AddProduct = () => {
	const id = useParams().id;
	const productToEdit = useSelector((state: any) => state.products.allProducts.filter((product: any) => product._id === id))[0];

	const form = useRef(null);
	const schema = yup.object({
		title: yup.string().required("Введите название товара"),
		adminTitle: yup.string().required("Введите название товара для админа"),
		price: yup.number().required("Введите цену товара"),
		description: yup.string().required("Введите описание товара"),
		characteristics: yup
			.array(
				yup.object({
					name: yup.string().required("Введите назвение характеристики"),
					text: yup.string().required("Введите текст характеристики"),
				})
			)
			.required(),
		tags: yup.string().required("Введите теги"),
		manufacturer: yup.string().required('Введите производителя'),
		discount: yup.number().required('Если нет скидки, введите 0. Поле не должно оставаться пустым')
	});

	const [photos, setPhotos] = useState<any[]>([]);
	const [existPhotos, setExistPhotos] = useState([])
	const [characteristics, setCharacteristics] = useState<number[]>([0]);
	const [characteristicsToEdit, setCharacteristicsToEdit] = useState<characteristic[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [preview, setPreview] = useState(0);
	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);

	const {
		register,
		unregister,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	useEffect(() => {
		if (!!productToEdit) {
			const arr = [];
			for (let i = 0; i < productToEdit.characteristics.length; i++) {
				arr.push(i)
			}
			setCharacteristics(arr)
			setCharacteristicsToEdit(productToEdit.characteristics)
			if (!photos.length) {
				setPhotos(productToEdit.photos)
			}
		}
	}, [productToEdit, photos])

	const onDeleteCharacteristic = (e: any, index: number) => {
		e.preventDefault()
		unregister(`characteristics.${index}.name`)
		unregister(`characteristics.${index}.text`)

		if (!!productToEdit) {
			const filtered = characteristicsToEdit.filter((_, ind) => {
				return ind !== index
			})
			setCharacteristicsToEdit(filtered)
		} else {
			const filtered = characteristics.filter((_, ind) => {
				return ind !== index
			})
			setCharacteristics(filtered)
		}
	}

	const addCharacteristic = (e: any) => {
		e.preventDefault();
		console.log(characteristics)
		if (!!productToEdit) {
			setCharacteristicsToEdit([...characteristicsToEdit, { name: '', text: '' }])
		} else {
			setCharacteristics([...characteristics, characteristics.length])
		}
	};

	const Characteristic = ({ index }: { index: number }) => {
		return (
			<div className={styles.characteristic}>
				<div className={styles.labelWrapper}>
					<label className={styles.label}>{`Характеристка ${index + 1}`}</label>
					<button
						className={styles.delete}
						onClick={(e) => onDeleteCharacteristic(e, index)}>Удалить</button>
				</div>
				<div className={styles.inputs}>
					<input
						className={styles.inputChar}
						type="text"
						{...register(`characteristics.${index}.name`)}
						defaultValue={!!productToEdit ? characteristicsToEdit[index].name : ''}
						placeholder="Название характеристики"
					/>
					<input
						className={styles.inputChar}
						type="text"
						{...register(`characteristics.${index}.text`)}
						defaultValue={!!productToEdit ? characteristicsToEdit[index].text : ''}
						placeholder="Текст характеристики"
					/>
				</div>
			</div>
		);
	};

	const handleImageChange = ({ currentTarget: { files } }: React.ChangeEvent<HTMLInputElement>) => {
		if (files && files.length) {
			setPhotos((existing: any) => [...existing, ...Array.from(files)]);
		}
	};

	const openModal = (e: any) => {
		e.preventDefault()
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
		setIsModalOpen(true);
	}

	const errorMessage =
		errors.title?.message ||
		errors.adminTitle?.message ||
		errors.price?.message ||
		errors.description?.message ||
		errors.manufacturer?.message ||
		errors.characteristics?.message ||
		errors.tags?.message ||
		errors.discount?.message;

	const deletePhoto = (index: number) => {
		const changedPhotos = [...photos.slice(0, index), ...photos.slice(index + 1, photos.length)]
		setPhotos(changedPhotos)
	}

	return (
		<>
			<MyContainer>
				<form
					ref={form}
					className={styles.form}
				>
					<input className={styles.input}
						type="text"
						{...register("title")}
						defaultValue={productToEdit ? productToEdit.title : ''}
						placeholder="Название товара" />

					<input
						className={styles.input}
						type="text"
						{...register("adminTitle")}
						defaultValue={productToEdit ? productToEdit.adminTitle : ''}
						placeholder="Название товара для админа" />

					<input
						className={styles.input}
						type="number"
						{...register("price")}
						defaultValue={productToEdit ? productToEdit.price : ''}
						placeholder="Цена" />

					<textarea
						className={styles.textarea}
						{...register("description")}
						defaultValue={productToEdit ? productToEdit.description : ''}
						placeholder="Описание товара" />

					<input
						className={styles.input}
						type="text"
						{...register("manufacturer")}
						defaultValue={productToEdit ? productToEdit.manufacturer : ''}
						placeholder="Производитель" />

					<input
						className={styles.input}
						type="text"
						{...register("tags")}
						defaultValue={productToEdit ? productToEdit.tags : ''}
						placeholder="Тег" />

					<input
						className={styles.input}
						type="number"
						{...register("discount")}
						defaultValue={productToEdit ? productToEdit.discount : ''}
						placeholder="Скидка в процентах" />

					{!!productToEdit ?
						<>
							{characteristicsToEdit.map((_, ind) => {
								return <Characteristic
									index={ind}
									key={ind}
								/>;
							})
							}
						</>
						:
						<>
							{characteristics.map((_, ind) => {
								return <Characteristic
									index={ind}
									key={ind}
								/>;
							})
							}
						</>
					}
					<button
						className={styles.btn}
						onClick={addCharacteristic}>Добавить характеристику</button>

					<input
						className={styles.files}
						id="files"
						type="file"
						multiple
						onChange={handleImageChange} />

					<div className={styles.photos}>
						{photos.map((photo, index) => {
							return (
								<Image
									key={index + existPhotos.length}
									index={index + existPhotos.length}
									src={typeof photo === 'string' ? serverAdress + '/' + photo : URL.createObjectURL(photo)}
									name={typeof photo === 'string' ? photo : photo.name}
									onDelete={(e) => {
										e.preventDefault()
										deletePhoto(index)
									}}
									setPreview={setPreview}
									isPreview={preview === index + existPhotos.length}
								/>
							)
						})}
					</div>

					<button
						className={styles.btn}
						onClick={handleSubmit((data, e) => {
							openModal(e)
						})}
					>
						{productToEdit ? 'Редактировать товар' : 'Добавить товар'}</button>

					{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				</form>
			</MyContainer>
			<Modal
				isOpen={isModalOpen}
				onClick={handleSubmit((data) => {
					const filteredCharacteristics = data.characteristics.filter((item) => !!item)
					addOrEditProduct({ ...data, characteristics: filteredCharacteristics }, photos, preview, setStatus, setLoading, !!productToEdit, id);
				})}
				setIsModalOpen={setIsModalOpen}
				loading={loading}
				status={status}
				setStatus={setStatus}
				title={productToEdit ? 'Редактировать товар?' : 'Добавить товар?'}
				reset={reset}
				setPhotos={setPhotos}
			/>
		</>
	);
};

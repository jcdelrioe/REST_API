import { Car } from "../interfaces/car.interfaces"
import ItemModel from "../models/item"

const insertCar = async (item:Car) => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

const getCars = async () => {
  const responseItem = await ItemModel.find({})
  return responseItem
}

export {insertCar, getCars}
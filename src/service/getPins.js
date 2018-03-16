import Pin from '../schema/pin'

const getPin = () => {
  return Pin.find().exec()
}

export default getPin
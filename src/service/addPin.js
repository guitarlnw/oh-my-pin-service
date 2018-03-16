import Pin from '../schema/pin'

const addPin = (namePlace, createdBy, lng, lat) => {
  const data = new Pin({
    namePlace,
    createdBy,
    lng,
    lat,
  })
  data.save().catch((err) => {
    console.log('error', err)
  })
}

export default addPin
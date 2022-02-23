const hotelsDatabase = require('./database/hotels.json');

const {getNormalizedInput} = require('./utils/getNormalizedInput')

function searchCheapestHotel(input){
  const { clientType, dates} = getNormalizedInput(input)

  const cheapestHotel = hotelsDatabase.map((hotelItem) => {
    const hotelTotal = dates.reduce(function (total, dateItem){
      const normalizedDate = new Date(dateItem)
      const dayType = normalizedDate.getDay() === 0 || normalizedDate.getDay() === 6 ? 'weekend' : 'week'
      total += hotelItem[clientType][dayType]
      return total
    }, 0)

    return {
      hotel: hotelItem.name,
      stars: hotelItem.stars,
      total: hotelTotal
    }
  })

  const sortedHotel = cheapestHotel.sort((a, b) => a.total - b.total || b.stars - a.stars)

  return sortedHotel[0].hotel
}

module.exports = {searchCheapestHotel}

module.exports = {searchCheapestHotel}

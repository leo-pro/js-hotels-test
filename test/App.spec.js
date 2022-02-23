'use-strict'

const {getNormalizedInput} = require('../src/utils/getNormalizedInput')
const {searchCheapestHotel} = require('../src/app')

describe('Utils: function getNormalizedInput ', function(){
  it('should return clientType and Dates separated', function(){
    const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'

    const {clientType, dates} = getNormalizedInput(input) 
    
    console.log("Client Type: ", clientType)
    console.log("Date 1: ", dates[0])
    console.log("Date 2: ", dates[1])
    console.log("Date 3: ", dates[2])

    expect(clientType).toEqual('Regular')
    expect(dates[0]).toEqual('16Mar2020(mon)')
    expect(dates[1]).toEqual('17Mar2020(tues)')
    expect(dates[2]).toEqual('18Mar2020(wed)')
  })
})

describe('Search the cheapest Hotel', function() {
  it('should return: Parque das flores', function(){
    const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'

    const cheapestHotel = searchCheapestHotel(input)

    expect(cheapestHotel).toEqual('Parque das flores')
  })
  it('should return: Jardim Botânico', function(){
    const input = 'Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)'

    const cheapestHotel = searchCheapestHotel(input)

    expect(cheapestHotel).toEqual('Jardim Botânico')

  })
  it('should return: Mar Atlântico', function(){
    const input = 'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)'

    const cheapestHotel = searchCheapestHotel(input)

    expect(cheapestHotel).toEqual('Mar Atlântico')
  })
})
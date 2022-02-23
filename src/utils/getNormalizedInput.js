function getNormalizedInput(input){
  let normalizedInput = input.replace(/ /g,'')
  
  let inputSplitted = normalizedInput.split(':')

  const clientType = inputSplitted[0]
  const dates = inputSplitted[1].split(',')

  return {clientType, dates}
}

module.exports = {getNormalizedInput}
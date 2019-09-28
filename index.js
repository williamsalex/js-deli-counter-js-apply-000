var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  var currPos
  currPos = katzDeliLine.length
  katzDeliLine[currPos] = name
  return("Welcome, "+name+". You are number "+(currPos+1)+" in line.")
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var currCustomer = katzDeliLine[0]
    katzDeliLine=katzDeliLine.slice(1,katzDeliLine.length-1)
    return "Currently serving "+currCustomer+"."
  }
}
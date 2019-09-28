var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  var currPos
  currPos = katzDeliLine.length
  katzDeliLine[currPos] = name
  return("Welcome, "+name+". You are number "+(currPos+1)+" in line.")
}
function nowServing(katzDeliLine) {
  katzDeliLine=katzDeliLine.slice(1,katzDeliLine.length-1)
  return 
}
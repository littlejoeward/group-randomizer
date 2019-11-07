 function selector(){

var participants = ['a','b','c','d','e','f','g','h','i','j']

var odds = participants.map(function(x){

  return [x,0]

})
var tests = 1000000
for(i=0;i<tests;i++){
var selection = getRand(participants)

var index = participants.indexOf(selection)
odds[index][1] ++

}
  console.log(odds)
  console.log(odds[0][1]/tests)
  
}




function getRand(participants) {
  
  
  var random = {}
  var length = participants.length
  participants.forEach(function(x){
  
  random[x] = Math.ceil(Math.random()*length)
    
  })
  
var selection = getSelection(random)
return selection
}

function getSelection(participants){


var keys = Object.keys(participants)

var sum = keys.reduce(function(acc,x){

return participants[x] + acc

},0)

var index = sum % keys.length

var selection = keys[index]

return selection
}
function selector(){

var participants = ['a','b']

var odds = participants.map(function(x){

  return [x,0]

})
for(i=0;i<1000;i++){
var selection = getRand(participants)

var index = participants.indexOf(selection)
odds[index][1] ++

}
  
  Console.log(odds)
  
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
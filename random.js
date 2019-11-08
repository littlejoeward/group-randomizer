
function createTable(tableData) {
    try{var old = document.getElementById('table')
        old.parentNode.removeChild(old)
       }
    catch{}
    finally{
  var table = document.createElement('table');
        table.setAttribute('id', 'table');
  var tableBody = document.createElement('tbody');
  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');
    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
            
}
}
function selector(tests,choices){

var participants = []

for(j=0;j<choices;){

    participants.push('Person ' + ++j)

}

var odds = participants.map(function(x){

  return [x,0]

})

for(i=0;i<tests;i++){
var selection = getRand(participants)

var index = participants.indexOf(selection)
odds[index][1] ++

}
var percentage = odds.map(function(x){

    return x.concat(Math.round(x[1]/tests*10000)/100 + "%")

})
  createTable(percentage)
  return odds
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

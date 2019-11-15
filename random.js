
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
  return percentage
}




function getRand(participants) {
  
  
  var random = {}
  var length = participants.length
  participants.forEach(function(x){
  
  random[x] = Math.floor(Math.random()*length) +1
    
  })
  
var selection = getSelection(random)[0]
return selection
}

function getSelection(participants){


var keys = Object.keys(participants)

var sum = keys.reduce(function(acc,x){

return participants[x] + acc

},0)

var index = sum % keys.length -1

var selection = keys[index] ? keys[index]:keys[keys.length-1]

return [selection,sum,index]
}



function random(){
for(i=1;i<4;i++){
document.getElementById('person ' + i).value = Math.random()
}

}


    function getInput(){
     
        var participants = {}
   var data = ""      
        for (i=1;i<=3;i++){
        var number = Math.floor(document.getElementById("person " + i).value*3) +1
        participants["Person " + i] = number
         data += "Person " + i + ": " + number + "<br>"
        }
       
   var selection = getSelection(participants)
  
   data += "Sum: " + selection[1] + "<br>" +
           "Remainder: " + (+selection[2] + 1)+ "<br>"
   
   document.getElementById('data').innerHTML = data
   
   document.getElementById('selection').innerHTML = selection[0]
   
   }

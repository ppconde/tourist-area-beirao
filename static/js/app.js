//Insert your javascript code here
console.log("Entrou no javascript");

let response;

$.getJSON("http://localhost:3000/posts/1", function(data) {
  //data is the JSON string
  response = data;
  console.log(response);
});

//Insert your javascript code here
console.log("Entrou no javascript");

let response;

$.getJSON("https://json-db-beirao.herokuapp.com/posts", function(data) {
  //data is the JSON string
  response = data;
  console.log(response[0]);
  $("header").append(
    `<p>Id: ${response[0].id}, title: ${response[0].title}, content: ${
      response[0].content
    }</p>`
  );
});

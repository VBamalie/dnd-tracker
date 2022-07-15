import fetch from "node-fetch";

fetch("https://www.dnd5eapi.co/api/monsters/1")
  .then(response => response.json())
  .then(data => console.log(data));
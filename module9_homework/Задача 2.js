let jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`
let data = JSON.parse(jsonString);
let list = data.list;
let result = {
  name: list.name,
  age: list.age,
  prof: list.prof,
}
console.log('list',list);
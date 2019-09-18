export default function (value) { 
  this.text = value;
  this.isDone = false;
  this.id = Math.floor(Math.random() * 1000);
};
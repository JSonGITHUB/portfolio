//Object creation

function thing(name, label, type, color, size) {

  this.name = name,
  this.label = label,
  this.type = type,
  this.color = color,
  this.size = size,

  //Creating a function inside and object is done like this 
  //(different then in a constuctor function)
  
  this.whatsMyName = function() {
    return 'My name is ' + this.name;
  }

  document.write("Hi!, my name is " + this.name + ", I am a " + this.size + ", " + 
    this.color + ", " + this.type + ", " + this.label + ".<br/>");

};
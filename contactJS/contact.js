


var  arr = [{ name: 'Петя',number:'+7 (888) 888 88-88 ',favorit:2},
{ name: 'Вася',number:'+7 (999) 888 88-88 ',favorit:2},
{ name: 'Ваня',number:'+7 (999) 888 88-88 ',favorit:2},
{ name: 'Саня',number:'+7 (999) 888 88-88 ',favorit:1},
{ name: 'Света',number:'+7 (999) 888 88-88 ',favorit:2},
{ name: 'Алексей',number:'+7 (999) 888 88-88 ',favorit:1},
{ name: 'Таня',number:'+7 (888) 999 88-88 ',favorit:1}];
function addContact(id,name,numb,fv){
  $("#numbers").append("  <div class=\"number\"><img class=\"img\" src=\"37.jpg\" alt=\"\"> <div class=\"info\"><p class=\"name\">"+name+"</p><p class=\"numb\">"+numb+"</p> </div> <div class=\"buts\"> <div  class=\"but1\">"+"  <img id=\"d"+id+"\" src=\"del.jpg\" >"+"</div> <div  class=\"but2\">"+"<img id=\"f"+id+"\" src=\""+fv+".jpg\" >"+"</div> </div> </div><hr>");
}
function remove(){
  var container = document.getElementById('numbers');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  arr.sort(compareValues('name'));
  arr.sort(compareValues('favorit'));
}
function update(){
remove();
  for(let i=0;i<arr.length;i++){
    addContact(i,arr[i].name,arr[i].number,arr[i].favorit);
  }
  console.log(arr.length);
}

$(function() {
   $('#textBoxNumber').mask('+7(000)000-00-00');
 });

function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // свойства нет ни в одном из объектов
      return 0;
    }

    const varA = (typeof a[key] === 'string') ?
    a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
    b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}
update();
//var del = document.getElementById("add");
//  ad.onclick = function() {
//f.style.display='block';
//  };
//  ad.addEventListener("click", function() {	m.style.display='none'}, false);
document.addEventListener("click", function (e) {
  var id=e.target.id;
  if(id.indexOf("d")==0){
    var n=id.replace("d","");
    arr.splice(n, 1);

    update();
  }

  if(id.indexOf("f")==0){
    var n=id.replace("f","");
    if(arr[n].favorit<2){
      arr[n].favorit=2;
    }else{
      arr[n].favorit=1;
    }

    update();
  }


});

var ad = document.getElementById("add");
var m = document.getElementById("mobil");
var f = document.getElementById("addCont");
ad.onclick = function() {
  f.style.display='block';
};
ad.addEventListener("click", function() {	m.style.display='none'}, false);
var ad = document.getElementById("butadd");

ad.onclick = function() {
  f.style.display='none';

  let fv=2;
  if($('#chkFavorit').is(':checked')){
    fv=1;
  }
  arr.push({name:$('#textBoxName').val(),number:$('#textBoxNumber').val(),favorit:fv});
  $('#textBoxName').val("");
  $('#textBoxNumber').val("");
  $('#chkFavorit').prop('checked', false);
};
ad.addEventListener("click", function() {

  m.style.display='block';


  update();

}, false);
var input =   document.getElementById('textBoxFind');
input.onclick=function(){
$("#textBoxFind").val('');
};
  input.oninput = function() {
    remove();
    for(let i=0;i<arr.length;i++){
      let str=arr[i].name;
if(str.toLowerCase().indexOf($("#textBoxFind").val().toLowerCase())>-1){

        addContact(i,arr[i].name,arr[i].number,arr[i].favorit);
}

}};

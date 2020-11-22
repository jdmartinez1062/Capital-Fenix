window.onload = function () {
    let objects = Array.from(document.getElementsByClassName('slider'));
    var beforeAfter =  function (e) {
      var e = e.target;
      const pName = e.id.substring(7, e.id.length);
      console.log(pName);
      console.log(e.id);
      document.getElementById("compare-" + pName).style.width = document.getElementById('slider-'+ pName).value + "%";
      
    }
  
    for (var i = 0; i < objects.length; i++) {
  
      document.getElementById(objects[i].id).addEventListener("input", beforeAfter)
      document.getElementById(objects[i].id).addEventListener("change", beforeAfter)
    }
}

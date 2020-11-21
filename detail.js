window.onload = function () {
  console.log("loaded")
  var enter = function (e) {
    var e = e || window.event, el = e.target || el.srcElement;
    if (el) {
      if (el.classList.contains('detail')) {
        el = document.getElementById(el.id + "-back");
        el.classList.toggle('hide-detail');
      }
    }
  };


  var out = function (e) {
    var e = e || document.event, el = e.target || el.srcElement;
    if (el) {
      if (el.classList.contains('detail')) {
        el = document.getElementById(el.id + "-back")
        el.classList.toggle('hide-detail');
      }

    }
  };

  objects = Array.from(document.getElementsByClassName('detail'));
  console.log(objects)
  console.log(objects[0].id)

  for (var i = 0; i < objects.length; i++) {

    document.getElementById(objects[i].id).addEventListener("mouseenter", enter)
    document.getElementById(objects[i].id).addEventListener("mouseleave", out)
  }
};




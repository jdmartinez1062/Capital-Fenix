
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

  let objects1 = Array.from(document.getElementsByClassName('detail'));
  console.log(objects1)
  console.log(objects1[0].id)

  for (var i = 0; i < objects1.length; i++) {
    console.log(objects1[i])
    document.getElementById(objects1[i].id).addEventListener("mouseenter", enter)
    document.getElementById(objects1[i].id).addEventListener("mouseleave", out)
  }





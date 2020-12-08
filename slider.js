window.onload = () => {
  const objects = Array.from(document.getElementsByClassName('slider'));
  const beforeAfter = (e) => {
    e = e.target;
    const pName = e.id.substring(7, e.id.length);
    document.getElementById(`compare-${pName}`).style.width = `${document.getElementById(`slider-${pName}`).value}%`;
  };

  for (let i = 0; i < objects.length; i += 1) {
    document.getElementById(objects[i].id).addEventListener('input', beforeAfter);
    document.getElementById(objects[i].id).addEventListener('change', beforeAfter);
  }
};

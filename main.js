window.onload = function() {
  let result = document.getElementById("result");
  let entry = document.getElementById("entry");
  let start = document.getElementById("start");

  function roulet(list) {
    let count = 0;
    result.className = "processing";
    let id = setInterval(function() {
      result.innerHTML = list[Math.floor(Math.random() * (list.length - 1))];
      count++;
      if (count > 200) {
        clearInterval(id);
        result.className = "processed";
      }
    }, 10);
  }

  start.onclick = function() {
    list = entry.value.split("\n");
    roulet(list);
  }
}

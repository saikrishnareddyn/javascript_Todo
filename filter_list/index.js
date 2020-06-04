function myfunction() {
  var input, filter, ul, li, a, i, textvalue;
  input = document.getElementById("myinput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUl");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textvalue = a.textContent || a.innerText;
    if (textvalue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

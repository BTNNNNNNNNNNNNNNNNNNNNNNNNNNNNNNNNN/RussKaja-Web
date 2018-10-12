// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("guitar").style.display = "none";
    document.getElementById("drum").style.display = "none";
    document.getElementById("logo").style.transform = "scale(0.5)";
    document.getElementById("trompet").style.display = "none";
    document.getElementById("violin").style.display = "none";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("guitar").style.display = "inline";
    document.getElementById("drum").style.display = "inline";
    document.getElementById("logo").style.transform = "scale(1)";
    document.getElementById("trompet").style.display = "inline";
    document.getElementById("violin").style.display = "inline";
  }
}

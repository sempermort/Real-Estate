// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

//Draggable  slider controller
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});

//form2
$(function () {
  $("#slider-range2").slider({
    range: true,
    min: 0,
    max: 100000,
    values: [750, 30000],
    slide: function (event, ui) {
      $("#amount2").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount2").val(
    "$" +
      $("#slider-range2").slider("values", 0) +
      " - $" +
      $("#slider-range2").slider("values", 1)
  );
});


var sales = document.getElementById("sale");
var rental = document.getElementById("rental");



$(".sales").click(function () {
this.classList.add("active1");
rental.classList.remove("active1");
$("#form1").hide();
$("#form2").show();
});

$(".rentals").click(function () {
  this.classList.add("active1");
  sales.classList.remove("active1");
  $("#form2").hide();
$("#form1").show();
});


//navbar on scroll
window.onscroll = scrollFunction;

function scrollFunction() {
  var element1 = document.getElementById("nav1");
   var element = document.getElementById("nav2");
   element.style.transition = "all 2s";
   element1.style.transition = "all 2s";
   if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      element.classList.remove("navbar-dark");
      element.classList.add("bg-white");
  element.classList.add("navbar-light");
  element.classList.add("fixed-top");
  element1.classList.remove("d-flex");
  element1.classList.add("d-none");
   } else if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
     element.classList.remove("bg-white");
  element.classList.add("navbar-dark");
      element.classList.remove("navbar-light");
      element1.classList.remove("d-none");
      element1.classList.add("d-flex");
   }

}
// $(".card-img-overlay").hover(function () {

//   var parent = this.parentNode;
//   var next = parent.nextSibling;
//   next.find("img").css("transform","scale(1.2)")
 
// },
//   function () {
//     var parent = this.parentNode;
//     var next = parent.nextSibling;
//     next.find("img").css("transform","scale(1)")
//   });

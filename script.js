
//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbw-A7CDxYVj_kV2lC1huz6CLqHX7iVniTG78KW1XXeqrDv8GAEDsSxtX0ImkFIlUg2v6A/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
});
//Google Sheet connect code-END

//top-btm scroll code
let l = 0;
let s = $(document).height() - $(window).height();
$(window).scroll(() => {
  let c = $(this).scrollTop();
  if (c > l) {
    $("#top-btn").text("");
    $("#top-btn").append('<i class="fa-solid fa-circle-down fa-2x">');
    $("#top-btn").attr("href", "#footer");
    console.log(c + ":" + s);
  } else {
    $("#top-btn").text("");
    $("#top-btn").append('<i class="fa-solid fa-circle-up fa-2x">');
    $("#top-btn").attr("href", "#header");
    console.log(c + ":" + s);
  }
  l = c;
  if (c == 0) {
    $("#top-btn").text("");
    $("#top-btn").append('<i class="fa-solid fa-circle-down fa-2x">');
    $("#top-btn").attr("href", "#footer");
    console.log(c + ":" + s);
  }
  if (c + 1 >= s) {
    $("#top-btn").text("");
    $("#top-btn").append('<i class="fa-solid fa-circle-up fa-2x">');
    $("#top-btn").attr("href", "#header");
    console.log(c + ":" + s);
  }
});
//top-btm scroll code -END

//Animation on Scroll 
AOS.init();
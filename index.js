
$(".btn").mouseenter(function(event){
  $(event.target).addClass("btn-hover");
});

$(".btn").mouseleave(function(event){
  $(event.target).removeClass("btn-hover");
});



$(".btn").click(function(event){
  //console.log("button clicked");
  $(event.target).removeClass("btn-hover");

    setTimeout(function() {
      $(event.target).addClass("btn-hover");
    }, 100);

  const name = $(event.target).attr("name");

  if(name === "signup-btn")
  {
    $(".login-form").addClass("move-login");
    $(".signup-form").addClass("move-signup");
    // $(".submit-btn").addClass("move-signup-submit");
  }

  else if(name === "login-btn")
  {
    $(".login-form").removeClass("move-login");
    $(".signup-form").removeClass("move-signup");
    // $(".submit-btn").removeClass("move-signup-submit");
  }
});

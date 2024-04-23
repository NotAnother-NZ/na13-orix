//check if the url has rf=careers as a query string
if (window.location.href.indexOf("rf=careers") > -1) {
  console.log("referred from the careers page");

  //hide #label1 and #label2
  $("#label1").addClass("hide");
  // $('#label2').addClass('hide');

  //hide #label1-space and #label2-space
  $("#label1-space").addClass("hide");
  // $('#label2-space').addClass('hide');

  //set the label2 text to 'How can we help?'
  $("#label2").text("How can we help?");

  //hide #yes-lease-show
  $("#yes-lease-show").addClass("hide");

  //remove hide class from #00N6F00000UJsba (Interested in) and add .c-form-field
  $("#00N6F00000UJsba").removeClass("hide");
  $("#00N6F00000UJsba").addClass("c-form-field");
  //remove selected from #00N6F00000UJsba (Interested in)
  $("#00N6F00000UJsba").find("option").removeAttr("selected");
  //remove the first option of #00N6F00000UJsba (Interested in)
  $("#00N6F00000UJsba").find("option").eq(0).remove();
  //create and select Interested in for #00N6F00000UJsba (Interested in)
  var interestedIn = $("<option selected>Interested In</option>");
  //set it as the first option of #00N6F00000UJsba (Interested in)
  $("#00N6F00000UJsba").prepend(interestedIn);

  //hide #00N5i00000JZn7a (Best time to call)
  $("#00N5i00000JZn7a").addClass("hide");

  //hide #lease-show
  $("#lease-show").addClass("hide");
}

if (window.location.href.indexOf("rf=about") > -1) {
  console.log("referred from the about page");

  //hide #label1 and #label2
  $("#label1").addClass("hide");
  // $('#label2').addClass('hide');

  //hide #label1-space and #label2-space
  $("#label1-space").addClass("hide");
  // $('#label2-space').addClass('hide');

  //set the label2 text to 'How can we help?'
  $("#label2").text("How can we help?");

  //hide #yes-lease-show
  $("#yes-lease-show").addClass("hide");

  //remove hide class from #00N6F00000UJsba (Interested in) and add .c-form-field
  $("#00N6F00000UJsba").removeClass("hide");
  $("#00N6F00000UJsba").addClass("c-form-field");
  //remove selected from #00N6F00000UJsba (Interested in)
  $("#00N6F00000UJsba").find("option").removeAttr("selected");
  //remove the first option of #00N6F00000UJsba (Interested in)
  $("#00N6F00000UJsba").find("option").eq(0).remove();
  //create and select Interested in for #00N6F00000UJsba (Interested in)
  var interestedIn = $("<option selected>Interested In</option>");
  //set it as the first option of #00N6F00000UJsba (Interested in)
  $("#00N6F00000UJsba").prepend(interestedIn);

  //hide #00N5i00000JZn7a (Best time to call)
  $("#00N5i00000JZn7a").addClass("hide");

  //hide #lease-show
  $("#lease-show").addClass("hide");
}

//if the url doesnt have a ref query string, then print no referral
if (window.location.href.indexOf("rf=") === -1) {
  console.log("no referral");
}

//check if the current url has a src parameter in it or not, if so print the src value to the console

//eg: https://orix-staging.webflow.io/protected-pdf?src=https://assets-global.website-files.com/64185aed06342422f1e01e2a/645316abd539e14f2b3bb5f3_ORIX_Fair%20Wear%20and%20Tear%20Guide_2023.pdf

if (window.location.href.indexOf("?src=") > -1) {
  console.log(window.location.href.split("?src=")[1]);
  //store the src value in a variable
  let src = window.location.href.split("?src=")[1];
  console.log(src);
  //remove the src parameter from the url so that user doesn't see the src value in the url
  window.history.replaceState({}, document.title, "/" + "protected-pdf");
  //set the src of the iframe #pdf-iframe to the src value
  $("#pdf-iframe").attr("src", src);
} else {
  console.log("No src parameter in the url");
}

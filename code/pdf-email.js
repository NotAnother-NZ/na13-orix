// Set the cookie
function setCookie(name, value, expirationMinutes) {
  const d = new Date();
  d.setTime(d.getTime() + expirationMinutes * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Get the cookie value by name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}

// Remove the cookie by name
function removeCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

let pdfLinksArray = [];

$(".download-pdf-card").each(function (index) {
  pdfLinksArray.push({
    link: $(this).attr("href"),
    name: $(this).find("h3").text().trim()
  });

  $(this).data("index", index);
});

console.log(pdfLinksArray);

const hasEmail = getCookie("hasEmail") === "true";
const email = getCookie("email");

if (email) {
  console.log("Email in cookie:", email);
} else {
  console.log("No email in cookie");
}

pdfLinksArray.forEach(function (pdf) {
  fetch(pdf.link)
    .then((response) => response.text())
    .then((html) => {
      var redirectUrl = html.match(
        /window\.location\.href\s*=\s*"([^"]+)"/i
      )[1];
      console.log(redirectUrl);
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });
});

$(".download-pdf-card").removeAttr("href");
$(".download-pdf-card").css("cursor", "pointer");

$(".download-pdf-card").click(function () {
  const index = $(this).data("index");

  if (
    $(this)
      .find(".pdf-icons")
      .find(".lock-icon")
      .hasClass("w-condition-invisible")
  ) {
    console.log(pdfLinksArray[index].link);
    window.open(pdfLinksArray[index].link, "_blank");
    console.log("No lock icon");
  } else if (hasEmail) {
    console.log("Email in cookie:", email);
    openPdfWithCookie(index);
  } else {
    console.log("No email in cookie");
    $("#pdf-email-open").click();
    $("#pdf-email-form-field").val("");
    $("#pdf-name").val(pdfLinksArray[index].name);
    $("#pdf-email-form-field").click();
    $("#pdf-email-form-submit").addClass("disabled");

    function validateEmail(email) {
      var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      return re.test(email);
    }

    $("#pdf-email-form-field").on("input", function () {
      if (validateEmail($("#pdf-email-form-field").val())) {
        $("#pdf-email-form-submit").removeClass("disabled");
        console.log("Valid email");
      } else {
        $("#pdf-email-form-submit").addClass("disabled");
      }
    });

    $("#pdf-email-form-submit").on("click keypress", function (e) {
      if (e.type === "click" || (e.type === "keypress" && e.which === 13)) {
        if (validateEmail($("#pdf-email-form-field").val())) {
          const email = $("#pdf-email-form-field").val();
          setCookie("hasEmail", "true", 10);
          setCookie("email", email, 10);
          $("#pdf-email-close-btn").click();
          openPdfWithCookie(index);
        }
      }
    });
  }
});

function openPdfWithCookie(index) {
  setTimeout(() => {
    const link = pdfLinksArray[index].link;
    let protectedLink = "/protected-pdf?src=" + encodeURIComponent(link);
    console.log(protectedLink);
    setCookie("protectedLink", protectedLink, 0.00694); // 10 minutes in days
    window.open(protectedLink, "_blank");
    // Wait for 250ms
    setTimeout(() => {
      removeCookie("protectedLink");
      // Reload the current page
      location.reload();
    }, 250);
  }, 250);
}

// Continuously set #pdf-email-success to display none
setInterval(() => {
  $("#pdf-email-success").css("display", "none");
}, 10);

// Continuously set #wf-form-pdf-email to display flex
setInterval(() => {
  $("#wf-form-pdf-email").css("display", "flex");
}, 10);

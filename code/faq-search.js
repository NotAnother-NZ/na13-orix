//if the url of the page has ?query= in it, then set the value of #search-faq-textbox to the value of query
if (window.location.href.indexOf("?query=") > -1) {
  let query = window.location.href.split("?query=")[1];
  //remove %20 from query and replace it with a space
  query = query.replace(/%20/g, " ");
  $("#search-faq-textbox").val(query);
  //call searchFAQ function
  searchFAQ(query);
  $("#search-textbox").val("");
}

//prevent search button to submit the form #faq-form
$("#faq-search-btn").click(function (e) {
  e.preventDefault();
});

//remove action from #faq-form
$("#faq-form").removeAttr("action");

//remove required attribute from #search-faq-textbox
$("#search-faq-textbox").removeAttr("required");

//prevent enter key from submitting the form #faq-form
$("#faq-form").submit(function (e) {
  e.preventDefault();
});

//create an array and store all the h2 elements' text in it
let faqH2TextArray = [];
$(".faq-question").each(function () {
  faqH2TextArray.push($(this).text());
});

//create an array and store all the p elements' text in it, inside .faq-rich-content
let faqPTextArray = [];
$(".faq-rich-content p").each(function () {
  faqPTextArray.push($(this).text());
});

// console.log(faqH2TextArray);
// console.log(faqPTextArray);

//make these arrays into one 2D array
let faqTextArray = [faqH2TextArray, faqPTextArray];
//console.log(faqTextArray);

// function searchFAQ(searchTerm) {
//     // Iterate through each element in the faqTextArray
//     for (let i = 0; i < faqTextArray.length; i++) {
//         const section = faqTextArray[i];
//         const sectionType = i === 0 ? 'Question' : 'Answer'; // Track section type

//         // Iterate through each item in the current section
//         for (let j = 0; j < section.length; j++) {
//             const item = section[j];

//             // Check if the search term is found in the current item
//             if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
//                 console.log(`Match found in ${sectionType}: ${item}`);
//             }
//         }
//     }
// }

// function searchFAQ(searchTerm) {
//     // Iterate through each element in the faqTextArray
//     $('.faq-question').each(function () {
//         const questionText = $(this).text();
//         const $questionElement = $(this).parent().parent().parent().parent();
//         const $answerElement = $questionElement.find('.faq-rich-content');

//         if (questionText.toLowerCase().includes(searchTerm.toLowerCase())) {
//             $questionElement.removeClass('hide');
//             $answerElement.removeClass('hide');
//             //console.log(`Match found in Question: ${questionText}`);
//         } else {
//             const answerText = $answerElement.find('p').text();
//             if (answerText.toLowerCase().includes(searchTerm.toLowerCase())) {
//                 $questionElement.removeClass('hide');
//                 $answerElement.removeClass('hide');
//                 //console.log(`Match found in Answer: ${answerText}`);
//             } else {
//                 $questionElement.addClass('hide');
//                 $answerElement.addClass('hide');
//             }
//         }
//     });
// }

function searchFAQ(searchTerm) {
  const keywords = searchTerm.toLowerCase().split(" ");

  $(".faq-question").each(function () {
    const questionText = $(this).text();
    const $questionElement = $(this).parent().parent().parent().parent();
    const $answerElement = $questionElement.find(".faq-rich-content");
    const questionMatches = keywords.every((keyword) =>
      questionText.toLowerCase().includes(keyword)
    );

    if (questionMatches) {
      $questionElement.removeClass("hide");
      $answerElement.removeClass("hide");
    } else {
      const answerText = $answerElement.find("p").text();
      const answerMatches = keywords.every((keyword) =>
        answerText.toLowerCase().includes(keyword)
      );

      if (answerMatches) {
        $questionElement.removeClass("hide");
        $answerElement.removeClass("hide");
      } else {
        $questionElement.addClass("hide");
        $answerElement.addClass("hide");
      }
    }
  });
}

// As soon as something is written in the #search-faq-textbox, call the search function
$("#search-faq-textbox").keyup(function () {
  const searchTerm = $(this).val();
  searchFAQ(searchTerm);
  //set the text of #faq-searched-item to $(this).val()
  $("#faq-searched-item").text($(this).val());

  //add ?query=$(this).val() to the url of the page
  window.history.pushState("", "", "?query=" + $(this).val());

  //keep the #search-textbox empty
  $("#search-textbox").val("");
});

//total t1 items
let totalT1 = $(".faq_cms-accordion-item.t1").length;
//console.log(totalT1);
let totalT2 = $(".faq_cms-accordion-item.t2").length;
//console.log(totalT2);

//check how many elements with class .faq_cms-accordion-item .t1 have class .hide
function checkHowManyHidden1() {
  let count = 0;
  $(".faq_cms-accordion-item.t1").each(function () {
    if ($(this).hasClass("hide")) {
      count++;
    }
  });
  return count;
}

//check how many elements with class .faq_cms-accordion-item .t2 have class .hide
function checkHowManyHidden2() {
  let count = 0;
  $(".faq_cms-accordion-item.t2").each(function () {
    if ($(this).hasClass("hide")) {
      count++;
    }
  });
  return count;
}

function t1hide() {
  //if checkHowManyHidden1() is equal to totalT1, then add hide class to .faqs-col-list-item.t1, else remove hide class from .faqs-col-list-item.t1
  if (checkHowManyHidden1() === totalT1) {
    $(".faqs-col-list-item.t1").addClass("hide");
  } else {
    $(".faqs-col-list-item.t1").removeClass("hide");
  }
}

function t2hide() {
  //if checkHowManyHidden2() is equal to totalT2, then add hide class to .faqs-col-list-item.t2, else remove hide class from .faqs-col-list-item.t2
  if (checkHowManyHidden2() === totalT2) {
    $(".faqs-col-list-item.t2").addClass("hide");
  } else {
    $(".faqs-col-list-item.t2").removeClass("hide");
  }
}

function t1t2hide() {
  //if both t1 and t2 have all items hidden, then remove hide class from #t1t2-no, else add hide class to #t1t2-no
  if (checkHowManyHidden1() === totalT1 && checkHowManyHidden2() === totalT2) {
    $("#t1t2-no").removeClass("hide");
  } else {
    $("#t1t2-no").addClass("hide");
  }
}

setInterval(function () {
  //console.log(checkHowManyHidden1() + " items are hidden in t1");
  //console.log(checkHowManyHidden2() + " items are hidden in t2");

  t1hide();
  t2hide();
  t1t2hide();
}, 10);

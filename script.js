// Part 1 Task 0: Setup
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Part 1 Task 1: Selectors & CSS
  // tag selector
  $("h1").css("color", "blue");
  // class selector
  $(".intro").css("font-style", "italic");
  // ID selector with .text() and .html()
  $("#changeHeadline").click(function () {
    $("#headline").text("Aspiring Full-Stack Developer");
    $("#name").html("<i>Your Name</i>");
  });
  // light and dark theme with .css()
  $("#darkTheme").click(function () {
    $("body").css("background-color", "black");
    $("body").css("color", "white");
    $(".heading").css("background-color", "#333");
    $(".heading").css("color", "white");
  });
  $("#lightTheme").click(function () {
    $("body").css("background-color", "white");
    $("body").css("color", "black");
    $(".heading").css("background-color", "#eee");
    $(".heading").css("color", "black");
  });

  // Part 2 Task 2: Visibility Methods
  $("#hideBtn").click(function () {
    $("#status").hide();
    $("#funFacts").hide();
  });
  $("#showBtn").click(function () {
    $("#status").show();
    $("#funFacts").show();
  });
  $("#toggleBtn").click(function () {
    $("#status").toggle();
    $("#funFacts").toggle();
  });

  // Part 2 Task 3: Fade Methods
  $("#fadeInBtn").click(function () {
    $(".photo").fadeIn();
  });
  $("#fadeOutBtn").click(function () {
    $(".photo").fadeOut();
  });
  $("#fadeToggleBtn").click(function () {
    $(".photo").fadeToggle();
  });

  // Part 2 Task 4: Slide Methods
  // click on a heading opens or closes the panel right after it
  $(".heading").click(function () {
    $(this).next().slideToggle();
  });
  $("#slideUpBtn").click(function () {
    $(".panel").slideUp();
  });
  $("#slideDownBtn").click(function () {
    $(".panel").slideDown();
  });

  // Part 3 Task 5: Add & Remove Elements
  $("#addSkill").click(function () {
    var skill = $("#skillInput").val();
    if (skill == "") {
      $("#skillError").text("Skill cannot be empty!");
    } else {
      $("#skillError").text("");
      $("#skillList").append("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });
  $("#prependSkill").click(function () {
    var skill = $("#skillInput").val();
    if (skill == "") {
      $("#skillError").text("Skill cannot be empty!");
    } else {
      $("#skillError").text("");
      $("#skillList").prepend("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });
  // removes the last skill from the list
  $("#removeSkill").click(function () {
    $("#skillList li:last").remove();
  });

  // Part 3 Task 6: Modifying Attributes
  $("#changeLink").click(function () {
    $("#socialLink").attr("href", "https://www.linkedin.com");
    $("#socialLink").text("LinkedIn");
  });

  // Part 3 Task 7: Form Interaction
  $("#nameInput").keyup(function () {
    $("#nameOutput").text($("#nameInput").val());
  });
  $("#emailInput").keyup(function () {
    $("#emailOutput").text($("#emailInput").val());
  });

  // Part 4 Task 8: Basic Animation
  var filled = false;
  $("#animateSkills").click(function () {
    if (filled == false) {
      // different target width for each bar
      $("#bar1").animate({ width: "90%" }, 1000);
      $("#bar2").animate({ width: "75%" }, 1000);
      $("#bar3").animate({ width: "60%" }, 1000);
      $("#bar4").animate({ width: "40%" }, 1000);
      filled = true;
    } else {
      // back to zero
      $("#bar1").animate({ width: "0%" }, 1000);
      $("#bar2").animate({ width: "0%" }, 1000);
      $("#bar3").animate({ width: "0%" }, 1000);
      $("#bar4").animate({ width: "0%" }, 1000);
      filled = false;
    }
  });
});
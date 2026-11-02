// Part 1 Task 0
$(document).ready(function () {
  console.log("jQuery is ready!");

  //Task 1
 
  $("h1").css("color", "blue");

  $(".intro").css("font-style", "italic");

  $("#changeHeadline").click(function () {
    $("#headline").text("Aspiring Full-Stack Developer");
    $("#name").html("<i>Abbaskhan Ibraimov</i>");
  });

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

  // Part 2 Task 2
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

  //Task 3
  $("#fadeInBtn").click(function () {
    $(".photo").fadeIn();
  });
  $("#fadeOutBtn").click(function () {
    $(".photo").fadeOut();
  });
  $("#fadeToggleBtn").click(function () {
    $(".photo").fadeToggle();
  });

  // Task 4
 
  $(".heading").click(function () {
    $(this).next().slideToggle();
  });
  $("#slideUpBtn").click(function () {
    $(".panel").slideUp();
  });
  $("#slideDownBtn").click(function () {
    $(".panel").slideDown();
  });

  // Part 3 Task 5
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

  $("#removeSkill").click(function () {
    $("#skillList li:last").remove();
  });

  //Task 6
  $("#changeLink").click(function () {
    $("#socialLink").attr("href", "https://www.linkedin.com");
    $("#socialLink").text("LinkedIn");
  });

  //Task 7
  $("#nameInput").keyup(function () {
    $("#nameOutput").text($("#nameInput").val());
  });
  $("#emailInput").keyup(function () {
    $("#emailOutput").text($("#emailInput").val());
  });

  // Part 4 Task 8
  var filled = false;
  $("#animateSkills").click(function () {
    if (filled == false) {
    
      $("#bar1").animate({ width: "90%" }, 1000);
      $("#bar2").animate({ width: "75%" }, 1000);
      $("#bar3").animate({ width: "60%" }, 1000);
      $("#bar4").animate({ width: "40%" }, 1000);
      filled = true;
    } else {
    
      $("#bar1").animate({ width: "0%" }, 1000);
      $("#bar2").animate({ width: "0%" }, 1000);
      $("#bar3").animate({ width: "0%" }, 1000);
      $("#bar4").animate({ width: "0%" }, 1000);
      filled = false;
    }
  });
});
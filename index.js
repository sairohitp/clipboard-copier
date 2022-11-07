$(document).ready(function () {
  var textcontent = $("#text");
  var message = $("#message");

  var footerText = $("#footerText");

  var info = $(".fa-info");
  var about = $(".fa-user");
  var share = $(".fa-share");
  var theme = $(".fatheme");

  $("#copy-btn").click(function () {
    if (textcontent.val() == "") {
      message.html("Nothing to Copy").fadeIn(100);
      message.html("Nothing to Copy").delay(500).fadeOut();
    } else {
      textcontent.select();
      document.execCommand("copy");
      message.html("Copied").fadeIn(100);
      message.html("Copied").delay(500).fadeOut();
    }
  });

  $("#clear-btn").click(function () {
    if (textcontent.val() == "") {
      message.html("Nothing to clear").fadeIn(100);
      message.html("Nothing to clear").delay(500).fadeOut();
    } else {
      textcontent.val("");
      message.html("Console cleared").fadeIn(100);
      message.html("Console cleared").delay(500).fadeOut();
    }
  });

  $("#rand-btn").click(function () {
    textcontent.val(
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, perspiciatis."
    );
    message.html("Random Lorem Generated").fadeIn(100);
    message.html("Random Lorem Generated").delay(500).fadeOut();
  });

  function footerTextChange(text) {
    footerText.hide().html(text).fadeIn(200);
  }

  info.mouseover(function () {
    footerTextChange("About");
  });

  info.mouseleave(function () {
    footerTextChange("&copy; ThinkStrange");
  });

  about.mouseover(function () {
    footerTextChange("Profile");
  });

  about.mouseleave(function () {
    footerTextChange("&copy; ThinkStrange");
  });

  share.mouseover(function () {
    footerTextChange("Share");
  });

  share.mouseleave(function () {
    footerTextChange("&copy; ThinkStrange");
  });

  theme.mouseover(function () {
    footerTextChange("Toggle Theme");
  });

  theme.mouseleave(function () {
    footerTextChange("&copy; ThinkStrange");
  });
});

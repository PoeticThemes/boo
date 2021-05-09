/** This JS file is added for the future usage, It will be utilized when required.*/

function loadData(chats) {
  for (i = 0; i < chats.length; i++) {
    if (chats[i].from == "Operator") {
      $("#chatHistory").append(
        "<div class='History'>" +
          "<div class='his_from'>" +
          chats[i].from +
          "</div>" +
          "<div class='his_message'>" +
          chats[i].message +
          "</div>" +
          "<div class='his_date'>" +
          chats[i].datetime +
          "</div>" +
          "</div>"
      );

      $("#chatHistory").append("<br>");
    } else if (chats[i].from == "Visitor") {
      $("#chatHistory").append(
        "<div class='History_Visitor'>" +
          "<div class='his_from'>" +
          chats[i].from +
          "</div>" +
          "<div class='his_message'>" +
          chats[i].message +
          "</div>" +
          "<div class='his_date'>" +
          chats[i].datetime +
          "</div>" +
          "</div>"
      );
    }
  }
}

var handlehistory = (e) => {
  chat.getChatHistory(loadData);

  if (document.getElementById("open-button").style.display == "none") {
    document.getElementById("open-button").style.display = "block";
    document.getElementById("myForm").style.display = "none";
  } else {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("open-button").style.display = "none";
  }
};

var handlesubmit = (e) => {
  e.preventDefault();
  var message = document.getElementById("chatInput").value;
  document.getElementById("chatInput").value = "";
  chat.sendChat(message);
};
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open-button").style.display = "block";
}

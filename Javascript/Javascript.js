
function textReply(event) {
    event.preventDefault(); //prevents the form from being submitted
    var inputText = document.getElementById("text-box").value; // this retrieves the value entered in the id "text-box"
    var replyDiv = document.getElementById("reply"); // where the response message will be displayed
    replyDiv.textContent = "Thank you for reaching out! You will recieve a response from us very shortly.";
    replyDiv.style.display = "block"; // this is to ensure the <div> is visible on the page

   
    document.getElementById("text-box").value = ""; // this clears the text boxes once submitted, making it ready for the next input
  }
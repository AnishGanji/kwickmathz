// You can add interactivity later, like quizzes, points, etc.
console.log("KwickMathZ App Loaded!");

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.email]);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }

document.getElementById('email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;

  fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('response-msg').innerText = "You're on the list! ✅";
    document.getElementById('email').value = "";
  })
  .catch(error => {
    console.error('Error!', error.message);
    document.getElementById('response-msg').innerText = "Oops! Something went wrong.";
  });
});

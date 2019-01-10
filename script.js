// function makeNotification() {
//   Push.create('Hi there');
// }

// makeNotification();

var checkBtn = document.getElementById('checkBtn');
var permissionStatus = document.getElementById("permission-status");

checkBtn.addEventListener("click", checkPermissions);

function checkPermissions(evt) {
  console.log(Push.Permission.has());
  console.log(Push.Permission.get());

  if (Push.Permission.has()) {
    permissionStatus.innerHTML = "Permission granted!";
  } else {
    permissionStatus.innerHTML = "Permission denied!";
  }
  permissionStatus.style.display = "block";
  setTimeout(function () {
    permissionStatus.style.display = "none";
  }, 3000);
}

var notifyBtn = document.getElementById("notifyBtn");

notifyBtn.addEventListener("click", showNotification);

function showNotification(evt) {
  Push.create("Hello!", {
    body: "This is a push notification!",
    icon: "images/icon.png",
    timeout: 3000,
    onClick: function() {
      console.log(this);
    }
  });
}

var clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", clearNotifications);

function clearNotifications(evt) {
  Push.clear();
}
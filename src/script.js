document.addEventListener('DOMContentLoaded', function () {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
           var data = JSON.parse(this.responseText);
           displayUserInfo(data);
         }
       };
       xhttp.open("GET", "data.json", true);
       xhttp.send();
     });

     function displayUserInfo(data) {
       var userInfoElement = document.getElementById('userInfo');
       userInfoElement.innerHTML = `Name: ${data.name}<br>Age: ${data.age}<br>City: ${data.city}`;
     }
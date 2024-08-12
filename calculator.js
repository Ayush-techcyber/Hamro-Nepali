function allButtons(){
    document.getElementById('output').innerHTML =
    `
    <p>Hamro Nepali Group</p>
    <button id="button" onclick="showAddInput()">Click to learn more about us</button>
    <button id="button" onclick="showSubtractionInput()">Meet the officers</button>
    <button id="button" onclick="memberJoin()">Member Resources</button>
    <div id="inputarea"></div>
    `
}
allButtons();
function showAddInput(){
  document.getElementById('inputarea').innerHTML=
   `
  <div id="LAST">Hamro Nepali Group, a teen-led initiative, is dedicated to promoting and preserving Nepali culture. We host and participate in events as well as offering opportunities to Nepali youth
  </div>
  <button class="img-size" id="insta" onclick="window.location.href='https://www.instagram.com/hamronepaligroup/';">Click here to follow our instagram 
  <img src="1384063.png"/></button>
 `
}
function memberJoin(){
  document.getElementById('inputarea').innerHTML=
   `
  <div id="gc">Join our Google Classroom<br>
  Code:pe4x2gn</div>
  <button id="form" onclick="window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfcF-BtWLgH9rsCXttisTFjMiDiUGh-zaxmQMHSP-cyTxBWDA/viewform';">Click to become a member!</button>
 `
}

function showSubtractionInput(){
  document.getElementById('inputarea').innerHTML=
   `
  <div id="LAST1">
  <img id="kitu"src="kitu.PNG"><br><br>
  Kitu Acharya <br>(President)
  </div>
  <div id="LAST2">  
  <img id="diptee"src="diptee.PNG"><br>
  Diptee Yadav<br> (Chief Managing Director)
  </div>
  <div id="LAST3">  
  <img id="abhinam"src="abhinam.PNG"><br>
  Abhinam Bhandari<br> (Vice President)
  </div>
  <div id="LAST4">  
  <img id="ayush"src="ayush.JPG"><br>
  Ayush Singh<br> (Co-Executive Technology Director)
  </div>
  <div id="LAST5">  
  <img id="sangit"src="sangit.jpg"><br>
  Sangit Kafle<br> (Co-Executive Technology Director)
  </div>
  <div id="LAST6">  
  <img id="logo"src="logo.png">
  </div>
  
  `
}




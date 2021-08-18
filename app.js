function showtime(){
    var time = new Date();
    var seconds = time.getSeconds();
    var minute = time.getMinutes();
    var hours = time.getHours();
    var date = time.getDate();
    var month = time.getMonth();
    var moNth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (month === 0){
       month = moNth[0];
    }else if (month === 1){
        month = moNth[1];
     }else if (month === 2){
        month = moNth[2];
     }else if (month === 3){
        month = moNth[3];
     }else if (month === 4){
        month = moNth[4];
     }else if (month === 5){
        month = moNth[5];
     }else if (month === 6){
        month = moNth[6];
     }else if (month === 7){
        month = moNth[7];
     }else if (month === 8){
        month = moNth[8];
     }else if (month === 9){
        month = moNth[9];
     }else if (month === 10){
        month = moNth[10];
     }else if (month === 11){
        month = moNth[11];
     }else{
       alert("please set month");
     }
    var year = time.getFullYear();
    var ab = seconds.toString();
    var bc = minute.toString();
    var cd = hours.toString();
    var de = date.toString();
    var ef = month.toString();
    var fg = year.toString();
    document.getElementById("time").innerHTML = de + "," + ef + "," + fg + " = " + cd + ":"+ bc + ":" + ab;
}
setInterval("showtime()", 1000);




var userobj = [{}];

function signup(){
   
   
    var supfname = document.getElementById("sufname").value;
    var suplname = document.getElementById("sulname").value;
    var supmail = document.getElementById("sumail").value;
    var suppass = document.getElementById("supass").value;
    var sucpass = document.getElementById("sucpass").value;

    if (suppass === sucpass){
       suppass = suppass;
    }else {
     return alert("Please enter correct password")
    }
    userobj.push({"fname" : supfname, "lname" : suplname, "email" : supmail, "password" : suppass})
    
   localStorage.setItem("userobj", JSON.stringify(userobj));
   
   var aa = (localStorage.getItem("userobj"));
   var bb = JSON.parse(aa);
   
   if (supfname.length !== 0 && suplname.length !== 0 && supmail.length !== 0 && suppass.length !== 0){
   location.assign("../signin/Signin.html");
}else {
   alert("Please fillout all fields")
}


   }


function user(){
   // var name = localStorage.getItem("firstname");
   // var laname = localStorage.getItem("lastname");
      var username = document.getElementById('simail').value;
      var password = document.getElementById('sipass').value;

      var aa = (localStorage.getItem("userobj"));
      var bb = JSON.parse(aa);
      
      if (username.length === 0 ){
         if (password.length === 0){
        return alert("Please fillout all fields")
      }
   }
   
      for (var i = 0; i < bb.length; i++) {
        if (username === bb[i].email) {
         if (password === bb[i].password){
           var uRl =  location.assign("../index.html");
            return uRl;
         }else {
            return alert('wrong Email or password');
            //  return alert('wrong username')
           }
         } 
      }
   
   alert('wrong Email or password')
   
   }

   // var cpassword = localStorage.getItem("confirmpassword");
   // console.log(name, laname, email, password, cpassword)



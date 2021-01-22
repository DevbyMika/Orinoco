var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var camerasList = JSON.parse(this.responseText);
         console.log(camerasList);
 };
};
 xhr.open("GET","http://localhost:3000/api/cameras",true)
 xhr.send();


 


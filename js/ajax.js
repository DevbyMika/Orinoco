async function CamerasList() {
    var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var cameras = JSON.parse(this.responseText);
         console.log(cameras);
         camerasList(cameras);
 };
};
 xhr.open("GET","http://localhost:3000/api/cameras")
 xhr.send();
}
CamerasList();


 


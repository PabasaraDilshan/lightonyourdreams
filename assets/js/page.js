function getUrlVars() { 
    var vars = {}; 
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { 
       vars[key] = value; 
    });
    return vars; 
}
var f = getUrlVars()["name"];
console.log(typeof f);
var dt = firebase.database();
dt.ref("pages").once('value',(snapshot)=>{
    var data = snapshot.val()
    for(i in data){
        console.log(i);
        if(data[i]["id"] == f){
            document.getElementById("title").innerHTML = data[i]["title"]
            document.getElementById("body").innerHTML = data[i]["body"]
        }
    }
});



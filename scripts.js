var httpRequest = new XMLHttpRequest();
var launchAry = [];
document.getElementById('next5').addEventListener('click', function() {

    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5");
    httpRequest.send();
    httpRequest.onreadystatechange = getLaunchInfo;

    
});

function getLaunchInfo() {
    var nextLaunch = httpRequest.responseText;
    var list = "";
    var jsObj = JSON.parse(nextLaunch);
    
    function launch(name, date) {
        this.launchName = name;
        this.launchDate = date;
    }

    var launchName = jsObj.name;
    var launchDate = jsObj.windowstart;
    const newLaunch = new launch(launchName, launchDate);
    launchAry.push(newLaunch);
    console.log(newLaunch);
}
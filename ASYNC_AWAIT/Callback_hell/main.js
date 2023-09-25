function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
        callback(xmlHttp);
    };
    xmlHttp.open('GET', Url, true);
    xmlHttp.send(null);
  }
  
  for (let i = 1; i <= 3; i++) {
    httpGetAsync('https://picsum.photos/200/300', (data) => {
      console.log(i, data);
      document.getElementById(`img_${i}`).setAttribute('src', data.responseURL);
    });
  }
  
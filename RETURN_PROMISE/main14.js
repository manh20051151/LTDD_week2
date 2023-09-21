var f = function (resolve, reject) {
    resolve(); 
}

var promise = new Promise(f);

promise
    .then(function () {
        return new Promise(function(resolve) {
            setTimeout(resolve, 3000);
        });
    })
    .then(function () {
        console.log('2');
    })
    .then(function () {
        console.log('3');
    });

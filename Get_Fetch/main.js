fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(
        (data) => {
            var htmls = data.map(
                function (post) {
                    return `<li> 
                        <h2>${post.id}</h2>
                        <h2>${post.title}</h2>
                    </li>`;
                }
            );
            var html = htmls.join('');
            document.getElementById('info').innerHTML = html;
        }
    )
    .catch((error) => console.log('Có lỗi!', error));


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));



fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

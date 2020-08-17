const searchString = window.location.search;
const searchVars = searchString.split('&');
const postId = searchVars.find((search) => search.includes('id=')).split('=')[1];
fetch('http://jsonplaceholder.typicode.com/posts/' + postId)
  .then(res => res.json())
  .then(post => {
       const title = document.querySelector('[data-post-title]');
       const body = document.querySelector('[data-post-body]');

       title.innerText = post.title;
       body.innerText = post.body;
  });
console.log(postId);
//RESTful API
//REpresentational State Transfer

//Endpoint: http://url.com/api/v2/
//Resource: /posts, /users, /articles ... 
//HTTP methods
//POST         Create: http://url.com/api/v2/users
//GET          Read:   http://url.com/api/v2/users; http://url.com/api/v2/users/12
//PUT / PATCH  Update: http://url.com/api/v2/users/12, la PUT trimitem toata identitatea, PATCH update partial
//DELETE       Delete: http://url.com/api/v2/users/12

const promise = fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) =>res.json())
    .then(function(data) {
       //take only the first 15 responses
        const posts = data.slice(0, 15);
        //take only the title
        const titles = posts.map((post) => post.title);
        //create a list of links with titles
        const list = createPostList(titles);
        //insert this list into HTML

        document.body.appendChild(list);

        /** 
        for (const prop in posts[0]) {
            console.log(prop, posts[0]);
        }
        */
       
    });
 function createPostList(titles){
     /*
     for(let i = 0; i< titles.length; i++){
         const title = titles[i];
     }
     */

     //Array destructuring
     //const [index, value, ...rest] = [0, 'titlu', 2332432];
     //console.log(index, value, rest);

     const fragment = document.createDocumentFragment();


     for(const title of titles) {
         const p = document.createElement('p'); // <p></p>
         const a = document.createElement('a');// <a></a>

         a.innerText =title;
         a.href = 'postDetails.html?id=' + 2;
         p.appendChild(a);  // <p> <a> Lorem Ipsum </a></p>

         fragment.appendChild(p);

         // Recomandare: nu faceti mutatii pe HTMO randat intr-un for!!!! 
         ///Nuuuuuu: document.body.appendChild(p);
     }

     return fragment;
    
 }

//promise.then(console.log);

//Funcion Declaration
function definedFunction() {
   //dsadadsa
}

//Function Expression
const expressionFunction = function() { 
   //asdasdad
};

//IIFE
(function() {
  //dsadadsa
})();

// Eval is Evil
const constructedFunction = Function('console.log("hello")');

//arrow function
const arrowFunction = (param, param1) => console.log('test');
arrowFunction(1, 2);

const arrowFunction1 = () => 'Paul';
console.log(arrowFunction1());
/** 
const obj = {
    test: 1,
    altul0: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus et ex in sint vel, sunt atque eveniet neque.Sed minima omnis quo unde, numquam ipsam nostrum iste ratione dolorum tempore0',
    altul1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus et ex in sint vel, sunt atque eveniet neque.Sed minima omnis quo unde, numquam ipsam nostrum iste ratione dolorum tempore0',
    altul2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus et ex in sint vel, sunt atque eveniet neque.Sed minima omnis quo unde, numquam ipsam nostrum iste ratione dolorum tempore0',
    altul3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus et ex in sint vel, sunt atque eveniet neque.Sed minima omnis quo unde, numquam ipsam nostrum iste ratione dolorum tempore0',
}
console.log(obj);
obj.altul0='Paul';
*/
console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
for(let i = 0; i < 100; i++ ){
    console.log(8);
}
console.log(4);

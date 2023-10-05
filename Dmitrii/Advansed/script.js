// /////////////////////////// //
// //////// Advansed ///////// //
// /////////////////////////// //

let booksStr = `[{
  "title": "Javascript for Dummies",
  "author": "Dummy Dumb Dumb",
  "read": false,
  "img": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
  }, {
  "title": "Python for Beginners",
  "author": "Smart Starters",
  "read": true,
  "img": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHl0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60"
  }, {
  "title": "Web Development 101",
  "author": "Code Mastermind",
  "read": true,
  "img": "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2ViJTIwRGV2ZWxvcG1lbnQlMjAxMDF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"
  }, {
  "title": "Java Programming Essentials",
  "author": "CoffeeCoder",
  "read": false,
  "img": "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
  }, {
  "title": "Machine Learning Made Easy",
  "author": "Data Geek",
  "read": true,
  "img": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"
  }, {
  "title": "Creative Coding with Processing",
  "author": "Artistic Developer",
  "read": true,
  "img": "https://plus.unsplash.com/premium_photo-1661685876674-ab0db90d67ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3JlYXRpdmUlMjBDb2Rpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"
  }, {
  "title": "iOS App Development Guide",
  "author": "Swift Enthusiast",
  "read": false,
  "img": "https://images.unsplash.com/photo-1669488826010-cc716665c768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aU9TJTIwQXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"
  }, {
  "title": "Data Structures and Algorithms in C++",
  "author": "Algorithm Wizard",
  "read": false,
  "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QvkmUiUrvn9ikGqMYU_t-193Sj2P1jxk5A&usqp=CAU"
  }]`;

let booksObj = JSON.parse(booksStr);

/// Lokal storage
if (localStorage.getItem('books')) {
  booksObj = JSON.parse(localStorage.getItem('books'));
}

const result = document.querySelector('#result');

for (let i = 0; i < booksObj.length; i++) {
  result.innerHTML += ` <div>
  <div class="card my-2 my-card">
  <img src="${booksObj[i].img}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${booksObj[i].title}</h5>
  <p class="card-text">Autor: ${booksObj[i].author}</p>
  <a href="#" class="btn btn-primary my-btn"></a>
  </div>
  </div>
  </div>
  `;
}
// console.log(JSON.stringify(booksObj));
const btns = document.querySelectorAll('.my-btn');
const cards = document.querySelectorAll('.my-card');

for (let i = 0; i < booksObj.length; i++) {
  if (booksObj[i].read == true) {
    btns[i].innerHTML = 'Read';
    cards[i].style.backgroundColor = '#ffffff';
  } else {
    btns[i].innerHTML = 'Not read yet';
    cards[i].style.backgroundColor = '#f4f4f4';
  }
  btns[i].addEventListener('click', function () {
    if (booksObj[i].read == true) {
      btns[i].innerHTML = 'Not read yet';
      cards[i].style.backgroundColor = '#f4f4f4';
      booksObj[i].read = false;
      localStorage.setItem('books', JSON.stringify(booksObj));
    } else {
      btns[i].innerHTML = 'Read';
      cards[i].style.backgroundColor = '#ffffff';
      booksObj[i].read = true;
      localStorage.setItem('books', JSON.stringify(booksObj));
    }
  });
}

// console.log(JSON.parse(localStorage.getItem('books')));

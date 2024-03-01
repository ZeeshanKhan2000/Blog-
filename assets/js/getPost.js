// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSxL9wir4yTvWnpL985wpxEf7JqUJ7mZE",
    authDomain: "blog-web-20c2e.firebaseapp.com",
    projectId: "blog-web-20c2e",
    storageBucket: "blog-web-20c2e.appspot.com",
    messagingSenderId: "975915690423",
    appId: "1:975915690423:web:98088690609a70eb08a032",
    databaseURL: "https://blog-web-20c2e-default-rtdb.firebaseio.com/"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();


function displayPosts() {
    const postsContainer = document.getElementById('blogPostsContainer');
  
    // Clear previous posts
    postsContainer.innerHTML = '';
  
    // Retrieve posts from Firebase
    database.ref('posts').once('value', snapshot => {
      snapshot.forEach(childSnapshot => {

        const post = childSnapshot.val();
        console.log(post)
        const postHTML = `
          <div class="blog-post">
            <div class="blog-content">
              <h2>${post.title}</h2>
              <p>${post.description}</p>
            </div>
            <div class="blog-image">
              <img src="${post.image}" alt="">
            </div>
          </div>
        `;
        postsContainer.innerHTML += postHTML;
      });
    });
  }
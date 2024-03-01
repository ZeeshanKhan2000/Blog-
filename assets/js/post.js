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
  
  // Function to save post data
  function savePostData(title, image, description, category) {
    const postData = {
      title: title,
      image: image,
      description: description,
      category: category
    };
  
    // Push the post data to Firebase
    database.ref('posts').push(postData);
  }
  
  // Function to retrieve and display posts on index.html
  
  
  // Function to clear the form after submission
  function clearPost() {
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-image').value = '';
    document.getElementById('blog-description').value = '';
    document.getElementById('categories').value = 'default';
  }
  


  // Event listener for the form submit button
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('blog-title').value;
    const image = document.getElementById('blog-image').value;
    const description = document.getElementById('blog-description').value;
    const category = document.getElementById('categories').value;
  
    // Save the post data
    savePostData(title, image, description, category);
    // Clear the form
    // clearPost();
    window.location.href = "/index.html";
  });
  
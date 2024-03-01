// const getTitle = document.getElementById("blog-title")
// const getBlogImage = document.getElementById("blog-image")
// const getDescription = document.getElementById("blog-description")
// const getCategories = document.getElementById("categories")
// const form = document.getElementById("submit")


// function createPost() {
//     console.log(getTitle.value, "blog-title");
//     console.log(getBlogImage.value, "blog-image");
//     console.log(getDescription.value, "blog-description");
//     console.log(getCategories.value, "categories");

// }

// function clearPost() {
//     getTitle.value = "";
//     getBlogImage.value = "";
//     getDescription.value = "";
//     getCategories.value = "";

// }







// const firebaseConfig = {
//     apiKey: "AIzaSyCSxL9wir4yTvWnpL985wpxEf7JqUJ7mZE",
//     authDomain: "blog-web-20c2e.firebaseapp.com",
//     projectId: "blog-web-20c2e",
//     storageBucket: "blog-web-20c2e.appspot.com",
//     messagingSenderId: "975915690423",
//     appId: "1:975915690423:web:98088690609a70eb08a032",
//     databaseURL: "https://blog-web-20c2e-default-rtdb.firebaseio.com/"
// };


// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // var database = firebase.database();

// function writeUserData(title, img, desc, blog_catogory) {
//     firebase.database().ref('blogs/' + title).set({
//       blog_title: title,
//       blog_description: desc,
//       blog_image : img,
//       blog_category: blog_catogory ,
//     });





//   }













// // All Functions
// // Function to show error
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }





// // Function to show success
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }





// // This is an event listener for the form on submit
// form.addEventListener('click', function (e) {
//     e.preventDefault();

//     createPost()

//     if (getTitle.value === '') {
//         showError(getTitle, 'Title is required');
//     } else {
//         showSuccess(getTitle);
//     }

//     if (getBlogImage.value === '') {
//         showError(getBlogImage, 'Images is required');
//     } else {
//         showSuccess(getBlogImage);
//     }

//     if (getDescription.value === '') {
//         showError(getDescription, 'Description is required');
//     } else {
//         showSuccess(getDescription);
//     }

//     if (getCategories.value === 'default') {
//         showError(getCategories, 'Categories is required');
//     } else {
//         showSuccess(getCategories);
//     }


//     const bTitle = getTitle.value;
//     const bImg = getBlogImage.value;
//     const bDesc = getDescription.value;
//     const bCat = getCategories.value;


//     writeUserData(bTitle,bImg ,bDesc, bCat )


//      getTitle.value = "";
//      getBlogImage.value = "";
//      getDescription.value = "";
//      getCategories.value = "";
//       alert("Blog Uploaded Successfully")

// })


// This is your existing code for handling form submission
const getTitle = document.getElementById("blog-title");
const getBlogImage = document.getElementById("blog-image");
const getDescription = document.getElementById("blog-description");
const getCategories = document.getElementById("categories");
const form = document.getElementById("submit");

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const bTitle = getTitle.value;
    const bImg = getBlogImage.value;
    const bDesc = getDescription.value;
    const bCat = getCategories.value;

    // Validate form fields
    if (bTitle === "") {
        showError(getTitle, "Title is required");
    } else {
        showSuccess(getTitle);
    }

    if (bBlogImage === "") {
        showError(getBlogImage, "Image is required");
    } else {
        showSuccess(getBlogImage);
    }

    if (bDesc === "") {
        showError(getDescription, "Description is required");
    } else {
        showSuccess(getDescription);
    }

    if (bCat === "default") {
        showError(getCategories, "Category is required");
    } else {
        showSuccess(getCategories);
    }

    // If all fields are valid, write data to Firebase and display blog post
    if (bTitle && bImg && bDesc && bCat !== "default") {
        writeUserData(bTitle, bImg, bDesc, bCat);
        displayBlogPost(bTitle, bDesc, "Your Name", new Date().toLocaleDateString(), bImg);
        clearPost();
        alert("Blog Uploaded Successfully");
    }
}

// Attach event listener to the form submit event
form.addEventListener("submit", handleSubmit);









// post.js

// Initialize Firebase
const firebaseConfig = {
    // Your Firebase config
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
  function displayPosts() {
    const postsContainer = document.getElementById('blogPostsContainer');
  
    // Clear previous posts
    postsContainer.innerHTML = '';
  
    // Retrieve posts from Firebase
    database.ref('posts').once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        const post = childSnapshot.val();
        const postHTML = `
          <div class="blog-post">
            <div class="blog-content">
              <h2>${post.title}</h2>
              <p>${post.description}</p>
              <div class="blog-author">
                <h6>Author</h6>
                <h6>Date</h6>
              </div>
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
  
    // Display the posts on index.html
    displayPosts();
  
    // Clear the form
    clearPost();
  });
  
  // Function to clear the form after submission
  function clearPost() {
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-image').value = '';
    document.getElementById('blog-description').value = '';
    document.getElementById('categories').value = 'default';
  }
  


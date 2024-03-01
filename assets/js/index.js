// // index.js

// // Assuming you have Firebase initialized already
// const db = firebase.firestore();

// // Function to fetch posts from the database
// function fetchPosts() {
//   const blogPostsContainer = document.getElementById("blogPosts");

//   // Clear existing posts
//   blogPostsContainer.innerHTML = '';

//   // Fetch posts from Firestore
//   db.collection("posts").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       const post = doc.data();
//       const postElement = `
//         <div class="col-md-6">
//           <div class="blog-post">
//             <div class="blog-content">
//               <h2>${post.title}</h2>
//               <p>${post.description}</p>
//               <div class="blog-author">
//                 <h6>${post.author}</h6>
//                 <h6>${post.date}</h6>
//               </div>
//             </div>
//             <div class="blog-image">
//               <img src="${post.imageUrl}" alt="${post.title}">
//             </div>
//           </div>
//         </div>
//       `;
//       blogPostsContainer.insertAdjacentHTML('beforeend', postElement);
//     });
//   }).catch((error) => {
//     console.error("Error fetching posts: ", error);
//   });
// }

// // Call the fetchPosts function when the page loads
// document.addEventListener('DOMContentLoaded', fetchPosts);

Circle – Development Summary (Day 1)

Circle is a location-based social media web app where users can create posts with text or images and view posts from nearby users.

Today we implemented the basic prototype of the posting system using Firebase and Cloudinary.

Current functionality includes creating posts, uploading images, storing posts in Firestore, loading posts on the webpage, and liking posts.

⸻

What We Implemented Today
	1.	Firebase Setup
We connected the project to Firebase and initialized:

	•	Firebase App
	•	Firestore Database
	•	Firebase Authentication (setup only, login flow not finished)

This is handled inside firebase.js.

⸻

	2.	Post Creation System
Users can create posts using the UI in index.html.

Each post can include:
	•	Text caption
	•	Image upload

Images are uploaded to Cloudinary, and the returned URL is saved in the database.

The logic for creating posts is in createPost.js.

⸻

	3.	Firestore Database Structure

Posts are stored in the Firestore collection called “Posts”.

Each post document contains the following fields:

commentsCount
latitude
longitude
likesCount
mediaType
mediaUrl
text
timestamp
userId

Latitude and longitude are used to determine which posts are nearby.

⸻

	4.	Loading Posts From Firestore

We implemented a function that fetches posts from Firestore and displays them on the webpage.

This is done in getNearbyPosts.js.

Currently it simply loads posts from the “Posts” collection and returns them to the frontend.

The posts are then rendered in the “Nearby Posts” section of index.html.

⸻

	5.	Post Feed UI

The frontend now displays posts including:
	•	Username
	•	Time posted
	•	Distance from user
	•	Caption
	•	Image (if present)
	•	Like counter

Posts appear in the Nearby Posts section.

⸻

	6.	Like System

Each post includes a like button.

Clicking the like button updates the likesCount field in Firestore.

The logic for this is in likePost.js.

⸻

	7.	Major Bug Fixed Today

At one point posts stopped loading entirely.

The issue was caused by Firebase Firestore security rules blocking read requests.

We fixed it by updating the Firestore rules to allow reads and writes again.

After fixing the rules, posts successfully loaded on the website.


Current State of the App

Working features:
	•	Create text posts
	•	Upload image posts
	•	Store posts in Firestore
	•	Display posts in feed
	•	Like posts

Partially implemented:
	•	Google authentication button exists but login flow is not completed

Not implemented yet:
	•	User profiles
	•	Comments
	•	Following system
	•	Notifications



Clone the repository:

git clone https://github.com/Qorexx/Circle.git

Open the project folder.

Run a local server (for example VSCode Live Server) and open index.html.# Circle Social App – Frontend Development Log (Today)

## Overview

Today we worked on improving the **frontend of the Circle social media application**. The focus was on building the post creation interface, improving the user interface design, and fixing several usability bugs encountered during development. The work primarily involved modifications to the main HTML layout and the CSS styling to make the application cleaner and easier to interact with.

---

# 1. Post Creation Interface

A dedicated **post creation section** was designed at the top of the application. This section allows users to:

* Write a caption for their post
* Upload an image
* Create a new post

The inputs and buttons were grouped into a structured container to make the interface more organized and visually clear. This helps users easily understand where to create posts and improves the overall layout of the page.

---

# 2. Custom Image Upload Button

One of the improvements made today was replacing the default browser file input with a **custom upload button**.

### Problem

The default file input provided by browsers looks different across devices and does not match the design of the rest of the interface.

### Solution

The file input element was hidden and replaced with a styled button that triggers the file selection process. This allows the upload control to match the rest of the application's design and improves visual consistency.

### Result

Users now interact with a clean, styled upload button instead of the browser's default file input.

---

# 3. Displaying the Selected File Name

Another usability improvement involved showing the **name of the selected file**.

### Problem

After selecting an image, the interface did not indicate whether a file had been successfully chosen.

### Solution

A small text element was added next to the upload button to display the selected file name.

### Result

Users now receive confirmation that their image has been selected before creating a post.

---

# 4. Page Alignment Issue

During testing, the entire application appeared **aligned to the left side of the page instead of being centered**.

### Problem

The layout configuration in the CSS restricted the width of the page in a way that prevented proper centering of the application interface.

### Solution

The layout styling was adjusted so that the main application container controls the width of the content, while the page itself centers this container horizontally.

### Result

The interface is now properly centered on the page, providing a cleaner and more balanced layout.

---

# 5. Feed Layout Improvements

The feed that displays nearby posts was refined so that posts appear as **card-style elements** stacked vertically. Each post card contains:

* The username of the person who posted
* The time since the post was created
* The approximate distance from the user
* The post caption
* The uploaded image (if present)
* A like button and like counter

This layout makes posts easier to read and visually separates them from each other.

---

# 6. Like Button Interaction

The like button functionality was tested and improved to provide immediate visual feedback.

### Behavior

When a user clicks the like button:

* The like count increases instantly on the interface.
* The change is then sent to the backend to update the stored data.

### Result

This approach makes the application feel more responsive and interactive for the user.

---

# Summary of Today's Progress

During this development session we successfully:

* Built a structured **post creation interface**
* Implemented a **custom image upload button**
* Added **file name display after image selection**
* Fixed **page alignment and layout issues**
* Improved the **visual layout of the post feed**
* Verified and refined the **like button interaction**

These improvements significantly enhanced the usability and visual structure of the Circle social media application's frontend.




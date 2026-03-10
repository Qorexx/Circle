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

Run a local server (for example VSCode Live Server) and open index.html.
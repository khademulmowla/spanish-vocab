
# Project Overview
This project is designed to create a fun and interactive platform for learning Spanish Language. It aims to help users expand their Spanish vocabulary and improve their communication skills through engaging lessons, practical examples, and pronunciation guides. By focusing on Spanish, the application makes learning the language accessible and effective for users who are eager to explore its richness.

# Technologies Used
- React: For building the user interface.
- Firebase: Authentication and user management.
- React Router DOM: Client-side routing and private routes.
- Tailwind CSS & DaisyUI: For responsive and modern UI design.
- Animate.css: Adding engaging animations.
- Vite: Fast build tool and development server.

# Core Features
- Secure Authentication: Firebase-based login with email/password and Google authentication.
- Private Routes: Restricts access to lessons, tutorials, and profiles for authenticated users only.
- Responsive Design: Fully optimized for mobile, tablet, and desktop devices.
- Interactive Learning Tools:
- Vocabulary cards with voice pronunciation.
- Modals showcasing detailed word usage.
- Animated progress counters using react-countup.
- Profile Management: Users can update their names and profile pictures.
- Video Tutorials: Embedded YouTube videos for alphabets and language learning.

# Dependencies
- firebase: For user authentication and data management.
- react-router-dom: For managing routes and private routes.
- react-countup: Animated counters for tracking learning progress.
- react-helmet-async: Manage document head for SEO.
- localforage: Offline storage capabilities.
- match-sorter: Efficient search filtering.
- sort-by: Utility for sorting lists.

# How to Run the Project Locally
Clone the Repository:
* git clone https://github.com/your-username/learn-spanish-app.git
* cd learn-spanish-app
---
Install Dependencies:
 + npm install
---
Set Up Firebase Configuration:
- Create a .env file in the root directory and add your Firebase config:
- VITE_FIREBASE_API_KEY=your_api_key
- VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
- VITE_FIREBASE_PROJECT_ID=your_project_id
- VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
- VITE_FIREBASE_APP_ID=your_app_id
---
Run the Development Server:
- npm run dev
---
Build for Production:
- npm run build
---

# Live Link:
https://bespoke-kleicha-22ace7.netlify.app/





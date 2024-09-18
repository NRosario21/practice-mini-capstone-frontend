# React + Vite

This Capstone is a movie-tracking app that allows users to browse movies, sign up, log in, favorite movies, and remove them from their favorites. The app is built with a Ruby on Rails backend and a React frontend, with authentication managed through JWT (JSON Web Tokens).
Features User Authentication: Sign up, log in, and log out using secure JWT-based authentication. Movie Display: Browse a list of movies with relevant details. Favorites: Add and remove movies from your favorites list. Responsive Design: Styled with Boostrap CSS for a responsive, mobile-friendly layout. Tech Stack Backend: Ruby on Rails Frontend: React Database: PostgreSQL (or SQLite, depending on your setup) Authentication: JWT (JSON Web Tokens) CSS Framework: OMDB API for movie data Installation Backend (Rails) Clone the repository:
Copy code git clone https://github.com/nrosario21/practice-mini-capstone.git 
cd practice-mini-capstone Install dependencies:
Copy code bundle install Set up the database:
Copy code rails db:create rails db:migrate Get an OMDB API key here and add it to your environment variables:
export OMDB_API_KEY=your_api_key_here Start the Rails server:
Copy code rails server
API Endpoints Authentication POST /users: Sign up a new user. POST /sessions: Log in a user, returning a JWT. DELETE /logout: Log out a user by deleting the JWT. Movies GET /movies: Fetch a list of movies from the OMDB API. Favorites POST /favorites: Add a movie to your favorites. DELETE /favorites/ : Remove a movie from your favorites. How to Use Sign Up: Create a new account by navigating to the sign-up page. Log In: Log in with your credentials to access personalized features. Add Favorites: Browse through movies and add your favorite ones to the list. Remove Favorites: If you no longer like a movie, you can easily remove it from your favorites list. 

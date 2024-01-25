# NETFLIX-GPT
// [ReactJS, FireBase, How to Handle Firms, ChatGPT, GPT APIs, etc.]
- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying App to Production
- Create Sign Up User Account
- Implement Sign In with userSlice
- Create Redux Store with userSlice 
- Implemented Sign out
- Update Profile
- BUG FIX: Sign up user displayName and update profile picture
------------------------------------
- BUG FIX: If the user in not logged in then redirect /browse to Sign In page and vice-versa
- GOOD PRACTICE: Unsubscribing the useEffect hook(i.e. onAuthStateChanged callback) after unmounting
- GOOD PRACTICE: Add hardcoded values(URLs, images, strings) to the constant file
- Register for TMDB API & create an App to get Access Token and API Key
- Get data from TMDB - "Now Playing Movies List API"
- Created custom hook for - NowPlayingMovies
- Created movieSlice
- Updates the store with Movies data
- Planning for MainContainer & SecondaryContainer 
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the Youtube video and made it to autoplay & mute 
- Added Tailwind CSS everywhere
-


# FEATURES
* LogIn/SignUp Page
    - Sign In / Sign Up Form
    - Redirect to Browse Page

* BROWSE Page (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestion
            - Movies List 

* NetFlix-GPT Page
    - Search Bar
    - Movie Suggestions

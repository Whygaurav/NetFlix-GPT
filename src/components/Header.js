import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpT.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/") - This is not required as Routing in every case will be handled by onAuthStateChange API
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    })
  };

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                  addUser({
                      uid: uid, 
                      email: email, 
                      displayName: displayName, 
                      photoURL: photoURL
                  })
              );
              navigate("/browse");
          } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
          }
      });
      // This unsubscribe will be called when the component unmounts.
      return()=>unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo"/>
          {user && 
            <div className="flex p-4">
              { showGptSearch && (
                  <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                  <option value="en">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="spanish">Spanish</option>
                  </select>
                )
              }
              <button className="py-2 px-4 mx-4 my-2 bg-purple-900 text-white rounded-lg"
                onClick={handleGptSearchClick}
              >
              {showGptSearch ? "Home Page" : "GPT Search"}
              </button>
              <img className=" w-10 h-10" alt="usericon" src={user.photoURL}/>
              <button onClick={handleSignOut} className="bg-red-500 py-2 px-2 rounded-full font-bold text-black">
                Sign Out
              </button>
            </div>
          }
    </div>
  )
}

export default Header
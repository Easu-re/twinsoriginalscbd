import 'aos/dist/aos.css';
import '../styles.scss'
import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/analytics'
import cookie from 'react-cookies'

var firebaseConfig = {
    apiKey: "AIzaSyDGeyVlInflr0B50q6QJwyD9vLhdfWCVvE",
    authDomain: "twinsoriginalscbd.firebaseapp.com",
    databaseURL: "https://twinsoriginalscbd.firebaseio.com",
    projectId: "twinsoriginalscbd",
    storageBucket: "twinsoriginalscbd.appspot.com",
    messagingSenderId: "856426147000",
    appId: "1:856426147000:web:2868e3c4c2122d880b584d"
  };
  // Initialize Firebase
  if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    // if (typeof window !== 'undefined') firebase.analytics()
  }

export default function MyApp({ Component, pageProps }) {
    const [isAbove18, setIsAbove18] = useState(cookie.load('isAbove18'))
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [checking, setChecking] = useState(true)

    const setIsAbove18fun = () => {
        cookie.save('isAbove18', true)
        setIsAbove18(true)
    }

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                setIsAuthenticated(true)
                setChecking(false)
            } else {
                setChecking(false)
                setIsAuthenticated(false)
            }
        })
    }, [])

    return (
        <>
            {
                checking 
                ?
                <div style={{ display: 'grid', placeItems: 'center', height: '100vh'}}>
                    <img src='/loading.gif' />
                </div>
                :
                <Component {...pageProps} 
                    isAbove18={isAbove18} 
                    setIsAbove18={setIsAbove18fun} 
                    isAuthenticated={isAuthenticated}
                />
            }

            <style jsx>{`
                img {
                    width: 600px;
                }
                @media only screen and (max-width: 900px) {
                    img {
                        width: 250px;
                    }
                }
            `}</style>
        </>
    )
}

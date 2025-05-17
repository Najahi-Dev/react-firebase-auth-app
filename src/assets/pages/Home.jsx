import React, {useEffect} from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

    useEffect(() => {
        toast.info('Welcome to the Home Page!');
    }, []);

  return (
    <div className='card'>
        <h1>Welcome to the Home Page</h1>
        <button className='click' onClick={() => toast.success("User Verified")}>Click Me</button>
        <ToastContainer
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>
  )
}

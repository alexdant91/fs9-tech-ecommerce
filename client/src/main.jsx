import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from './store/index.js';

import App from './App.jsx'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </ReduxProvider>
)


// function BrowserRouter() {
//     const a = () => {}
//     const b = () => {}
//     const c = () => {}

//     function App() {
//         a();
//     }
// }

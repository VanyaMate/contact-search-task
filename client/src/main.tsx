import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from "./app.component";
import {Provider} from "react-redux";
import {store} from "./store/index.store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)

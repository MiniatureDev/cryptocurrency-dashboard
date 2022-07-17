import { createRoot } from "react-dom/client"
import Main from "./src/Main"
import "bootstrap/dist/css/bootstrap.min.css"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import limitReducer from "./src/Globals"

const store = configureStore({
    reducer: {
        limit: limitReducer
    }
})


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Main/>
    </Provider>
)
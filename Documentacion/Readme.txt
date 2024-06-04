
React Router
https://www.youtube.com/watch?v=qM8T4wXG2V4



Redux
https://www.youtube.com/watch?v=SFyAZFrjDBA

Instalación:
1. Instalar Redux DevTolools  (Obligatorio)

2. Instalar la librería Redux Toolkit Quick Start
npm install @reduxjs/toolkit react-redux


3. Crear el Redux store
Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it

app/store.js
-----------------------------------------------------
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

4. Vincular Redux a React en el archivo main.js o index.js
---------------------------------------------------------------------
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

5. Crear los Slides (Unión de los (Action Creators y Actions) y los reducers)

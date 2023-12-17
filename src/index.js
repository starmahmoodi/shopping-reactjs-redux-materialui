import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@emotion/react'
import theme from './style/theme'
import { Provider } from 'react-redux'
import store from './store/store'


const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>   
)
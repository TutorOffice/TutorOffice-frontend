import '@mantine/core/styles.css'
import './index.css'

import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app/store'
import { theme } from '@/shared/constants/theme'

import App from './components/app/App'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <Provider store={store}>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </Provider>,
)

import '@mantine/core/styles.css'
import './index.css'

import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { theme } from '@/shared/constants/theme'

import App from './components/app/App'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <MantineProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import { ColorModeButton } from "@/components/ui/color-mode"
import { BrowserRouter } from 'react-router-dom'
const styles={ 
  global:(props)=>({
    body:{
      bg: ColorModeButton('gray.100', '#000')(props),
        color: ColorModeButton('gray.800', 'whiteAlpha.900')(props), 
    }  
  })
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider >
      <App/>
    </Provider>
</BrowserRouter>
  </StrictMode>,
)

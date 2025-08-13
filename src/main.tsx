import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const enableMock = async () => {
      if (import.meta.env.VITE_ENABLE_MOCK_DATA === "true") {
      const { worker } = await import("./mocks/browser.ts");
      await worker.start();
  }
}

const el = document.getElementsByTagName('body');
  el[0]?.classList.add("theme-dark-mode");


enableMock().then(() => { 
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FunctionalComp from './FunctionalComp'

const names = ['Farhan', 'Babar', 'Fakhar', 'Hassan', 'Nafay','Rizwan','Waseem', 'Naseem','Shaheen','Sufyan','Abrar']
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {names.map((name, index) => (
      <FunctionalComp key={index} name={name} />
    ))}
  </StrictMode>,
)

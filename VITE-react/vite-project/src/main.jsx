import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FunctionalComp from './FunctionalComp'
import LifecycleClassComponent from './LifecycleClassComponent'
const names = ['Farhan', 'Babar', 'Fakhar', 'Hassan', 'Nafay','Rizwan','Waseem', 'Naseem','Shaheen','Sufyan','Abrar']
createRoot(document.getElementById('root')).render(
  <>
    {names.map((name, index) => (
      <FunctionalComp key={index} name={name} />
    ))}
    <LifecycleClassComponent />

  </>
)



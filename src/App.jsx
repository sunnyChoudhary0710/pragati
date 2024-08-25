import { useState } from 'react'
import './styles/App.css';
import { AreaSeparator, Footer, BasePage, Work, CasualIntro, QuickFacts } from './components';

function App() {

  return (
    <>
      <BasePage />
      <AreaSeparator spacer={74}/>
      <CasualIntro />
      {/* <AreaSeparator spacer={74}/> */}
      <QuickFacts />
      <AreaSeparator spacer={74}/>
      <Work />
      <AreaSeparator spacer={74}/>
      
    </>
  )
}

export default App

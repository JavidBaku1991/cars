import Navbar from '@/components/navbar'
import Home from '@/components/home'
import OurServices from '@/components/ourservices'
import Footer from '@/components/footer'
import ContactUs from '@/components/contactus'
import {useState,useEffect} from 'react'
import { SelectedPage } from './shared/types';
import Benefits from './components/benefits';


function App() {

const[selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);

const[isTop,setIsTop]=useState<boolean>(true)
useEffect(()=>{
    const handleScroll=()=>{
  if(window.scrollY===0){
        setIsTop(true);
        setSelectedPage(SelectedPage.Home)}
    if(window.screenY!==0) setIsTop(false) 
    }
  

    window.addEventListener("scroll",handleScroll)
    return ()=>window.removeEventListener("scroll",handleScroll)
   
},[])
  return (

    <div className='app bg-gray-20 '>
            <Navbar
            isTop={isTop}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            /> 
            <Home  setSelectedPage={setSelectedPage} />
            <Benefits  setSelectedPage={setSelectedPage} />
            <OurServices  setSelectedPage={setSelectedPage} />
            <ContactUs  setSelectedPage={setSelectedPage} />
            <Footer  />
            
    </div>
  )
}

export default App

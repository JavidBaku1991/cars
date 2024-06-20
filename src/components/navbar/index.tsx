import { useState} from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/alhambra.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQ';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTop:boolean,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void
}

const Navbar = ({isTop, selectedPage,setSelectedPage}: Props) => {

const flexBetween='flex items-center justify-between'
const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false)
const isAboveMediuScreen=useMediaQuery('(min-width:1060px');
const navbarBG=isTop?'':"bg-primary-100 drop-shadow"



  return (
    <nav>
        <div 
        className={`${navbarBG} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt='logo' src={Logo} className='w-20 h-10'/>
                    {isAboveMediuScreen ?(
                        <div className={`${flexBetween} w-full`} >
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Home'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page='Benefits'
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link page='Our Services'
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link page='Contact us'
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                           <p>  <span className='text-primary-100'>Sign in</span></p>
                            <ActionButton
                             setSelectedPage={setSelectedPage}
                            >
                                <p><span className='text-primary-100'>
                                      Become a member
                                    </span></p>
                              
                                
                                </ActionButton>
                        </div>
                    </div>):(
                        <button
                        className='rounded-full bg-secondary-500 p-2'
                        onClick={()=>setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon  className='h-6 w-6 text-white'/>
                        </button>
                    )}

                    
    
                </div>
            </div>
        </div>
        {/* Mobil */}
        {!isAboveMediuScreen && isMenuToggled&&(
            <div
            className='fixed right-0 bottom-0 z-40 h-full w-full  bg-primary-100 drop-shadow-xl'>

                {/* close icon */}
            <div className='flex justify-end p-12' >
                <button  onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                      <XMarkIcon className='h-6 w-6 text-gray-400' />                  
                </button>
            </div>
{/* items */}
<div className='ml-[33%] flex  flex-col gap-10 text-2xl'>
                            <Link page='Home'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page='Benefits'
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link page='Classs'
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link page='Contacts'
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                        </div>

            </div>
        )}
    </nav>
  )
}

export default Navbar;

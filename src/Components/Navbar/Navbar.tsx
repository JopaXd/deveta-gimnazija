import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar(){
	let Links =[
	  {name:"Skola",link:"/"},
	  {name:"Novosti",link:"/"},
	  {name:"Informacije",link:"/"},
	  {name:"Uspesni ucenici",link:"/"},
	  {name:"Nastavni materijal",link:"/"},
	  {name:"Galerija",link:"/"},
	  {name:"Kontakt",link:"/"}
	];
	let [open,setOpen] = React.useState(false);
	return (
		<div className='shadow-md w-full sticky top-0 left-0'>
			<div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
					<span className='text-3xl text-blue-600 mr-1 pt-2'>
						<h1>Девета Гимназија</h1>
					</span>
				</div>
				<div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
					<FontAwesomeIcon icon={(open ? faClose : faBars)}/>
				</div>
				<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ${open ? 'top-16 ':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                        <li key={link.name} className='text-center md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-600 duration-300'>{link.name}</a>
                        </li>
                        ))
                    }
				</ul>
			</div>
		</div>
	) 
}

export default Navbar

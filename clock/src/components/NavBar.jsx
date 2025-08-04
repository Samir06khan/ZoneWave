import heroImage from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-black text-gray-400 max-w-[1280px] mx-auto flex justify-between items-center px-6'>
            <div className='flex items-center justify-center'>
                <img src={heroImage} alt="hero image" className='h-20 w-auto'/>
            </div>
            <ul className='hidden md:flex space-x-4'>
                <li className='p-5 hover:text-white transition duration-200'>
                    <a href='#time zone'>Time Zones </a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <header className='bg-stone-950 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-yellow-500'> CEYLON </span>
            <span className='text-yellow-500'> spices </span>
        </h1>
      </Link>
      <form
        className='bg-slate-100 p-3 rounded-lg flex items-center'
      >
        <input
          type='text'
          placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
        />
        <FaSearch className='text-amber-50' />
        
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-yellow-600 hover:underline'>
                Home
                </li>
                </Link>
                <Link to='/Sell-your-spices'>
            <li className='hidden sm:inline text-yellow-600 hover:underline'>
                SellYourSpices
                </li>
                </Link>

                <Link to='/sign-up'>
            <li className='hidden sm:inline text-yellow-600 hover:underline'>
                SignUp
                </li>
                </Link>
                
             
    
                
                <Link to='/profile'>
                  {currentUser ? (
                    <img className='rounded-full h-7 w-7
                    object-cover' src={currentUser.avatar}
                    alt='profile' />
                  ) : (
                    <li className='text-yellow-600 
                    hover:underline' > login </li>
                  )}
                </Link>
                
                <Link to='/profile'>
            <li className='hidden sm:inline text-yellow-600 hover:underline'>
                Profile
                </li>
                </Link>
    
               
        </ul>
        </div>
    </header>
  );
}


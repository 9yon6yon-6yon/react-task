
import { Link } from 'react-scroll';
const NavSection = () => {
  return (
    <nav className="w-full max-w-[1366px] h-[100px] bg-background  mx-auto flex justify-between items-center px-4 mt-[-8px]">
    <div className="text-text hover:text-secondary  text-3xl">JHAKA NAKA PRODUCTION</div>
    <div className="flex space-x-4 inset-x-0 top-0 text-base">
      <Link 
        to="about" 
        smooth={true} 
        duration={500} 
        className="text-text hover:text-secondary cursor-pointer">
        ABOUT US
      </Link>
      <Link 
        to="movies" 
        smooth={true} 
        duration={500} 
        className="text-text hover:text-secondary cursor-pointer">
        OUR MOVIES
      </Link>
      <Link 
        to="services" 
        smooth={true} 
        duration={500} 
        className="text-text hover:text-secondary cursor-pointer">
        SERVICES
      </Link>
    </div>
  </nav>
  );
};

export default NavSection;

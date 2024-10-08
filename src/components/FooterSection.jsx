
import footerBackground from '../assets/images/footer.jpeg';

const FooterSection = () => {
  return (
    <footer
      className="w-full h-[394px] bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col justify-center items-center text-center p-4 md:p-8 lg:p-16 text-white space-y-4">
        
  
        <h1 className="text-4xl md:text-5xl">
          jhaka naka production
        </h1>
        
        <h2 className="text-2xl md:text-xl">
          next level experience
        </h2>
        <p className="text-secondary text-2xl md:text-xl">
          Feugiat nibh litora semper proin nullam facilisi volutpat ex ullamcorper.
        </p>
        
        <p className="text-sm text-secondary mt-4">
          Copyright © 2024 Jhaka Naka Production, All rights reserved. Present by Mir Hussain
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

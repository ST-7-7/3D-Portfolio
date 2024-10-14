const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div> */}

      {/* <div className="flex gap-3"> */}
        {/* <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/tech/linkedin.png " alt="twitter" className="w-1/2 h-1/2 filter invert" />
        </div>
         */}
      
      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/ST-7-7" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 " />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sitong-yang-63125b251" className="social-icon">
            <img src="/tech/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 filter invert" />
          </a>
        </div>
      </div>
      
      
      
      
      
      

      <p className="grid-subtext !text-sm">© 2024 Sitong Yang. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

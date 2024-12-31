import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 图片的数组
  const images = [
    '/tech/css.png',
    '/tech/html.png',
    '/tech/javascript.png',
    '/tech/git.png',
    '/tech/figma.png',
    '/tech/mongodb.png',
    '/tech/nodejs.png',
    '/tech/reactjs.png',
    '/tech/redux.png',
    '/tech/tailwind.png',
    '/tech/threejs.svg',
    '/tech/typescript.png',
    '/tech/next2.png',
    '/tech/ex.png',
    '/tech/sass.png'
  ];

  // 控制吃豆人前进的时间
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 让吃豆人循环移动
    }, 600); // 吃豆人每秒吃掉一张图片
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <style>{`
        .loader-container {
          
          display: flex;
          
          align-items: center;
          justify-content: center; 
          position: relative;
          width: 100%; 
          gap: 20px; /* 图片之间的间距 */
        }

        .pacman {
          width: 65px;
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(farthest-side,#000 98%,#0000) 55% 20%/8px 8px no-repeat,  
            #ffcc00;
          box-shadow: 2px -6px 12px 0px inset rgba(0, 0, 0, 0.7);
          position: relative;
          left: 6%;
          transform: translateX(${currentIndex * 80}px); /* 控制吃豆人的移动 */
          animation: pacman-chomp 0.3s infinite steps(5) alternate;
          z-index: 1;
        }
        @keyframes pacman-chomp {
          0% {clip-path: polygon(50% 50%,100%   0,100% 0,0 0,0 100%,100% 100%,100% 100%);}
          100% {clip-path: polygon(50% 50%,100% 65%,100% 0,0 0,0 100%,100% 100%,100%  35%);}
        }
        .image-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex; /* 使用 Flexbox */
          align-items: center; /* 垂直居中 */
          justify-content: center; /* 水平居中 */
          aspect-ratio: 1;
        }
        
        .image {
          width: 90%;
          height: auto;
          opacity: 1;
          transition: opacity 0.3s;
          object-fit: cover
        }
        .eaten {
          opacity: 0.2; /* 被吃掉后变成透明 */
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0.1;
          border-radius: 50%;
        }
        .invert {
          filter: invert(1); /* 反色效果 */
        }
      `}</style>

      <div className="loader-container">
        <div className="pacman"></div>
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <img
              src={src}
              alt={`Icon ${index}`}
              className={`image ${index <= currentIndex ? 'eaten' : ''} ${src.includes('threejs') || src.includes('nextjs') ? 'invert' : ''}`}
            />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;

import React, { useEffect, useState } from "react";

const LoadCube = () => {
  const [activeCube, setActiveCube] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCube((prev) => (prev < 6 ? prev + 1 : 6)); // 控制1-6号方块的掉落顺序
    }, 1000); // 每个方块间隔1秒掉落

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-2">
      {/* 左侧 1-3号方块区域 */}
      <div className="relative w-12 h-96 flex flex-col items-center">
        <div className={`loader ${activeCube >= 1 ? "animate-drop" : ""}`} />
        <div className={`loader ${activeCube >= 2 ? "animate-drop" : ""}`} />
        <div className={`loader ${activeCube >= 3 ? "animate-drop" : ""}`} />
      </div>

      {/* 右侧 4-6号方块区域 */}
      <div className="relative w-12 h-96 flex flex-col items-center">
        <div className={`loader ${activeCube >= 4 ? "animate-drop" : ""}`} />
        <div className={`loader ${activeCube >= 5 ? "animate-drop" : ""}`} />
        <div className={`loader ${activeCube >= 6 ? "animate-drop" : ""}`} />
      </div>

      <style>{`
        .loader {
          width: 45px;
          height: 30px;
          background:
            linear-gradient(#004ce4 0 0) 0 100%/100% 50%,
            linear-gradient(#004ce4 0 0) 0 0 /calc(100%/3) 100%;
          background-repeat: no-repeat;
          position: relative;
          clip-path: inset(-100% 0 0 0);
          animation: l2-0 2s steps(4) forwards;
        }

        .loader::before,
        .loader::after {
          content: "";
          position: absolute;
          inset: -50% 0 50%;
          background:
            linear-gradient(#00e622 0 0) 0 0 /calc(2*100%/3) 50%,
            linear-gradient(#00e622 0 0) 100% 100% /calc(2*100%/3) 50%;
          background-repeat: no-repeat;
          animation: inherit;
          animation-name: l2-1;
        }

        .loader::after {
          inset: -100% 0 100%;
          background:
            linear-gradient(#e50021 0 0) 0 0 /100% 50%,
            linear-gradient(#e50021 0 0) 100% 0 /calc(100%/3) 100%;
          background-repeat: no-repeat;
          animation-name: l2-2;
        }

        @keyframes l2-0 {
          0% {
            transform: translateY(-250%);
            clip-path: inset(100% 0 0 0);
          }
          25%, 100% {
            transform: translateY(0);
            clip-path: inset(-100% 0 0 0);
          }
        }

        @keyframes l2-1 {
          0%, 25% {
            transform: translateY(-250%);
          }
          50%, 100% {
            transform: translateY(0);
          }
        }

        @keyframes l2-2 {
          0%, 50% {
            transform: translateY(-250%);
          }
          75%, 100% {
            transform: translateY(0);
          }
        }

        .animate-drop {
          animation: l2-0 2s forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadCube;

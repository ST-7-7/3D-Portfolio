import { motion } from 'framer-motion';

const tags = [
  'INFJ',
  'Team Worker',
  'Completed Finisher',
  'Front-End Developer',
  'Back-End Developer',
  'Indie Game Dev',
  'RPG Designer',
  'Zelda Gamer',
  'Book Lover',
  'Nature Explorer',
];

const TagSection = () => {
  return (
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <div className='kanit-regular' style={{ position: 'relative', width: '100%', height: '100%' }}>
          {tags.map((tag, index) => {
            // 生成随机的初始位置和缩放因子
            const xOffset = Math.random() * 200 - 100; // x 轴随机位移，范围 -100 到 100
            const yOffset = Math.random() * 150 - 75; // y 轴随机位移，范围 -75 到 75
            const scale = Math.random() * 0.5 + 0.5; // 缩放因子，范围 0.5 到 1.0，越大越近

            return (
              <motion.p
                key={index}
                className="grid-headtext"
                initial={{ scale, x: xOffset, y: yOffset }} // 初始化的随机大小和位置
                whileHover={{ scale: scale + 0.2 }} // 鼠标悬停时的缩放
                transition={{ type: 'spring', stiffness: 300, damping: 20 }} // 设置弹性效果
                style={{
                  position: 'absolute', // 使每个标签可以独立定位
                  left: '50%', // 基于容器中心定位
                  top: '50%',
                  transform: 'translate(-50%, -50%)', // 将标签移动到容器的中心
                  zIndex: 1,
                }}
              >
                {tag}
              </motion.p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TagSection;


import { workExperiences } from '../constants/index.js';
import Tetris from '../components/Tetris.jsx';


const WorkExperience = () => {

  return (
    <section className="c-space my-20" id="work">
      <p className="text-5xl font-semibold mb-8 text-white text-center">
        My Educational Journey
      </p>

      <div className="grid xl:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] md:grid-cols-1 sm:grid-cols-1 w-full text-white-600">
        
        <div className=" flex items-center justify-center">
          <Tetris />
        </div>

        
        <div className=" py-5 px-2.5">
          {workExperiences.map((item, index) => (
            
            <div key={index} className="work-content_container group ">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo !bg-gray-200">
                  <img className="w-full h-full" src={item.icon} alt="" />
                </div>

                <div className="work-content_bar bg-white" />
              </div>

              <div className="sm:p-5 px-2.5 py-5">
                <p className="grid-headtext !mb-0">{item.name}</p>
                <p className="grid-subtext">
                  {item.pos} -- <span>{item.duration}</span>
                </p>
                <p className="grid-subtext mt-4">{item.title}</p>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
};

export default WorkExperience;

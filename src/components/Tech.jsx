import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { useIsAndroid } from "../hooks/useIsAndroid";

const Tech = () => {
  const isAndroid = useIsAndroid(); 

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {!isAndroid ? (
            <BallCanvas icon={technology.icon} />
          ) : (
     
            <div className="w-28 h-28 rounded-full bg-[#151030] flex items-center justify-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Tech

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'>
          I’m a game-focused software developer with experience developing complete games, building gameplay systems, designing interactive mechanics, and creating modern web applications.
          Over the last several months, I’ve independently developed multiple games, experimenting with different genres, mechanics, level flows, UI systems, and technical frameworks using both Unity (C#) and Unreal Engine.

          My background combines hands-on game development with full-stack web engineering and UI/UX design, allowing me to create both engaging interactive experiences and scalable technical solutions.
          I enjoy working on gameplay logic, AI behaviors, player experience, and overall game feel — always aiming to build smooth, responsive, and maintainable systems.

          Beyond games, I also develop responsive web interfaces and full-stack applications using React, TypeScript, Node.js, and PostgreSQL.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")
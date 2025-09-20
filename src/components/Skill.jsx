import React from 'react'

function Skill() {
    const skills = [
        { name: 'HTML', icon: '/icons/html5.png' },
        { name: 'CSS', icon: '/icons/css.png' },
        { name: 'JavaScript', icon: '/icons/javascript.png' },
        { name: 'React', icon: '/icons/react.png' },
        { name: 'Next.js', icon: '/icons/nextjs-48.png' },
        { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
        { name: 'TypeScript', icon: '/icons/typescript.png' },
        { name: 'Git', icon: '/icons/git.png' },
        { name: 'GitHub', icon: '/icons/github.png' },
    ];

  return (
    <div id='skills' className='bg-[#111827] text-white py-48 px-6 md:px-20'>
        <h2 className="text-4xl text-center font-bold mb-12">My Skills</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-20'>
            {skills.map((skill) => (
                <div key={skill.name} className='flex flex-col items-center'>
                    <img src={skill.icon} alt={skill.name} className='w-16 h-16 mb-4' />
                    <p className='text-lg'>{skill.name}</p>
                </div>
            ))}
        </div>      
    </div>
  )
}

export default Skill

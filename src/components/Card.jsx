import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';


function Card() {
  return (
      <div id='projects'>
        <h2 className="bg-[#111827] text-white text-4xl text-center font-bold pt-48">Feautured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-28 bg-[#111827]' >
            <ProjectCard
        image={project1}
        name="Student Registration"
        description="A modern, responsive web dashboard built with Next.js, TypeScript, and Tailwind CSS. It serves as an enrollment platform (or administrative dashboard) that streamlines and visualizes enrolment-related data through intuitive UI components."
        LiveLink="https://oaustech-enroll-dash.vercel.app/"
        GitHubLink="https://github.com/Froshlin/oaustech-enroll-dash"
        />
      <ProjectCard
        image={project2}
        name="Smart Examination System"
        description="It is a web-based platform built with Next.js, JavaScript, and Custom CSS that streamlines online assessments. One of its core features is automated grading, which instantly evaluates student responses and provides immediate results, eliminating manual marking and reducing errors."
        LiveLink="https://exam-frontend-liart.vercel.app/"
        GitHubLink="https://github.com/Froshlin/exam-frontend"
        />
      <ProjectCard
        image={project3}
        name="Falconlite Admin Dashboard"
        description="This is a control panel web application for managing Falconlite's international financial services. Built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS, this dashboard enables admins to monitor and administer virtual accounts, currency balances, and transaction flows from one unified interface."
        LiveLink="https://falconlite-admin-page.vercel.app/overview"
        GitHubLink="https://github.com/Froshlin/falconlite-admin-page"
        />
        </div>
      
    </div>
  )
}

export default Card

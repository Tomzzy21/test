import React from 'react';
import { NavItem, Service, TimelineEvent, Skill, Testimonial, WriteUp } from './types';

// SVG Icons as React Components
export const BookOpenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

export const SchoolIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><path d="M12 5v17"/></svg>
);

export const GlobeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

export const UsersIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>
);


export const NAV_ITEMS: NavItem[] = [
  { name: 'Services', href: '#services' },
  { name: 'My Legacy', href: '#resume' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const CONTACT_EMAIL = "j.ayodeji233@gmail.com";
export const CONTACT_PHONE = "08056280558";
export const WHATSAPP_LINK = `https://wa.me/2348056280558`;
export const CALENDLY_LINK = "https://calendly.com/your-link"; // Placeholder

export const SERVICES: Service[] = [
  {
    icon: <BookOpenIcon className="w-8 h-8 text-brand-accent"/>,
    title: 'Education Policy Advisory',
    description: 'Guiding institutions on robust educational policies based on extensive government experience.',
  },
  {
    icon: <SchoolIcon className="w-8 h-8 text-brand-accent"/>,
    title: 'Private School Compliance',
    description: 'Ensuring private educational institutions meet and exceed regulatory standards.',
  },
  {
    icon: <GlobeIcon className="w-8 h-8 text-brand-accent"/>,
    title: 'Curriculum Development',
    description: 'Designing and refining modern curricula that foster critical thinking and engagement.',
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-brand-accent"/>,
    title: 'Teacher & Staff Training',
    description: 'Empowering educators with the latest pedagogical techniques and leadership skills.',
  },
];

export const WORK_EXPERIENCE: TimelineEvent[] = [
    { date: '2023', title: 'Head of Unit, School Admin. Department', subtitle: 'Lagos State Government', description: 'Oversaw administrative functions for a key educational department.' },
    { date: '2007 - 2023', title: 'Deputy Director, Co-curricular Department', subtitle: 'Lagos State Government', description: 'Headed the unit, managing extracurricular programs and initiatives statewide.' },
    { date: '2000 - 2007', title: 'Education Officer', subtitle: 'Lagos State Ministry of Education', description: 'Contributed to policy implementation and school oversight within the state ministry.' },
    { date: '1999', title: 'Educator', subtitle: 'Foundation Day Nursery & Primary School, Surulere' },
    { date: '1998', title: 'Psychology Intern', subtitle: "Children's Developmental Centre, Surulere", description: 'Internship for M.Sc in Psychology, focusing on child development.' },
    { date: '1996 - 1998', title: 'Head Teacher', subtitle: 'Defunct Ideal International School, Yaba' },
    { date: '1995 - 1996', title: 'Teacher', subtitle: 'Feyland & Tender Age Children Schools, Lagos' },
    { date: '1994 - 1995', title: 'Corps Member (NYSC)', subtitle: 'Abeokuta South Local Government, Education Authority' },
    { date: '1989 - 1990', title: 'Industrial Work Experience', subtitle: 'Ogun State Ministry of Social Development' },
    { date: '1982', title: 'Clerical Officer', subtitle: "Conference Visitor's Unit (CVU)" },
];

export const EDUCATION: TimelineEvent[] = [
    { date: '1998', title: 'M.Sc Psychology', subtitle: 'University of Lagos, Akoka' },
    { date: '1993', title: 'B.Sc Home Science', subtitle: 'University of Agriculture, Abeokuta' },
    { date: '1985', title: 'Secondary School Certificate', subtitle: 'Government College, Osborne Road, Ikoyi, Lagos' },
    { date: '1982', title: 'Secondary School Education', subtitle: 'New Era Girls Secondary School, Surulere' },
    { date: '1967 - 1976', title: 'Nursery and Primary School', subtitle: 'Mainland Preparatory School, Surulere' },
];

export const TRAININGS: TimelineEvent[] = [
    { date: '2023', title: 'Robotics Training', subtitle: 'Advanced Educational Technologies' },
    { date: '2022', title: 'Emotional Intelligence Training', subtitle: 'Workplace Dynamics Workshop' },
    { date: '2021', title: 'Safety and Health Programmes for Students and Teachers', subtitle: 'Institutional Safety Standards' },
    { date: '2020', title: 'Sustainable Development Goals (SDGs)', subtitle: 'Global Goals Integration Seminar' },
    { date: '2019', title: 'Workbook Day', subtitle: 'Curriculum Enhancement Program' },
    { date: '2014', title: 'Professional Attitude and workplace ethics', subtitle: 'Professional Development' },
    { date: '2009', title: 'Climate Change Advocacy Programme for Students', subtitle: 'Environmental Education' },
    { date: '2008', title: 'Lagos State School Traffic Safety Advocacy Programme', subtitle: 'Community Safety Initiative' },
];


export const WRITE_UPS: WriteUp[] = [
    { title: "Project Topic: The relationship between the self-image of Primary six Pupils and their attitude to schoolwork.", year: 1998 },
    { title: "The risk that Adolescents are exposed in Nigeria: Reference to two socio-economic classes i.e the rich and the poor and Changes in self-Concept among adolescents in Nigeria.", year: 1998 },
    { title: "Government Policies that are not in the Interest of Children and Families and My Recommendations as a Child Psychologist", year: 1998 },
    { title: "Socio-Cognitive Stimulation of Home & Nursery School Environment: To what extent do they facilitate The Development of Young Children?", year: 1998 },
    { title: "A Day in the Life of My Niece", year: 1998 },
    { title: "Language Development from age 3 plus, social Class Different in Language Development.", year: 1997 },
    { title: "Final Year Project-Child Rearing Practices among Mothers in Abeokuta Local Govt. Area of Ogun State.", year: 1991 },
    { title: "Term Paper on Laws and customs Affecting Different Marriages.", year: 1990 },
    { title: "Term Paper on Marital Problems, Causes of Divorces and Solutions to term.", year: 1990 },
    { title: "Term Paper on Legitimacy of the Nigerian Child.", year: 1990 },
    { title: "Report on Experience Working with Children.", year: 1989 },
];

export const SKILLS_DATA: Skill[] = [
  { subject: 'Education Policy', A: 95, fullMark: 100 },
  { subject: 'Curriculum Dev.', A: 90, fullMark: 100 },
  { subject: 'Child Psychology', A: 85, fullMark: 100 },
  { subject: 'School Admin', A: 98, fullMark: 100 },
  { subject: 'Teacher Training', A: 88, fullMark: 100 },
  { subject: 'Student Mentoring', A: 92, fullMark: 100 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Ayodeji's expertise in education policy was instrumental in restructuring our district's programs. Her guidance is rooted in decades of real-world experience and a genuine passion for student success.",
    name: 'Dr. B. Adeyemi',
    title: 'Former Colleague, Lagos State Ministry of Education',
  },
  {
    quote: "As a school head, I found her training on curriculum development to be transformative. She doesn't just teach theory; she provides practical, actionable strategies that empower educators.",
    name: 'Mrs. Funke Ojo',
    title: 'Principal, Meadowlands Academy',
  },
  {
    quote: 'Her deep understanding of child psychology and development is evident in every interaction. She has a rare ability to connect policy to the actual needs of children in the classroom.',
    name: 'Mr. David Okon',
    title: 'Educational Psychologist',
  },
];

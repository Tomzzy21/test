import React from 'react';
import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, PresentationChartBarIcon, BuildingLibraryIcon, UserCircleIcon, MicrophoneIcon, FolderOpenIcon, HandRaisedIcon, ComputerDesktopIcon, TrophyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const CATEGORIES = [
  {
    name: 'Leadership & Policy',
    items: [
      {
        icon: <AcademicCapIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Educational Leadership',
        description: 'Led large-scale educational initiatives across public and private sectors.',
        percent: 95,
      },
      {
        icon: <BuildingLibraryIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Policy Advisory',
        description: 'Advised on educational policy reforms for Lagos State Government.',
        percent: 94,
      },
      {
        icon: <FolderOpenIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Project Management',
        description: 'Coordinated co-curricular programs & school safety initiatives.',
        percent: 87,
      },
      {
        icon: <MicrophoneIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Public Advocacy',
        description: 'Key speaker at education summits; championed access to learning.',
        percent: 88,
      },
    ],
  },
  {
    name: 'Teaching & Curriculum',
    items: [
      {
        icon: <PresentationChartBarIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Teacher Training',
        description: 'Trained and supervised educators for improved classroom delivery.',
        percent: 93,
      },
      {
        icon: <BookOpenIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Curriculum Development',
        description: 'Designed & improved school curricula aligned with global standards.',
        percent: 92,
      },
      {
        icon: <TrophyIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Event Facilitation',
        description: 'Organized student competitions & capacity-building workshops.',
        percent: 86,
      },
    ],
  },
  {
    name: 'Student Support',
    items: [
      {
        icon: <UserGroupIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Child Psychology',
        description: 'Specialized in early childhood & adolescent behavior support.',
        percent: 90,
      },
      {
        icon: <UserCircleIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Student Counseling',
        description: 'Guided students on academic and career paths with proven results.',
        percent: 89,
      },
      {
        icon: <ShieldCheckIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Safety & Health Programs',
        description: 'Led student safety campaigns and wellness programs.',
        percent: 84,
      },
    ],
  },
  {
    name: 'Skills & Technology',
    items: [
      {
        icon: <HandRaisedIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Soft Skills & EQ',
        description: 'Promoted empathy, leadership, and workplace ethics among staff.',
        percent: 91,
      },
      {
        icon: <ComputerDesktopIcon className="w-6 h-6 text-brand-accent" />,
        title: 'Computer Literacy',
        description: 'Competent in educational tech, digital tools, and e-learning platforms.',
        percent: 85,
      },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Core Competencies</h2>
          <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
            Over a Decade of Impact in Education, Policy, and Student Success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} data-aos="fade-up" data-aos-delay={catIdx * 100}>
              <h3 className="text-xl font-bold text-brand-accent mb-6 tracking-tight">{category.name}</h3>
              <ul className="space-y-8">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-primary rounded-full shadow-md">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white tracking-tight">{item.title}</div>
                      <div className="text-brand-muted text-sm mt-1 leading-relaxed">{item.description}</div>
                      <div className="mt-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-brand-accent font-bold">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-brand-primary rounded-full h-3">
                          <div
                            className="bg-brand-accent h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
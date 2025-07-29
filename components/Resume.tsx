import React, { useState } from 'react';
import { WORK_EXPERIENCE, EDUCATION, TRAININGS, WRITE_UPS } from '../constants';
import type { TimelineEvent, WriteUp } from '../types';

const TimelineItem: React.FC<TimelineEvent> = ({ date, title, subtitle, description }) => (
  <div className="relative pl-8 pb-8 border-l border-gray-700 timeline-item">
    <div className="flex items-start mb-1">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-brand-accent font-semibold">{subtitle}</p>
        <time className="text-sm text-brand-muted">{date}</time>
      </div>
    </div>
    {description && <p className="text-brand-muted mt-2">{description}</p>}
  </div>
);

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'training', label: 'Trainings' },
    { id: 'publications', label: 'Write-ups' },
  ];
  
  const handleDownload = () => {
    alert('CV download functionality is not yet implemented.');
  };

  return (
    <section id="resume" className="py-20 md:py-28 bg-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">My Legacy in Education</h2>
          <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
            A journey of dedication to shaping minds and educational landscapes across Nigeria.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button onClick={handleDownload} className="bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-all">
            Download Full CV
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-gray-700 flex justify-center flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 font-medium text-sm sm:text-base transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-brand-accent text-brand-accent'
                    : 'text-brand-muted hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div>
            {activeTab === 'experience' && (
              <div>{WORK_EXPERIENCE.map((item, i) => <TimelineItem key={i} {...item} />)}</div>
            )}
            {activeTab === 'education' && (
              <div>{EDUCATION.map((item, i) => <TimelineItem key={i} {...item} />)}</div>
            )}
            {activeTab === 'training' && (
              <div>{TRAININGS.map((item, i) => <TimelineItem key={i} {...item} />)}</div>
            )}
            {activeTab === 'publications' && (
                <div className="space-y-4">
                    {WRITE_UPS.map((item: WriteUp, i: number) => (
                        <div key={i} className="bg-brand-primary p-4 rounded-lg border border-gray-700">
                            <p className="font-semibold text-white">{item.title}</p>
                            <p className="text-sm text-brand-muted">{item.year}</p>
                        </div>
                    ))}
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

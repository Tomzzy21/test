import React, { useState, useEffect } from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const [rechartsLoaded, setRechartsLoaded] = useState(false);

  useEffect(() => {
    // Check if Recharts is already available on the window object
    if ((window as any).Recharts) {
      setRechartsLoaded(true);
      return;
    }

    // If not available, poll for it every 100ms
    const intervalId = setInterval(() => {
      if ((window as any).Recharts) {
        setRechartsLoaded(true);
        clearInterval(intervalId);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // If the Recharts library hasn't loaded yet, display a loading state.
  if (!rechartsLoaded) {
    return (
      <section id="skills" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Core Competencies</h2>
            <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
              A visual representation of my key areas of expertise in the educational sector.
            </p>
          </div>
          <div className="w-full h-96 md:h-[500px] max-w-4xl mx-auto flex items-center justify-center bg-brand-secondary rounded-lg">
            <p className="text-brand-muted">Loading Chart...</p>
          </div>
        </div>
      </section>
    );
  }

  // Once Recharts is confirmed to be available, destructure its components.
  const { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } = (window as any).Recharts;

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Core Competencies</h2>
          <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
            A visual representation of my key areas of expertise in the educational sector.
          </p>
        </div>

        <div className="w-full h-96 md:h-[500px] max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
              <PolarGrid stroke="#4A5568" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#F0F6FC', fontSize: 14 }} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#161B22', 
                  border: '1px solid #4A5568',
                  color: '#F0F6FC'
                }}
                labelStyle={{ color: '#FBBF24' }}
              />
              <Radar 
                name="Proficiency" 
                dataKey="A" 
                stroke="#FBBF24" 
                fill="#FBBF24" 
                fillOpacity={0.6} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
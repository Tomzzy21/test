import type React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface Skill {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Testimonial {
  quote: string;
  name:string;
  title: string;
}

export interface WriteUp {
    title: string;
    year: number;
}

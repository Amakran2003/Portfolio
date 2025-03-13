export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  role?: string;
  year?: string;
  status?: 'completed' | 'in-progress';
  features?: string[]; // Added features property to support project details
}

export interface ProjectTranslation {
  title: string;
  description: string;
  role?: string;
}

// Add to existing type declarations
declare module './translations' {
  interface TranslationsType {
    [language: string]: {
      projectContent: {
        [id: string]: ProjectTranslation;
      };
    };
  }
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}
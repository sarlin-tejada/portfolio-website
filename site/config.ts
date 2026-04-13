export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  projectsDescription: string;
}

export const SITE: SiteConfig = {
  author: 'Sarlin Tejada',
  desc: 'Data analyst connecting data, behavior, and systems to impact',
  title: 'Sarlin Tejada',
  ogImage: '',
  lang: 'en-US',
  base: '/',
  website: 'https://www.sarlintejada.com/',
  social: {
    linkedin: 'https://www.linkedin.com/in/sarlin-tejada/'
  },
  googleAnalyticsId: 'G-0LKMP10F2S',
  projectsDescription: 'Projects focused on understanding patterns, exploring data, and figuring out what’s actually driving outcomes.',
};

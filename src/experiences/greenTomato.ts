import type { Experience } from '../types/experience';

const greenTomato: Experience = {
  title: 'Full Stack Developer',
  company: 'GreenTomato',
  type: 'Tech · Vendor (EdTech client)',
  period: '10/2021 – 08/2022',
  location: 'Hong Kong',
  points: [
    'Delivered an AI-powered study abroad platform for an education startup (Cyclopes) — built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS, with Lottie animations for enhanced user engagement, optimised for high-traffic during peak application seasons',
    'Collaborated with a Kotlin specialist to architect a personalised university recommendation microservice using Kotlin, Spring Boot, and the DGS GraphQL framework — backed by MongoDB on Tencent Cloud, adapting to an unfamiliar backend stack to meet project requirements',
    'Primary contributor to the university comparison feature — designed and built both the frontend filtering/ranking UI and backend data aggregation layer, the most complex and time-intensive deliverable of the project',
  ],
};

export default greenTomato;

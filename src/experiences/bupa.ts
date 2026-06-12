import type { Experience } from '../types/experience';

const bupa: Experience = {
  title: 'Software Engineer',
  company: 'Bupa Hong Kong',
  type: 'HealthTech · In-house',
  period: '02/2023 – 04/2024',
  location: 'Hong Kong',
  points: [
    'Onboarded onto the Billing Operation System (ABOS/QBOS) — built full-stack modules using Quasar (Vue.js) and TypeScript/Node.js, and contributed to the OracleDB to MS SQL migration ensuring data reliability',
    "Seconded to build secure data synchronisation pipelines between Bupa's internal systems and the GOVHK eHealth portal — structurally equivalent to NHS Spine integration, using TypeScript, Node.js, TypeORM, MS SQL, and Azure Logic Apps for real-time monitoring and compliance",
    "Transitioned to modernise the Medical Network Management System (MNMS) — rebuilt frontend with Quasar (Vue.js) and backend with Java Spring Boot, concurrent with Bupa's migration to Azure Cloud",
  ],
};

export default bupa;

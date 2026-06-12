import type { Experience } from '../types/experience';

const chocoUp: Experience = {
  title: 'Software Engineer',
  company: 'Choco Up',
  type: 'Fintech · In-house',
  period: '04/2024 – 11/2025',
  location: 'Hong Kong',
  points: [
    'Joined during an active platform revamp from a monolithic v1/v2 system to a cloud-native v3 architecture — rebuilding the stack with React, TypeScript, Node.js, Hono.js on AWS with Terraform and GitHub-managed CI/CD',
    'Maintained v1/v2 PostgreSQL systems while migrating to v3 MongoDB in parallel — used Zod schema validation to catch data inconsistencies across both layers during transition',
    'Implemented eDDA/eGIRO payment gateway integrations within the v3 multi-entity RBAC portal — replacing a manual script-based verification process with a fully automated workflow, reducing human error risk in a regulated financial environment',
    'Built a legal document generation pipeline using Docxtemplater for contract and compliance templates',
  ],
};

export default chocoUp;

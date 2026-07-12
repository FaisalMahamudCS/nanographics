export type Project = {
  slug: string
  title: string
  description: string
  impact: string[]
  metrics: { label: string; value: string }[]
  tech: string[]
  industry: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'agrigate-marketplace',
    title: 'Agrigate Multi-Vendor E-Commerce',
    description:
      'Next-generation agricultural marketplace enabling vendors to manage stores, inventory, orders, and engage buyers with AI-driven recommendations.',
    impact: [
      'AI-powered vendor-buyer matching',
      'Secure multi-vendor payment flows',
      'Real-time chat and analytics dashboard',
    ],
    metrics: [
      { label: 'Vendors', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'API Latency', value: '<200ms' },
    ],
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'LangChain', 'AWS'],
    industry: 'Agriculture',
    featured: true,
  },
  {
    slug: 'poultry-ai-monitoring',
    title: 'AI Poultry Farm Monitoring',
    description:
      'Full-stack AI + IoT platform for real-time poultry monitoring using computer vision, audio analysis, and edge AI processing.',
    impact: [
      'YOLOv8 chicken counting at edge',
      'Real-time alerting system',
      'Cloud ML pipeline integration',
    ],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Edge Devices', value: '50+' },
      { label: 'Data Points', value: '1M+/day' },
    ],
    tech: ['Python', 'YOLOv8', 'FastAPI', 'Next.js', 'AWS Lambda', 'MQTT'],
    industry: 'Agriculture',
    featured: true,
  },
  {
    slug: 'twin-flow-ai',
    title: 'Twin Flow AI',
    description:
      'HIPAA-compliant digital treatment planning platform for cardiac care with AI/ML cardiac rhythm analysis.',
    impact: [
      '20% workflow efficiency improvement',
      'Patient enrollment and billing automation',
      'AI-driven cardiac diagnostics',
    ],
    metrics: [
      { label: 'Efficiency Gain', value: '+20%' },
      { label: 'Release Time', value: '-20%' },
      { label: 'Compliance', value: 'HIPAA' },
    ],
    tech: ['Node.js', 'Next.js', 'PostgreSQL', 'Python', 'Docker', 'AWS'],
    industry: 'Healthcare',
    featured: true,
  },
  {
    slug: 'muslim-bangla',
    title: 'Muslim Bangla',
    description:
      'Comprehensive Islamic platform for Bengali-speaking users with Quran, Hadith, prayer times, and millions of active users worldwide.',
    impact: [
      'Cross-platform Islamic content delivery',
      'Quran audio recitations and Qibla direction',
      'Prayer notification system',
    ],
    metrics: [
      { label: 'Active Users', value: '1M+' },
      { label: 'Platforms', value: 'Web + App' },
      { label: 'Availability', value: '99.9%' },
    ],
    tech: ['Node.js', 'Next.js', 'PostgreSQL', 'MySQL', 'AWS', 'Docker'],
    industry: 'Education',
    featured: true,
  },
  {
    slug: 'melbourne-limolink',
    title: 'Melbourne Limolink',
    description:
      'Premium chauffeur service platform with real-time booking, fleet management, and role-based dashboards.',
    impact: [
      'Real-time booking and dispatch',
      'Payment and map API integration',
      'Multi-role admin dashboards',
    ],
    metrics: [
      { label: 'Bookings', value: '10K+' },
      { label: 'Fleet Size', value: '50+' },
      { label: 'Response Time', value: '<3s' },
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'PayPal', 'Strapi', 'AWS'],
    industry: 'Travel',
  },
  {
    slug: 'ducorp-trading',
    title: 'Ducorp Trading Website',
    description:
      'High-performance corporate website for UAE-based trading company with global CDN and AWS load balancing.',
    impact: [
      'Server-side rendering for SEO',
      'Global CDN delivery',
      'AWS ALB with auto-scaling',
    ],
    metrics: [
      { label: 'Page Load', value: '<1.5s' },
      { label: 'Lighthouse', value: '95+' },
      { label: 'Regions', value: 'Global' },
    ],
    tech: ['Next.js', 'Tailwind CSS', 'GSAP', 'AWS EC2', 'CloudFront', 'Nginx'],
    industry: 'Business',
  },
  {
    slug: 'agrigate-erp',
    title: 'Agrigate ERP',
    description:
      'Comprehensive ERP for agriculture business with AI-assisted inventory forecasting and role-based dashboards.',
    impact: [
      '25% reduction in stock-outs',
      '80% cloud cost reduction',
      'AI inventory forecasting',
    ],
    metrics: [
      { label: 'Stock-out Reduction', value: '25%' },
      { label: 'Cost Savings', value: '80%' },
      { label: 'Modules', value: '12+' },
    ],
    tech: ['Django', 'React', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD'],
    industry: 'Agriculture',
  },
  {
    slug: 'permisgo',
    title: 'Permisgo Driving School',
    description:
      'Driving school platform with dynamic scheduling, student/instructor portals, and secure payment integration.',
    impact: [
      'Role-specific student and instructor portals',
      'Progress tracking and scheduling',
      'Secure payment processing',
    ],
    metrics: [
      { label: 'Students', value: '2K+' },
      { label: 'Instructors', value: '50+' },
      { label: 'Uptime', value: '99.5%' },
    ],
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Strapi', 'AWS'],
    industry: 'Education',
  },
]

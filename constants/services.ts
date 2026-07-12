import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Layers,
  MessageSquareCode,
  Monitor,
  Palette,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  category: 'ai' | 'web' | 'cloud' | 'teams'
}

export const SERVICES: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description:
      'Custom machine learning pipelines, computer vision, and predictive models engineered for production scale.',
    icon: Brain,
    category: 'ai',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description:
      'RAG systems, fine-tuned models, and content generation workflows tailored to your business domain.',
    icon: Sparkles,
    category: 'ai',
  },
  {
    id: 'llm-integration',
    title: 'LLM Integration',
    description:
      'OpenAI, Claude, and Gemini integrations with secure APIs, prompt engineering, and cost optimization.',
    icon: MessageSquareCode,
    category: 'ai',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description:
      'Autonomous agents with tool use, memory, and orchestration for complex multi-step business workflows.',
    icon: Bot,
    category: 'ai',
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description:
      'High-performance React and Next.js applications with SSR, real-time features, and enterprise security.',
    icon: Monitor,
    category: 'web',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description:
      'Cross-platform Flutter and native mobile experiences with offline support and seamless API integration.',
    icon: Smartphone,
    category: 'web',
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    description:
      'ERP modules, multi-vendor platforms, and mission-critical systems built for millions of users.',
    icon: Layers,
    category: 'web',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'AWS and Azure infrastructure, Kubernetes orchestration, and CI/CD pipelines that reduce costs by 40%.',
    icon: Cloud,
    category: 'cloud',
  },
  {
    id: 'automation',
    title: 'Automation',
    description:
      'Workflow automation with n8n, event-driven architectures, and RabbitMQ for reliable async processing.',
    icon: Workflow,
    category: 'cloud',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'Product design systems, user research, and interfaces that balance aesthetics with conversion.',
    icon: Palette,
    category: 'web',
  },
  {
    id: 'mvp-development',
    title: 'MVP Development',
    description:
      'Rapid prototyping and launch-ready MVPs that validate ideas fast without sacrificing architecture.',
    icon: Rocket,
    category: 'web',
  },
  {
    id: 'dedicated-teams',
    title: 'Dedicated Teams',
    description:
      'Augment your team with senior engineers who integrate seamlessly and deliver from day one.',
    icon: Users,
    category: 'teams',
  },
]

export const SERVICE_CATEGORIES = [
  { id: 'ai', label: 'AI & Intelligence', icon: Cpu },
  { id: 'web', label: 'Product Engineering', icon: Code2 },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Server },
  { id: 'teams', label: 'Team Augmentation', icon: Users },
] as const

export const PROCESS_STEPS = [
  { step: '01', title: 'Discover', description: 'Understand goals, constraints, and success metrics through collaborative workshops.' },
  { step: '02', title: 'Research', description: 'Analyze users, competitors, and technical landscape to inform architecture decisions.' },
  { step: '03', title: 'Design', description: 'Create UX flows, system architecture, and technical specifications for alignment.' },
  { step: '04', title: 'Develop', description: 'Build iteratively with agile sprints, code reviews, and continuous integration.' },
  { step: '05', title: 'Deploy', description: 'Ship to production with zero-downtime deployments, monitoring, and security hardening.' },
  { step: '06', title: 'Optimize', description: 'Measure performance, reduce cloud costs, and improve reliability at scale.' },
  { step: '07', title: 'Support', description: 'Provide ongoing maintenance, feature evolution, and dedicated engineering support.' },
] as const

import {
    Rocket, Users, BrainCircuit, TrendingDown,
    Briefcase, Terminal, Smartphone, CloudCog, Layers, Cpu,
    HeartPulse, Banknote, ShoppingCart, Truck, GraduationCap, Cloud,
    Plane, MonitorPlay, Home, Car, Droplet, Utensils, Trophy
} from 'lucide-react';

export const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Tech', href: '#stack' },
    { label: 'Industries', href: '#industries' }
];

export const stats = [
    {
        Icon: Rocket, iconColor: '#3b82f6', iconBg: 'rgba(59, 130, 246, 0.15)',
        target: 40, suffix: '%', suffixColor: '#3b82f6',
        title: 'Faster Deployment',
        desc: 'Ship production-ready features\n in weeks, not months'
    },
    {
        Icon: Users, iconColor: '#a855f7', iconBg: 'rgba(168, 85, 247, 0.15)',
        target: 10, suffix: 'x', suffixColor: '#a855f7',
        title: 'Traffic Capacity',
        desc: 'Handle scale without expensive\n rewrites or downtime'
    },
    {
        Icon: BrainCircuit, iconColor: '#e11d48', iconBg: 'rgba(225, 29, 72, 0.15)',
        target: 3, suffix: 'x', suffixColor: '#e11d48',
        title: 'Faster AI Integration',
        desc: 'Deploy AI features on your existing\n stack without starting over'
    },
    {
        Icon: TrendingDown, iconColor: '#10b981', iconBg: 'rgba(16, 185, 129, 0.15)',
        target: 30, suffix: '%', suffixColor: '#10b981',
        title: 'Cost Reduction',
        desc: 'Optimized architecture means lower\n hosting & maintenance costs'
    },
];

export const services = [
    { Icon: Briefcase, title: 'IT Consulting', desc: 'We guide businesses with expert IT consulting to plan, build, and scale software, mobile apps, and AI solutions efficiently.' },
    { Icon: BrainCircuit, title: 'AI Development', desc: 'We help develop full-cycle AI solutions, build models like machine learning, NLPs, integrate AI into existing systems, and automate workflows.' },
    { Icon: Terminal, title: 'Software Development', desc: 'We develop custom software solutions that solve operational challenges, improve efficiency, and align perfectly with your long-term business goals.' },
    { Icon: Rocket, title: 'MVP Development', desc: 'Our agile MVP development service helps you test a product idea in the real market to validate, gather feedback, refine, and drive value with minimum resources.' },
    { Icon: Cpu, title: 'IoT App & Software', desc: 'We build innovative IoT solutions powered by artificial intelligence that connect devices, collect data, and help businesses make faster, better decisions.' },
    { Icon: CloudCog, title: 'Cloud Solutions', desc: 'We provide end-to-end cloud consulting, development, and migration services that improve scalability, reliability, and data accessibility.' },
    { Icon: Layers, title: 'Product Engineering', desc: 'We provide end-to-end design, development, testing, and maintenance of your software product, backed by our product engineering expertise.' },
    { Icon: Users, title: 'Dedicated Teams', desc: 'Our dedicated developers act as an extension of your in-house team, offering flexibility, expertise, and complete project ownership.' },
    { Icon: Smartphone, title: 'App Development', desc: 'We build award-winning custom mobile apps that enhance business efficiency, improve user customer experience & loyalty, and give you a competitive edge.' },
];

export const cases = [
    {
        accent: 'var(--grad)', industry: 'HealthTech', industryStyle: {},
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        title: 'AI Diagnostic Assistant for Clinic Chain',
        problem: 'Manual patient intake was slow across 40+ clinics',
        solution: 'AI triage assistant that classifies symptoms and routes patients',
        result: '62% faster intake · 91% accuracy · 3 months',
        stack: ['OpenAI', 'Next.js', 'AWS', 'PostgreSQL'],
    },
    {
        accent: 'linear-gradient(135deg,#f59e0b,#ef4444)', industry: 'FinTech',
        industryStyle: { color: '#d97706', background: 'rgba(245,158,11,.1)' },
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        title: 'Real-Time Fraud Detection Engine',
        problem: 'Legacy system missed 34% of fraud patterns, $2M/year loss',
        solution: 'ML pipeline analyzing 200+ signals in real-time',
        result: 'Fraud ↓78% · 50K txns/sec processed',
        stack: ['Python', 'TensorFlow', 'Node.js', 'Redis'],
    },
    {
        accent: 'linear-gradient(135deg,#10b981,#06b6d4)', industry: 'E-commerce',
        industryStyle: { color: '#059669', background: 'rgba(16,185,129,.1)' },
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        title: 'Personalization Engine for D2C Brand',
        problem: 'Generic recommendations led to 1.4% conversion rate',
        solution: 'AI recommendation engine trained on behavioral data',
        result: 'Conversion 4.1% · AOV +31% · shipped in 8 weeks',
        stack: ['LangChain', 'React', 'Django', 'AWS'],
    },
];

export const steps = [
    { num: '1', title: 'Discovery & Analysis', desc: 'Understand business goals and technical needs to create a clear plan for development.' },
    { num: '2', title: 'Architecture Design', desc: 'Build a strong and scalable system design that fits your business needs.' },
    { num: '3', title: 'Development Phase', desc: 'Use modern tools and agile methods to build reliable, high-quality software faster.' },
    { num: '4', title: 'Testing & QA', desc: 'Test the software in different environments to ensure top performance and stability.' },
    { num: '5', title: 'Deployment & Integration', desc: 'Launch smoothly within existing systems with minimal business disruption.' },
    { num: '6', title: 'Continuous Improvement', desc: 'Keep improving and updating the software as your business and technology grow.' },
];

export const tabs = [
    { id: 'ai', label: 'AI / ML', techs: ['OpenAI', 'LangChain', 'TensorFlow', 'HuggingFace', 'PyTorch'] },
    { id: 'fe', label: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { id: 'mo', label: 'Mobile', techs: ['React Native', 'Flutter'] },
    { id: 'be', label: 'Backend', techs: ['Node.js', 'Express', 'Django', 'Python', 'FastAPI'] },
    { id: 'cl', label: 'Cloud', techs: ['AWS', 'Docker', 'Kubernetes', 'GCP', 'Vercel'] },
    { id: 'db', label: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
];

export const industries = [
    { Icon: Truck, name: 'Logistics', items: ['Fleet tracking Software', 'Load Planning Software', 'Warehouse Management System'], color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
    { Icon: HeartPulse, name: 'Healthcare', items: ['Telemedicine App', 'EHR, EMR, Patient Portal', 'Medical Billing Software'], color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
    { Icon: ShoppingCart, name: 'eCommerce', items: ['B2B, B2C, C2C & PoS Marketplaces', 'Order Management Software', 'Inventory Management Software'], color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
    { Icon: Plane, name: 'Travel', items: ['Booking Engine Software', 'Travel Itinerary App', 'Loyalty Management Software'], color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
    { Icon: Banknote, name: 'Fintech', items: ['Digital Wallet Platforms', 'KYC AML Software', 'P2P Payment Solutions'], color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    { Icon: MonitorPlay, name: 'Entertainment', items: ['OTT Streaming Apps', 'Music Streaming Apps', 'Content Management Solutions'], color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
    { Icon: GraduationCap, name: 'Education', items: ['School Management System', 'LMS Software Development', 'Online Assessment Platform'], color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
    { Icon: Home, name: 'Real Estate', items: ['Property Management Software', 'Real Estate CRM System', 'Brokers & Agents Tools'], color: '#ec4899', bg: 'rgba(236,72,153,0.1)' },
    { Icon: Car, name: 'Automotive', items: ['Telematics Solutions', 'Dealership Management', 'EV Charging Software'], color: '#f43f5e', bg: 'rgba(244,63,94,0.1)' },
    { Icon: Droplet, name: 'Oil & Gas', items: ['SCADA Software Tools', 'Asset Monitoring Systems', 'HSE Compliance Tech'], color: '#eab308', bg: 'rgba(234,179,8,0.1)' },
    { Icon: Utensils, name: 'Restaurant', items: ['POS Integration Services', 'Reservation System Development', 'Cloud Kitchen Software'], color: '#f97316', bg: 'rgba(249,115,22,0.1)' },
    { Icon: Trophy, name: 'Sports', items: ['Live Score Platforms', 'Performance Analytics', 'Fantasy Sports App'], color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
];

export const testimonials = [
    { quote: "DeetyaEnterprise delivered our AI model in 5 weeks. We went from prototype to production and closed a $3M enterprise deal within months.", name: "Arjun Mehta", role: "CTO, MedPulse", initials: "AM" },
    { quote: "Their team doesn't just write code — they think like founders. They challenged our assumptions and built something far better than we imagined.", name: "Sarah Collins", role: "CEO, FinScale", initials: "SC" },
    { quote: "We hired them for a 3-month project. They're still our core AI team 18 months later. Quality unmatched.", name: "Ravi Sharma", role: "Founder, NeuralCart", initials: "RS" },
    { quote: "From UI design to AWS deployment — one team handled everything. Saved us 4 months of coordination.", name: "Priya Das", role: "VP Product, LogiAI", initials: "PD" },
];

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code,
  Server,
  Database,
  Cloud,
  Activity,
  ListChecks,
} from 'lucide-react'

const categories = [
  {
    key: 'frontend',
    title: 'Frontend',
    color: 'from-sky-400 to-indigo-500',
    icon: Code,
    items: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    key: 'backend',
    title: 'Backend',
    color: 'from-emerald-400 to-teal-500',
    icon: Server,
    items: ['Node.js', 'Express', 'Java', 'PHP', 'Python'],
  },
  {
    key: 'database',
    title: 'Database',
    color: 'from-amber-400 to-orange-500',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    key: 'devops',
    title: 'DevOps & Cloud',
    color: 'from-cyan-400 to-blue-500',
    icon: Cloud,
    items: ['Docker', 'AWS', 'GitHub Actions', 'NGINX', 'Vercel'],
  },
  {
    key: 'monitoring',
    title: 'Monitoring & Logging',
    color: 'from-fuchsia-400 to-pink-500',
    icon: Activity,
    items: ['Grafana', 'Prometheus', 'Loki', 'Sentry'],
  },
  {
    key: 'orms',
    title: 'ORMs / Validation',
    color: 'from-violet-400 to-purple-500',
    icon: ListChecks,
    items: ['Prisma', 'Mongoose', 'Zod'],
  },
]

function OrbitIcons({ items }) {
  const radius = 120
  return (
    <div className="relative mx-auto h-[260px] w-[260px]">
      {items.map((label, i) => {
        const angle = (i / items.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <motion.div
            key={label}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              x,
              y,
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
          >
            <div className="select-none rounded-xl border border-gray-200 bg-white/90 shadow backdrop-blur px-3 py-1.5 text-sm font-medium text-gray-700">
              {label}
            </div>
          </motion.div>
        )
      })}

      {/* orbit line */}
      <div className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-gray-300" />
    </div>
  )
}

function CategoryCard({ cat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5, once: false })

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="order-2 lg:order-1"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
          <cat.icon className="h-5 w-5 text-gray-700" />
          <span className="text-sm font-semibold text-gray-800">{cat.title}</span>
        </div>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          {cat.title} Skills
        </h3>
        <p className="mt-2 text-gray-600">
          A focused set of tools I use frequently. The labels orbit to hint at motion
          and playful energy while keeping things minimal and readable.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="order-1 lg:order-2"
      >
        <div className={`relative rounded-3xl p-8 ring-1 ring-black/5 bg-gradient-to-br ${cat.color}`}>
          <div className="rounded-2xl bg-white/70 p-6 backdrop-blur shadow-inner">
            <OrbitIcons items={cat.items} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="relative py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900"
          >
            Tech & Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-gray-600"
          >
            Scroll to discover different categories—each with subtle 3D-inspired motion.
          </motion.p>
        </div>

        <div className="mt-6 md:mt-10 space-y-6 md:space-y-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.key} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

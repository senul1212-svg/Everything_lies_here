import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import { cn } from '../lib/utils.js'

const items = [
  { title: 'GitHub', href: 'https://github.com/senul1212-svg', icon: IconBrandGithub },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/senul-manjitha-4b5978447?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: IconBrandLinkedin },
  { title: 'Instagram', href: 'https://www.instagram.com/z.enull?dlrf=MTZhYXppeThwYXJldQ==', icon: IconBrandInstagram },
  { title: 'Facebook', href: 'https://www.facebook.com/share/19s5xoAgHa/', icon: IconBrandFacebook },
  { title: 'Email', href: 'mailto:', icon: IconMail },
]

function DockItem({ item, mouseX }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const distance = useTransform(mouseX, value => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return value - bounds.x - bounds.width / 2
  })
  const widthSync = useTransform(distance, [-150, 0, 150], [42, 60, 42])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })
  const Icon = item.icon

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={item.title}
      className="floating-dock__item"
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileTap={{ scale: 0.92 }}
    >
      <motion.span className="floating-dock__tooltip" animate={{ opacity: hovered ? 1 : 0, left: '50%', x: '-50%', y: hovered ? 0 : 5 }}>
        {item.title}
      </motion.span>
      <Icon aria-hidden="true" className="floating-dock__icon" stroke={1.7} />
    </motion.a>
  )
}

export default function FloatingDock({ className }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.nav
      aria-label="Social and site links"
      className={cn('floating-dock', className)}
      onMouseMove={event => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {items.map(item => <DockItem key={item.title} item={item} mouseX={mouseX} />)}
    </motion.nav>
  )
}

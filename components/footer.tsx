"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import SafeImage from "./safe-image"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-secondary pt-16 pb-8"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="relative h-12 w-auto mr-2 overflow-hidden">
                  <SafeImage
                    src="/logo-transparent.png"
                    fallbackSrc="/new-logo.png"
                    alt="Thakker & Associates Logo"
                    width={220}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Providing exceptional legal services with integrity, dedication, and expertise since 2005.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/practice-areas/personal-injury"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Personal Injury
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/practice-areas/family-law"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Family Law
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/practice-areas/business-law"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Business Law
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/practice-areas/estate-planning"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Estate Planning
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/practice-areas/criminal-defense"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Criminal Defense
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/services" className="text-muted-foreground hover:text-gold transition-colors">
                  Our Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/faqs" className="text-muted-foreground hover:text-gold transition-colors">
                  FAQs
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Thakker & Associates. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    Terms of Service
                  </Link>
                </motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    Disclaimer
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

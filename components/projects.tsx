"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown, X } from "lucide-react"

// Define the Project type
type Project = {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Copy.ai Clone",
      shortDescription: "AI content generation platform with multiple writing tools.",
      description: "A clone of Copy.ai featuring multiple AI-powered writing tools and content generation capabilities.",
      image: "/Al Copy clone.png",
      tags: ["Next.js", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
      features: [
        "AI-powered content generation",
        "Multiple writing tools and templates",
        "User authentication",
        "Content saving and organization",
        "Responsive user interface"
      ],
      demoLink: "#",
      githubLink: "https://github.com/Shazam-byte/ai-copywriter",
      fullDescription:
        "This project is a functional clone of Copy.ai, an AI content generation platform. Built with Next.js and React, it integrates with OpenAI's API to generate various types of content including blog posts, marketing copy, and social media captions. The application features a modern UI built with Tailwind CSS, user authentication, and the ability to save and organize generated content.",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      shortDescription: "Full-featured online shopping platform with product management and checkout.",
      description: "A complete e-commerce solution with product catalog, cart functionality, and payment processing.",
      image: "/breeze.png",
      tags: ["React", "Node.js", "Stripe"],
      features: [
        "Product catalog with categories",
        "User authentication and profiles",
        "Shopping cart functionality",
        "Secure payment processing",
        "Order tracking and history"
      ],
      demoLink: "#",
      githubLink: "https://github.com/Shazam-byte/breeze-e-shop",
      fullDescription:
        "This e-commerce platform provides a complete online shopping experience. Built with the MERN stack (MongoDB, Express, React, Node.js), it features a responsive product catalog with filtering options, user registration and authentication, shopping cart management, secure checkout with Stripe integration, and order tracking capabilities. The admin dashboard allows for comprehensive product and inventory management.",
    },
    {
      id: 3,
      title: "Real Estate Website",
      shortDescription: "Property listing and search platform with interactive maps.",
      description: "A real estate website with property listings, advanced search, and interactive map integration.",
      image: "/estate.png",
      tags: ["React", "Firebase", "Google Maps API", "Tailwind CSS", "Authentication"],
      features: [
        "Property listings with details",
        "Advanced search and filtering",
        "Interactive map integration",
        "User favorites and saved searches",
        "Agent contact and inquiry system"
      ],
      demoLink: "#",
      githubLink: "https://github.com/Shazam-byte/estate-elite-exchange",
      fullDescription:
        "This real estate platform enables users to browse, search, and inquire about property listings. Built with React and Firebase for the backend, it features an intuitive search interface with filters for property type, price range, location, and amenities. The integration with Google Maps API provides interactive location viewing. Users can create accounts to save favorite properties and receive updates on new listings matching their criteria.",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription className="pt-2">
                  {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="mr-2 mb-2">
                      {tag}
                    </Badge>
                  ))}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover h-64"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

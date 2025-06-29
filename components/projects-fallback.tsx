"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "WhatsApp Group Scraper Bot",
    description: "Advanced Python bot for scraping Google to find WhatsApp group URLs with captcha bypass",
    tech: ["Python", "Selenium", "BeautifulSoup", "Requests", "JSON"],
    color: "bg-green-600",
  },
  {
    id: 2,
    title: "Google Search Automation",
    description: "Smart search queries with site filtering and live monitoring capabilities",
    tech: ["Google Search", "Site Filtering", "Live Monitoring", "CLI"],
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Captcha Bypass System",
    description: "Manual captcha resolution with browser automation and detection bypass",
    tech: ["Chrome Driver", "Anti-Detection", "Manual Bypass", "Automation"],
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Data Export & Analytics",
    description: "Multiple export formats with statistics and real-time monitoring",
    tech: ["JSON Export", "TXT Export", "Statistics", "Real-time"],
    color: "bg-purple-600",
  },
  {
    id: 5,
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio built with React Three Fiber and Next.js",
    tech: ["React Three Fiber", "Next.js", "TypeScript", "Tailwind"],
    color: "bg-teal-600",
  },
]

export function ProjectsFallback() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">🔧 What I Build</h2>
        <p className="text-center text-gray-300 mb-12">Full-stack applications with Python frameworks</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader>
                <div className={`w-full h-2 rounded-t-lg ${project.color}`}></div>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

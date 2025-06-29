"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, MessageCircle, ImageIcon } from "lucide-react"

export function Contact() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">💡 Let's Connect</h2>
        <p className="text-center text-gray-300 mb-12">"Not just coding. Building with purpose."</p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:mrwajahatalimir@gmail.com" className="hover:text-blue-400 transition-colors">
                    mrwajahatalimir@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <a href="https://wa.me/923700882006" className="hover:text-green-400 transition-colors">
                    WhatsApp: +92 370 088 2006
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span>Pakistan 🇵🇰</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/wajahatalimirpro" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href="https://wa.me/923700882006" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="https://www.pinterest.com/mrwajahatalimir" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Pinterest
                    </Button>
                  </a>
                  <a href="mailto:mrwajahatalimir@gmail.com">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">💡 Why Connect?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>🤝 Expert in Python automation & web scraping</div>
                  <div>📚 Shares advanced scraping techniques & tools</div>
                  <div>🧠 Specializes in captcha bypass & anti-detection</div>
                  <div>🌱 Builds production-ready automation solutions</div>
                  <div>🤓 Active in Python & automation communities</div>
                  <div>🚀 Created WhatsApp Group Scraper Bot</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message 🚀</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Button } from "@Components/ui/button"
import { Card, CardContent } from "@Components/ui/card"
import { Badge } from "@Components/ui/badge"
import { Calendar, Users, Star, Play, ChevronDown, Zap, Brain, Code, Cpu, Network, Layers } from 'lucide-react'

export default function FullStackRodeoConference() {
  const speakers = [
    { name: "Sarah Johnson", image: "/placeholder.svg" },
    { name: "Mike Chen", image: "/placeholder.svg" },
    { name: "Emily Davis", image: "/placeholder.svg" },
    { name: "Alex Rodriguez", image: "/placeholder.svg" },
    { name: "Lisa Thompson", image: "/placeholder.svg" },
  ]

  const stats = [
    { number: "200+", label: "Local Developers" },
    { number: "50+", label: "Austin Speakers" },
    { number: "15+", label: "Hands-On Sessions" },
    { number: "∞", label: "New Connections" },
  ]

  const testimonials = [
    { name: "John Doe", role: "CTO", company: "TechCorp", avatar: "/placeholder.svg" },
    { name: "Jane Smith", role: "Lead Developer", company: "DevStudio", avatar: "/placeholder.svg" },
    {
      name: "Bob Wilson",
      role: "Engineering Manager",
      company: "CodeLab",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-sm opacity-50"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FULL-STACK AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors relative group">
              Speakers
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors relative group">
              Schedule
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors relative group">
              Tickets
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-0 shadow-lg shadow-cyan-500/25">
            <Zap className="w-4 h-4 mr-2" />
            Register Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 z-10">
        <div className="relative text-center max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-8 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              FULL-STACK
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-3xl -z-10"></div>
          </h1>

          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
            <Code className="mx-4 text-cyan-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-32"></div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-cyan-100">
            Austin's community-driven conference for full-stack AI builders
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with local developers, learn practical AI integration techniques,
            <br />
            and build lasting relationships in Austin's thriving tech community.
          </p>

          <div className="mb-8">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 text-base px-4 py-2">
              Austin · May 2025
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              { icon: "🤖", title: "AI Integration Deep Dives", desc: "Learn to build AI chats, implement agents, and integrate MCP into your full-stack applications." },
              { icon: "⚡", title: "AI-Powered Workflows", desc: "Discover how to use AI for coding, designing, project management, and streamlining your development process." },
              { icon: "🔮", title: "Hands-On Workshops", desc: "Build real AI-powered applications with guided labs covering frontend, backend, databases, and agents." },
              { icon: "🌐", title: "Community & Networking", desc: "Connect with Austin's AI developers and build relationships that extend beyond the conference." }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-bold text-cyan-300 mb-2 text-lg">{feature.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <p className="text-xl text-cyan-100 mb-4 font-semibold">
              Ready to <span className="text-purple-400">build the future with AI</span>?
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Join Austin's most collaborative AI conference where local developers share knowledge,
              build connections, and explore the cutting edge of full-stack AI development together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-lg px-10 py-4 shadow-lg shadow-cyan-500/25 border-0">
              <Zap className="w-5 h-5 mr-2" />
              Initialize Connection
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent text-lg px-10 py-4">
              <Brain className="w-5 h-5 mr-2" />
              View Neural Map
            </Button>
          </div>
        </div>
      </section>

      {/* Synepto WSO2 Section */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-2xl font-bold text-cyan-300">synepto</div>
            <div className="text-3xl font-bold text-orange-400">
              WSO<sub>2</sub>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/30">
              <Image
                src="/ai-conference-presentation.png"
                alt="Conference presentation"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50">
                  <Play className="w-6 h-6 text-cyan-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-stack AI Rodeo Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full-Stack AI
                </span>
                <br />
                <span className="text-cyan-300">Austin 2025</span>
              </h3>
              <p className="text-gray-300 mb-6">What you'll master at the neural convergence:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>AI chat integration (frontend to backend)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>MCP (Model Context Protocol) implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>AI agents and autonomous workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>AI-enhanced development workflows</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-lg"></div>
              <Image
                src="/ai-conference.png"
                alt="Conference highlights"
                width={400}
                height={400}
                className="rounded-lg relative border border-cyan-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Invited Speakers */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Community Speakers
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto relative border-2 border-cyan-500/30">
                    <Image
                      src="/diverse-ai-speaker-headshot.png"
                      alt={speaker.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-cyan-300">{speaker.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speaker */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-lg"></div>
              <Image
                src="/douglas-alvarado-headshot.png"
                alt="Douglas Alvarado"
                width={400}
                height={500}
                className="rounded-lg relative border border-cyan-500/30"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-100">Douglas Alvarado</h3>
              <p className="text-purple-400 mb-4">Senior AI Systems Architect</p>
              <p className="text-gray-300 mb-6">
                Douglas is a seasoned AI systems architect with over 10 years of experience building scalable neural
                networks and autonomous agents. He specializes in LLM deployment, vector databases, and production AI
                systems, having worked with Fortune 500 companies to deliver cutting-edge AI solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="border-cyan-500 text-cyan-400 bg-transparent hover:bg-cyan-500/10">
                  View Neural Profile
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Neural Link: 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Conference Strategy */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Community-First
            </span>{" "}
            <span className="text-cyan-300">Approach</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Local Developers <span className="text-purple-400">Building Together</span>
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300">
              Our community-focused conference emphasizes practical AI integration, real-world applications,
              and hands-on workshops designed to help Austin developers build better AI-powered applications
              while fostering lasting professional relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Scheduled Events */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Scheduled Data Streams
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/ai-workshop-coding.png"
                    alt="Workshop session"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-cyan-300">AI Agent Architecture</h4>
                  <p className="text-gray-400 mb-4">Building autonomous neural systems</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Nov 15, 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>50 neural links</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/ai-conference-networking.png"
                    alt="Networking session"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-purple-300">LLM Production Patterns</h4>
                  <p className="text-gray-400 mb-4">Scaling AI applications in the matrix</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Nov 16, 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>75 neural links</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Community Stats
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cyan-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Industry Leaders Say */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Community Testimonials
            </span>
          </h3>
          <div className="flex justify-center space-x-4 mb-8">
            {testimonials.map((person, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-sm"></div>
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative border border-cyan-500/30">
                  <Image
                    src={person.avatar || '/placeholder.svg'}
                    alt={person.name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-6">
              "Full-Stack AI Conference brings together Austin's most passionate developers in an environment that
              fosters real learning and lasting professional relationships. The community connections I made
              here have been invaluable to my AI development journey."
            </p>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Pricing */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Conference Passes
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 text-white backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4 text-cyan-300">Basic Neural Link</h4>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">$299</div>
                <ul className="space-y-2 mb-8 text-gray-300">
                  <li>Full-day access</li>
                  <li>All neural sessions</li>
                  <li>Cyber-social events</li>
                  <li>Digital materials</li>
                </ul>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold">Initialize Link</Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 text-white backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4 text-purple-300">Enhanced Protocol</h4>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">$399</div>
                <ul className="space-y-2 mb-8 text-gray-300">
                  <li>Full-day access</li>
                  <li>All neural sessions</li>
                  <li>Cyber-social events</li>
                  <li>Digital materials</li>
                  <li>Workshop access</li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-400 text-white font-semibold">Upgrade Protocol</Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 border border-pink-500/30 text-white backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4 text-pink-300">Matrix Access</h4>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">$599</div>
                <ul className="space-y-2 mb-8 text-gray-300">
                  <li>Full-day access</li>
                  <li>All neural sessions</li>
                  <li>Cyber-social events</li>
                  <li>Digital materials</li>
                  <li>Workshop access</li>
                  <li>VIP neural dinner</li>
                </ul>
                <Button className="w-full bg-pink-500 hover:bg-pink-400 text-white font-semibold">Enter Matrix</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Memories */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Community Highlights
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="aspect-square relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-none transition-all duration-300"></div>
                <Image
                  src="/ai-conference-networking.png"
                  alt={`Neural archive ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg relative border border-cyan-500/30"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "What protocols are included in the neural access?",
              "Are there cyber-social networking opportunities?",
              "Will sessions be archived in the neural database?",
              "What is the disconnection policy?",
            ].map((question, index) => (
              <Card key={index} className="bg-gray-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-cyan-300">{question}</h4>
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Conference Updates
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI Architect Lineup Confirmed", date: "March 15, 2025" },
              { title: "Early Neural Access Available", date: "March 10, 2025" },
              { title: "Cyber Venue Secured", date: "March 5, 2025" },
            ].map((news, index) => (
              <Card key={index} className="bg-gray-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-cyan-300">{news.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{news.date}</p>
                  <p className="text-gray-300">Stay synchronized with the latest neural network updates and system announcements.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-sm opacity-50"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FULLSTACK AI
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-4 text-cyan-300">Neural Network</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    About Protocol
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    AI Architects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Data Streams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Cyber Venue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-purple-300">Access Levels</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    Neural Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    Group Protocols
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    Disconnect Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-cyan-300">System Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Neural Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Query Database
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Help Matrix
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-purple-300">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    Neural Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    Cyber LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    Data YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/30 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Full-Stack AI Conference. All neural rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

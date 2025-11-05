import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Users,
  BookOpen,
  Briefcase,
  Palette,
  Star,
  Clock,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-dark text-slate-light">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-slate-dark/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
              <h1 className="text-2xl font-bold tracking-tight">SlateGuru</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#productivity" className="text-sm hover:text-neon-lime transition-colors">
                Productivity
              </a>
              <a href="#freelancing" className="text-sm hover:text-neon-lime transition-colors">
                Freelancing
              </a>
              <a href="#design" className="text-sm hover:text-neon-lime transition-colors">
                Design
              </a>
              <a href="#insights" className="text-sm hover:text-neon-lime transition-colors">
                Insights
              </a>
            </nav>
            <Button
              variant="outline"
              className="border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-slate-dark bg-transparent"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl">
          <Badge className="mb-6 bg-neon-lime text-slate-dark hover:bg-neon-lime/90">Digital Magazine</Badge>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none text-balance">
            Master Your
            <span className="block text-neon-lime">Creative Workflow</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-light/80 mb-8 max-w-2xl text-pretty">
            Insights on productivity, freelancing, and design for the modern creative professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-neon-lime text-slate-dark hover:bg-neon-lime/90">
              Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-light/20 hover:border-neon-lime bg-transparent">
              Latest Issue
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Featured Stories</h3>
          <Button variant="ghost" className="text-neon-lime hover:text-neon-lime/80">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "The Future of Remote Work",
              category: "Productivity",
              excerpt: "How distributed teams are reshaping the creative industry",
              readTime: "8 min read",
              image: "/modern-office.png",
            },
            {
              title: "Mastering Freelance Negotiations",
              category: "Freelancing",
              excerpt: "Essential strategies for pricing your creative services",
              readTime: "12 min read",
              image: "/business-handshake.png",
            },
            {
              title: "Design Systems That Scale",
              category: "Design",
              excerpt: "Building consistent interfaces for growing products",
              readTime: "10 min read",
              image: "/design-system-components.png",
            },
          ].map((article, i) => (
            <Card
              key={i}
              className="bg-card border-border overflow-hidden group cursor-pointer hover:border-neon-lime transition-colors"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3 bg-neon-lime/10 text-neon-lime border-neon-lime/20">
                  {article.category}
                </Badge>
                <h4 className="text-xl font-bold mb-2 group-hover:text-neon-lime transition-colors">{article.title}</h4>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Stories */}
      <section className="border-y border-border py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Latest Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "10 Productivity Hacks for Designers",
                excerpt: "Streamline your workflow with these proven techniques",
                author: "Sarah Chen",
                date: "Jan 15, 2025",
                image: "/productivity-workspace-desk-setup.jpg",
              },
              {
                title: "Building a Sustainable Freelance Business",
                excerpt: "Long-term strategies for independent creatives",
                author: "Marcus Rodriguez",
                date: "Jan 14, 2025",
                image: "/freelance-business-growth-chart.jpg",
              },
              {
                title: "Color Theory in Modern UI Design",
                excerpt: "Understanding psychology and accessibility in digital interfaces",
                author: "Emma Thompson",
                date: "Jan 13, 2025",
                image: "/color-palette-design-ui.jpg",
              },
              {
                title: "Time Management for Creative Professionals",
                excerpt: "Balance multiple projects without burning out",
                author: "David Park",
                date: "Jan 12, 2025",
                image: "/time-management-clock-calendar.jpg",
              },
            ].map((story, i) => (
              <div key={i} className="flex gap-6 group cursor-pointer">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden group-hover:opacity-80 transition-opacity">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-neon-lime transition-colors">{story.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{story.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{story.author}</span>
                    <span>•</span>
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Highlights - Productivity */}
      <section id="productivity" className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="h-8 w-8 text-neon-lime" />
          <h3 className="text-3xl font-bold">Productivity</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-8">
            <div className="aspect-video bg-muted mb-6">
              <img src="/productivity-workspace-setup.jpg" alt="Productivity" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-2xl font-bold mb-3">The Science of Deep Work</h4>
            <p className="text-muted-foreground mb-4">
              Discover how to achieve flow state and maximize your creative output with evidence-based strategies.
            </p>
            <Button variant="link" className="text-neon-lime p-0 h-auto">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
          <div className="space-y-6">
            {[
              "5 Apps That Actually Boost Productivity",
              "Morning Routines of Successful Creatives",
              "Defeating Procrastination: A Scientific Approach",
              "Focus Techniques for the Digital Age",
            ].map((title, i) => (
              <div key={i} className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-neon-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-lime group-hover:text-slate-dark transition-colors">
                  <span className="font-bold">{i + 1}</span>
                </div>
                <div>
                  <h5 className="font-bold group-hover:text-neon-lime transition-colors">{title}</h5>
                  <p className="text-sm text-muted-foreground">Essential reading for productivity enthusiasts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Highlights - Freelancing */}
      <section id="freelancing" className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-neon-lime" />
            <h3 className="text-3xl font-bold">Freelancing</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Client Communication Mastery",
                excerpt: "Build lasting relationships with clear, professional communication",
                icon: Users,
              },
              {
                title: "Pricing Your Services Right",
                excerpt: "Calculate your worth and negotiate with confidence",
                icon: TrendingUp,
              },
              {
                title: "Contract Essentials",
                excerpt: "Protect yourself with proper legal agreements",
                icon: BookOpen,
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-card border-border p-6 hover:border-neon-lime transition-colors cursor-pointer group"
              >
                <item.icon className="h-12 w-12 text-neon-lime mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button variant="link" className="text-neon-lime p-0 h-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Highlights - Design */}
      <section id="design" className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Palette className="h-8 w-8 text-neon-lime" />
          <h3 className="text-3xl font-bold">Design</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3">Typography Trends 2025</h4>
              <p className="text-muted-foreground mb-4">
                Explore the latest in type design and how to apply modern typography principles to your projects.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-neon-lime/10 text-neon-lime">
                  Typography
                </Badge>
                <Badge variant="secondary" className="bg-neon-lime/10 text-neon-lime">
                  Trends
                </Badge>
              </div>
            </Card>
            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3">Minimalism vs. Maximalism</h4>
              <p className="text-muted-foreground mb-4">
                Finding the right balance for your brand identity and user experience.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-neon-lime/10 text-neon-lime">
                  Design Theory
                </Badge>
              </div>
            </Card>
          </div>
          <div className="aspect-square bg-muted">
            <img
              src="/modern-design-workspace-with-sketches.jpg"
              alt="Design workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="border-y border-border py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-8 w-8 text-neon-lime" />
            <h3 className="text-3xl font-bold">Editor's Picks</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "The Ultimate Guide to Remote Collaboration", image: "/remote-collaboration-team.jpg" },
              { title: "Building Your Personal Brand as a Freelancer", image: "/personal-brand-freelancer.jpg" },
              { title: "Accessibility in Modern Web Design", image: "/web-accessibility-design.jpg" },
              { title: "Sustainable Productivity Practices", image: "/sustainable-productivity.jpg" },
            ].map((article, i) => (
              <Card
                key={i}
                className="bg-card border-border p-6 hover:border-neon-lime transition-colors cursor-pointer group"
              >
                <div className="w-full aspect-square bg-muted mb-4 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold group-hover:text-neon-lime transition-colors">{article.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-8 w-8 text-neon-lime" />
          <h3 className="text-3xl font-bold">Trending Now</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "AI Tools for Designers",
            "Work-Life Balance",
            "Portfolio Tips",
            "Client Management",
            "Design Systems",
            "Freelance Taxes",
            "Creative Burnout",
            "Side Projects",
            "Networking Strategies",
            "Tool Reviews",
            "Case Studies",
            "Industry News",
          ].map((topic, i) => (
            <Button
              key={i}
              variant="outline"
              className="border-border hover:border-neon-lime hover:text-neon-lime bg-transparent"
            >
              {topic}
            </Button>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-neon-lime text-slate-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get weekly insights on productivity, freelancing, and design delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-dark text-slate-light border-slate-dark"
            />
            <Button className="bg-slate-dark text-neon-lime hover:bg-slate-dark/90">Subscribe</Button>
          </div>
          <p className="text-sm mt-4 opacity-80">Join 50,000+ creative professionals</p>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Most Popular</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="flex gap-4 group cursor-pointer">
              <span className="text-4xl font-bold text-neon-lime/20 group-hover:text-neon-lime transition-colors">
                {num.toString().padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-bold mb-1 group-hover:text-neon-lime transition-colors">
                  Essential Article Title Here
                </h4>
                <p className="text-sm text-muted-foreground">Brief description of the popular article content</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Insights */}
      <section id="insights" className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Expert Insights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sarah Chen", role: "Design Director", avatar: "/professional-woman-diverse.png" },
              { name: "Marcus Rodriguez", role: "Freelance Consultant", avatar: "/professional-man.jpg" },
              { name: "Emma Thompson", role: "UX Researcher", avatar: "/professional-woman-designer.png" },
              { name: "David Park", role: "Productivity Coach", avatar: "/professional-coach.png" },
            ].map((expert, i) => (
              <Card
                key={i}
                className="bg-card border-border p-6 text-center hover:border-neon-lime transition-colors cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  <img
                    src={expert.avatar || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mb-1">{expert.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{expert.role}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neon-lime/20 text-neon-lime hover:bg-neon-lime hover:text-slate-dark bg-transparent"
                >
                  View Articles
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Join the Community</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border p-8 text-center">
            <Users className="h-12 w-12 text-neon-lime mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">50K+</h4>
            <p className="text-muted-foreground">Active Members</p>
          </Card>
          <Card className="bg-card border-border p-8 text-center">
            <BookOpen className="h-12 w-12 text-neon-lime mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">500+</h4>
            <p className="text-muted-foreground">Articles Published</p>
          </Card>
          <Card className="bg-card border-border p-8 text-center">
            <Star className="h-12 w-12 text-neon-lime mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">100+</h4>
            <p className="text-muted-foreground">Expert Contributors</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-neon-lime rounded-full" />
                <h4 className="text-xl font-bold">SlateGuru</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Your digital magazine for productivity, freelancing, and design excellence.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Categories</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#productivity" className="hover:text-neon-lime transition-colors">
                    Productivity
                  </a>
                </li>
                <li>
                  <a href="#freelancing" className="hover:text-neon-lime transition-colors">
                    Freelancing
                  </a>
                </li>
                <li>
                  <a href="#design" className="hover:text-neon-lime transition-colors">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#insights" className="hover:text-neon-lime transition-colors">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    Contributors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    Advertise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon-lime transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 SlateGuru. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-neon-lime transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-lime transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-lime transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

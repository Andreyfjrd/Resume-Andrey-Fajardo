import { Mail, Phone, Github, Linkedin, Download, ExternalLink, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {


  const projects = [
    {
      title: "Power BI Reports",
      description: "Perform data exports from the database to Power BI for the purpose of building and analyzing business reports.",
      technologies: ["Power BI", "SQL Server", "ETL"],
      demoUrl: "#",
      codeUrl: "#",
      image:"/imagenes/PBI.webp"
    },
    {
      title: "Excel to ERP Integration",
      description: "Handle data in Excel and export it to an ERP system for operational efficiency.",
      technologies: ["Excel", "ERP", "Automation"],
      demoUrl: "#",
      codeUrl: "#",
      image:"/imagenes/EXP.webp"
    },
    {
      title: "Office Sales Portal",
      description: "An internal e-commerce platform that allows employees to purchase office items.",
      technologies: ["eCommerce", "React", "Internal Systems"],
      demoUrl: "#",
      codeUrl: "#",
      image:"/imagenes/ecomerc.webp"
    }
  ];


  return (
    <div className="min-h-screen dark-gradient">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl blue-gradient-text">My Portfolio</div>
          <nav className="hidden md:flex gap-6">
            <a href="#sobre-mi" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              About Me
            </a>
            <a href="#experiencia" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#habilidades" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#proyectos" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contacto" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-md hover:shadow-cyan-500/20 transition-all text-black font-medium">
            Contact Me
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section id="sobre-mi" className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="blue-gradient-text">Andrey Fajardo H</span>
            </h1>
            <p className="text-xl text-cyan-300">
               Developer focused on creating outstanding digital experiences
            </p>
            <div className="flex gap-4">
            <a
  href="/docs/CV-AndreyFajardo.pdf"
  download
  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-md hover:shadow-cyan-500/20 transition-all text-black font-medium px-4 py-2 rounded-md"
>
  <Download className="mr-2 h-4 w-4" /> Download CV
</a>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800/50">
              View Projects
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/andreyjckcr" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/andrey-fajardo-herrera-63560242" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500 animate-glow">
              <img
                src="/imagenes/yo.jpeg"
                alt="mi foto"
                className="object-cover w-full h-full bg-slate-800"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12 blue-gradient-text">Profesional Experience</h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <div className="text-cyan-400 font-medium">2021 - Present</div>
              </div>
              <div className="md:w-3/4 glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-300">System Analyst, Alimentos Jacks</h3>
                <p className="text-cyan-400 mb-2">Independiente</p>
                <p className="text-slate-300">
                Developed web applications using C# .NET Core and managed SQL queries for data analysis and payroll software migration. Provided technical support, handled data transfers, and ensured application performance optimization.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <div className="text-cyan-400 font-medium">2018  - 2019</div>
              </div>
              <div className="md:w-3/4 glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-300">Software Support Engineer </h3>
                <p className="text-cyan-400 mb-2">Tek Experts</p>
                <p className="text-slate-300">
                Resolved issues in Dynamics 365 Business Central, documented bugs, and provided troubleshooting to clients. Collaborated with Microsoft's development team to address technical problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12 blue-gradient-text">Skills</h2>

          <Tabs defaultValue="desarrollo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-900 p-1">
              <TabsTrigger
                value="desarrollo"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black"
              >
                Development
              </TabsTrigger>
              <TabsTrigger
                value="diseño"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                value="herramientas"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black"
              >
                Tools
              </TabsTrigger>
            </TabsList>
            <TabsContent value="desarrollo" className="p-6 glass-card rounded-xl mt-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">HTML5</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">CSS3</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">JavaScript</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">TypeScript</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">React</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Next.js</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Node.js</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Tailwind CSS</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Responsive Design</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">API REST</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">C#</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">SQL</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Net Core</Badge>
              </div>
            </TabsContent>
            <TabsContent value="diseño" className="p-6 glass-card rounded-xl mt-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">UI/UX</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Figma</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Adobe XD</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Photoshop</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Illustrator</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Diseño Responsive</Badge>
              </div>
            </TabsContent>
            <TabsContent value="herramientas" className="p-6 glass-card rounded-xl mt-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Git</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">GitHub</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">VS Code</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">npm/yarn</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Vercel</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Visul Studio</Badge>
                <Badge className="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black">Jira</Badge>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-12 space-y-8">
  <h2 className="text-3xl font-bold text-center mb-12 blue-gradient-text">Featured Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <Card
        key={index}
        className="overflow-hidden border-slate-800 bg-slate-900 hover:glow-border transition-all duration-300"
      >
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <h3 className="text-xl font-bold mb-2 text-cyan-300">{project.title}</h3>
          <p className="text-slate-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="border-slate-700 text-cyan-300">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 text-cyan-300 hover:bg-slate-800"
            >
              <ExternalLink className="h-4 w-4 mr-2" /> View Demo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-cyan-300 hover:bg-slate-800"
            >
              <Code className="h-4 w-4 mr-2" /> Code
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

        {/* Contact Section */}
        <section id="contacto" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12 blue-gradient-text">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-cyan-300">Let’s talk about your project!</h3>
              <p className="text-slate-300">
               I'm available for projects, collaborations, or inquiries. Feel free to reach out to discuss how I can help you.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>afajardocr23@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+506 83262927</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                  <span>linkedin.com/in/andrey-fajardo-herrera-63560242/</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-cyan-300">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800/90 px-3 py-2 text-sm text-slate-200 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-cyan-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800/90 px-3 py-2 text-sm text-slate-200 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="afajardocr23@gmail.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-cyan-300">
                   Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800/90 px-3 py-2 text-sm text-slate-200 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Message subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-cyan-300">
                  Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-800/90 px-3 py-2 text-sm text-slate-200 ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Write your message here..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-md hover:shadow-cyan-500/20 transition-all text-black font-medium">
                  <Sparkles className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 md:py-0 bg-slate-950">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Andreyfjrd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


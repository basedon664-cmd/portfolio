import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import animationData from "../public/loader.json";

export default function Page() {
  const projects = [
{
  title: "BRANDING",
  subtitle: "We craft powerful brand identities that leave a lasting impression.",
  description: `From designing a unique, impactful logo to creating a complete brand kit with carefully selected colors, fonts, and visual elements, we ensure your brand speaks in one consistent voice across every platform. 

Our goal is to help you stand out in the market, connect emotionally with your audience, and build trust through a strong, recognizable identity. Whether you’re starting fresh or rebranding, we provide the creative vision and strategy to make your brand unforgettable.`,
  imageSrc: "https://i.ibb.co/HLctQ8yx/branding-1.gif", // You can add your branding-related image here
  tags: ["Branding", "Logo Design", "Identity", "Strategy", "UI/UX"],
  href: "#branding",
  priority: false,
  gradientFrom: "#0f172a",
  gradientTo: "#6d28d9",
},

{
  title: "DIGITAL MARKETING",
  subtitle: "We help your business rank higher and attract the right audience.",
  description: `We help your business rank higher and attract the right audience through comprehensive website audits that identify technical and content improvements. 

Our keyword research ensures your site targets high-value search terms your customers are actually looking for. With on-page SEO optimization, we enhance your titles, meta tags, headings, and content for maximum search visibility. 

Through off-page SEO, including quality backlinks and strategic blog content, we build your site’s authority. For fast results, we run Google Ads and Meta Ads (Facebook & Instagram) campaigns—covering ad spend management, creative campaign design, and detailed analytics—so you reach more people and convert clicks into customers.`,
  imageSrc: "https://i.ibb.co/5hNmqKyN/marketing.gif", // Add a relevant digital marketing graphic or illustration here
  tags: ["SEO", "Google Ads", "Meta Ads", "Content Strategy", "Digital Growth"],
  href: "#digital-marketing",
  priority: false,
  gradientFrom: "#1e3a8a",
  gradientTo: "#9333ea",
},

{
  title: "SOCIAL MEDIA MANAGEMENT",
  subtitle: "We manage your social media presence from start to finish.",
  description: `We manage your social media presence from start to finish, helping you grow your audience, boost engagement, and build brand loyalty. 

Our service includes professionally designed posts, tailored captions with strategic hashtags, and regular stories or reels to keep your followers hooked. 

We also provide basic engagement reports to track your performance and run targeted paid ad campaigns to reach the right audience. With 5 high-quality posts per week, plus stories/reels and monthly analytics, we ensure your social media isn’t just active—it’s impactful.`,
  imageSrc: "https://i.ibb.co/7xWP7YFk/social-marketing.gif", // Add a relevant social media illustration or mockup
  tags: ["Social Media", "Content Creation", "Paid Ads", "Analytics", "Engagement"],
  href: "#social-media-management",
  priority: false,
  gradientFrom: "#0ea5e9",
  gradientTo: "#6366f1",
},

{
  title: "EMAIL MARKETING",
  subtitle: "We create and manage high-impact email campaigns to drive growth.",
  description: `We create and manage high-impact email marketing strategies designed to nurture leads, build loyalty, and drive conversions. 

Our packages include sending 4 or 8 professionally designed emails per month, crafted with attention-grabbing subject lines and compelling content. Each plan comes with custom templates—1 template for our starter package and 2 unique designs for the advanced package. 

For higher performance, we implement A/B testing to identify which subject lines, layouts, or calls-to-action deliver the best results. You’ll also receive a monthly performance report highlighting key metrics like open rates, click-through rates, and conversions—giving you a clear view of what’s working and how your campaigns are growing your business.`,
  imageSrc: "https://i.ibb.co/cKM03NLv/Blue-and-White-3-D-Modern-Back-to-School-Youtube-Intro.gif", // Add an email/marketing illustration here
  tags: ["Email Campaigns", "A/B Testing", "Lead Nurturing", "Analytics", "Conversions"],
  href: "#email-marketing",
  priority: false,
  gradientFrom: "#f59e0b",
  gradientTo: "#ef4444",
},

{
  title: "GRAPHIC DESIGN",
  subtitle: "Creative visuals that captivate and convert.",
  description: `We craft visually stunning designs that help your brand stand out and connect with your audience instantly. 

Our services include creating single-image social media posts that are eye-catching and on-brand, carousel posts (5–10 slides) that tell a compelling story in a swipe-friendly format, and video reels/shorts that engage viewers with dynamic, high-energy visuals. 

For brands looking for consistent visibility, our Monthly Design Package offers 30 custom-designed posts—perfectly tailored to match your brand’s style, colors, and tone. Every design is created with a focus on clarity, creativity, and conversion, ensuring your audience not only notices you but remembers you.`,
  imageSrc: "https://i.ibb.co/0RrwBWyQ/graphic-desing.gif", // add a design/illustration graphic here
  tags: ["Social Media Posts", "Carousel Design", "Video Reels", "Branding", "Monthly Package"],
  href: "#graphic-design",
  priority: false,
  gradientFrom: "#2563eb",
  gradientTo: "#9333ea",
},
  
{
  title: "ANALYTICS & DASHBOARD",
  subtitle: "Transform raw data into actionable insights.",
  description: `Turn raw numbers into actionable insights with our custom Social Media Analytics Dashboard. 

We track and visualize your key performance metrics—such as reach, impressions, engagement rates, follower growth, and content performance—so you can see exactly what’s working and where improvements are needed. 

Our dashboard is easy to understand yet detailed enough for data-driven decision-making, giving you a clear view of your marketing ROI. With regular updates and visual graphs, you’ll have the power to adjust strategies on the go, ensuring your brand stays ahead in an ever-changing digital landscape.`,
  imageSrc: "https://i.ibb.co/yGw8Pp7/data.gif", // add an analytics/dashboard illustration
  tags: ["Analytics", "Dashboard", "Performance Tracking", "Insights", "ROI"],
  href: "#analytics-dashboard",
  priority: false,
  gradientFrom: "#0f766e",
  gradientTo: "#14b8a6",
},
{
  title: "MARKET RESEARCH & ANALYSIS",
  subtitle: "Gain clarity with data-driven research.",
  description: `We provide in-depth market research and analysis to help businesses understand the bigger picture and make informed decisions. 

Our process involves studying your target audience, identifying their needs, and tracking industry trends to uncover valuable insights. We analyze customer behavior patterns, competitor strategies, and emerging opportunities in the market. 

By combining data-driven research with actionable recommendations, we ensure you have a clear roadmap for growth. Whether you’re launching a new product, entering a new market, or refining your current strategy, our market research equips you with the knowledge to stay ahead of the competition and make confident business moves.`,
  imageSrc: "https://i.ibb.co/TMr9SYqS/analisis.gif", // add a market research/analysis illustration
  tags: ["Market Research", "Analysis", "Competitor Insights", "Trends", "Business Growth"],
  href: "#market-research",
  priority: false,
  gradientFrom: "#1d4ed8",
  gradientTo: "#3b82f6",
},
  {
  title: "SOFTWARE DEVELOPMENT",
  subtitle: "Build reliable, scalable, and future-ready software.",
  description: `We design and develop custom software solutions tailored to your business needs. 
From web applications and mobile apps to enterprise-grade systems, our team ensures secure, scalable, and high-performance products. 

Our process includes requirement gathering, agile development, rigorous testing, and ongoing support—so your software grows with your business. 
Whether you’re automating workflows, building customer-facing platforms, or creating innovative digital products, we deliver solutions that drive real results.`,
  imageSrc: "https://i.ibb.co/rKj4gyPg/software.gif", // add a software development illustration
  tags: ["Software", "Development", "Web Apps", "Mobile Apps", "Digital Solutions"],
  href: "#software-development",
  priority: false,
  gradientFrom: "#9333ea",
  gradientTo: "#a855f7",
},
{
  title: "WEBSITE DEVELOPMENT",
  subtitle: "Craft modern, responsive, and high-performing websites.",
  description: `Your website is the digital face of your brand—and we make sure it leaves a lasting impression. 

We design and build custom websites that are not only visually stunning but also optimized for speed, SEO, and mobile responsiveness. From corporate websites and landing pages to e-commerce platforms, our solutions are tailored to engage your audience and drive conversions. 

With a focus on user experience, clean design, and the latest technologies, we ensure your website stands out in a crowded digital world.`,
  imageSrc: "https://i.ibb.co/PvbbG6YT/website.gif", // add a website/landing page illustration
  tags: ["Website", "Web Design", "Responsive", "SEO", "UI/UX"],
  href: "#website-development",
  priority: false,
  gradientFrom: "#2563eb",
  gradientTo: "#60a5fa",
},

  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">brandon</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["I design products", "that people love"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Brandon is a product designer based in all over. He helps early‑stage startups ship beautiful, usable
                  software fast.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="https://forms.gle/Fs26iKgT2bnimHqu5">
                      Your Services, Your Way
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Trusted by */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">COMPANIES I'VE WORKED WITH</p>
                  <ul className="flex flex-wrap gap-6 text-2xl font-black text-white/25">
                    <li>Marketing</li>
                    <li>Meta</li>
                    <li>Google</li>
                    <li>LLMs / GPTs</li>
                    <li>Productive AI Use</li>
                    <li>Suggestions</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full flex items-center justify-center"
                containerClassName="lg:h-[55svh]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

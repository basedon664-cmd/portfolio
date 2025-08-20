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
  imageSrc: "", // You can add your branding-related image here
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
  imageSrc: "", // Add a relevant digital marketing graphic or illustration here
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
  imageSrc: "", // Add a relevant social media illustration or mockup
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
  imageSrc: "", // Add an email/marketing illustration here
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
  imageSrc: "", // add a design/illustration graphic here
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
  imageSrc: "", // add an analytics/dashboard illustration
  tags: ["Analytics", "Dashboard", "Performance Tracking", "Insights", "ROI"],
  href: "#analytics-dashboard",
  priority: false,
  gradientFrom: "#0f766e",
  gradientTo: "#14b8a6",
},

{
  title: "ANALYTICS & DASHBOARD",
  subtitle: "Transform raw data into actionable insights.",
  description: `Turn raw numbers into actionable insights with our custom Social Media Analytics Dashboard. 

We track and visualize your key performance metrics—such as reach, impressions, engagement rates, follower growth, and content performance—so you can see exactly what’s working and where improvements are needed. 

Our dashboard is easy to understand yet detailed enough for data-driven decision-making, giving you a clear view of your marketing ROI. With regular updates and visual graphs, you’ll have the power to adjust strategies on the go, ensuring your brand stays ahead in an ever-changing digital landscape.`,
  imageSrc: "", // add an analytics/dashboard illustration
  tags: ["Analytics", "Dashboard", "Performance Tracking", "Insights", "ROI"],
  href: "#analytics-dashboard",
  priority: false,
  gradientFrom: "#0f766e",
  gradientTo: "#14b8a6",
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
                  Brandon is a product designer based in New York. He helps early‑stage startups ship beautiful, usable
                  software fast.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:brandon@portfolio.dev">
                      Your Services, Your Way
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Trusted by */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">COMPANIES I'VE WORKED WITH</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
                    <li>Space Y</li>
                    <li>Melta</li>
                    <li>ClosedAI</li>
                    <li>Booble</li>
                    <li>Lentflix</li>
                    <li>Xwitter</li>
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
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  Smartphone,
  ShoppingBag,
  PanelsTopLeft,
  CheckCircle2,
  Mail,
  MapPin,
  Github,
  MessageCircle,
  Sparkles,
  Globe,
  Send,
  Loader2,
  Quote,
  Star,
  Calendar,
  ArrowUp,
  Landmark,
  Shield,
  FileText,
} from "lucide-react";
import "./styles.css";

const WHATSAPP_NUMBER = "27729242639";
const CONTACT_EMAIL = "hamiltonmasipa@gmail.com";
const WEB3FORMS_KEY = "bf0bbcb0-b76d-4686-9720-aa5f10880a2b";

const wa = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const payMessage = (pkg, price) =>
  wa(
    `Hi Hamilton, I'd like to get started with the ${pkg} package (${price}).\n\n` +
      `Please send me the invoice and banking details so I can pay by EFT transfer.\n\n` +
      `My name: \nMy business: \nPreferred start date: `,
  );

const projects = [
  {
    title: "Client Management System",
    image: "/previews/01-client-management.png",
    category: "Custom web application",
    status: "Live",
    description:
      "A client-management application concept for keeping client information and day-to-day business records organised in one place. The published React demo requires JavaScript to display its full interface.",
    stack: ["React", "Client records", "Admin interface"],
    url: "https://client-management-system-puce.vercel.app/",
    visual: "law",
    label: "Client relationships, organised.",
  },
  {
    title: "Secondary School Website",
    image: "/previews/02-secondary-school.png",
    category: "Business website",
    status: "Live",
    description:
      "A school website designed to give a secondary school a professional online presence and a clear place to share school information with learners, parents and the wider community.",
    stack: ["Education website", "Responsive layout", "School information"],
    url: "https://hamiltonmas.github.io/Secondary-Website/",
    visual: "business",
    label: "A better online school presence.",
  },
  {
    title: "Unity Family Cover",
    image: "/previews/03-unity-family-cover.png",
    category: "Business website",
    status: "Live",
    description:
      "A website for a family-cover brand, giving visitors an online place to learn about the offering and explore the brand. The hosted React app requires JavaScript, so specific policy and claim features are not assumed here.",
    stack: ["Insurance brand", "Business website", "React"],
    url: "https://unity-family-cover-eight.vercel.app/",
    visual: "business",
    label: "Family cover, clearly presented.",
  },
  {
    title: "Rex's Kota King",
    image: "/previews/04-rexs-kota-king.png",
    category: "Landing page",
    status: "Live",
    description:
      "A street-food website showcasing kota meals and menu options, with business information and a customer-friendly path toward placing an order.",
    stack: ["Food menu", "Order experience", "Mobile-friendly design"],
    url: "https://hamiltonmas.github.io/Rex-s_Kota_King/",
    visual: "landing",
    label: "Kota cravings, one click away.",
  },
  {
    title: "Kwela Inn — Hospitality Website",
    image: "/previews/05-kwela-inn.png",
    category: "Business website",
    status: "Live",
    description:
      "A hospitality website concept for an inn, intended to present the property and help prospective guests find information before making an enquiry. The deployed page did not expose readable content during automated inspection, so booking functionality is not claimed.",
    stack: ["Hospitality", "Brand presentation", "Responsive design"],
    url: "https://kwela-inn-demo-website.vercel.app/",
    visual: "business",
    label: "A welcoming online first impression.",
  },
  {
    title: "Housing Application Portal",
    image: "/previews/06-housing-application.png",
    category: "Custom web application",
    status: "Live",
    description:
      "A guided housing application form that collects applicant details through structured steps and supports the submission of relevant supporting information and documents.",
    stack: ["Multi-step form", "Applicant details", "Document workflow"],
    url: "https://hamiltonmas.github.io/Housing-Application-Form/",
    visual: "housing",
    label: "Housing applications, step by step.",
  },
  {
    title: "FNB-Inspired Banking UI Demo",
    image: "/previews/07-banking-ui-demo.png",
    category: "Custom web application",
    status: "Live demo",
    description:
      "A banking-interface learning/demo project inspired by familiar digital banking layouts. It is a demonstration interface only, is not an official FNB product, and is not connected to real accounts or banking services.",
    stack: ["Dashboard UI", "Interactive prototype", "Frontend practice"],
    url: "https://hamiltonmas.github.io/FNB-Lookalike-App/",
    visual: "law",
    label: "A banking interface concept.",
  },
  {
    title: "Scents — Online Store",
    image: "/previews/08-scents-store.png",
    category: "Online store",
    status: "Live",
    description:
      "An online-store concept for scented products, with product-focused sections and a shopping-oriented layout to help customers explore a fragrance collection.",
    stack: ["Product catalogue", "Storefront design", "Shopping experience"],
    url: "https://hamiltonmas.github.io/Scents/",
    visual: "store",
    label: "Discover a scent for your space.",
  },
  {
    title: "CVBot — Job Application Platform",
    image: "/previews/09-cvbot.png",
    category: "Custom web application",
    status: "Live",
    description:
      "A job-application interface designed around the job-seeker journey, including opportunities and application-related screens. The published site is presented as a demo rather than a claim of automated job submission to third-party employers.",
    stack: ["Job application flow", "Profile interface", "Frontend app"],
    url: "https://hamiltonmas.github.io/CVBot-Job-Application/",
    visual: "cvbot",
    label: "A clearer job-search journey.",
  },
  {
    title: "Kids Competition App",
    image: "/previews/10-kids-competition.png",
    category: "Custom web application",
    status: "Live",
    description:
      "A web application for a children's competition. The hosted React page requires JavaScript and did not expose enough readable content to verify the exact entry rules, so the description stays focused on the competition experience.",
    stack: ["Competition platform", "React", "Web interface"],
    url: "https://kids-competition-app.vercel.app/",
    visual: "landing",
    label: "A digital home for young talent.",
  },
  {
    title: "H&M Cafe",
    image: "/previews/11-hm-cafe.png",
    category: "Online store",
    status: "Live",
    description:
      "A café website to present the business, its menu and customer information, helping visitors discover the offering and find ways to get in touch.",
    stack: ["Cafe website", "Menu showcase", "Contact information"],
    url: "https://hamiltonmas.github.io/H-M-Cafe/",
    visual: "business",
    label: "A warm welcome, online.",
  },
  {
    title: "Student Application Portal",
    image: "/previews/12-student-portal.png",
    category: "Custom web application",
    status: "Live",
    description:
      "A student-application portal demo intended to guide prospective students through an online application experience. The hosted React page requires JavaScript, so specific submission and tracking features are not claimed without direct verification.",
    stack: ["Student applications", "React", "Portal interface"],
    url: "https://student-application-portal-chi.vercel.app/",
    visual: "housing",
    label: "A more guided student journey.",
  },
  {
    title: "Personal Portfolio Website",
    image: "/previews/13-personal-portfolio.png",
    category: "Landing page",
    status: "Live",
    description:
      "My earlier developer portfolio, showcasing projects and experience. This current website is its business-focused successor, designed to explain services and help potential clients get in touch.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://hamiltonmas.github.io/Portfolio/",
    visual: "portfolio",
    label: "A new chapter online.",
  },
  {
    title: "Campus Issue Reporting",
    image: "/previews/tut.JPG",
    category: "Custom web application",
    status: "In development",
    description:
      "A campus support system concept for reporting issues and helping administrators coordinate technicians and follow-ups.",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    url: "",
    visual: "campus",
    label: "Report. Assign. Resolve.",
  },
];

const services = [
  {
    icon: PanelsTopLeft,
    title: "Business websites",
    text: "A professional home for your business, with clear services, contact details and calls to action.",
    includes: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO",
      "Domain & hosting setup",
    ],
  },
  {
    icon: Smartphone,
    title: "Landing pages",
    text: "Focused pages for a product, promotion or service, designed to turn visits into enquiries.",
    includes: [
      "Single-page design",
      "Lead capture form",
      "WhatsApp button",
      "Fast loading",
      "1 revision round",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Online stores",
    text: "Product-focused online shopping experiences for businesses ready to sell online.",
    includes: [
      "Product catalogue",
      "Cart & checkout",
      "Payment integration",
      "Order notifications",
      "Inventory basics",
    ],
  },
  {
    icon: Code2,
    title: "Custom web applications",
    text: "Purpose-built tools, forms and dashboards for workflows that need more than a standard website.",
    includes: [
      "Custom features",
      "Database & login",
      "Admin dashboard",
      "API integrations",
      "Ongoing support",
    ],
  },
];

const stats = [
  { value: "15+", label: "Projects delivered" },
  { value: "8+", label: "Technologies mastered" },
  { value: "24hr", label: "Average reply time" },
  { value: "100%", label: "Client satisfaction" },
];

const testimonials = [
  {
    quote:
      "The Client Management System has made it easier for us to manage client records and track legal cases efficiently. The process was professional, and communication was excellent.",
    name: "Nathasha T.",
    role: "Owner, Unity Law firm",
    location: "Pretoria",
  },
  {
    quote:
      "I needed a simple portfolio to showcase my work. Hamilton understood exactly what I wanted and delivered ahead of schedule. The site looks professional and works perfectly on mobile.",
    name: "Basetsana M.",
    role: "Graduate",
    location: "Johannesburg",
  },
  {
    quote:
      "What I appreciated most was the honesty and clear pricing. No hidden costs, no technical jargon — just a developer who explained everything in plain language and delivered exactly what was agreed.",
    name: "Nthangeni S.",
    role: "vhatwanamba Automotive",
    location: "Johannesburg",
  },
];

const caseStudy = {
  tag: "CASE STUDY",
  title:
    "How a small business went from invisible online to receiving weekly enquiries",
  client: "Nathasa Tshihatu",
  industry: "Unity Lawfirm",
  problem:
    "Unity Law Firm faced challenges managing client information, legal cases, appointments, and important documents using manual or disconnected processes. This made it difficult to keep client records organised, track case progress, and access information efficiently. The lack of a centralised client management system increased administrative workload and the risk of delays, highlighting the need for a secure, reliable digital solution to improve client record management and overall operational efficiency.",
  solution: [
    "Built a 5-page responsive business website with clear service breakdowns",
    "Added a working quote request form connected to their email",
    "Optimised every page for local search keywords in their area",
    "Integrated WhatsApp so clients could reach them instantly on mobile",
    "Set up analytics so the owner could see exactly where enquiries came from",
  ],
  result: [
    { value: "3x", label: "More enquiries per month" },
    { value: "0.9s", label: "Page load time" },
    { value: "2 weeks", label: "From kickoff to launch" },
  ],
};

const faqs = [
  {
    q: "How long does a project take?",
    a: "A standard business website usually takes 1–2 weeks from content approval. Landing pages can be ready in a few days, while custom applications depend on scope — we agree on a timeline before starting.",
  },
  {
    q: "Do I need to provide content and photos?",
    a: "Yes — text and images about your business work best when they come from you. If you need help writing copy or sourcing royalty-free images, I can guide you or include it in the quote.",
  },
  {
    q: "Do you help with hosting and domain names?",
    a: "Yes. I can register your .co.za domain, set up hosting, and connect everything so your site goes live with SSL (the padlock in the browser) included.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every project includes one round of revisions before launch. After that, small tweaks are billed at an hourly rate, or you can take a monthly maintenance plan for ongoing updates.",
  },
  {
    q: "How do payments work?",
    a: "50% deposit via EFT bank transfer to get started, and the remaining 50% on completion before launch. I provide a proper invoice with all banking details. Everything is confirmed on WhatsApp so you have a written record.",
  },
  {
    q: "Will my website work on phones?",
    a: "Always. Every site I build is designed mobile-first and tested on real phones, tablets and desktops before launch.",
  },
];

function ProjectVisual({ type, label, image }) {
  return (
    <div
      className={`project-visual visual-${type}`}
      role="img"
      aria-label={`${label} — project preview`}
    >
      {image ? (
        <img
          className="project-preview-image"
          src={image}
          alt={`${label} website preview (illustrative mockup)`}
          loading="lazy"
        />
      ) : null}
      {!image && (
        <>
          <div className="mock-browser" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <i> </i>
          </div>
          <div className="mock-content" aria-hidden="true">
            <div className="mock-kicker">
              {type === "cvbot"
                ? "CAREER PLATFORM"
                : type === "campus"
                  ? "CAMPUS SERVICES"
                  : type === "housing"
                    ? "HOUSING PORTAL"
                    : type === "law"
                      ? "CASE MANAGEMENT"
                      : type === "portfolio"
                        ? "PERSONAL WEBSITE"
                        : type === "landing"
                          ? "CAMPAIGN LANDING PAGE"
                          : type === "store"
                            ? "ONLINE STORE"
                            : "YOUR BUSINESS ONLINE"}
            </div>
            <div className="mock-heading">{label}</div>
            <div className="mock-line long"></div>
            <div className="mock-line"></div>
            {type === "housing" && (
              <div className="mock-form">
                <div className="mock-input"></div>
                <div className="mock-input"></div>
                <div className="mock-input short"></div>
              </div>
            )}
            {type === "law" && (
              <div className="mock-rows">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {type === "campus" && (
              <div className="mock-status">
                <i className="dot-green"></i>
                <i className="dot-blue"></i>
                <i className="dot-red"></i>
              </div>
            )}
            {!["housing", "law", "campus"].includes(type) && (
              <div className="mock-cards">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className="faq-answer" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

function TiltCard({ children, className = "", intensity = 8 }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - y) * intensity).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * intensity).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };
  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="tilt-inner">{children}</div>
      <span className="tilt-shine" aria-hidden="true" />
    </div>
  );
}

function Magnetic({ children, strength = 8 }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <span
      ref={ref}
      className="magnetic"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        display: "inline-flex",
        transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </span>
  );
}

function AdvancedDimensionalScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest(".hero");
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !hero || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const smallScreen = window.matchMedia("(max-width: 700px)").matches;
    const dpr = Math.min(
      window.devicePixelRatio || 1,
      smallScreen ? 1.25 : 1.7,
    );
    let width = 0,
      height = 0,
      raf = 0,
      active = true;
    let pointerX = 0,
      pointerY = 0,
      targetX = 0,
      targetY = 0;
    let scrollProgress = 0;
    const started = performance.now();

    const resize = () => {
      const r = hero.getBoundingClientRect();
      width = Math.max(1, r.width);
      height = Math.max(1, r.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointer = (event) => {
      const r = hero.getBoundingClientRect();
      targetX = ((event.clientX - r.left) / r.width - 0.5) * 0.9;
      targetY = ((event.clientY - r.top) / r.height - 0.5) * 0.9;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const onScroll = () => {
      const r = hero.getBoundingClientRect();
      scrollProgress = Math.max(
        -1,
        Math.min(1, -r.top / Math.max(1, r.height)),
      );
    };

    const rotate4 = (v, a, b, angle) => {
      const out = [...v];
      out[a] = v[a] * Math.cos(angle) - v[b] * Math.sin(angle);
      out[b] = v[a] * Math.sin(angle) + v[b] * Math.cos(angle);
      return out;
    };
    const vertices4 = [];
    for (let i = 0; i < 16; i++)
      vertices4.push([
        i & 1 ? 1 : -1,
        i & 2 ? 1 : -1,
        i & 4 ? 1 : -1,
        i & 8 ? 1 : -1,
      ]);
    const edges4 = [];
    for (let i = 0; i < 16; i++)
      for (let bit = 0; bit < 4; bit++) {
        const j = i ^ (1 << bit);
        if (i < j) edges4.push([i, j, bit]);
      }
    const cubeVertices = [];
    for (let i = 0; i < 8; i++)
      cubeVertices.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1]);
    const cubeEdges = [];
    for (let i = 0; i < 8; i++)
      for (let bit = 0; bit < 3; bit++) {
        const j = i ^ (1 << bit);
        if (i < j) cubeEdges.push([i, j]);
      }
    const particles = Array.from({ length: smallScreen ? 38 : 76 }, (_, i) => ({
      x: ((i * 97.31) % 997) / 997,
      y: ((i * 61.77 + 17) % 991) / 991,
      r: 0.5 + (i % 4) * 0.35,
      phase: i * 1.7,
    }));

    const project3 = (v, cx, cy, scale, rotY, rotX) => {
      let [x, y, z] = v;
      const xx = x * Math.cos(rotY) - z * Math.sin(rotY);
      z = x * Math.sin(rotY) + z * Math.cos(rotY);
      x = xx;
      const yy = y * Math.cos(rotX) - z * Math.sin(rotX);
      z = y * Math.sin(rotX) + z * Math.cos(rotX);
      y = yy;
      const perspective = 3.4 / (3.4 + z);
      return [
        cx + x * scale * perspective,
        cy + y * scale * perspective,
        perspective,
      ];
    };

    const draw = (now) => {
      if (!active) return;
      const elapsed = reducedMotion ? 0 : (now - started) / 1000;
      pointerX += (targetX - pointerX) * 0.045;
      pointerY += (targetY - pointerY) * 0.045;
      ctx.clearRect(0, 0, width, height);
      const cx = width * (smallScreen ? 0.73 : 0.76);
      const cy = height * 0.48;
      const base = Math.min(width, height) * (smallScreen ? 0.19 : 0.245);
      const rotY = elapsed * 0.24 + pointerX * 0.8 + scrollProgress * 0.5;
      const rotX = elapsed * 0.16 + pointerY * 0.65;

      const glow = ctx.createRadialGradient(cx, cy, 2, cx, cy, base * 2.9);
      glow.addColorStop(0, "rgba(49,133,255,0.14)");
      glow.addColorStop(0.55, "rgba(49,133,255,0.035)");
      glow.addColorStop(1, "rgba(49,133,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(cx - base * 3, cy - base * 3, base * 6, base * 6);

      ctx.save();
      ctx.translate(cx, cy);
      for (let ring = 0; ring < 4; ring++) {
        const pulse = reducedMotion
          ? 0
          : Math.sin(elapsed * 0.7 + ring * 1.4) * 0.035;
        ctx.save();
        ctx.rotate(
          elapsed * (ring % 2 ? -0.08 : 0.055) + ring * 0.62 + pointerX * 0.16,
        );
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          base * (1.45 + ring * 0.22 + pulse),
          base * (0.42 + ring * 0.12),
          0,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = `rgba(${ring % 2 ? "99,164,255" : "49,133,255"},${0.11 + ring * 0.025})`;
        ctx.lineWidth = ring === 0 ? 1.2 : 0.7;
        ctx.shadowBlur = ring === 0 ? 12 : 4;
        ctx.shadowColor = "rgba(49,133,255,0.5)";
        ctx.stroke();
        ctx.restore();
      }
      const satelliteAngle = elapsed * 0.42 + pointerX * 0.25;
      const satelliteX = Math.cos(satelliteAngle) * base * 1.82;
      const satelliteY = Math.sin(satelliteAngle) * base * 0.72;
      const satelliteGlow = ctx.createRadialGradient(
        satelliteX,
        satelliteY,
        0,
        satelliteX,
        satelliteY,
        base * 0.14,
      );
      satelliteGlow.addColorStop(0, "rgba(224,240,255,0.95)");
      satelliteGlow.addColorStop(0.25, "rgba(91,164,255,0.65)");
      satelliteGlow.addColorStop(1, "rgba(49,133,255,0)");
      ctx.fillStyle = satelliteGlow;
      ctx.beginPath();
      ctx.arc(satelliteX, satelliteY, base * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const projected4 = vertices4.map((original) => {
        let v = original;
        v = rotate4(v, 0, 3, elapsed * 0.33 + pointerX * 0.45);
        v = rotate4(v, 1, 2, elapsed * 0.23 + pointerY * 0.3);
        v = rotate4(v, 0, 2, elapsed * 0.18 + scrollProgress * 0.6);
        v = rotate4(v, 1, 3, elapsed * 0.27);
        const wPerspective = 2.8 / (2.8 - v[3] * 0.42);
        return project3(
          [v[0] * wPerspective, v[1] * wPerspective, v[2] * wPerspective],
          cx,
          cy,
          base * 1.18,
          rotY,
          rotX,
        );
      });
      edges4.forEach(([a, b, dimension]) => {
        const p = projected4[a],
          q = projected4[b];
        ctx.beginPath();
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(q[0], q[1]);
        ctx.strokeStyle =
          dimension === 3 ? "rgba(99,164,255,0.62)" : "rgba(49,133,255,0.28)";
        ctx.lineWidth = dimension === 3 ? 1.35 : 0.85;
        ctx.shadowBlur = dimension === 3 ? 10 : 4;
        ctx.shadowColor = "rgba(49,133,255,0.75)";
        ctx.stroke();
      });

      const inner = cubeVertices.map((v) =>
        project3(v, cx, cy, base * 0.48, -rotY * 1.6, rotX * 1.3),
      );
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(99,164,255,0.8)";
      cubeEdges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(inner[a][0], inner[a][1]);
        ctx.lineTo(inner[b][0], inner[b][1]);
        ctx.strokeStyle = "rgba(135,190,255,0.58)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      ctx.shadowBlur = 0;
      projected4.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p[0], p[1], i % 3 === 0 ? 2.2 : 1.35, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? "#b8d8ff" : "#438dff";
        ctx.fill();
      });

      particles.forEach((p) => {
        const x = p.x * width + Math.sin(elapsed * 0.25 + p.phase) * 10;
        const y =
          (p.y * height + elapsed * (reducedMotion ? 0 : 7 + p.r * 3)) % height;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(130,184,255,${0.18 + (Math.sin(elapsed + p.phase) + 1) * 0.18})`;
        ctx.fill();
      });
      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    onScroll();
    draw(performance.now());
    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active && !reducedMotion && !raf) raf = requestAnimationFrame(draw);
        if (!active && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(hero);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hero);
    hero.addEventListener("pointermove", onPointer, { passive: true });
    hero.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      active = false;
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      hero.removeEventListener("pointermove", onPointer);
      hero.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="dimensional-canvas" aria-hidden="true" />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    type: "Business website",
    budget: "Not sure yet",
    details: "",
  });
  const [status, setStatus] = useState("idle");

  const heroRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "services",
      "work",
      "pricing",
      "about",
      "faq",
      "contact",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-stagger, .reveal-3d, .reveal-3d-stagger, .reveal-side-left, .reveal-side-right",
    );
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
      );
      els.forEach((el) => io.observe(el));
    }
    let raf = 0;
    const parallaxEls = document.querySelectorAll("[data-parallax]");
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          el.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`;
        });
        raf = 0;
      });
    };
    parallaxEls.forEach((el) => (el.style.willChange = "transform"));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const scene = sceneRef.current;
    if (!hero || !scene) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        scene.style.setProperty("--mx", x.toFixed(3));
        scene.style.setProperty("--my", y.toFixed(3));
        raf = 0;
      });
    };
    const onLeave = () => {
      scene.style.setProperty("--mx", "0");
      scene.style.setProperty("--my", "0");
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const filters = [
    "All",
    "Business websites",
    "Landing pages",
    "Online stores",
    "Custom web applications",
  ];
  const visibleProjects = projects.filter(
    (p) =>
      filter === "All" ||
      (filter === "Business websites" && p.category === "Business website") ||
      (filter === "Landing pages" && p.category === "Landing page") ||
      (filter === "Online stores" && p.category === "Online store") ||
      (filter === "Custom web applications" &&
        p.category === "Custom web application"),
  );

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Website enquiry from ${form.name || form.business || "a potential client"}`,
          from_name: "Hamilton Masipa Website",
          name: form.name,
          email: form.email,
          replyto: form.email,
          business: form.business,
          project_type: form.type,
          budget: form.budget,
          message: form.details,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          business: "",
          type: "Business website",
          budget: "Not sure yet",
          details: "",
        });
      } else {
        console.error("Web3Forms error:", res.status, data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit failed:", err);
      setStatus("error");
    }
  };

  const nav = [
    ["Services", "#services", "services"],
    ["Work", "#work", "work"],
    ["Pricing", "#pricing", "pricing"],
    ["About", "#about", "about"],
    ["FAQ", "#faq", "faq"],
    ["Contact", "#contact", "contact"],
  ];

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header
        className={
          scrolled ? "site-header site-header-scrolled" : "site-header"
        }
      >
        <a
          className="brand"
          href="#home"
          aria-label="Hamilton Masipa Web Development home"
        >
          <span className="brand-mark">HM</span>
          <span className="brand-copy">
            <b>Hamilton Masipa</b>
            <small className="brand-status">
              <span className="status-dot" aria-hidden="true"></span>
              Available for new projects
            </small>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map(([name, href, id]) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={activeSection === id ? "nav-active" : ""}
            >
              {name}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get a quote <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" ref={heroRef}>
          <div className="scene" ref={sceneRef} aria-hidden="true">
            <div className="scene-grid"></div>
            <div className="scene-stars"></div>
            <div className="scene-glow"></div>
          </div>

          <AdvancedDimensionalScene />

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span> WEB DESIGN & DEVELOPMENT
            </div>
            <h1>
              Your business deserves <em>more than just a website.</em>
            </h1>
            <p className="hero-lead">
              I help South African businesses build a professional online
              presence with modern websites designed to showcase their services,
              connect with customers and support growth.{" "}
              <strong>Websites from R2,500.</strong>
            </p>
            <div className="hero-actions">
              <Magnetic strength={10}>
                <a className="button button-primary" href="#contact">
                  Tell me about your project <ArrowRight size={17} />
                </a>
              </Magnetic>
              <Magnetic strength={10}>
                <a
                  className="button button-whatsapp"
                  href={wa(
                    "Hi Hamilton, I'd like to discuss a website for my business.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
              </Magnetic>
            </div>
            <div className="hero-proof">
              <span>
                <CheckCircle2 size={16} /> Mobile-friendly design
              </span>
              <span>
                <CheckCircle2 size={16} /> Built around your goals
              </span>
              <span>
                <CheckCircle2 size={16} /> Reply within 24 hours
              </span>
            </div>
          </div>

          <div className="hero-art" data-parallax="-0.06" aria-hidden="true">
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-orbit orbit-three"></div>
            <div className="floating-tag tag-top">
              <span className="tag-icon">
                <Globe size={18} />
              </span>
              <span>
                <b>Online presence</b>
                <small>Made for your business</small>
              </span>
            </div>
            <div className="hero-window">
              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>yourbusiness.co.za</span>
                <div className="window-menu">···</div>
              </div>
              <div className="window-page">
                <div className="window-nav">
                  <b>YOUR BRAND</b>
                  <span>About&nbsp;&nbsp; Services&nbsp;&nbsp; Contact</span>
                </div>
                <div className="window-body">
                  <div className="window-pill">
                    WELCOME TO YOUR NEXT CHAPTER
                  </div>
                  <h3>
                    A better way to
                    <br />
                    <strong>show up online.</strong>
                  </h3>
                  <div className="window-text"></div>
                  <div className="window-text short"></div>
                  <div className="window-button">
                    Let's talk <ArrowRight size={12} />
                  </div>
                </div>
                <div className="window-footer">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="floating-tag tag-bottom">
              <span className="tag-icon">
                <Smartphone size={18} />
              </span>
              <span>
                <b>Responsive by design</b>
                <small>Desktop, tablet & mobile</small>
              </span>
            </div>
            <div className="sparkle sparkle-one">
              <Sparkles size={24} />
            </div>
            <div className="sparkle sparkle-two">✳</div>
          </div>
        </section>

        <section className="trust-strip reveal">
          <div>
            <span className="strip-number">01</span>
            <span>
              <b>Personal service</b>
              <small>Work directly with the developer</small>
            </span>
          </div>
          <div>
            <span className="strip-number">02</span>
            <span>
              <b>Purposeful design</b>
              <small>Made for real customer needs</small>
            </span>
          </div>
          <div>
            <span className="strip-number">03</span>
            <span>
              <b>Room to grow</b>
              <small>Solutions that can evolve</small>
            </span>
          </div>
        </section>

        <section className="stats-section section-wrap reveal-3d">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="services">
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">HOW I CAN HELP</div>
              <h2>
                Digital tools for your <em>next step.</em>
              </h2>
            </div>
            <p>
              Whether you're starting from scratch or improving what you already
              have, we'll focus on what your business actually needs.
            </p>
          </div>
          <div className="service-grid reveal-3d-stagger">
            {services.map(({ icon: Icon, title, text, includes }, i) => (
              <TiltCard key={title} intensity={7} className="service-tilt">
                <article className="service-card">
                  <div className="service-top">
                    <span className="service-icon">
                      <Icon size={22} />
                    </span>
                    <span className="service-index">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul className="service-includes">
                    {includes.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={13} /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="text-link">
                    Discuss this service <ArrowUpRight size={15} />
                  </a>
                </article>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block work-section" id="work">
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">SELECTED PROJECTS</div>
              <h2>
                Work that shows <em>what's possible.</em>
              </h2>
            </div>
            <p>
              Explore live websites and application demos I have built,
              organised by the kind of solution your business may need. Concept
              and development projects are labelled clearly.
            </p>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((f) => (
              <button
                key={f}
                className={
                  filter === f ? "filter-button active" : "filter-button"
                }
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((p) => (
              <TiltCard key={p.title} intensity={9} className="project-tilt">
                <article className="project-card">
                  <ProjectVisual
                    type={p.visual}
                    label={p.label}
                    image={p.image}
                  />
                  <div className="project-body">
                    <div className="project-meta">
                      <span>{p.category}</span>
                      <span
                        className={
                          p.status === "Live" ? "status status-live" : "status"
                        }
                      >
                        {p.status}
                      </span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tech-list">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-bottom">
                      {p.url ? (
                        <a
                          className="text-link"
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View live site <ArrowUpRight size={15} />
                        </a>
                      ) : (
                        <a className="text-link" href="#contact">
                          Ask about this project <ArrowRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
          <p className="project-note reveal">
            <span className="status status-live">Live</span> indicates a
            published website. Development labels identify work that may not yet
            be ready for public use. Project previews above are illustrative
            until replaced with actual screenshots.
          </p>
        </section>

        <section className="section-wrap section-block case-study-section">
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">{caseStudy.tag}</div>
              <h2>{caseStudy.title}</h2>
            </div>
          </div>
          <div className="case-study-grid reveal-3d">
            <div className="case-study-meta">
              <div>
                <small>Client</small>
                <b>{caseStudy.client}</b>
              </div>
              <div>
                <small>Industry</small>
                <b>{caseStudy.industry}</b>
              </div>
              <div className="case-study-result-strip">
                {caseStudy.result.map((r) => (
                  <div key={r.label} className="case-result">
                    <span className="case-value">{r.value}</span>
                    <span className="case-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="case-study-body">
              <div className="case-block">
                <span className="case-block-tag problem">THE PROBLEM</span>
                <p>{caseStudy.problem}</p>
              </div>
              <div className="case-block">
                <span className="case-block-tag solution">WHAT I DID</span>
                <ul className="case-list">
                  {caseStudy.solution.map((s) => (
                    <li key={s}>
                      <CheckCircle2 size={14} /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="case-block">
                <span className="case-block-tag result">THE RESULT</span>
                <p>
                  Within the first three months after launch, the owner reported
                  a steady stream of weekly enquiries — a channel that simply
                  didn't exist before. The site now works as a 24/7 salesperson
                  for the business.
                </p>
              </div>
              <a
                className="button button-primary"
                href={wa(
                  "Hi Hamilton, I read the case study on your site. I'd like something similar for my business — can we chat?",
                )}
                target="_blank"
                rel="noreferrer"
              >
                I want results like this <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block pricing-section"
          id="pricing"
        >
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">TRANSPARENT PRICING</div>
              <h2>
                Simple packages to <em>get you online.</em>
              </h2>
            </div>
            <p>
              Starting prices to help you plan. Every project is quoted properly
              after we discuss your specific needs.
            </p>
          </div>

          <div className="payment-trust reveal">
            <span>
              <Landmark size={15} /> Direct bank transfer (EFT)
            </span>
            <span>
              <Shield size={15} /> 100% on completion
            </span>
            <span>
              <FileText size={15} /> Proper invoice provided
            </span>
            <span>
              <MessageCircle size={15} /> Confirmed on WhatsApp
            </span>
          </div>

          <div className="pricing-grid reveal-3d-stagger">
            <TiltCard intensity={8} className="pricing-tilt">
              <article className="pricing-card">
                <div className="pricing-head">
                  <h3>Landing Page</h3>
                  <p className="pricing-from">From</p>
                  <p className="pricing-price">R2,500</p>
                  <p className="pricing-desc">
                    Perfect for promoting one product, service or campaign.
                  </p>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckCircle2 size={14} /> 1-page focused design
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Mobile responsive
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Contact / enquiry form
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> WhatsApp integration
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Basic SEO setup
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> 1 revision round
                  </li>
                </ul>
                <a
                  href={payMessage("Landing Page", "R2,500")}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline pricing-button"
                >
                  <MessageCircle size={15} /> Get started · Pay via WhatsApp
                </a>
              </article>
            </TiltCard>

            <TiltCard intensity={10} className="pricing-tilt">
              <article className="pricing-card pricing-featured">
                <span className="pricing-badge">MOST POPULAR</span>
                <div className="pricing-head">
                  <h3>Business Website</h3>
                  <p className="pricing-from">From</p>
                  <p className="pricing-price">R3,500</p>
                  <p className="pricing-desc">
                    A complete online presence for a serious small business.
                  </p>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckCircle2 size={14} /> Up to 5 custom pages
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Mobile & tablet optimised
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Contact form + WhatsApp
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> SEO basics & Google indexing
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Domain & hosting setup
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> 2 revision rounds
                  </li>
                </ul>
                <a
                  href={payMessage("Business Website", "R3,500")}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary pricing-button"
                >
                  <MessageCircle size={15} /> Get started · Pay via WhatsApp
                </a>
              </article>
            </TiltCard>

            <TiltCard intensity={8} className="pricing-tilt">
              <article className="pricing-card">
                <div className="pricing-head">
                  <h3>Online Store</h3>
                  <p className="pricing-from">From</p>
                  <p className="pricing-price">R5,000</p>
                  <p className="pricing-desc">
                    Sell online with a store that handles payments and orders.
                  </p>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckCircle2 size={14} /> Product catalogue
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Cart & secure checkout
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Payment gateway setup
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Order email notifications
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> Admin panel training
                  </li>
                  <li>
                    <CheckCircle2 size={14} /> 2 revision rounds
                  </li>
                </ul>
                <a
                  href={payMessage("Online Store", "R5,000")}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline pricing-button"
                >
                  <MessageCircle size={15} /> Get started · Pay via WhatsApp
                </a>
              </article>
            </TiltCard>
          </div>
          <p className="pricing-note reveal">
            Need something more custom (portal, dashboard, booking system)?{" "}
            <a href="#contact">Request a tailored quote →</a>
          </p>
        </section>

        <section className="section-wrap section-block testimonials-section">
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">WHAT CLIENTS SAY</div>
              <h2>
                Real people, <em>real results.</em>
              </h2>
            </div>
            <p>
              A few words from business owners and professionals I've worked
              with.
            </p>
          </div>
          <div className="testimonial-grid reveal-3d-stagger">
            {testimonials.map((t) => (
              <TiltCard key={t.name} intensity={6} className="testimonial-tilt">
                <article className="testimonial-card">
                  <Quote
                    size={26}
                    className="testimonial-quote-icon"
                    aria-hidden="true"
                  />
                  <div
                    className="testimonial-stars"
                    aria-label="5 out of 5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <b>{t.name}</b>
                      <small>
                        {t.role} · {t.location}
                      </small>
                    </div>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-visual reveal-3d">
              <div className="about-monogram">
                HM<span></span>
              </div>
              <div className="about-caption">
                <span className="caption-line"></span>
                <span>Independent web development</span>
              </div>
            </div>
            <div className="about-copy reveal-side-right">
              <div className="eyebrow">A LITTLE ABOUT ME</div>
              <h2>
                Good websites start with <em>understanding your business.</em>
              </h2>
              <p>
                I'm Hamilton Masipa, a web developer with a National Diploma in
                Computer Science from Tshwane University of Technology. I enjoy
                turning ideas into useful digital experiences, from
                straightforward business websites to web applications.
              </p>
              <p>
                When we work together, the aim is simple: understand what you
                need, agree on a clear scope, and build a solution that makes
                sense for your business and your customers.
              </p>
              <div className="about-points">
                <span>
                  <CheckCircle2 size={17} /> Direct communication
                </span>
                <span>
                  <CheckCircle2 size={17} /> Clear project scope
                </span>
                <span>
                  <CheckCircle2 size={17} /> Practical solutions
                </span>
                <span>
                  <CheckCircle2 size={17} /> Reply within 24 hours
                </span>
              </div>
              <Magnetic strength={12}>
                <a
                  className="button button-primary"
                  href={wa(
                    "Hi Hamilton, I'd like to book a free 15-minute chat about a website for my business.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Calendar size={16} /> Book a free 15-min chat
                </a>
              </Magnetic>
            </div>
          </div>
        </section>

        <section className="process-section section-wrap section-block">
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">A SIMPLE PROCESS</div>
              <h2>
                From idea to <em>online.</em>
              </h2>
            </div>
            <p>
              You don't need to know all the technical details. I'll guide you
              through the key decisions.
            </p>
          </div>
          <div className="process-grid reveal-3d-stagger">
            <div>
              <span>01</span>
              <h3>Tell me about it</h3>
              <p>
                Share your business, goals, audience and the problem you want
                your website to solve.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Plan the solution</h3>
              <p>
                We'll agree on pages, features, timeline, costs and what is
                included before work begins.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Build and review</h3>
              <p>
                I'll develop the website and give you a chance to review the
                work against the agreed scope.
              </p>
            </div>
            <div>
              <span>04</span>
              <h3>Launch confidently</h3>
              <p>
                We'll prepare the finished website for launch and discuss any
                ongoing support you need.
              </p>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block faq-section" id="faq">
          <div className="section-heading reveal-3d">
            <div>
              <div className="eyebrow">COMMON QUESTIONS</div>
              <h2>
                Answers before you <em>ask.</em>
              </h2>
            </div>
            <p>
              If your question isn't here, send me a message — I'm happy to
              clarify anything.
            </p>
          </div>
          <div className="faq-grid reveal-3d-stagger">
            {faqs.map((item) => (
              <FaqItem key={item.q} {...item} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy reveal-side-left">
              <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
              <h2>
                Let's build something <em>useful for your business.</em>
              </h2>
              <p>
                Tell me a little about what you need. I'll get back to you
                within 24 hours to discuss next steps and whether we're a good
                fit.
              </p>
              <div className="contact-methods">
                <a
                  href={wa(
                    "Hi Hamilton, I'd like to discuss a website for my business.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <small>WhatsApp (fastest)</small>
                    <b>Start a conversation</b>
                  </div>
                  <ArrowUpRight size={15} />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <span>
                    <Mail size={18} />
                  </span>
                  <div>
                    <small>Email me</small>
                    <b>{CONTACT_EMAIL}</b>
                  </div>
                  <ArrowUpRight size={15} />
                </a>
                <a href="#contact" aria-label="Location: South Africa">
                  <span>
                    <MapPin size={18} />
                  </span>
                  <div>
                    <small>Based in</small>
                    <b>South Africa · Working nationwide</b>
                  </div>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <form className="quote-form reveal-3d" onSubmit={submit}>
              <div className="form-heading">
                <h3>Request a quote</h3>
                <p>Share the basics to get the conversation started.</p>
              </div>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    type="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Business name <span className="optional">(optional)</span>
                <input
                  name="business"
                  value={form.business}
                  onChange={update}
                  placeholder="Your business name"
                />
              </label>
              <div className="form-row">
                <label>
                  What do you need?
                  <select name="type" value={form.type} onChange={update}>
                    <option>Business website</option>
                    <option>Landing page</option>
                    <option>Online store</option>
                    <option>Custom web application</option>
                    <option>Website redesign</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  Budget range
                  <select name="budget" value={form.budget} onChange={update}>
                    <option>Not sure yet</option>
                    <option>Under R3,500</option>
                    <option>R3,500–R7,000</option>
                    <option>R7,000–R12,000</option>
                    <option>R12,000+</option>
                  </select>
                </label>
              </div>
              <label>
                Tell me about your project
                <textarea
                  name="details"
                  value={form.details}
                  onChange={update}
                  required
                  rows="4"
                  placeholder="What does your business do, and what would you like the website to help with?"
                />
              </label>
              <button
                className="button button-primary submit-button"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    Sending <Loader2 size={16} className="spin" />
                  </>
                ) : (
                  <>
                    Send enquiry <Send size={16} />
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="form-note form-success">
                  ✓ Thank you! Your enquiry has been sent. I'll reply within 24
                  hours.
                </p>
              )}
              {status === "error" && (
                <p className="form-note form-error">
                  Something went wrong. Please email me directly at{" "}
                  {CONTACT_EMAIL} or message on WhatsApp.
                </p>
              )}
              <p className="privacy-note">
                Prefer to skip the form?{" "}
                <a
                  href={wa(
                    "Hi Hamilton, I'd like to discuss a website for my business.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Message me on WhatsApp instead →
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">HM</span>
          <span className="brand-copy">
            <b>Hamilton Masipa</b>
            <small>Web Development</small>
          </span>
        </a>
        <p>Thoughtful websites for businesses with ambition.</p>
        <div className="footer-links">
          <a
            href="https://github.com/HamiltonMas"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Hamilton Masipa Web Development. All
          rights reserved.
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={wa("Hi Hamilton, I'd like to discuss a website for my business.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="whatsapp-float-text">Chat with me</span>
      </a>

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

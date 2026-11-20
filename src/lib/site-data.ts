export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Contact", href: "/contact" },
];

export const whatsappNumber = "8700701196";
export const whatsappDisplay = "+91 8700701196, 9266358578";
export const whatsappLink = (
  message = "Hello SPC International, I would like to get in touch.",
) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const heroSlides = [
  {
    image: "/images/hero-main.png",
    alt: "Construction and logistics professionals working together",
    eyebrow: "OVERSEAS RECRUITMENT / NEW DELHI",
    firstLine: "Great people.",
    secondLine: "Greater possibilities.",
    description:
      "Connecting motivated professionals with ambitious organisations, across borders and industries.",
    label: "People",
  },
  {
    image: "/images/hero-healthcare-new.png",
    alt: "Healthcare professionals working together in a modern hospital",
    eyebrow: "PEOPLE BEHIND EVERY PROFESSION",
    firstLine: "The right talent.",
    secondLine: "The right fit.",
    description:
      "We look beyond a job title to understand the skills, care and commitment that make a team stronger.",
    label: "Industries",
  },
  {
    image: "/images/hero-business-new.png",
    alt: "Professionals collaborating in a contemporary workplace",
    eyebrow: "A THOUGHTFUL RECRUITMENT JOURNEY",
    firstLine: "Better connections.",
    secondLine: "Brighter futures.",
    description:
      "A clearer, more personal path for employers to meet talent and candidates to take their next step.",
    label: "Process",
  },
  {
    image: "/images/hero-hospitality-new.png",
    alt: "Hospitality professionals in a welcoming hotel lobby",
    eyebrow: "GROWTH IS IN OUR DNA",
    firstLine: "Your next chapter.",
    secondLine: "Starts here.",
    description:
      "Wherever your ambitions take you, start with a conversation that puts people first.",
    label: "Future",
  },
];

export const services = [
  {
    number: "01",
    title: "Overseas manpower solutions",
    short:
      "Connecting employers with capable people for roles that move businesses forward.",
    description:
      "We help organisations identify people with the right skills and mindset for international workforce requirements. Every search begins with understanding the role, the team and the bigger picture.",
    image: "/images/service-manpower.jpg",
    icon: "users",
  },
  {
    number: "02",
    title: "Recruitment & selection",
    short:
      "A considered approach to discovering, assessing and shortlisting talent.",
    description:
      "From initial conversations to a focused shortlist, our process is designed to make hiring more informed and more human. We pay attention to experience, suitability and aspirations.",
    image: "/images/service-recruitment.jpg",
    icon: "search",
  },
  {
    number: "03",
    title: "Career guidance",
    short:
      "Helping candidates prepare for the opportunities ahead with clarity and care.",
    description:
      "A career abroad is a big decision. We help candidates understand the recruitment journey, present their experience clearly and take informed steps toward potential opportunities.",
    image: "/images/service-journey.png",
    icon: "briefcase",
  },
];

export const industries = [
  {
    name: "Construction & engineering",
    slug: "construction-engineering",
    icon: "hardhat",
    description: "The people behind projects and progress.",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: "heart",
    description: "Compassionate professionals who make care possible.",
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    icon: "building",
    description: "Service-minded talent for memorable experiences.",
  },
  {
    name: "Logistics & supply chain",
    slug: "logistics-supply-chain",
    icon: "truck",
    description: "Reliable teams that keep the world moving.",
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    icon: "factory",
    description: "Skills and precision for everyday production.",
  },
  {
    name: "Facilities & maintenance",
    slug: "facilities-maintenance",
    icon: "wrench",
    description: "The essential work behind well-run spaces.",
  },
];

export const careerPaths = [
  {
    slug: "construction-engineering",
    name: "Construction & engineering",
    icon: "hardhat",
    roles: ["Civil engineer", "Electrician", "Welder", "Site supervisor"],
    description: "Build what comes next with hands-on and technical expertise.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart",
    roles: ["Nurse", "Care assistant", "Lab technician", "Medical support"],
    description: "Make a meaningful difference in care-focused workplaces.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "building",
    roles: ["Chef", "Front office", "Housekeeping", "Food & beverage"],
    description: "Bring warmth, attention and skill to guest experiences.",
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & supply chain",
    icon: "truck",
    roles: [
      "Warehouse associate",
      "Inventory coordinator",
      "Driver",
      "Logistics supervisor",
    ],
    description: "Help important things get where they need to go.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    roles: [
      "Machine operator",
      "Quality inspector",
      "Production technician",
      "Line supervisor",
    ],
    description: "Turn practical skills into real-world impact.",
  },
  {
    slug: "facilities-maintenance",
    name: "Facilities & maintenance",
    icon: "wrench",
    roles: [
      "HVAC technician",
      "Maintenance technician",
      "Facility attendant",
      "Plumber",
    ],
    description: "Keep the places people rely on working at their best.",
  },
  {
    slug: "retail-customer-service",
    name: "Retail & customer service",
    icon: "store",
    roles: [
      "Sales associate",
      "Store supervisor",
      "Customer support",
      "Cashier",
    ],
    description: "Create positive experiences, one interaction at a time.",
  },
  {
    slug: "administration-office",
    name: "Administration & office",
    icon: "briefcase",
    roles: [
      "Administrative assistant",
      "Accountant",
      "Office coordinator",
      "Data entry",
    ],
    description: "Support the people and processes behind a great workplace.",
  },
];

export const officeAddress =
  "E-74, 3rd Floor, Street No. 5, Near Deep Sweet, Bharat Nagar, New Friends Colony, New Delhi – 110025, India";

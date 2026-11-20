export type CareerDetail = {
  image: string;
  intro: string;
  overview: string;
  skills: string[];
  roles: { title: string; description: string }[];
};

export const careerDetails: Record<string, CareerDetail> = {
  "construction-engineering": {
    image: "/images/hero-main.png",
    intro: "Help turn plans into places and ideas into infrastructure.",
    overview:
      "Construction and engineering bring together practical skills, technical understanding and people who work well as a team. From the early stages of a project to the finishing details, every role contributes to work that lasts. The right opportunity will depend on your experience, qualifications and an employer's requirements.",
    skills: [
      "Technical and practical ability",
      "A safety-conscious approach",
      "Team communication",
      "Attention to detail",
    ],
    roles: [
      {
        title: "Civil engineer",
        description:
          "Supports design interpretation, site coordination and technical decisions on building or infrastructure work.",
      },
      {
        title: "Electrician",
        description:
          "Installs, tests and maintains electrical systems while following safe working practices.",
      },
      {
        title: "Welder",
        description:
          "Joins and repairs metal components with the methods and quality standards required for the task.",
      },
      {
        title: "Site supervisor",
        description:
          "Helps organise daily site activity, guide teams and keep work moving to plan.",
      },
    ],
  },
  healthcare: {
    image: "/images/hero-healthcare-new.png",
    intro: "Bring knowledge, compassion and confidence to care.",
    overview:
      "Healthcare settings depend on people who combine professional skill with empathy and care. Roles may involve direct patient support, clinical coordination or essential work behind the scenes. Qualifications, registration and employer requirements vary by location, so every potential opportunity is considered individually.",
    skills: [
      "Care and empathy",
      "Clear communication",
      "Professional training",
      "Calm attention to detail",
    ],
    roles: [
      {
        title: "Nurse",
        description:
          "Provides clinical care, monitors patients and works closely with wider healthcare teams.",
      },
      {
        title: "Care assistant",
        description:
          "Supports people with day-to-day care needs and helps create a safe, respectful environment.",
      },
      {
        title: "Lab technician",
        description:
          "Assists with sample handling, testing processes and accurate laboratory records.",
      },
      {
        title: "Medical support",
        description:
          "Contributes to the administrative or practical support that helps care teams work effectively.",
      },
    ],
  },
  hospitality: {
    image: "/images/hero-hospitality-new.png",
    intro: "Make every welcome, meal and moment matter.",
    overview:
      "Hospitality is built on thoughtful service and the people who make guests feel looked after. Whether your strengths are in the kitchen, at the front desk or behind the scenes, this field rewards teamwork, adaptability and genuine attention to others. The examples below show the kinds of roles that may arise when employers are hiring.",
    skills: [
      "Service-minded attitude",
      "Teamwork under pressure",
      "Adaptability",
      "Attention to guests",
    ],
    roles: [
      {
        title: "Chef",
        description:
          "Prepares food, supports kitchen operations and helps maintain quality and hygiene standards.",
      },
      {
        title: "Front office",
        description:
          "Welcomes guests, handles enquiries and supports a smooth arrival and stay.",
      },
      {
        title: "Housekeeping",
        description:
          "Keeps rooms and shared spaces clean, comfortable and ready for guests.",
      },
      {
        title: "Food & beverage",
        description:
          "Delivers attentive dining service and helps create a positive guest experience.",
      },
    ],
  },
  "logistics-supply-chain": {
    image: "/images/career-logistics.jpg",
    intro: "Keep people, products and possibilities moving.",
    overview:
      "Logistics and supply chain work connects the moving parts of a business. It can involve receiving goods, managing stock, coordinating deliveries or supporting warehouse teams. Reliable processes matter, and so do people who can adapt, communicate and pay attention to the details that keep operations on track.",
    skills: [
      "Organisation and accuracy",
      "Dependable teamwork",
      "Time management",
      "Operational awareness",
    ],
    roles: [
      {
        title: "Warehouse associate",
        description:
          "Helps receive, store, pick and prepare goods within a warehouse environment.",
      },
      {
        title: "Inventory coordinator",
        description:
          "Supports stock records, counts and the flow of items through an operation.",
      },
      {
        title: "Driver",
        description:
          "Moves goods or people safely according to the requirements of a specific role and location.",
      },
      {
        title: "Logistics supervisor",
        description:
          "Coordinates daily activities and supports teams in meeting operational priorities.",
      },
    ],
  },
  manufacturing: {
    image: "/images/factory-team.jpg",
    intro: "Make the things that make everyday life possible.",
    overview:
      "Manufacturing brings together people, equipment and process to create reliable products. From operating machinery to checking quality, these roles call for focus, consistency and a willingness to learn. The exact skills and certifications needed will depend on the workplace and its production requirements.",
    skills: [
      "Process awareness",
      "Quality-minded work",
      "Safe equipment use",
      "Consistency and teamwork",
    ],
    roles: [
      {
        title: "Machine operator",
        description:
          "Runs and monitors production equipment and follows the procedures required for the job.",
      },
      {
        title: "Quality inspector",
        description:
          "Checks products or processes against agreed standards and records findings carefully.",
      },
      {
        title: "Production technician",
        description:
          "Supports production tasks, equipment checks and day-to-day process improvements.",
      },
      {
        title: "Line supervisor",
        description:
          "Helps coordinate people, output and priorities across a production line.",
      },
    ],
  },
  "facilities-maintenance": {
    image: "/images/career-facilities.png",
    intro: "Keep the spaces people rely on working well.",
    overview:
      "Buildings function at their best because skilled people keep essential systems and spaces in good condition. Facilities and maintenance roles can involve planned upkeep, practical repairs and quick responses to day-to-day needs. The right fit depends on your trade experience and the requirements of a particular site.",
    skills: [
      "Practical problem-solving",
      "Trade knowledge",
      "Safety awareness",
      "Reliable response",
    ],
    roles: [
      {
        title: "HVAC technician",
        description:
          "Works on heating, ventilation and cooling systems according to the relevant standards.",
      },
      {
        title: "Maintenance technician",
        description:
          "Carries out routine checks and practical repairs to keep facilities operating smoothly.",
      },
      {
        title: "Facility attendant",
        description:
          "Supports day-to-day upkeep and helps maintain a welcoming, functional environment.",
      },
      {
        title: "Plumber",
        description:
          "Installs, maintains or repairs plumbing systems within the scope of a role.",
      },
    ],
  },
  "retail-customer-service": {
    image: "/images/career-retail.png",
    intro: "Create better experiences, one conversation at a time.",
    overview:
      "Retail and customer service are all about understanding people and helping them find what they need. Roles can be customer-facing or focused on supporting a store's daily operation. Friendly communication, product knowledge and the ability to respond thoughtfully make a meaningful difference here.",
    skills: [
      "Customer communication",
      "A helpful approach",
      "Product awareness",
      "Team collaboration",
    ],
    roles: [
      {
        title: "Sales associate",
        description:
          "Helps customers, shares product information and supports a positive shopping experience.",
      },
      {
        title: "Store supervisor",
        description:
          "Supports store teams, daily priorities and consistent service standards.",
      },
      {
        title: "Customer support",
        description:
          "Responds to questions and helps resolve customer needs across relevant channels.",
      },
      {
        title: "Cashier",
        description:
          "Handles transactions accurately while offering courteous customer service.",
      },
    ],
  },
  "administration-office": {
    image: "/images/hero-business-new.png",
    intro: "Be the organisation behind an organisation.",
    overview:
      "Office and administrative professionals create the structure that helps teams do their best work. From organising records to handling accounts or coordinating people, these roles reward accuracy, communication and the ability to keep things moving. Requirements will differ depending on the organisation and role.",
    skills: [
      "Organisation",
      "Clear written communication",
      "Digital confidence",
      "Attention to accuracy",
    ],
    roles: [
      {
        title: "Administrative assistant",
        description:
          "Supports scheduling, documents, communication and general office coordination.",
      },
      {
        title: "Accountant",
        description:
          "Works with financial records and reporting according to the role's requirements.",
      },
      {
        title: "Office coordinator",
        description:
          "Helps connect people, tasks and processes in a busy workplace.",
      },
      {
        title: "Data entry",
        description:
          "Enters and maintains information carefully so teams can rely on accurate records.",
      },
    ],
  },
};

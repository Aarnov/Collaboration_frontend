const projectDetails = [
    {
    id: 1,
    name: "Project Alpha",
    description: "A web-based dashboard for analytics",
    members: ["Alice", "Bob"],
    status: "In Progress",
    },
    {
    id: 2,
    name: "Project Beta",
    description: "An AI chatbot for customer support",
    members: ["Charlie", "David"],
    status: "Completed",
    },
    {
    id: 3,
    name: "Project Gamma",
    description: "Mobile app for fitness tracking",
    members: ["Eve", "Frank"],
    status: "In Progress",
    },
    {
    id: 4,
    name: "Project Delta",
    description: "E-commerce platform for handmade products",
    members: ["Grace", "Heidi"],
    status: "Pending",
    },
    {
    id: 5,
    name: "Project Epsilon",
    description: "Cloud storage optimization tool",
    members: ["Isaac", "Jack"],
    status: "Completed",
    },
    {
    id: 6,
    name: "Project Zeta",
    description: "Real-time stock market analysis tool",
    members: ["Karen", "Leo"],
    status: "In Progress",
    },
    {
    id: 7,
    name: "Project Eta",
    description: "AI-powered resume screening software",
    members: ["Mia", "Noah"],
    status: "Pending",
    },
    {
    id: 8,
    name: "Project Theta",
    description: "Online learning management system",
    members: ["Olivia", "Paul"],
    status: "Completed",
    },
    {
    id: 9,
    name: "Project Iota",
    description: "Blockchain-based voting system",
    members: ["Quinn", "Ryan"],
    status: "In Progress",
    },
    {
    id: 10,
    name: "Project Kappa",
    description: "Smart home automation system",
    members: ["Sophia", "Tom"],
    status: "Pending",
    },
    {
    id: 11,
    name: "Project Lambda",
    description: "Healthcare appointment scheduling app",
    members: ["Uma", "Victor"],
    status: "Completed",
    },
    {
    id: 12,
    name: "Project Mu",
    description: "Weather forecasting system using AI",
    members: ["Wendy", "Xavier"],
    status: "In Progress",
    },
    {
    id: 13,
    name: "Project Nu",
    description: "Automated customer service chatbot",
    members: ["Yara", "Zane"],
    status: "Completed",
    },
    {
    id: 14,
    name: "Project Xi",
    description: "IoT-based agriculture monitoring system",
    members: ["Alice", "Brian"],
    status: "Pending",
    },
    {
    id: 15,
    name: "Project Omicron",
    description: "Cybersecurity threat detection tool",
    members: ["Clara", "Daniel"],
    status: "In Progress",
    },
    {
    id: 16,
    name: "Project Pi",
    description: "Smart parking management system",
    members: ["Ethan", "Fiona"],
    status: "Completed",
    },
    {
    id: 17,
    name: "Project Rho",
    description: "Social media sentiment analysis tool",
    members: ["George", "Hannah"],
    status: "In Progress",
    },
    {
    id: 18,
    name: "Project Sigma",
    description: "Personal finance tracking application",
    members: ["Ian", "Jane"],
    status: "Pending",
    },
    {
    id: 19,
    name: "Project Tau",
    description: "Digital marketing analytics software",
    members: ["Kevin", "Lily"],
    status: "Completed",
    },
    {
    id: 20,
    name: "Project Upsilon",
    description: "Automated news summarization tool",
    members: ["Mason", "Nina"],
    status: "In Progress",
    },
    {
    id: 21,
    name: "Project Phi",
    description: "Facial recognition attendance system",
    members: ["Oscar", "Pam"],
    status: "Completed",
    },
    {
    id: 22,
    name: "Project Chi",
    description: "Virtual reality education platform",
    members: ["Quincy", "Rachel"],
    status: "Pending",
    },
    {
    id: 23,
    name: "Project Psi",
    description: "AI-powered music recommendation system",
    members: ["Steve", "Tina"],
    status: "In Progress",
    },
    {
    id: 24,
    name: "Project Omega",
    description: "Smart waste management solution",
    members: ["Ursula", "Victor"],
    status: "Completed",
    },
    {
    id: 25,
    name: "Project A1",
    description: "Drone-based delivery service",
    members: ["Walt", "Xena"],
    status: "Pending",
    },
    {
    id: 26,
    name: "Project B1",
    description: "AI-powered legal document analysis",
    members: ["Yusuf", "Zara"],
    status: "In Progress",
    },
    {
    id: 27,
    name: "Project C1",
    description: "Blockchain-based supply chain management",
    members: ["Aaron", "Bella"],
    status: "Completed",
    },
    {
    id: 28,
    name: "Project D1",
    description: "AI-driven fashion trend prediction",
    members: ["Cody", "Diana"],
    status: "Pending",
    },
    {
    id: 29,
    name: "Project E1",
    description: "Personalized AI fitness coach",
    members: ["Elijah", "Faye"],
    status: "In Progress",
    },
    {
    id: 30,
    name: "Project F1",
    description: "Self-driving car navigation system",
    members: ["Gordon", "Holly"],
    status: "Completed",
    },
    {
    id: 31,
    name: "Project G1",
    description: "E-learning AI tutor",
    members: ["Isaiah", "Jill"],
    status: "In Progress",
    },
    {
    id: 32,
    name: "Project H1",
    description: "Automated document translation",
    members: ["Kyle", "Laura"],
    status: "Pending",
    },
    {
    id: 33,
    name: "Project I1",
    description: "AI-powered job recruitment assistant",
    members: ["Mike", "Nora"],
    status: "Completed",
    },
    {
    id: 34,
    name: "Project J1",
    description: "IoT smart irrigation system",
    members: ["Oliver", "Paige"],
    status: "In Progress",
    },
    {
    id: 35,
    name: "Project K1",
    description: "AI-driven financial fraud detection",
    members: ["Quentin", "Riley"],
    status: "Completed",
    },
    {
    id: 36,
    name: "Project L1",
    description: "Autonomous drone surveillance",
    members: ["Samuel", "Tiffany"],
    status: "Pending",
    },
    {
    id: 37,
    name: "Project M1",
    description: "AI-enhanced medical diagnosis tool",
    members: ["Uma", "Vince"],
    status: "In Progress",
    },
    {
    id: 38,
    name: "Project N1",
    description: "Automated resume evaluation system",
    members: ["Warren", "Xander"],
    status: "Completed",
    },
    {
    id: 39,
    name: "Project O1",
    description: "Smart city energy management system",
    members: ["Yvonne", "Zeke"],
    status: "Pending",
    },
    {
    id: 40,
    name: "Project P1",
    description: "AI-powered mental health chatbot",
    members: ["Alice", "Bob"],
    status: "In Progress",
    },
];

export default projectDetails;

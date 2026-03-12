import React, { useEffect, useState, forwardRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Avatar,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Code,
  Smartphone,
  Cloud,
  Zap,
  TestTube,
  LayoutDashboard,
  Handshake,
  TrendingUp,
  Scale,
  LayoutGrid,
  Target,
  Search,
  Database,
  Brain,
  Globe2,
  Headset,
  GraduationCap,
  Lightbulb
} from "lucide-react";

// --- STYLED COMPONENTS ---
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '2.8rem',
  textAlign: 'center',
  marginBottom: '8px',
  color: '#1a1a1a',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  }
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.15rem',
  color: '#555',
  textAlign: 'center',
  marginBottom: '40px',
  fontWeight: 400,
  letterSpacing: '0.3px',
  lineHeight: '1.6',
}));

const CAPABILITIES = [
  {
    title: 'Artificial Intelligence & Data Solutions',
    subtitle: 'Build intelligent systems that automate processes.',
    bullets: [
      'AI Application Development',
      'Generative AI & AI Agents',
      'Data Engineering & Modeling',
      'Machine Learning Solutions',
      'AI-powered Automation',
    ],
    icon: Brain,
    colors: { from: '#ff7bd8', to: '#5ac8ff', shadow: 'rgba(255, 123, 216, 0.45)' },
    route: '/services',
  },
  {
    title: 'Offshore Development Center (ODC)',
    subtitle: 'Extend your engineering team offshore.',
    bullets: [
      'Dedicated Product Teams',
      'Cost-efficient Global Delivery',
      'Agile Development & DevOps',
      'Full Stack • Cloud • AI/ML',
    ],
    icon: Globe2,
    colors: { from: '#64c7ff', to: '#5c7bff', shadow: 'rgba(91, 156, 255, 0.45)' },
    route: '/staffaugmentation',
  },
  {
    title: 'Application Support & Managed Services',
    subtitle: 'Ensure seamless platform operations.',
    bullets: [
      '24/7 Application Support',
      'Cloud Infrastructure Management',
      'Product Maintenance',
      'Performance Optimization',
    ],
    icon: Headset,
    colors: { from: '#6dd1ff', to: '#8c7bff', shadow: 'rgba(109, 209, 255, 0.4)' },
    route: '/appdevsupport',
  },
  {
    title: 'Technology Academy',
    subtitle: 'Building industry-ready talent.',
    bullets: [
      'AI & Data Engineering',
      'Full Stack Development',
      'Cloud & DevOps',
      'Real Project Exposure',
    ],
    icon: GraduationCap,
    colors: { from: '#7ea0ff', to: '#6ae0ff', shadow: 'rgba(110, 160, 255, 0.4)' },
    route: '/trainingsprojects',
  },
  {
    title: 'Mobile App Development',
    subtitle: 'Designing modern mobile solutions.',
    bullets: [
      'iOS & Android Development',
      'Cross-Platform (Flutter & React Native)',
      'Enterprise Mobile Apps',
      'Scalable Cloud Backend',
    ],
    icon: Smartphone,
    colors: { from: '#ff9a62', to: '#ff5f7d', shadow: 'rgba(255, 136, 112, 0.45)' },
    route: '/services',
  },
  {
    title: 'Innovation & Product Solutions',
    subtitle: 'Industry-specific software solutions.',
    bullets: [
      'ERP & HR Platforms',
      'Construction Management',
      'Retail & Accounting Systems',
      'Business Intelligence',
    ],
    icon: Lightbulb,
    colors: { from: '#ffc76a', to: '#ff9f3f', shadow: 'rgba(255, 171, 82, 0.45)' },
    route: '/services',
  },
];

// --- ABSTRACT GRAPHIC COMPONENTS ---
const FloatingDot = ({ size, color, top, left, right, bottom, opacity = 1 }) => (
  <Box
    sx={{
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: color,
      opacity: opacity,
      width: size,
      height: size,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      filter: 'blur(1px)',
      transition: 'transform 1s ease-out',
      zIndex: 1,
    }}
  />
);

const AbstractGraphic = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetY(prev => (prev === 0 ? 3 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        minHeight: { xs: '350px', md: '500px' },
        mt: { xs: 4, md: 0 }
      }}>
      {/* Blue Background Blob/Box */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          backgroundColor: 'rgb(219, 237, 255, 0.7)',
          boxShadow: '0px 10px 20px rgba(66, 165, 245, 0.2)',
          transition: 'transform 3s ease-in-out',
          transform: `translateY(${offsetY}px)`,
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 90% 100%, 10% 100%, 0% 95%)',
          zIndex: 2,
        }}
      />

      {/* Floating Elements */}
      <FloatingDot size="20px" color="#90caf9" top="10%" right="5%" />
      <FloatingDot size="15px" color="#a5d6a7" top="25%" right="-5%" opacity={0.5} />
      <FloatingDot size="10px" color="#00bcd4" top="50%" right="95%" />
      <FloatingDot size="18px" color="#64b5f6" bottom="5%" left="15%" opacity={0.8} />
      <FloatingDot size="8px" color="#4caf50" bottom="20%" right="85%" />

      {/* Dotted Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 150,
          height: 150,
          opacity: 0.3,
          backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)',
          backgroundSize: '10px 10px',
          transform: 'translate(20%, -20%)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

const TECHNOLOGY_DATA = [
  {
    category: 'Cloud & Devops',
    icon: Cloud,
    heading: 'Cloud & Devops',
    description:
      "We utilize robust cloud solutions like AWS and Azure, paired with DevOps tools such as Docker, Kubernetes, and Jenkins, to ensure scalable, reliable, and continuous deployment for modern applications.",
    technologies: [
      { name: 'AWS', link: '/aws-cloud-services', image: '/technologies/aws.png' },
      { name: 'Google Cloud', link: '/cloud-application-development', image: '/technologies/google_cloud.png' },
      { name: 'Docker', link: '#', image: '/technologies/docker.png' },
      { name: 'Kubernets', link: '#', image: '/technologies/kubernetes.png' },
      { name: 'Jenkins', link: '#', image: '/technologies/jenkins.png' },
      { name: 'Azure', link: '/azure-web-services', image: '/technologies/azure.png' },
    ],
  },

  {
    category: 'Frontend',
    icon: Code,
    heading: 'Frontend',
    description:
      "Our expertise spans leading JavaScript frameworks, including Angular, React, and Vue.js, along with core technologies like Knockout JS, to build dynamic, responsive, and high-performance user interfaces.",
    technologies: [
      { name: 'Angular JS', link: '/angular-development', image: '/technologies/angular.png' },
      { name: 'React', link: '/top-reactjs-development-company', image: '/technologies/react.png' },
      { name: 'Vue JS', link: '/vue-js-development', image: '/technologies/vue.png' },
      { name: 'Knockout JS', link: '#', image: '/technologies/knockout_js.png' },
      { name: 'Javascript', link: '/javascript-application-development', image: '/technologies/javascript.png' },
    ],
  },

  {
    category: 'Backend',
    icon: Zap,
    heading: 'Backend',
    description:
      "We develop scalable and robust backend systems using powerful server-side languages and runtimes such as .Net, Java, Node JS, PHP, Python, and Ruby, ensuring high performance and data integrity.",
    technologies: [
      { name: '.Net', link: '/dot-net-development', image: '/technologies/dot_net.png' },
      { name: 'Java', link: '/java-development', image: '/technologies/java.png' },
      { name: 'Node JS', link: '/node-js-development', image: '/technologies/node.png' },
      { name: 'PHP', link: '/php-development', image: '/technologies/php.png' },
      { name: 'Python', link: '/python-development-services', image: '/technologies/python.png' },
      { name: 'Ruby', link: '#', image: '/technologies/ruby.png' },
    ],
  },

  {
    category: 'Mobile',
    icon: Smartphone,
    heading: 'Mobile',
    description:
      "We craft native and cross-platform mobile experiences for iOS and Android using frameworks like Flutter, Xamarin, React Native, and Ionic, delivering seamless performance across all devices.",
    technologies: [
      { name: 'Android', link: '/best-android-app-development-company', image: '/technologies/android.png' },
      { name: 'iOS', link: '/ios-app-development-company', image: '/technologies/apple.png' },
      { name: 'Flutter', link: '/flutter-app-development-company', image: '/technologies/flutter.png' },
      { name: 'Xamarin', link: '/xamarin-app-development', image: '/technologies/xamarin.png' },
      { name: 'React Native', link: '/top-react-native-app-development-company', image: '/technologies/react.png' },
      { name: 'Ionic', link: '/hire-ionic-developers', image: '/technologies/ionic.png' },
    ],
  },

  {
    category: 'Microsoft',
    icon: LayoutDashboard,
    heading: 'Microsoft',
    description:
      "We leverage the Microsoft ecosystem, including Sharepoint, PowerApps, Power Automate, Office 365, Teams, and Power BI, to deliver integrated enterprise solutions and streamline business processes.",
    technologies: [
      { name: 'Sharepoint', link: '/sharepoint-development-services', image: '/technologies/sharepoint.png' },
      { name: 'Powerapps', link: '/powerapps-development-company', image: '/technologies/powerapp.png' },
      { name: 'Power Automate', link: '/power-automate-services', image: '/technologies/power_automate.png' },
      { name: 'Office 365', link: '#', image: '/technologies/office365.png' },
      { name: 'Teams', link: '#', image: '/technologies/teams.png' },
      { name: 'Power BI', link: '/power-bi-consulting-services', image: '/technologies/power_bi.png' },
    ],
  },

  {
    category: 'Database',
    icon: Database,
    heading: 'Database',
    description:
      "Our database expertise covers relational and NoSQL systems like MsSQL, PostgreSQL, MySQL, MongoDB, Cassandra, and Oracle, ensuring optimal data management and reliable transaction handling.",
    technologies: [
      { name: 'MsSQL', link: '#', image: '/technologies/microsoft_sql.png' },
      { name: 'PostgreSQL', link: '#', image: '/technologies/postgresql.png' },
      { name: 'MySQL', link: '#', image: '/technologies/mysql.png' },
      { name: 'Mongo DB', link: '/mongodb-development-services', image: '/technologies/mongo.png' },
      { name: 'Cassandra', link: '#', image: '/technologies/cassandra.png' },
      { name: 'Oracle', link: '#', image: '/technologies/oracle.png' },
    ],
  },

  {
    category: 'Testing',
    icon: TestTube,
    heading: 'Testing',
    description:
      "We test web applications on multiple browsers and platforms using Selenium, an open-source framework for automating web browsers...",
    technologies: [
      { name: 'Katalon', link: '#', image: '/technologies/katalon.png' },
      { name: 'Selenium', link: '#', image: '/technologies/selenium.png' },
      { name: 'Apache JMeter', link: '#', image: '/technologies/apache_jmeter.png' },
      { name: 'Jira', link: '#', image: '/technologies/jira.png' },
      { name: 'Postman', link: '#', image: '/technologies/postman.png' },
      { name: 'BrowserStack', link: '#', image: '/technologies/browserstack.png' },
    ],
  },
];

const CORE_EXPERTISE_ITEMS = [
  {
    number: '01',
    title: 'Software Development',
    focusDesc: 'End-to-end custom application development using the latest tech stacks.',
    valueDesc:
      'We build scalable, high-performance software tailored to solve complex business challenges, ensuring your digital products are future-proof.',
    color: '#63b3ff',
    icon: Code,
  },
  {
    number: '02',
    title: 'Dedicated Offshore Development Centre (ODC)',
    focusDesc: 'Your own specialized team, managed by us, operating as your remote office.',
    valueDesc:
      'Reduce operational overhead while maintaining full control. We provide top-tier infrastructure, security, and talent that aligns perfectly with your company culture.',
    color: '#7dd3fc',
    icon: Cloud,
  },
  {
    number: '03',
    title: 'Product Support & Maintenance',
    focusDesc: '24/7 reliability, bug fixes, and feature enhancements.',
    valueDesc:
      'A product is never finished. We ensure your platform stays secure, fast, and up-to-date, allowing you to focus on growth while we handle stability.',
    color: '#f5b942',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Digital Marketing',
    focusDesc: 'SEO, SEM, content strategy, and brand positioning.',
    valueDesc:
      'Building the product is only half the battle. We drive measurable traffic and high-intent users to your platform through data-backed marketing funnels.',
    color: '#ff7b72',
    icon: TrendingUp,
  },
  {
    number: '05',
    title: 'IT Consultancy',
    focusDesc: 'Digital transformation and technical roadmap strategy.',
    valueDesc:
      'Not sure which tech to choose? Our consultants provide the blueprint for your digital journey, optimizing ROI and minimizing technical debt.',
    color: '#c08bff',
    icon: Handshake,
  },
  {
    number: '06',
    title: 'Skill Development',
    focusDesc: 'Industry-aligned training and talent grooming.',
    valueDesc:
      'We bridge the gap between academic knowledge and industry demands, ensuring teams are always proficient in relevant technologies.',
    color: '#4dd4c6',
    icon: LayoutDashboard,
  },
];


// --- 2. STYLED COMPONENTS (MIMICKING ORIGINAL CSS) ---

// Custom styled Paper for the tech cards
const TechCard = styled(Paper)(({ theme, color }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
  border: '2px solid transparent',
  background: 'linear-gradient(135deg, #fafbfc 0%, #ffffff 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${color}15 0%, transparent 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 15px 40px ${color}25, 0 8px 20px rgba(0, 0, 0, 0.1)`,
    borderColor: color,
    '&::before': {
      opacity: 1,
    },
    '.tech-icon-box': {
      transform: 'scale(1.15) rotateY(10deg)',
      boxShadow: `0 10px 30px ${color}50`,
    },
  },
  '.tech-icon-box': {
    width: 64,
    height: 64,
    marginBottom: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: color,
    boxShadow: `0 4px 15px ${color}40`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    zIndex: 1,
  },
  '.tech-name': {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
    position: 'relative',
    zIndex: 1,
  },
}));

// Custom styling for the filter buttons
const FilterButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 8,
  margin: theme.spacing(0.5),
  padding: theme.spacing(1, 2),
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '0.875rem',
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[100],
  boxShadow: active ? theme.shadows[4] : 'none',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[200],
    boxShadow: active ? theme.shadows[6] : 'none',
  },
  // Replicating NewTechnologies_tabdiv__OnF0D and NewTechnologies_filter-btn__9tcbs
}));

// --- MAIN COMPONENT ---
const ProductCards = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState('Testing');
  const theme = useTheme();

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const activeData = TECHNOLOGY_DATA.find(d => d.category === activeCategory);
  if (!activeData) {
    return <Container>Loading...</Container>;
  }

  const IconComponent = activeData.icon;

  const features = [
    {
      icon: LayoutGrid,
      title: "Uniquely crafted websites",
      description:
        "Our designs are created from scratch. We create wireframe sketches, design concepts then finished layouts for each project.",
    },
    {
      icon: Target,
      title: "Goal focused",
      description:
        "You might want to be generating new sales leads, converting sales or just getting eyes on your brand. We'll track that progress.",
    },
    {
      icon: Search,
      title: "Search engine optimised",
      description:
        "We use best practice techniques to ensure your content is indexed correctly and sees targeted, organic traffic flowing to your business.",
    },
  ];

  // Individual feature card
  const FeatureCard = ({ icon: Icon, title, description, isLast }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        py: { xs: 2, sm: 2.5 },
        px: { xs: 2, sm: 3 },
        borderBottom: !isLast ? "1px solid #e5e7eb" : "none",
        borderRadius: 2,
        transition: "background-color 0.2s ease, transform 0.15s ease",
        "&:hover": {
          backgroundColor: "rgba(25, 118, 210, 0.05)",
          transform: "translateY(-1px)",
        },
        mx: -4,
        cursor: "pointer",
      }}
    >
      {/* Icon Container */}
      <Avatar
        variant="circular"
        sx={{
          width: 48,
          height: 48,
          bgcolor: "rgba(25,118,210,0.1)",
          border: "1px solid rgba(25,118,210,0.25)",
          color: "primary.main",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: 2.5,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </Avatar>

      {/* Text Section */}
      <Box flex={1}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          color="text.primary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.05rem', md: '0.95rem', lg: '1.25rem', xl: '1.3rem' },
            mb: 0.5,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '0.8', lg: '1.55rem', xl: '1.65rem' },
            lineHeight: 1.6,
            fontSize: "0.95rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );

  const CapabilityCard = ({ item }) => (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        borderRadius: '22px',
        p: { xs: 1.4, md: 1.8 },
        background: 'linear-gradient(180deg, rgba(22,32,70,0.94) 0%, rgba(12,18,42,0.96) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 26px 68px rgba(2, 6, 24, 0.55)',
        backdropFilter: 'blur(8px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: { xs: 230, md: 250 },
        gap: 0.5,
        transition: 'transform 0.3s ease, box-shadow 0.35s ease, border-color 0.3s ease',
        willChange: 'transform',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(145deg, ${item.colors.from}10 0%, ${item.colors.to}05 60%, transparent 100%)`,
          pointerEvents: 'none',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(115deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%)',
          transform: 'translateX(-120%)',
          transition: 'transform 0.6s ease',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        },
        '&:hover': {
          transform: 'translateY(-6px) scale(1.01)',
          borderColor: `${item.colors.from}55`,
          boxShadow: `0 30px 70px ${item.colors.shadow}`,
          '&::before': {
            transform: 'translateX(120%)',
          },
          '.cap-icon': {
            transform: 'translateY(-4px) scale(1.05)',
            boxShadow: `0 16px 38px ${item.colors.shadow}`,
          },
        },
      }}
    >
      <Box
        className="cap-icon"
        sx={{
          width: 78,
          height: 78,
          borderRadius: '50%',
          background: `radial-gradient(circle at 28% 28%, ${item.colors.from}, ${item.colors.to})`,
          boxShadow: `0 18px 40px ${item.colors.shadow}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2.5,
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <item.icon size={36} color="#ffffff" strokeWidth={2.25} />
      </Box>

      <Typography
        variant="h6"
        sx={{
          color: '#f5f7ff',
          fontWeight: 800,
          fontSize: { xs: '0.92rem', md: '1.0rem' },
          lineHeight: 1.3,
          mb: 1,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          color: 'rgba(231,236,255,0.85)',
          fontSize: { xs: '0.84rem', md: '0.9rem' },
          lineHeight: 1.35,
          mb: 1.25,
          position: 'relative',
          zIndex: 1,
          textAlign: 'left',
          width: '100%',
        }}
      >
        {item.subtitle}
      </Typography>

      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          pl: 0,
          m: 0,
          display: 'grid',
          rowGap: 1.2,
          justifyItems: 'start',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {item.bullets.map((bullet, idx) => (
          <Box
            key={idx}
            component="li"
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1,
              color: 'rgba(231,236,255,0.92)',
              fontSize: { xs: '0.82rem', md: '0.88rem' },
              textAlign: 'left',
            }}
          >
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                mt: '6px',
                background: `linear-gradient(135deg, ${item.colors.from}, ${item.colors.to})`,
                boxShadow: `0 0 10px ${item.colors.shadow}`,
                flexShrink: 0,
              }}
            />
            <Typography
              component="span"
              sx={{
                color: 'rgba(231,236,255,0.9)',
                lineHeight: 1.55,
                letterSpacing: 0.1,
              }}
            >
              {bullet}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );




  return (
    <Box sx={{ fontFamily: 'Inter, sans-serif' }}>
      {/* OUR CORE CAPABILITIES */}
      <Box
        component="section"
        id="core-capabilities"
        sx={{
          py: { xs: 8, md: 12 },
          background: '#f8fafc',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
              mb: { xs: 4, md: 6 },
            }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: '0.18em',
                  color: '#64748b',
                  fontWeight: 700,
                }}
              >
                Our Core Capabilities
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
                  lineHeight: 1.1,
                  mt: 1,
                  mb: 1.5,
                  color: '#0f172a',
                }}
              >
                Engineering depth with a product-first mindset
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#5f6b7a',
                  fontSize: { xs: '1rem', sm: '1.05rem' },
                }}
              >
                We combine strategy, design, and delivery to build platforms that scale.
              </Typography>
            </Box>

            <Box
              sx={{
                borderRadius: 3,
                border: '1px solid rgba(15, 23, 42, 0.08)',
                background: '#ffffff',
                p: { xs: 2.5, md: 3 },
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#0f172a',
                  mb: 1,
                }}
              >
                What you get
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#5f6b7a',
                  lineHeight: 1.6,
                }}
              >
                Full-cycle teams, clear ownership, and measurable outcomes from discovery to launch.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
              },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {CAPABILITIES.map((item) => (
              <Link to={item.route} key={item.title} style={{ textDecoration: 'none' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    background: '#ffffff',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 16px 30px ${item.colors.shadow}`,
                      borderColor: `${item.colors.from}55`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${item.colors.from}, ${item.colors.to})`,
                        color: '#ffffff',
                        boxShadow: `0 10px 22px ${item.colors.shadow}`,
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={20} strokeWidth={2} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.05rem',
                          color: '#0f172a',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#5f6b7a' }}>
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'grid', gap: 1 }}>
                    {item.bullets.map((bullet) => (
                      <Box
                        key={bullet}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.2,
                          color: '#334155',
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: item.colors.from,
                            mt: '7px',
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Scalable Solution Section (updated to match provided reference design) */}
      <Box
        ref={ref}
        sx={{
          width: '100vw',
          ml: 'calc(50% - 50vw)',
          mr: 'calc(50% - 50vw)',
          py: { xs: 5, md: 0 },
          minHeight: { xs: 'auto', md: '100vh' },
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `
            url("${process.env.PUBLIC_URL}/Web%20Page%2001.jpg.jpeg"),
            url("${process.env.PUBLIC_URL}/sky_bg.png")
          `,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center center, center center',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, md: 0 },
            pt: { xs: 2, md: '88px' },
          }}
        >
          <Box sx={{ ml: { xs: 0, md: '182px' }, mb: { xs: 3.4, md: '32px' } }}>
            <Typography
              sx={{
                color: '#ffffff',
                fontFamily: '"Poppins", "Inter", sans-serif',
                fontSize: { xs: '2.1rem', sm: '2.55rem', md: '58px' },
                lineHeight: { xs: 1.15, md: 1.02 },
                fontWeight: 800,
                letterSpacing: '-0.4px',
                maxWidth: { xs: '100%', md: '900px' },
                background: 'linear-gradient(180deg, #36f6ff 0%, #0e8eff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Scalable Solution.
              <br />
              Human-Centric Innovation
            </Typography>

            <Typography
              sx={{
                mt: { xs: 1.2, md: '6px' },
                fontFamily: '"Poppins", "Inter", sans-serif',
                color: 'rgba(255, 255, 255, 0.96)',
                fontSize: { xs: '0.92rem', md: '15px' },
                lineHeight: { xs: 1.52, md: 1.4 },
                fontWeight: 500,
                maxWidth: { xs: '100%', md: '915px' },
              }}
            >
              From building robust offshore centers to mastering digital growth, Hippocloud provides
              the technical backbone your business needs to lead the market with confidence
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: { xs: '100%', md: '1040px' },
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
                lg: 'repeat(6, 162px)',
              },
              gap: { xs: 1.8, md: '14px' },
              alignItems: 'start',
              justifyContent: { lg: 'center' },
            }}
          >
            {[
              {
                iconSrc: '/scalable-icon-software.png',
                title: ['Software', 'Development'],
                description: 'Creating secure & scalable applications that fuel innovation & business growth',
                height: '100%',
                route: '/services',
              },
              {
                iconSrc: '/scalable-icon-odc.png',
                title: ['Dedicated', 'ODC'],
                description: 'A dedicated offshore team that works exclusively as an extension of your business',
                route: '/staffaugmentation',
              },
              {
                iconSrc: '/scalable-icon-support.png',
                title: ['Product', 'Support'],
                description: 'Ongoing support to keep your product stable, secure, & performing at its best',
                route: '/appdevsupport',
              },
              {
                iconSrc: '/scalable-icon-consult.png',
                title: ['IT', 'Consultancy'],
                description: 'Strategic technology guidance to help businesses grow smarter & faster',
                route: '/consultancy',
              },
              {
                iconSrc: '/scalable-icon-marketing.png',
                title: ['Digital', 'Marketing'],
                description: 'Promoting your brand online to attract, engage, & convert customers effectively',
                route: '/digitalmarketing',
              },
              {
                iconSrc: '/scalable-icon-skill.png',
                title: ['Skill', 'Development'],
                description: 'Empowering individuals with practical knowledge & industry-ready expertise for career growth',
                route: '/trainingsprojects',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                viewport={{ once: true }}
                style={{ height: 'auto' }}
              >
                <Link to={item.route} style={{ textDecoration: 'none' }}>
                  <Card
                  elevation={0}
                  sx={{
                    height: 'auto',
                    minHeight: { xs: 214, md: index % 2 === 0 ? '238px' : '272px' },
                    mt: { xs: 0, md: index % 2 === 0 ? '22px' : 0 },
                    borderRadius: '14px',
                    background: 'linear-gradient(180deg, #f4f5f7 0%, #e9edf3 100%)',
                    border: '1px solid rgba(255,255,255,0.92)',
                    boxShadow: '0 0 0 1px rgba(67, 170, 255, 0.34), 0 10px 28px rgba(0, 120, 255, 0.22)',
                    alignContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.35s ease, border-color 0.3s ease',
                    transformOrigin: 'center',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: '-20% -60%',
                      background: 'linear-gradient(120deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 55%)',
                      transform: 'translateX(-120%) rotate(12deg)',
                      transition: 'transform 0.7s ease',
                      pointerEvents: 'none',
                      mixBlendMode: 'screen',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.04)',
                      borderColor: 'rgba(31,155,226,0.6)',
                      boxShadow: '0 16px 42px rgba(0, 120, 255, 0.32)',
                      '&::after': {
                        transform: 'translateX(160%) rotate(12deg)',
                      },
                      '.scalable-icon': {
                        transform: 'translateY(-4px) scale(1.12)',
                        filter: 'drop-shadow(0 8px 14px rgba(0,120,255,0.28))',
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 1.8, md: '12px 14px 10px' },
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      className="scalable-icon"
                      src={`${process.env.PUBLIC_URL}${item.iconSrc}`}
                      alt={item.title.join(' ')}
                      sx={{
                        mt: 0.15,
                        mb: { xs: 0.62, md: '5px' },
                        width: { xs: 34, md: 48 },
                        height: { xs: 34, md: 48 },
                        objectFit: 'contain',
                        transition: 'transform 0.35s ease, filter 0.35s ease',
                      }}
                    />

                    <Typography
                      sx={{
                        color: '#0f2b58',
                        fontSize: { xs: '1.35rem', md: '16px' },
                        fontWeight: 500,
                        lineHeight: 1.06,
                        letterSpacing: '-0.15px',
                        fontFamily: '"Poppins", "Inter", sans-serif',
                      }}
                    >
                      {item.title[0]}
                      <br />
                      {item.title[1]}
                    </Typography>

                    <Box
                      sx={{
                        width: '86%',
                        height: '2px',
                        mt: { xs: 0.52, md: '8px' },
                        mb: { xs: 0.68, md: '8px' },
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, rgba(29,151,229,0.22) 0%, #1f9be2 12%, #1f9be2 88%, rgba(29,151,229,0.22) 100%)',
                      }}
                    />

                    <Typography
                      sx={{
                        color: '#1b2f52',
                        fontSize: { xs: '0.92rem', md: '12px' },
                        lineHeight: { xs: 1.34, md: 1.3 },
                        fontWeight: 500,
                        fontFamily: '"Poppins", "Inter", sans-serif',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* WHY HIPPOCLOUD SECTION - Compact Arc Layout */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${process.env.PUBLIC_URL}/why_choose_us.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          minHeight: { xs: "auto", md: "450px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2) 100%)",
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 2, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  mb: 1,
                  background: "linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Why HippoCloud?
              </Typography>
            </Box>
          </motion.div>

          {/* Desktop: Arc Layout, Mobile: 2x2 Grid */}
          <Box
            sx={{
              position: { xs: 'relative', md: 'relative' },
              height: { xs: 'auto', md: '280px' },
              display: { xs: 'grid', md: 'block' },
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'auto' },
              gap: { xs: 3, md: 0 },
              width: '100%',
              maxWidth: { xs: '100%', md: '800px' },
              mx: 'auto',
              px: { xs: 0.5, md: 0 },
            }}
          >
            {[
              {
                icon: Handshake,
                title: "Agile Integration",
                description: "We work with you, not just for you.",
                color: "#42a5f5",
              },
              {
                icon: TrendingUp,
                title: "Industry Alignment",
                description: "Synced with latest trends.",
                color: "#66bb6a",
              },
              {
                icon: Target,
                title: "Goal Focused",
                description: "Built to drive your results.",
                color: "#ff9800",
              },
              {
                icon: Scale,
                title: "Scalability",
                description: "From one developer to full teams.",
                color: "#ab47bc",
              },
            ].map((item, index) => {
              const positions = [
                { top: "25%", left: "5%" },
                { top: "0%", left: "30%" },
                { top: "0%", left: "70%" },
                { top: "25%", left: "95%" },
              ];
              return (
                <Box
                  key={index}
                  sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    top: { xs: 'auto', md: positions[index].top },
                    left: { xs: 'auto', md: positions[index].left },
                    transform: { xs: 'none', md: 'translateX(-50%)' },
                    width: { xs: '100%', md: '200px' },
                    textAlign: 'center',
                    zIndex: 2,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        width: { xs: 36, md: 70 },
                        height: { xs: 36, md: 70 },
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: { xs: "0 auto 6px", md: "0 auto 12px" },
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: `2px solid ${item.color}`,
                      }}
                    >
                      <item.icon size={{ xs: 16, md: 28 }} color={item.color} strokeWidth={2} />
                    </Box>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 0.25, md: 1.5 },
                        borderRadius: 1,
                        background: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        width: '100%',
                        maxWidth: { xs: '90px', md: '200px' },
                        mx: 'auto',
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 0.1, fontSize: { xs: '0.45rem', md: '0.875rem' } }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", lineHeight: 1.1, fontSize: { xs: '0.35rem', md: '0.75rem' } }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* OUR CORE EXPERTISE SECTION */}
      <Box
        sx={{
          py: { xs: 7, md: 11 },
          background: 'linear-gradient(135deg, #07172d 0%, #0d284a 52%, #133964 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 14% 18%, rgba(94, 162, 255, 0.24) 0%, transparent 45%),
              radial-gradient(circle at 86% 14%, rgba(78, 231, 255, 0.16) 0%, transparent 42%),
              radial-gradient(circle at 65% 88%, rgba(146, 176, 255, 0.16) 0%, transparent 45%)
            `,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#9ecbff',
                  fontWeight: 600,
                  letterSpacing: 2.5,
                  fontSize: '0.8rem',
                  display: 'block',
                  mb: 1,
                }}
              >
                STRATEGIC CAPABILITIES
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.15,
                  mb: 2,
                  background: 'linear-gradient(120deg, #f7fbff 0%, #d6e8ff 52%, #accfff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Core Expertise
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: alpha('#eaf3ff', 0.82),
                  maxWidth: 650,
                  mx: 'auto',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.75,
                }}
              >
                Empowering businesses through cutting-edge technology and strategic offshore partnership.
              </Typography>
            </Box>
          </motion.div>

          <Box
            sx={{
              position: 'relative',
              maxWidth: 1160,
              mx: 'auto',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: { xs: '22px', md: '48px' },
                top: 0,
                bottom: 0,
                width: '1px',
                background: `linear-gradient(180deg, transparent 0%, ${alpha('#bddbff', 0.7)} 12%, ${alpha('#bddbff', 0.7)} 88%, transparent 100%)`,
                opacity: 0.65,
              },
            }}
          >
            {CORE_EXPERTISE_ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.48, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 2 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'grid',
                      gridTemplateColumns: { xs: '44px 1fr', md: '96px minmax(240px, 0.95fr) 1.45fr' },
                      columnGap: { xs: 2, md: 4 },
                      rowGap: { xs: 1.2, md: 0 },
                      py: { xs: 3, md: 4 },
                      pl: { xs: 0, md: 0.5 },
                      borderTop: index === 0 ? `1px solid ${alpha('#deebff', 0.2)}` : 'none',
                      borderBottom: `1px solid ${alpha('#deebff', 0.2)}`,
                      transition: 'transform 240ms ease',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      '& .expertise-accent': {
                        opacity: 0,
                        transform: 'scaleX(0.95)',
                      },
                      '& .expertise-icon-shell': {
                        backgroundColor: alpha(item.color, 0.1),
                        borderColor: alpha(item.color, 0.32),
                      },
                      '& .expertise-number': {
                        color: alpha('#dbe9ff', 0.46),
                      },
                      '&:hover': {
                        '& .expertise-accent': {
                          opacity: 1,
                          transform: 'scaleX(1)',
                        },
                        '& .expertise-icon-shell': {
                          backgroundColor: alpha(item.color, 0.2),
                          borderColor: alpha(item.color, 0.7),
                        },
                        '& .expertise-number': {
                          color: alpha('#f5f9ff', 0.9),
                          textShadow: `0 0 18px ${alpha(item.color, 0.4)}`,
                        },
                      },
                    }}
                  >
                    <Box
                      className="expertise-accent"
                      sx={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: `linear-gradient(90deg, ${alpha(item.color, 0.2)} 0%, ${alpha(item.color, 0.06)} 42%, transparent 100%)`,
                        pointerEvents: 'none',
                        transition: 'opacity 260ms ease, transform 260ms ease',
                        transformOrigin: 'left',
                      }}
                    />

                    <Typography
                      className="expertise-number"
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontWeight: 800,
                        fontSize: { xs: '1.45rem', md: '2.15rem' },
                        lineHeight: 1,
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '0.04em',
                        pl: { xs: 1.4, md: 0.6 },
                        pt: { xs: 0.2, md: 0.5 },
                        transition: 'color 260ms ease, text-shadow 260ms ease',
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Box sx={{ minWidth: 0, position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.15 }}>
                        <Box
                          className="expertise-icon-shell"
                          sx={{
                            width: 33,
                            height: 33,
                            borderRadius: '999px',
                            border: '1px solid',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 260ms ease, border-color 260ms ease',
                          }}
                        >
                          <Icon size={17} color={item.color} strokeWidth={2.1} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#f6fbff',
                            fontWeight: 700,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            lineHeight: 1.35,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          color: alpha('#dceaff', 0.8),
                          fontSize: { xs: '0.84rem', md: '0.93rem' },
                          lineHeight: 1.7,
                        }}
                      >
                        <Box component="span" sx={{ fontWeight: 700, color: item.color }}>
                          The Focus:
                        </Box>{' '}
                        {item.focusDesc}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        gridColumn: { xs: '2 / 3', md: '3 / 4' },
                        color: alpha('#eef5ff', 0.88),
                        fontSize: { xs: '0.88rem', md: '0.99rem' },
                        lineHeight: 1.82,
                        pt: { xs: 0, md: 1.25 },
                        pr: { xs: 0, md: 1.5 },
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 700, color: item.color }}>
                        The Value:
                      </Box>{' '}
                      {item.valueDesc}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
        {/* Header Section */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ fontSize: { xs: "26px", md: "32px" } }}
            >
              Technologies We Work With
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                mt: 1,
                fontSize: "15px",
              }}
            >
              We work on wide range of tools and technologies to cater client business
              requirement for existing project or new application.
            </Typography>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mt: 2,
            mb: 5,
          }}
        >
          {TECHNOLOGY_DATA.map(({ category }) => (
            <FilterButton
              key={category}
              active={category === activeCategory ? 1 : 0}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </Box>

        {/* CONTENT SECTION (EXACTLY LIKE YOUR IMAGE) */}
        <Box
          sx={{
            background: "#f8f8f8",
            borderRadius: "18px",
            p: { xs: 2, md: 4 },
            boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
          }}
        >
          <Grid container spacing={4}>
            {/* LEFT SIDE TEXT */}
            <Grid item xs={12} md={4}>
              <Box sx={{ pr: { md: 3 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <IconComponent
                    size={30}
                    color={theme.palette.primary.main}
                    style={{ marginRight: 10 }}
                  />
                  <Typography variant="h5" fontWeight={700}>
                    {activeData.heading}
                  </Typography>
                </Box>

                <Typography
                  color="text.secondary"
                  sx={{ fontSize: "15px", lineHeight: 1.55, mt: 1 }}
                >
                  {activeData.description}
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT SIDE CARDS (PIXEL PERFECT GRID) */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {activeData.technologies.slice(0, 6).map((tech, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "16px",
                        p: 2,
                        textAlign: "center",
                        minHeight: 70,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                        },
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + tech.image}
                        alt={tech.name}
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: "contain",
                          marginBottom: 12,
                        }}
                      />

                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "15px",
                          color: "#000",
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* WHY CHOOSE HIPPOCLOUD SECTION */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                mb: 1.5,
                color: '#0f172a',
              }}
            >
              Why Choose HippoCloud?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#5f6b7a',
                maxWidth: 720,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.05rem' },
              }}
            >
              A delivery model built for clarity, speed, and scale.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 2, md: 3 },
            }}
          >
            {[
              {
                icon: TrendingUp,
                title: 'Industry Alignment',
                description: 'Our processes map to global tech standards and current market needs.',
                accent: '#0ea5e9',
              },
              {
                icon: Handshake,
                title: 'Agile Partnership',
                description: 'We integrate into your workflows with transparent, measurable delivery.',
                accent: '#22c55e',
              },
              {
                icon: Scale,
                title: 'Scalable Models',
                description: 'Scale from a single consultant to a full ODC without friction.',
                accent: '#8b5cf6',
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Shorter release cycles with clear milestones and ownership.',
                accent: '#f59e0b',
              },
            ].map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  background: '#ffffff',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 14px 28px rgba(15, 23, 42, 0.08)',
                    borderColor: 'rgba(15, 23, 42, 0.16)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${item.accent}12`,
                    color: item.accent,
                    mb: 2,
                  }}
                >
                  <item.icon size={20} strokeWidth={2} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#0f172a',
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#5f6b7a',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>


      {/* Industries we serve section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.1,
                  mb: 1.5,
                  color: '#0f172a',
                }}
              >
                Industries We Serve
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#5f6b7a',
                  fontSize: { xs: '1rem', sm: '1.05rem' },
                }}
              >
                Focused expertise across high-impact sectors with tailored digital solutions.
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                border: '1px solid rgba(15, 23, 42, 0.1)',
                background: '#ffffff',
                p: { xs: 2.5, sm: 3 },
                boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
              }}
            >
              {[
                { title: 'Construction', accent: '#0ea5e9' },
                { title: 'Retail & Distribution', accent: '#22c55e' },
                { title: 'Education & Skill Development', accent: '#f59e0b' },
                { title: 'Media & News Platforms', accent: '#ec4899' },
                { title: 'Enterprise Businesses', accent: '#8b5cf6' },
              ].map((item, index) => (
                <Box
                  key={item.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    py: 1.6,
                    borderBottom:
                      index === 4 ? 'none' : '1px solid rgba(15, 23, 42, 0.08)',
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: item.accent,
                      boxShadow: `0 0 0 6px ${item.accent}22`,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.05rem', sm: '1.1rem' },
                      color: '#0f172a',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Technology Academy section */}
      <Box sx={{ py: { xs: 7, md: 12 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: '0.2em', color: '#64748b', fontWeight: 700 }}
              >
                Technology Academy
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                  lineHeight: 1.1,
                  mt: 1,
                  mb: 1.5,
                  color: '#0f172a',
                }}
              >
                Building Future Technology Talent
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#5f6b7a', fontSize: { xs: '1rem', sm: '1.05rem' } }}
              >
                Our Technology Academy trains students in industry-relevant technologies with real project exposure.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 3,
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(34,197,94,0.08))',
                }}
              >
                <Typography sx={{ fontWeight: 700, color: '#0f172a' }}>
                  Students gain industry exposure equivalent to 2 years of experience.
                </Typography>
              </Paper>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                border: '1px solid rgba(15, 23, 42, 0.1)',
                background: '#ffffff',
                boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#0f172a',
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Programs
              </Typography>
              <Box sx={{ display: 'grid', gap: 1.4 }}>
                {[
                  'Artificial Intelligence',
                  'Full Stack Development',
                  'Cloud & DevOps',
                  'Data Engineering',
                  'Digital Marketing',
                ].map((program) => (
                  <Box
                    key={program}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      p: 1.5,
                      borderRadius: 2,
                      border: '1px solid rgba(15, 23, 42, 0.08)',
                      background: '#f8fafc',
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#0ea5e9',
                        boxShadow: '0 0 0 6px rgba(14,165,233,0.18)',
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>
                      {program}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Call to action section */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5, md: 6 },
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.03), rgba(59, 130, 246, 0.05))',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -80,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -90,
                left: -60,
                width: 220,
                height: 220,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,197,94,0.18), transparent 70%)',
              }}
            />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.35fr 0.65fr' },
                gap: { xs: 3, md: 4 },
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#64748b',
                  }}
                >
                  Call to Action
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    lineHeight: 1.15,
                    mt: 1,
                    mb: 2,
                    color: '#0f172a',
                  }}
                >
                  Lets Build the Future Together
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    maxWidth: 720,
                  }}
                >
                  Whether you're launching a startup, scaling a product, or modernizing your enterprise systems our team is ready to help.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    mt: 1.5,
                  }}
                >
                  Start your digital transformation today.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: 'linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)',
                    color: 'white',
                    borderRadius: '9999px',
                    padding: '14px 34px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 10px 24px rgba(37, 99, 235, 0.35)',
                    transition: 'all 0.25s',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #0284c7 0%, #1d4ed8 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 14px 30px rgba(37, 99, 235, 0.4)',
                    },
                  }}
                  onClick={() => console.log('Start Transformation Clicked')}
                >
                  Start Now
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
});

export default ProductCards;

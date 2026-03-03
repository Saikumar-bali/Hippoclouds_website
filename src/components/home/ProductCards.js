import React, { useEffect, useState, forwardRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { Code, Smartphone, Cloud, Zap, TestTube, LayoutDashboard, Handshake, TrendingUp, Scale } from "lucide-react";
import { LayoutGrid, Target, Search, Database } from "lucide-react";

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

// Client logos
const clients = [
  { name: "DEAKIN", logo: process.env.PUBLIC_URL + "/Acer_Motors_logo-final.png" },
  { name: "Global Health Care", logo: process.env.PUBLIC_URL + "/Global-Health-Care.jpg" },
  { name: "Nlite", logo: process.env.PUBLIC_URL + "/Nlite.jpg" },
  { name: "Rise", logo: process.env.PUBLIC_URL + "/Rise.jpg" },
  { name: "Sky-lite Technologies", logo: process.env.PUBLIC_URL + "/Sky-lite-Technologies.jpg" },
  { name: "BT-convergence-Technologies", logo: process.env.PUBLIC_URL + "/BT-convergence-Technologies.jpg" },
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




  return (
    <Box sx={{ fontFamily: 'Inter, sans-serif' }}>
      {/* CLIENTS AND SERVICES SECTION */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {/* Clients Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle>Our Trusted Partners</SectionTitle>
          <SectionSubtitle>
            We collaborate with industry leaders to deliver exceptional results
          </SectionSubtitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
                p: 4,
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              <Slider
                dots={false}
                arrows={false}
                infinite
                speed={5000}
                autoplay
                pauseOnHover={true}
                autoplaySpeed={0}
                cssEase="linear"
                slidesToShow={5}
                slidesToScroll={1}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 4 } },
                  { breakpoint: 768, settings: { slidesToShow: 3 } },
                  { breakpoint: 480, settings: { slidesToShow: 2 } },
                ]}
              >
                {clients.map((client, index) => (
                  <Box key={index} sx={{ px: 2 }}>
                    <Box
                      component="img"
                      src={client.logo}
                      alt={client.name}
                      sx={{
                        height: { xs: '40px', md: '60px' },
                        width: 'auto',
                        maxWidth: '150px',
                        objectFit: 'contain',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          filter: 'grayscale(0%)',
                          opacity: 1,
                          transform: 'scale(1.1)',
                        }
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
          </motion.div>
        </Box>
      </Container>

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
              },
              {
                iconSrc: '/scalable-icon-odc.png',
                title: ['Dedicated', 'ODC'],
                description: 'A dedicated offshore team that works exclusively as an extension of your business',
              },
              {
                iconSrc: '/scalable-icon-support.png',
                title: ['Product', 'Support'],
                description: 'Ongoing support to keep your product stable, secure, & performing at its best',
              },
              {
                iconSrc: '/scalable-icon-consult.png',
                title: ['IT', 'Consultancy'],
                description: 'Strategic technology guidance to help businesses grow smarter & faster',
              },
              {
                iconSrc: '/scalable-icon-marketing.png',
                title: ['Digital', 'Marketing'],
                description: 'Promoting your brand online to attract, engage, & convert customers effectively',
              },
              {
                iconSrc: '/scalable-icon-skill.png',
                title: ['Skill', 'Development'],
                description: 'Empowering individuals with practical knowledge & industry-ready expertise for career growth',
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
                <Card
                  elevation={0}
                  sx={{
                    height: 'auto',
                    minHeight: { xs: 214, md: index % 2 === 0 ? '238px' : '272px' },
                    mt: { xs: 0, md: index % 2 === 0 ? '22px' : 0 },
                    borderRadius: '14px',
                    background: 'linear-gradient(180deg, #f4f5f7 0%, #e9edf3 100%)',
                    border: '1px solid rgba(255,255,255,0.92)',
                    boxShadow: '0 0 0 1px rgba(67, 170, 255, 0.34), 0 0 18px rgba(0, 120, 255, 0.33)',
                    alignContent: 'center'
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
                      src={`${process.env.PUBLIC_URL}${item.iconSrc}`}
                      alt={item.title.join(' ')}
                      sx={{
                        mt: 0.15,
                        mb: { xs: 0.62, md: '5px' },
                        width: { xs: 34, md: 48 },
                        height: { xs: 34, md: 48 },
                        objectFit: 'contain',
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
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5,
            background: `
              radial-gradient(circle at 20% 20%, rgba(66, 165, 245, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(102, 187, 106, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(171, 71, 188, 0.05) 0%, transparent 70%)
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
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  mb: 2,
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Why Choose HippoCloud?
              </Typography>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' },
              gap: { xs: 1, md: 3 },
              width: '100%',
              maxWidth: '900px',
              mx: 'auto',
              px: 1,
            }}
          >
            {[
              {
                icon: TrendingUp,
                title: 'Industry Alignment',
                description: 'Our processes and training are strictly mapped to 2026\'s global tech standards.',
                color: '#42a5f5',
                gradient: 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)',
              },
              {
                icon: Handshake,
                title: 'Agile Partnership',
                description: 'We don\'t just deliver; we integrate seamlessly into your existing workflows.',
                color: '#66bb6a',
                gradient: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
              },
              {
                icon: Scale,
                title: 'Scalable Models',
                description: 'From a single consultant to a 50-person ODC, we scale as you grow.',
                color: '#ab47bc',
                gradient: 'linear-gradient(135deg, #ab47bc 0%, #7b1fa2 100%)',
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Accelerated development cycles with agile methodologies for quicker time-to-market.',
                color: '#ff7043',
                gradient: 'linear-gradient(135deg, #ff7043 0%, #e64a19 100%)',
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                sx={{ width: '100%', minWidth: 0 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 0.75, sm: 2 },
                    height: '100%',
                    borderRadius: 1,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    minWidth: 0,
                    boxSizing: 'border-box',
                    '&:hover': {
                      boxShadow: `0 12px 30px ${item.color}20`,
                      borderColor: `${item.color}30`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: item.gradient,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 20, sm: 36 },
                      height: { xs: 20, sm: 36 },
                      borderRadius: 0.5,
                      background: item.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: { xs: 0.25, sm: 1 },
                      boxShadow: `0 2px 6px ${item.color}40`,
                    }}
                  >
                    <item.icon size={10} color="#ffffff" strokeWidth={2.5} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '0.55rem', sm: '0.9rem' },
                      mb: 0.15,
                      color: '#1a1a1a',
                      lineHeight: 1.1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.2,
                      fontSize: { xs: '0.45rem', sm: '0.75rem' },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>


      {/* Free up time section */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 16 },
          minHeight: { xs: 'auto', md: '80vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Left Content Area (Text) */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '500px' }, pr: { xs: 0, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}>

            {/* Green Accent Line */}
            <Box
              sx={{
                height: '4px',
                width: '40px',
                backgroundColor: '#4caf50',
                mb: 3,
                borderRadius: '9999px',
                mx: { xs: 'auto', md: '0' }
              }}
            />

            {/* Headline */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 2,
                color: '#333333'
              }}
            >
              Free up time, become more agile grow your business.
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: '#666666',
                mb: 4,
                maxWidth: '450px',
                mx: { xs: 'auto', md: '0' }
              }}
            >
              Our team will help you navigate through the digital world so you don't get tied down in technical complexities. You can then focus on what you love about your business and continue to grow it.
            </Typography>

            {/* Gradient Button */}
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: 'linear-gradient(90deg, #ff8a80 0%, #ff4081 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxShadow: '0 4px 10px rgba(255, 64, 129, 0.4)',
                transition: 'all 0.3s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #ff6e6e 0%, #ff2972 100%)',
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 12px rgba(255, 64, 129, 0.5)',
                },
                '&:active': {
                  transform: 'scale(0.98)',
                }
              }}
              onClick={() => console.log('Get Started Clicked')}
            >
              GET STARTED FREE
            </Button>
          </Box>

          {/* Right Graphic Area */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <AbstractGraphic />
          </Box>
        </Box>
      </Container>

      {/* Serious business section */}
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "grey.50",
          fontFamily: "Roboto, sans-serif",
          py: { xs: 4, sm: 10 },
        }}
      >
        <Container maxWidth="lg">
          {/* Content Grid */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="flex-start">
            {/* Left: Feature List */}
            <Box flex={{ md: 1 }} pr={{ md: 4 }}>
              {/* Header Section */}
              <Box maxWidth="600px" mb={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h8"
                  sx={{
                    fontWeight: 700,
                    color: "grey.900",
                    mb: 1,
                    lineHeight: 1.2,
                    fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.5rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Serious business requires a seriously good website
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontSize: "1rem", mt: 2 }}>
                  Your website is the base camp for all of your digital marketing. It needs to be awesome.
                </Typography>
              </Box>

              <Card
                elevation={6}
                sx={{
                  borderRadius: 4, p: { xs: 3, sm: 4 }, border: "1px solid #f0f0f0", maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "650px", xl: "700px" },
                  height: { xs: "auto", sm: "auto", md: "430px", lg: "450px", xl: "500px" }
                }}
              >

                <CardContent sx={{ p: 0, mt: { xs: 2, sm: 3, md: -4, lg: 0, xl: 6 } }}>
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={feature.title}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      isLast={index === features.length - 1}
                    />
                  ))}
                </CardContent>
              </Card>
            </Box>

            {/* Right: Static Image */}
            <Box flex={{ md: 1 }} pl={{ md: 4 }} mt={{ xs: 4, md: 30, lg: 25 }}
              component="img"
              src={process.env.PUBLIC_URL + "/website_illustration.png"}
              alt="Professional illustration of website layouts"
              sx={{
                width: "50%",
                height: { xs: "auto", sm: "auto", md: "500px", lg: "520px", xl: "500px" },
                objectFit: "contain",
                borderRadius: 3,
                mb: 2,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Obsessed with growth section */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 16 },
          minHeight: { xs: 'auto', md: '80vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Right Content Area (Text) */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '500px' },
              pl: { xs: 0, md: 8 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Green Accent Line */}
            <Box
              sx={{
                height: '4px',
                width: '40px',
                backgroundColor: '#4caf50',
                mb: 3,
                borderRadius: '9999px',
                mx: { xs: 'auto', md: '0' },
              }}
            />

            {/* Headline */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 2,
                color: '#333333',
              }}
            >
              we're obsessed with generating online growth for our clients
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: '#666666',
                mb: 4,
                maxWidth: '450px',
                mx: { xs: 'auto', md: '0' },
              }}
            >
              we love to partner with businesses that want to grow with Pixeld as your 'digital marketing wingman', we discover ways to generate new leads and delight existing ones.
            </Typography>

            {/* Gradient Button */}
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: 'linear-gradient(90deg, #ff8a80 0%, #ff4081 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxShadow: '0 4px 10px rgba(255, 64, 129, 0.4)',
                transition: 'all 0.3s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #ff6e6e 0%, #ff2972 100%)',
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 12px rgba(255, 64, 129, 0.5)',
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              }}
              onClick={() => console.log('Get Started Clicked')}
            >
              GET STARTED FREE
            </Button>
          </Box>

          {/* Left Graphic Area */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <AbstractGraphic />
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

export default ProductCards;

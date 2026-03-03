import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  BusinessProductsGrid,
  BusinessProductsTitle,
  CenteredRow,
  DesktopShell,
  DrawerSectionTitle,
  DropdownAnchor,
  DropdownPanel,
  HeaderAppBar,
  HeaderViewport,
  LogoImage,
  LogoLink,
  MainToolbar,
  MegaBody,
  MegaDescription,
  MegaImage,
  MegaImageWrap,
  MegaInner,
  MegaPanel,
  MegaTabButton,
  MegaTabsRail,
  MegaTitleLink,
  MegaTopRow,
  MobileDrawerContent,
  MobileDrawerHeader,
  MobileToolbar,
  NavRail,
  NavTrigger,
  PanelRegion,
  ProductGrid,
  ProductLink,
  ProductMeta,
  ProductName,
  SearchButton,
  SearchPanel,
  SocialIconButton,
  SocialList,
  TopLink,
  TopMenuList,
  TopToolbar,
} from './styles';

const SOLID_LOGO_URL = `${process.env.PUBLIC_URL}/Hippo_Logo_Black.png`;
const WHITE_LOGO_URL = `${process.env.PUBLIC_URL}/Hippo_Logo_White.png`;
const withBase = (path) => `${process.env.PUBLIC_URL || ''}${path}`;
const resolveImageSrc = (path) => (path && path.startsWith('http') ? path : withBase(path));

const TOP_BAR_LINKS = [
  { label: 'Support', href: '/infrasupport' },
  { label: 'Join Us', href: '/internships' },
  { label: 'Contact Us', href: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: <LinkedInIcon sx={{ fontSize: 17 }} /> },
  { label: 'Twitter', icon: <TwitterIcon sx={{ fontSize: 17 }} /> },
  { label: 'YouTube', icon: <YouTubeIcon sx={{ fontSize: 17 }} /> },
  { label: 'Facebook', icon: <FacebookIcon sx={{ fontSize: 17 }} /> },
  { label: 'Instagram', icon: <InstagramIcon sx={{ fontSize: 17 }} /> },
];

const DROPDOWN_MENUS = {
  company: [
    { label: 'About Hippoclouds', href: '/about' },
    { label: 'Why Hippoclouds ?', href: '/about' },
    { label: 'Join Us', href: '/internships' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: 'Services Overview', href: '/services' },
    { label: 'Consultancy', href: '/consultancy' },
    { label: 'App Dev & Support', href: '/appdevsupport' },
    { label: 'IT Ops & Support', href: '/itopssupport' },
    { label: 'Infra Support & Managed Services', href: '/infrasupport' },
    { label: 'Staff Augmentation', href: '/staffaugmentation' },
    { label: 'BPO', href: '/bpo' },
    { label: 'Digital Marketing', href: '/digitalmarketing' },
  ],
  skillHub: [
    { label: 'Trainings & Projects', href: '/trainingsprojects' },
    { label: 'Internships', href: '/internships' },
  ],
};

const PRODUCTS_TABS = [
  {
    title: 'Business Applications',
    href: '/services',
    image: 'https://fluentgrid.com/wp-content/uploads/2025/03/Smart-Utility-Solutions-offerings.png',
    description:
      'Enterprise-ready business applications that streamline operations across finance, HR, sales, and customer lifecycle management.',
    details:
      'This suite unifies ERP, HRM, enquiry handling, and CRM into one operational layer so teams can execute faster with shared data and standardized workflows.',
    highlights: [
      'Cross-functional modules for finance, HR, sales, and support',
      'Workflow automation for approvals, follow-ups, and daily operations',
      'Real-time dashboards for management-level visibility',
      'Scalable architecture built for multi-team business growth',
    ],
    products: [
      { name: 'ERPNext', meta: 'End-to-end ERP platform for modern businesses', href: '/erpnext' },
      { name: 'Enquiry Management System', meta: 'Lead and enquiry workflow automation', href: '/flowtech' },
      { name: 'HippoHRM', meta: 'Human resource and payroll management', href: '/hippohrm' },
      { name: 'HippoCRM', meta: 'Sales and customer relationship management', href: '/hippocrm' },
    ],
  },
  {
    title: 'Industry Solutions',
    href: '/services',
    image: 'https://fluentgrid.com/wp-content/uploads/2025/03/AMI-offerings.png',
    description:
      'Vertical software products designed for travel, finance, and operations-focused organizations.',
    products: [
      { name: 'HippoTripZone', meta: 'Travel operations and booking workflow platform', href: '/hippotripzone' },
      { name: 'HippoMint', meta: 'Financial and transaction-focused business suite', href: '/hippomint' },
    ],
  },
  {
    title: 'BuildX Operations Suite',
    href: '/hippobuildx-material',
    image: 'https://fluentgrid.com/wp-content/uploads/2025/08/Grid-Operations-Suite.jpg',
    description:
      'A specialized operations suite for material, transport, and asset management in infrastructure-heavy businesses.',
    products: [
      { name: 'HippoBuildX - Material', meta: 'Inventory and material lifecycle operations', href: '/hippobuildx-material' },
      { name: 'HippoBuildX - Transport', meta: 'Transport planning and execution control', href: '/hippobuildx-transport' },
      { name: 'HippoBuildX - Asset', meta: 'Asset tracking, utilization, and maintenance', href: '/hippobuildx-asset' },
    ],
  },
  {
    title: 'IT Operations Platforms',
    href: '/services',
    image: 'https://fluentgrid.com/wp-content/uploads/2025/03/Smart-Cities.png',
    description:
      'Scalable IT operations capabilities that strengthen application reliability, infrastructure performance, and service continuity.',
    products: [
      { name: 'App Dev & Support', meta: 'Application engineering and lifecycle support', href: '/appdevsupport' },
      { name: 'IT Ops & Support', meta: 'Infrastructure operations and incident response', href: '/itopssupport' },
      { name: 'Infra Support & Managed Services', meta: 'Managed operations with SLA-driven governance', href: '/infrasupport' },
    ],
  },
  {
    title: 'Talent & Delivery Enablement',
    href: '/trainingsprojects',
    image: 'https://fluentgrid.com/wp-content/uploads/2025/03/technology-managed-services-300x164.png',
    description:
      'Capability-building programs that help teams accelerate project delivery through structured training and internships.',
    products: [
      { name: 'Trainings & Projects', meta: 'Practical learning aligned to real delivery tracks', href: '/trainingsprojects' },
      { name: 'Internships', meta: 'Industry-focused internship opportunities', href: '/internships' },
      { name: 'Partnership', meta: 'Strategic collaboration for growth and innovation', href: '/partnership' },
    ],
  },
];

const NAV_ITEMS = [
  { key: 'home', label: 'Home', type: 'link', href: '/' },
  { key: 'company', label: 'Company', type: 'dropdown' },
  { key: 'products', label: 'Products', type: 'mega' },
  { key: 'services', label: 'Services', type: 'dropdown' },
  { key: 'skillHub', label: 'Acadamy', type: 'dropdown' },
  { key: 'partnership', label: 'Partnership', type: 'link', href: '/partnership' },
  { key: 'about', label: 'About Us', type: 'link', href: '/about' },
];

const DROPDOWN_LEFT = {
  company: '45%',
  services: '64%',
  skillHub: '73%',
};

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeProductsTab, setActiveProductsTab] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const handleMenuMouseEnter = useCallback(
    (menuKey) => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      if (openMenu === menuKey) {
        return;
      }
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
      }
      openTimerRef.current = window.setTimeout(() => {
        setSearchOpen(false);
        setOpenMenu(menuKey);
      }, 220);
    },
    [openMenu],
  );

  const handleMenuMouseLeave = useCallback(() => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    closeTimerRef.current = window.setTimeout(() => setOpenMenu(null), 260);
  }, []);

  const handlePanelMouseEnter = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleSearchToggle = useCallback(() => {
    clearTimers();
    setOpenMenu(null);
    setSearchOpen((prev) => !prev);
  }, [clearTimers]);

  const dropdownItems = useMemo(() => DROPDOWN_MENUS[openMenu] || [], [openMenu]);
  const activeProduct = PRODUCTS_TABS[activeProductsTab];
  const isBusinessApplicationsTab = activeProduct.title === 'Business Applications';

  const mobileSections = useMemo(
    () => [
      { title: 'Top Links', items: TOP_BAR_LINKS },
      { title: 'Company', items: DROPDOWN_MENUS.company },
      { title: 'Products', items: PRODUCTS_TABS.map((tab) => ({ label: tab.title, href: tab.href })) },
      { title: 'Services', items: DROPDOWN_MENUS.services },
      { title: 'Acadamy', items: DROPDOWN_MENUS.skillHub },
      { title: 'Quick Links', items: [{ label: 'Partnership', href: '/partnership' }, { label: 'About Us', href: '/about' }] },
    ],
    [],
  );
  const currentLogoUrl = isSticky ? SOLID_LOGO_URL : WHITE_LOGO_URL;

  return (
    <HeaderAppBar elevation={0} className={isSticky ? 'sticky' : ''}>
      <HeaderViewport>
        <DesktopShell>
          <CenteredRow>
            {!isSticky && (
              <TopToolbar disableGutters>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <TopMenuList>
                    {TOP_BAR_LINKS.map((item) => (
                      <TopLink key={item.label} href={withBase(item.href)}>
                        {item.label}
                      </TopLink>
                    ))}
                  </TopMenuList>
                  <SocialList>
                    {SOCIAL_LINKS.map((item) => (
                      <SocialIconButton key={item.label} aria-label={item.label}>
                        {item.icon}
                      </SocialIconButton>
                    ))}
                  </SocialList>
                </Box>
              </TopToolbar>
            )}
          </CenteredRow>

          <CenteredRow>
            <MainToolbar disableGutters>
              <LogoLink href={withBase('/')}>
                <LogoImage src={currentLogoUrl} alt="Hippocloud Technologies" />
              </LogoLink>

              <NavRail onMouseLeave={handleMenuMouseLeave}>
                {NAV_ITEMS.map((item) => (
                  item.type === 'link' ? (
                    <NavTrigger
                      key={item.key}
                      component="a"
                      href={withBase(item.href)}
                      $open={false}
                      onMouseEnter={() => {
                        clearTimers();
                        setOpenMenu(null);
                        setSearchOpen(false);
                      }}
                      onFocus={() => {
                        clearTimers();
                        setOpenMenu(null);
                        setSearchOpen(false);
                      }}
                      onClick={() => {
                        clearTimers();
                        setOpenMenu(null);
                        setSearchOpen(false);
                      }}
                    >
                      {item.label}
                    </NavTrigger>
                  ) : (
                    <NavTrigger
                      key={item.key}
                      $open={openMenu === item.key}
                      endIcon={
                        <KeyboardArrowDownRoundedIcon
                          sx={{
                            fontSize: 18,
                            transition: 'transform 160ms ease',
                            transform: openMenu === item.key ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                      }
                      onMouseEnter={() => handleMenuMouseEnter(item.key)}
                      onFocus={() => handleMenuMouseEnter(item.key)}
                      onClick={() => {
                        clearTimers();
                        setSearchOpen(false);
                        setOpenMenu((prev) => (prev === item.key ? null : item.key));
                      }}
                    >
                      {item.label}
                    </NavTrigger>
                  )
                ))}
              </NavRail>

              <SearchButton
                aria-label="Open search"
                onClick={handleSearchToggle}
                sx={{ backgroundColor: searchOpen ? 'var(--header-search-bg-active)' : undefined }}
              >
                <SearchRoundedIcon sx={{ fontSize: 22 }} />
              </SearchButton>
            </MainToolbar>
          </CenteredRow>

          {(openMenu || searchOpen) && (
            <PanelRegion onMouseEnter={handlePanelMouseEnter} onMouseLeave={handleMenuMouseLeave}>
              {dropdownItems.length > 0 && (
                <DropdownPanel sx={{ left: DROPDOWN_LEFT[openMenu] || '50%' }}>
                  {dropdownItems.map((item) => (
                    <DropdownAnchor key={item.label} href={withBase(item.href)}>
                      {item.label}
                    </DropdownAnchor>
                  ))}
                </DropdownPanel>
              )}

              {openMenu === 'products' && (
                <MegaPanel>
                  <MegaInner>
                    <MegaTabsRail>
                      {PRODUCTS_TABS.map((tab, index) => (
                        <MegaTabButton
                          key={tab.title}
                          $active={activeProductsTab === index}
                          onMouseEnter={() => setActiveProductsTab(index)}
                          onFocus={() => setActiveProductsTab(index)}
                          onClick={() => setActiveProductsTab(index)}
                        >
                          {tab.title}
                        </MegaTabButton>
                      ))}
                    </MegaTabsRail>

                    <MegaBody>
                      {isBusinessApplicationsTab ? (
                        <Box sx={{ minWidth: 0 }}>
                          <MegaTopRow sx={{ marginBottom: 0 }}>
                            <MegaImageWrap>
                              <MegaImage src={resolveImageSrc(activeProduct.image)} alt={activeProduct.title} />
                            </MegaImageWrap>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              <MegaTitleLink href={withBase(activeProduct.href)}>
                                {activeProduct.title}
                                <ChevronRightRoundedIcon />
                              </MegaTitleLink>
                              <MegaDescription>{activeProduct.description}</MegaDescription>
                              <MegaDescription sx={{ mt: 1, maxWidth: 'none' }}>{activeProduct.details}</MegaDescription>

                              <Box
                                component="ul"
                                sx={{
                                  mt: 1.5,
                                  mb: 0,
                                  pl: 2.5,
                                  display: 'grid',
                                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                                  gap: '6px 18px',
                                }}
                              >
                                {activeProduct.highlights.map((point) => (
                                  <Typography
                                    key={point}
                                    component="li"
                                    sx={{
                                      fontFamily: '"Roboto", sans-serif',
                                      fontSize: 13,
                                      lineHeight: '20px',
                                      color: 'rgba(17, 24, 39, 0.78)',
                                      pl: 0.25,
                                    }}
                                  >
                                    {point}
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          </MegaTopRow>

                          <BusinessProductsTitle>Core Business Applications</BusinessProductsTitle>
                          <BusinessProductsGrid>
                            {activeProduct.products.map((product) => (
                              <ProductLink key={product.name} href={withBase(product.href)}>
                                <ProductName>{product.name}</ProductName>
                                <ProductMeta>{product.meta}</ProductMeta>
                              </ProductLink>
                            ))}
                          </BusinessProductsGrid>
                        </Box>
                      ) : (
                        <MegaTopRow>
                          <MegaImageWrap>
                            <MegaImage src={resolveImageSrc(activeProduct.image)} alt={activeProduct.title} />
                          </MegaImageWrap>

                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <MegaTitleLink href={withBase(activeProduct.href)}>
                              {activeProduct.title}
                              <ChevronRightRoundedIcon />
                            </MegaTitleLink>
                            <MegaDescription>{activeProduct.description}</MegaDescription>

                            <ProductGrid>
                              {activeProduct.products.map((product) => (
                                <ProductLink key={product.name} href={withBase(product.href)}>
                                  <ProductName>{product.name}</ProductName>
                                  <ProductMeta>{product.meta}</ProductMeta>
                                </ProductLink>
                              ))}
                            </ProductGrid>
                          </Box>
                        </MegaTopRow>
                      )}
                    </MegaBody>
                  </MegaInner>
                </MegaPanel>
              )}

              {searchOpen && (
                <SearchPanel>
                  <Typography variant="h6" sx={{ fontFamily: '"Poppins", "Roboto", sans-serif', fontSize: 18, fontWeight: 600, color: 'text.primary' }}>
                    Search
                  </Typography>
                  <Typography sx={{ mt: 1, fontFamily: '"Roboto", sans-serif', fontSize: 14, lineHeight: '22px', color: 'text.secondary' }}>
                    Search overlay placeholder is enabled. Hook this icon to your real search modal or endpoint.
                  </Typography>
                </SearchPanel>
              )}
            </PanelRegion>
          )}
        </DesktopShell>

        <MobileToolbar>
          <LogoLink href={withBase('/')}>
            <LogoImage src={currentLogoUrl} alt="Hippocloud Technologies" style={{ width: 170, height: 62 }} />
          </LogoLink>
          <IconButton aria-label="Open menu" onClick={() => setMobileOpen(true)} sx={{ color: 'var(--header-text-strong)' }}>
            <MenuRoundedIcon />
          </IconButton>
        </MobileToolbar>

        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <MobileDrawerContent role="presentation">
            <MobileDrawerHeader>
              <Typography sx={{ fontFamily: '"Poppins", "Roboto", sans-serif', fontWeight: 600, fontSize: 18 }}>
                Menu
              </Typography>
              <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <CloseRoundedIcon />
              </IconButton>
            </MobileDrawerHeader>
            <Divider />

            {mobileSections.map((section) => (
              <Box key={section.title}>
                <DrawerSectionTitle>{section.title}</DrawerSectionTitle>
                <List dense disablePadding>
                  {section.items.map((item) => (
                    <ListItemButton key={item.label} component="a" href={withBase(item.href)} onClick={() => setMobileOpen(false)} sx={{ borderRadius: 1 }}>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: '"Roboto", sans-serif',
                          fontSize: 14,
                          fontWeight: 400,
                          color: 'text.primary',
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
                <Divider sx={{ mt: 1 }} />
              </Box>
            ))}
          </MobileDrawerContent>
        </Drawer>
      </HeaderViewport>
    </HeaderAppBar>
  );
};

export default Header;

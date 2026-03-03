import { AppBar, Box, Button, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const CONTENT_MAX_WIDTH = 1280;

export const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1100,
  backgroundColor: 'transparent',
  color: 'var(--header-text-strong)',
  boxShadow: 'none',
  '--header-text': alpha(theme.palette.common.white, 0.95),
  '--header-text-strong': theme.palette.common.white,
  '--header-border': alpha(theme.palette.common.white, 0.22),
  '--header-hover-bg': alpha(theme.palette.common.white, 0.16),
  '--header-open-bg': alpha(theme.palette.common.white, 0.16),
  '--header-search-bg': alpha(theme.palette.common.white, 0.1),
  '--header-search-bg-hover': alpha(theme.palette.common.white, 0.22),
  '--header-search-bg-active': alpha(theme.palette.common.white, 0.24),
  '--header-main-min-height': '92px',
  '--header-main-padding-y': '0px',
  '--header-panel-top': '130px',
  '--header-mobile-bg': 'transparent',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
  '&.sticky': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: '0 8px 24px rgba(16, 24, 40, 0.08)',
    '--header-text': alpha(theme.palette.text.primary, 0.84),
    '--header-text-strong': theme.palette.text.primary,
    '--header-border': alpha(theme.palette.text.primary, 0.12),
    '--header-hover-bg': alpha(theme.palette.text.primary, 0.08),
    '--header-open-bg': alpha(theme.palette.text.primary, 0.1),
    '--header-search-bg': alpha(theme.palette.text.primary, 0.06),
    '--header-search-bg-hover': alpha(theme.palette.text.primary, 0.12),
    '--header-search-bg-active': alpha(theme.palette.text.primary, 0.15),
    '--header-main-min-height': '80px',
    '--header-main-padding-y': '0px',
    '--header-panel-top': '80px',
    '--header-mobile-bg': theme.palette.common.white,
  },
}));

export const HeaderViewport = styled(Box)({
  position: 'relative',
  width: '100%',
  pointerEvents: 'none',
});

export const DesktopShell = styled(Box)(({ theme }) => ({
  display: 'none',
  pointerEvents: 'auto',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const CenteredRow = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: CONTENT_MAX_WIDTH,
  margin: '0 auto',
  padding: '0 24px',
  [theme.breakpoints.up('xl')]: {
    padding: '0 16px',
  },
}));

export const TopToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '38px !important',
  padding: 0,
  borderBottom: '1px solid var(--header-border)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 18,
  transition: 'border-color 0.3s ease',
}));

export const TopMenuList = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 18,
});

export const TopLink = styled('a')({
  textDecoration: 'none',
  color: 'var(--header-text)',
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '16px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'var(--header-text-strong)',
  },
});

export const SocialList = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const SocialIconButton = styled(IconButton)({
  width: 30,
  height: 30,
  color: 'var(--header-text)',
  borderRadius: 6,
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    color: 'var(--header-text-strong)',
    backgroundColor: 'var(--header-hover-bg)',
  },
});

export const MainToolbar = styled(Toolbar)({
  minHeight: 'var(--header-main-min-height) !important',
  paddingTop: 'var(--header-main-padding-y)',
  paddingBottom: 'var(--header-main-padding-y)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
  transition: 'min-height 0.3s ease, padding 0.3s ease',
});

export const LogoLink = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  flexShrink: 0,
});

export const LogoImage = styled('img')({
  width: 245,
  height: 90,
  objectFit: 'contain',
  objectPosition: 'left center',
  display: 'block',
});

export const NavRail = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 6,
});

export const NavTrigger = styled(Button, {
  shouldForwardProp: (prop) => prop !== '$open',
})(({ $open }) => ({
  color: 'var(--header-text-strong)',
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontWeight: 500,
  fontSize: 15,
  lineHeight: '20px',
  textTransform: 'none',
  padding: '8px 14px',
  borderRadius: 8,
  minWidth: 'auto',
  letterSpacing: '0.2px',
  backgroundColor: $open ? 'var(--header-open-bg)' : 'transparent',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: 'var(--header-hover-bg)',
  },
}));

export const SearchButton = styled(IconButton)({
  width: 42,
  height: 42,
  color: 'var(--header-text-strong)',
  borderRadius: 8,
  backgroundColor: 'var(--header-search-bg)',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: 'var(--header-search-bg-hover)',
  },
});

export const PanelRegion = styled(Box)({
  position: 'absolute',
  top: 'var(--header-panel-top)',
  left: 0,
  width: '100%',
  transition: 'top 0.3s ease',
});

export const DropdownPanel = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  transform: 'translateX(-50%)',
  width: 300,
  borderRadius: 10,
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 18px 54px rgba(0, 0, 0, 0.26)',
  padding: '10px 0',
  overflow: 'hidden',
}));

export const DropdownAnchor = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontFamily: '"Roboto", sans-serif',
  fontSize: 14,
  fontWeight: 400,
  padding: '10px 18px',
  transition: 'background-color 160ms ease, color 160ms ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.07),
    color: '#3366ff',
  },
}));

export const MegaPanel = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  borderRadius: 0,
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 26px 60px rgba(0, 0, 0, 0.28)',
  padding: '24px 0 28px',
}));

export const MegaInner = styled(Box)({
  width: '100%',
  maxWidth: CONTENT_MAX_WIDTH,
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  gap: 28,
});

export const MegaTabsRail = styled(Box)(({ theme }) => ({
  width: 330,
  flexShrink: 0,
  borderRight: `1px solid ${alpha(theme.palette.text.primary, 0.09)}`,
  paddingRight: 18,
}));

export const MegaTabButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== '$active',
})(({ theme, $active }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  textTransform: 'none',
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: 14,
  fontWeight: $active ? 600 : 500,
  letterSpacing: '0.1px',
  borderRadius: 8,
  marginBottom: 4,
  padding: '10px 12px',
  color: $active ? theme.palette.text.primary : alpha(theme.palette.text.primary, 0.72),
  backgroundColor: $active ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
  borderLeft: $active ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
}));

export const MegaBody = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const MegaTopRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 22,
  marginBottom: 18,
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const MegaImageWrap = styled(Box)(({ theme }) => ({
  width: 340,
  flexShrink: 0,
  borderRadius: 12,
  overflow: 'hidden',
  border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
  backgroundColor: alpha(theme.palette.text.primary, 0.03),
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: 420,
  },
}));

export const MegaImage = styled('img')({
  width: '100%',
  height: 190,
  objectFit: 'cover',
  display: 'block',
});

export const MegaTitleLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontWeight: 700,
  fontSize: 26,
  lineHeight: '32px',
  transition: 'color 160ms ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const MegaDescription = styled(Typography)(({ theme }) => ({
  marginTop: 10,
  color: alpha(theme.palette.text.primary, 0.82),
  fontFamily: '"Roboto", sans-serif',
  fontSize: 15,
  lineHeight: '24px',
  maxWidth: 760,
}));

export const BusinessOverviewRow = styled(Box)(({ theme }) => ({
  marginTop: 16,
  display: 'grid',
  gridTemplateColumns: '1.15fr 1fr',
  gap: 14,
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const BusinessPrimaryVisual = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 12,
  overflow: 'hidden',
  minHeight: 300,
  border: `1px solid ${alpha(theme.palette.text.primary, 0.11)}`,
  backgroundColor: alpha(theme.palette.text.primary, 0.04),
}));

export const BusinessPrimaryImage = styled('img')({
  width: '100%',
  height: '100%',
  minHeight: 300,
  objectFit: 'cover',
  display: 'block',
});

export const BusinessPrimaryContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  padding: '16px 18px',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(17, 24, 39, 0.82) 100%)',
  color: theme.palette.common.white,
}));

export const BusinessPrimaryKicker = styled(Typography)({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: 12,
  fontWeight: 600,
  lineHeight: '16px',
  letterSpacing: '0.48px',
  textTransform: 'uppercase',
});

export const BusinessPrimaryTitle = styled(Typography)({
  marginTop: 6,
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '26px',
});

export const BusinessPrimaryMeta = styled(Typography)({
  marginTop: 6,
  fontFamily: '"Roboto", sans-serif',
  fontSize: 13,
  lineHeight: '20px',
});

export const BusinessHighlightRail = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
  gap: 10,
});

export const BusinessHighlightCard = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '118px 1fr',
  gap: 12,
  border: `1px solid ${alpha(theme.palette.text.primary, 0.12)}`,
  borderRadius: 12,
  padding: 10,
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const BusinessHighlightImage = styled('img')({
  width: '100%',
  height: 88,
  borderRadius: 8,
  objectFit: 'cover',
  display: 'block',
});

export const BusinessHighlightContent = styled(Box)({
  minWidth: 0,
});

export const BusinessHighlightTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '18px',
  color: theme.palette.text.primary,
}));

export const BusinessHighlightMeta = styled(Typography)(({ theme }) => ({
  marginTop: 6,
  fontFamily: '"Roboto", sans-serif',
  fontSize: 12,
  lineHeight: '17px',
  color: alpha(theme.palette.text.primary, 0.74),
}));

export const BusinessProductsTitle = styled(Typography)(({ theme }) => ({
  marginTop: 16,
  marginBottom: 10,
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '16px',
  letterSpacing: '0.55px',
  textTransform: 'uppercase',
  color: alpha(theme.palette.text.primary, 0.72),
}));

export const BusinessProductsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 12,
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

export const ProductGrid = styled(Box)(({ theme }) => ({
  marginTop: 18,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 12,
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

export const ProductLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
  borderRadius: 10,
  padding: '12px 14px',
  backgroundColor: theme.palette.common.white,
  transition: 'border-color 160ms ease, box-shadow 160ms ease',
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.16)}`,
  },
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '18px',
  color: theme.palette.text.primary,
}));

export const ProductMeta = styled(Typography)(({ theme }) => ({
  marginTop: 6,
  color: alpha(theme.palette.text.primary, 0.7),
  fontFamily: '"Roboto", sans-serif',
  fontSize: 12,
  lineHeight: '16px',
}));

export const SearchPanel = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 32,
  width: 300,
  borderRadius: 10,
  padding: 16,
  boxShadow: '0 18px 54px rgba(0, 0, 0, 0.26)',
  backgroundColor: theme.palette.common.white,
}));

export const MobileToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '72px !important',
  padding: '0 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pointerEvents: 'auto',
  backgroundColor: 'var(--header-mobile-bg)',
  transition: 'background-color 0.3s ease',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MobileDrawerContent = styled(Box)({
  width: 320,
  padding: '14px 14px 20px',
});

export const MobileDrawerHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
});

export const DrawerSectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: 8,
  marginBottom: 4,
  color: alpha(theme.palette.text.primary, 0.65),
  fontFamily: '"Roboto", sans-serif',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
}));

export const MobileLink = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontFamily: '"Roboto", sans-serif',
  fontSize: 14,
  lineHeight: '20px',
  padding: '8px 0',
}));

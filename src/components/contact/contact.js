import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputBase,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CloudUploadOutlined, KeyboardArrowDownRounded, SendRounded } from '@mui/icons-material';

const PANEL_BG = 'radial-gradient(130% 130% at 50% 8%, #f8f9fc 0%, #eff1f8 56%, #ebedf6 100%)';
const INPUT_BG = 'linear-gradient(180deg, #f4f5f8 0%, #edf0f4 100%)';

const FormSurface = styled(Paper)(({ theme }) => ({
  background: PANEL_BG,
  border: '1px solid #e2e5ef',
  borderRadius: 12,
  boxShadow: '0 20px 55px rgba(55, 61, 89, 0.14)',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const FieldLabel = styled(Typography)({
  color: '#6c6f73',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: 1.25,
  marginBottom: 8,
});

const sharedInputSx = {
  '& .MuiInputBase-root': {
    height: '64px',
    borderRadius: '12px',
    background: INPUT_BG,
    boxShadow: '0 9px 20px rgba(39, 45, 69, 0.14)',
    color: '#5c6066',
    '& fieldset': {
      borderColor: '#d4d9e3',
    },
    '&:hover fieldset': {
      borderColor: '#c6ccd8',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a9b1c0',
      borderWidth: '1px',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '16px',
    fontWeight: 500,
    px: 2.2,
    py: 1.8,
    color: '#5a5f66',
    '&::placeholder': {
      color: '#5a5f66',
      opacity: 1,
    },
  },
};

const PhoneNumberContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  minHeight: 64,
  borderRadius: 12,
  background: INPUT_BG,
  border: '1px solid #d4d9e3',
  boxShadow: '0 9px 20px rgba(39, 45, 69, 0.14)',
  overflow: 'hidden',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  '&:focus-within': {
    borderColor: '#a9b1c0',
    boxShadow: '0 0 0 2px rgba(117, 125, 150, 0.2), 0 9px 20px rgba(39, 45, 69, 0.14)',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 56,
  },
}));

const UploadZone = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDragOver',
})(({ isDragOver }) => ({
  marginTop: 8,
  borderRadius: 14,
  border: `1px dashed ${isDragOver ? '#59617a' : '#737985'}`,
  background: 'linear-gradient(180deg, #f5f6f9 0%, #edf0f4 100%)',
  minHeight: 235,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '22px 20px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.45)',
  '& .upload-icon': {
    fontSize: 32,
    color: '#6d4cbf',
  },
}));

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleFileSelect = (files) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      const maxSizeBytes = 5 * 1024 * 1024;

      if (selectedFile.size > maxSizeBytes) {
        setDialogContent({
          title: 'File Error',
          message: `The file "${selectedFile.name}" is too large. Max size is 5 MB.`,
        });
        setOpenDialog(true);
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleFileInputChange = (event) => {
    handleFileSelect(event.target.files);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    handleFileSelect(event.dataTransfer.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      setDialogContent({
        title: 'Validation Error',
        message: 'Please fill out all required fields (First name, Email, Message).',
      });
      setOpenDialog(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_CHATBOT_API_URL}/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.details || responseData.error || 'Something went wrong on the server.');
      }

      setDialogContent({
        title: 'Success!',
        message: 'Thank you for your message. We have received your request and will be in touch shortly.',
      });
      setOpenDialog(true);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        message: '',
      });
      setFile(null);
    } catch (error) {
      console.error('Submission Error:', error);
      setDialogContent({
        title: 'Submission Error',
        message: `We couldn't send your message. Please try again later. (${error.message})`,
      });
      setOpenDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 1, sm: 2 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 0, mt: 2 }, marginTop: { xs: 2, md: 6 } }}>
        <FormSurface elevation={0} sx={{ maxWidth: 1040, mx: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                gap: { xs: 2, md: 3 },
                mb: { xs: 2.5, md: 3 },
              }}
            >
              <Box>
                <FieldLabel>First Name *</FieldLabel>
                <TextField
                  fullWidth
                  placeholder="First name *"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  required
                  disabled={isSubmitting}
                  sx={sharedInputSx}
                />
              </Box>

              <Box>
                <FieldLabel>Last Name *</FieldLabel>
                <TextField
                  fullWidth
                  placeholder="Last name *"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  required
                  disabled={isSubmitting}
                  sx={sharedInputSx}
                />
              </Box>

              <Box>
                <FieldLabel>Email *</FieldLabel>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                  disabled={isSubmitting}
                  sx={sharedInputSx}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.08fr 0.92fr' },
                gap: { xs: 2.5, md: 3.2 },
              }}
            >
              <Box>
                <FieldLabel>Phone Number *</FieldLabel>
                <PhoneNumberContainer sx={{ opacity: isSubmitting ? 0.8 : 1 }}>
                  <FormControl
                    variant="standard"
                    sx={{
                      minWidth: 175,
                      justifyContent: 'center',
                      px: 2.1,
                      '& .MuiInputBase-root': { height: '100%' },
                    }}
                  >
                    <Select
                      value={formData.countryCode}
                      onChange={handleInputChange('countryCode')}
                      disableUnderline
                      disabled={isSubmitting}
                      IconComponent={KeyboardArrowDownRounded}
                      sx={{
                        '& .MuiSelect-select': {
                          pl: 0,
                          pr: 3,
                          py: 0,
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#202126',
                        },
                        '& .MuiSelect-icon': {
                          color: '#848992',
                        },
                      }}
                    >
                      <MenuItem value="+91">IN +91</MenuItem>
                    </Select>
                  </FormControl>

                  <Box sx={{ width: '1px', backgroundColor: '#d6dbe6' }} />

                  <InputBase
                    fullWidth
                    placeholder="0203 0407291"
                    value={formData.phoneNumber}
                    onChange={handleInputChange('phoneNumber')}
                    disabled={isSubmitting}
                    sx={{
                      px: 2.2,
                      py: 1.7,
                      color: '#575d66',
                      fontSize: '16px',
                      fontWeight: 500,
                      '& input::placeholder': {
                        color: '#575d66',
                        opacity: 1,
                      },
                    }}
                  />
                </PhoneNumberContainer>

                <Box sx={{ mt: { xs: 2.5, md: 2 } }}>
                  <FieldLabel>Attach File *</FieldLabel>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileInputChange}
                    style={{ display: 'none' }}
                    accept=".png,.jpg,.jpeg,.pdf,.gif,.svg"
                    disabled={isSubmitting}
                  />
                  <UploadZone
                    elevation={0}
                    isDragOver={isDragOver}
                    onClick={!isSubmitting ? handleClickUpload : undefined}
                    onDragOver={!isSubmitting ? handleDragOver : undefined}
                    onDragLeave={!isSubmitting ? handleDragLeave : undefined}
                    onDrop={!isSubmitting ? handleDrop : undefined}
                    sx={{ p: 0.01,cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.8 : 1 }}
                  >
                    <CloudUploadOutlined className="upload-icon" sx={{ mb: 1.1 }} />
                    <Typography
                      sx={{
                        color: '#181a20',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        mb: 0.4,
                      }}
                    >
                      Click or drag and drop to upload your file
                    </Typography>
                    <Typography sx={{ color: '#666b75', fontSize: '14px', lineHeight: 1.35 }}>
                      {file
                        ? `File attached: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`
                        : 'PNG, JPG, PDF, GIF, SVG (Max 5 MB)'}
                    </Typography>
                  </UploadZone>
                </Box>
              </Box>

              <Box>
                <FieldLabel>Your Message *</FieldLabel>
                <TextField
                  fullWidth
                  multiline
                  minRows={isMobile ? 6 : 8}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  required
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '14px',
                      background: INPUT_BG,
                      border: '2px solid #9da6b4',
                      boxShadow: '0 10px 24px rgba(40, 46, 69, 0.16)',
                      '& fieldset': { border: 'none' },
                    },
                    '& .MuiInputBase-input': {
                      color: '#585d64',
                      px: 2.2,
                      py: 1.8,
                      fontSize: '16px',
                      fontWeight: 500,
                      '&::placeholder': {
                        color: '#585d64',
                        opacity: 1,
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SendRounded sx={{ transform: 'rotate(-20deg)', fontSize: 28 }} />
                    )
                  }
                  sx={{
                    mt: 3,
                    minHeight: 64,
                    borderRadius: 3,
                    color: '#fff',
                    fontSize: '17px',
                    fontWeight: 600,
                    letterSpacing: '0.2px',
                    background: 'linear-gradient(90deg, #928ff0 0%, #6d4cbf 100%)',
                    boxShadow: '0 11px 26px rgba(109, 76, 191, 0.42)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #8482ea 0%, #6141b2 100%)',
                      boxShadow: '0 12px 30px rgba(98, 67, 184, 0.48)',
                    },
                    '&.Mui-disabled': {
                      color: '#ececf3',
                      background: '#a8abc0',
                    },
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </Box>
          </form>
        </FormSurface>
      </Container>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
      >
        <DialogTitle id="contact-dialog-title">{dialogContent.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="contact-dialog-description">{dialogContent.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import growthImg from '../assets/images/growth.png';
import incomeImg from '../assets/images/income.png';
import orderImg from '../assets/images/order.png';
import UploadTabs from './upload-tabs';

function WelcomeDialog() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);


  const handleClose = () => {
    localStorage.setItem('hasSeenMultiStepDialog', 'true');
    setOpen(false);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const steps = [
    {
      title: 'Welcome To OPTIFIN!',
      content: (
        <>
          <Typography className="text-base" paragraph>
            With AI-powered insights, you'll make informed decisions in just seconds. Our technology ensures your business stays ahead, empowering you to secure a successful and sustainable future.
          </Typography>
          <div className="flex justify-center items-center">
            <Box mb={2}>
              <img src={growthImg} alt="Full Width" style={{ width: '100%', borderRadius: '8px' }} />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <img src={incomeImg} alt="Side Image 1" style={{ width: '100%', borderRadius: '8px' }} />
              <img src={orderImg} alt="Side Image 2" style={{ width: '100%', borderRadius: '8px' }} />
            </Box>
          </div>
        </>
      ),
    },
    {
      title: 'Getting Started',
      content: <UploadTabs />,
    },
    {
      title: 'Ready to Go',
      content: 'You’re all set! Enjoy using the app and let us know if you need any help.',
    },
  ];

  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogTitle className="text-xl">{steps[step].title}</DialogTitle>
      <DialogContent>
        {steps[step].content}
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="space-between" width="100%">
          {step > 0 && (
            <Button onClick={handleBack} color="primary">
              Back
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button onClick={handleNext} color="primary">
              Next
            </Button>
          ) : (
            <Button onClick={handleClose} color="primary">
              Finish
            </Button>
          )}
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default WelcomeDialog;

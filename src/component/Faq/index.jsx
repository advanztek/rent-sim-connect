import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { appColors } from "../../constants/color";
import { useTheme } from "@mui/material";

const faqs = [
  { question: "What is RentSimConnect?", answer: "RentSimConnect is a service that allows travelers to stay connected without high roaming charges." },
  { question: "How does it work?", answer: "You can rent a SIM card and use data services at affordable rates while traveling." },
  { question: "What are the available plans?", answer: "We offer various plans based on your data needs. Visit our pricing page for details." },
  { question: "Can I use my existing phone?", answer: "Yes, as long as your phone is unlocked and supports the network bands in Ghana." },
  { question: "Do I need a passport to buy a SIM?", answer: "Yes, per regulations, travelers need to present a passport for SIM registration." },
  { question: "What happens if I lose my SIM?", answer: "You can request a replacement SIM by contacting our support team." },
  { question: "What happens if I lose my SIM?", answer: "You can request a replacement SIM by contacting our support team." },
  { question: "What happens if I lose my SIM?", answer: "You can request a replacement SIM by contacting our support team." },
  { question: "What happens if I lose my SIM?", answer: "You can request a replacement SIM by contacting our support team." },
  { question: "What happens if I lose my SIM?", answer: "You can request a replacement SIM by contacting our support team." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ maxWidth: "lg", mx: "auto", mt: 8, px: 2 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: '600', color: appColors[theme.palette.mode]['fg'], mb: 8 }}>
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={2}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
                p: 2,
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body1" sx={{ fontWeight: '500', color: appColors[theme.palette.mode]['fg'], }}>{faq.question}</Typography>
                <IconButton onClick={() => handleToggle(index)} sx={{ color: "blue" }}>
                  {openIndex === index ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
              </Box>
              <Collapse in={openIndex === index}>
                <Typography variant="body1" sx={{ mt: 1, py: "2rem"}}>
                  {faq.answer}
                </Typography>
              </Collapse>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

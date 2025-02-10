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
  { question: "How does RentSimConnect work?", answer: "It’s simple! Choose a plan, receive your SIM or eSIM via airport pickup, hotel delivery, or email, and activate it instantly. No paperwork, no hassle!" },
  { question: "How do I get my SIM or eSIM?", answer: "Once you place your order, we’ll deliver your physical SIM via airport pickup or hotel delivery, or send your eSIM directly to your email for instant activation." },
  { question: "What happens when my plan expires?", answer: "You can easily extend your plan without changing SIMs—just top up and continue enjoying seamless connectivity!" },
  { question: "Can I keep my original number while using your eSIM?", answer: "Yes! Our eSIM lets you stay connected in Ghana while keeping your original home country number active. Receive calls and texts as usual while enjoying local rates for data and calls." },
  { question: "Will my internet speed be fast?", answer: "Absolutely! We provide high-speed, uninterrupted internet, so you can browse, stream, and work without lag or frustrating service drops." },
  { question: "Can I use this service outside Ghana?", answer: "Yes! Our SIM and eSIM work in 26 African countries at no extra charge. Travel seamlessly without switching SIMs or paying roaming fees." },
  { question: "Is RentSimConnect a Legitimate Service?", answer: "Yes! RentSimConnect Travel & Tours is a legally registered business with Ghana’s Registrar General’s Department as a licensed second-party telecommunications vendor. We operate transparently, ensuring reliable and secure connectivity for all travelers. Trusted by tourists and business travelers worldwide!" },
  { question: "How am I saving over 70% on roaming charges?", answer: "Most international roaming plans cost around $10/day—sometimes even more! Our packages start at just $2.50/day, giving you the same fast, reliable internet at a fraction of the cost. That’s over 70% in savings compared to traditional roaming fees!" },
  { question: "Do I get a refund if the service doesn’t work as promised?", answer: "Yes! If you experience service issues, you’re eligible for a full refund. Plus, we offer partial refunds for unused days if you need to terminate early. For example, if you purchase a 7-day package but leave after 3 days, we’ll refund the remaining 4 unused days—no hassle!" },
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
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

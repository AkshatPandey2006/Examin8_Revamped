import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="relative w-full py-24 md:py-32 overflow-hidden">
      
      {/* Subtle background ambient glow for the premium SaaS feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          {/* Sleek AI-style Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            FAQ
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Here are answers to some common questions asked by teachers.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How many papers can I create using NCERT questions?",
                answer:
                  "Unlimited papers. You can create unlimited papers for free using NCERT textbook questions. It is the perfect solution to create question papers and worksheets for your students.",
              },
              {
                question: "What will happen to my unused papers?",
                answer:
                  "We don't carry forward remaining papers and attempts. So, these will expire as soon as your package expires.",
              },
              {
                question: "What if my paper count becomes zero before package expiry date?",
                answer:
                  "You will have to buy a new package. The new package valid will be for one year from the date of purchasing the new package.",
              },
              {
                question:
                  "What if the papers remain but online test attempts are exhausted?",
                answer:
                  "You can top-up online test attempts anytime. The top-up has no separate expiry date. These will expire as soon as your paper count becomes zero or your package expires on the due date.",
              },
              {
                question: "How do you count my papers?",
                answer:
                  "As soon as your paper reaches step 3, we count it as one paper. It means if you start creating a paper or worksheet or online test and leave it in step-1 or step-2, we will not count it as one paper. We count it as soon as we start showing you the questions from our databank.",
              },
              {
                question: "What are online test attempts?",
                answer:
                  "Whenever you create an online test and share the same with your students, we count how many students have successfully submitted it. Suppose you created 1 online test out of it and shared the same with 40 students. However, only 35 students had successfully attempted and submitted that test. Now, you will be left with 24 papers (25 – 1) and 215 attempts (250 – 35).",
              },
               {
                question: "Can we download the question paper as a Word file?",
                answer:
                  "Yes, you can download the question paper as a PDF as well as a Word file. You can also create a two-column PDF. The solution is available as PDF only.",
              },
               {
                question: "What is Free Mobile App?",
                answer:
                  "We provide Examin8 App for free with the test generator package. Both you and your students can use it. Although it is the common app for all yet it shows your name and logo only once your students log in on it.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* 
                  Added group to the item, and thinned out the border for a cleaner look 
                */}
                <AccordionItem value={`item-${i}`} className="border-border/50 group">
                  
                  {/* 
                    Added hover:no-underline to stop the default text underline.
                    Added group-hover:text-primary so the text turns blue smoothly instead.
                  */}
                  <AccordionTrigger className="text-left font-semibold text-[1.05rem] hover:no-underline group-hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5 pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
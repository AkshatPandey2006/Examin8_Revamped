"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  const [customPapers, setCustomPapers] = useState(1000);
  const [customAttempts, setCustomAttempts] = useState(10000);

  // Redirect function to open in a new tab
  const handleRedirect = () => {
    window.open("https://app.examin8.com/purchase-subscription", "_blank", "noopener,noreferrer");
  };

  const getTierName = (papers) => {
    if (papers <= 30) return "Mini";
    if (papers <= 50) return "Basic";
    if (papers <= 100) return "Plus";
    if (papers < 250) return "Pro";
    if (papers < 500) return "Super";
    return "Super Plus";
  };

  const getPaperRate = (papers) => {
    if (papers < 50) return 20;
    if (papers < 100) return 13;
    if (papers < 250) return 11;
    if (papers < 500) return 9;
    if (papers < 750) return 7;
    if (papers < 900) return 6;
    return 5;
  };

  const updateValues = (newPapers, newAttempts, isPaperSlider = false) => {
    let finalPapers = Math.max(30, Math.min(1000, newPapers));
    let finalAttempts = Math.max(300, Math.min(10000, newAttempts));
    if (isPaperSlider && finalAttempts < finalPapers * 10) finalAttempts = finalPapers * 10;
    if (!isPaperSlider && finalAttempts < finalPapers * 10) finalAttempts = finalPapers * 10;
    setCustomPapers(finalPapers);
    setCustomAttempts(finalAttempts);
  };

  const paperRate = getPaperRate(customPapers);
  const paperCost = customPapers * paperRate;
  const attemptCost = customAttempts * 0.5;
  const customPrice = Math.ceil(paperCost + attemptCost);
  
  const dynamicSubjects = Math.ceil(customPapers / 10);

  const plans = [
    { name: "Basic", price: "₹900", bgClass: "bg-blue-50/30", features: ["50 Papers", "500 Online Attempts", "12 Month Validity", "5 Subjects", "Personal Mobile App"], cta: "Get Started" },
    { name: "Super", price: "₹6000", bgClass: "bg-blue-100/30", features: ["500 Papers", "5000 Online Attempts", "12 Month Validity", "50 Subjects", "Personal Mobile App"], cta: "Get Started", popular: true },
    { name: "Custom", price: `₹${customPrice.toLocaleString()}`, isCustom: true, bgClass: "bg-blue-50/30", features: [`${customPapers.toLocaleString()} Papers`, `${customAttempts.toLocaleString()} Online Attempts`, "12 Month Validity", `${dynamicSubjects} Subjects`, "Personal Mobile App"], cta: "Get Started" },
  ];

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="px-4 md:px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Affordable Plans for Everyone</h2>
        </motion.div>

        <div className="mx-auto max-w-5xl grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`relative overflow-hidden transition-all duration-300 ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-slate-200 shadow-sm"}`}
              style={{
                background: `linear-gradient(to top, rgba(30, 64, 175, 0.15), white)`
              }}
            >
              <CardContent className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  {plan.isCustom && <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">{getTierName(customPapers)}</span>}
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-1 text-sm font-medium">/year</span>
                </div>
                
                {plan.isCustom && (
                  <div className="space-y-6 bg-white/50 p-4 rounded-xl border border-black/5 mb-6 text-xs">
                    {/* Papers Section */}
                    <div className="space-y-2">
                      <div className="flex justify-between font-bold text-slate-700"><span>Papers</span><span>{customPapers}</span></div>
                      <input type="range" min="30" max="1000" value={customPapers} onChange={(e) => updateValues(Number(e.target.value), customAttempts, true)} className="w-full accent-blue-600 h-1.5 bg-black/10 rounded-lg cursor-pointer" />
                      <div className="grid grid-cols-2 gap-2 text-slate-500">
                        <p>Rate: ₹{paperRate}/paper</p>
                        <p className="text-right font-bold text-blue-700">Total: ₹{paperCost.toLocaleString()}</p>
                      </div>
                    </div>
                    {/* Attempts Section */}
                    <div className="space-y-2">
                      <div className="flex justify-between font-bold text-slate-700"><span>Attempts</span><span>{customAttempts}</span></div>
                      <input type="range" min="300" max="10000" step="100" value={customAttempts} onChange={(e) => updateValues(customPapers, Number(e.target.value))} className="w-full accent-blue-600 h-1.5 bg-black/10 rounded-lg cursor-pointer" />
                      <div className="grid grid-cols-2 gap-2 text-slate-500">
                        <p>Rate: ₹0.5/attempt</p>
                        <p className="text-right font-bold text-blue-700">Total: ₹{attemptCost.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-black/10 flex justify-between font-bold text-sm">
                        <span>Paper + Attempt</span>
                        <span className="text-blue-900">₹{customPrice.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-slate-700">
                      <Check className="mr-2 size-4 text-blue-600 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button onClick={handleRedirect} className="w-full rounded-full" variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
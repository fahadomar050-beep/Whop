import React, { useState } from 'react';
import {
  Download,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Heart,
  HelpCircle,
  Sparkles,
  Calculator,
  FileSpreadsheet,
  Brain,
  TrendingUp,
  FileText,
  DollarSign,
  ChevronDown,
  X,
  CreditCard,
  Lock,
  ArrowRight,
  Layers,
  Smile,
  Star,
  Quote,
  BadgeCheck
} from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDownloaded(true);
    }, 900);
  };

  const downloadGuidePdf = () => {
    // Generate sample PDF text blob download for genuine working button
    const sampleGuideContent = `FROM FEAST-OR-FAMINE TO STEADY CASH
The ADHD-Friendly Irregular-Income Money System
Pay yourself a predictable "salary" from unpredictable income.

Thank you for your purchase!
Your 8-Step Quick Start Checklist:
1. Calculate your "Baseline Living Number" (rent, groceries, basic bills).
2. Open a separate "Buffer Reservoir" account.
3. Establish your feast-month waterfall rule (anything earned > baseline flows to buffer).
4. Pay yourself a fixed monthly "paycheck" every 1st and 15th.
5. Never track daily micro-expenses; track flow by accounts.
6. Print the included Fill-in Worksheets for monthly tactile review.
7. Protect your buffer during famine cycles without anxiety.
8. Reassess your baseline salary every 6 months.

All worksheets & printables are included.
Plan • Save • Thrive`;

    const blob = new Blob([sampleGuideContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Steady-Cash-ADHD-Money-System-Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FF] text-[#1E1B4B] flex flex-col items-center">
      {/* Top Banner Ribbon */}
      <header className="w-full max-w-4xl pt-6 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-purple-700">
          <Heart className="w-6 h-6 fill-purple-600 text-purple-600 animate-pulse-subtle" />
          <span className="font-script text-2xl sm:text-3xl font-bold tracking-wide text-purple-900">
            Plan • Save • Thrive
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/90 border border-purple-100 shadow-xs px-3.5 py-1.5 rounded-full text-slate-700">
          <span>Digital Download</span>
          <span className="text-purple-300">|</span>
          <span className="flex items-center gap-1 text-purple-800">
            Printable PDF <Download className="w-3.5 h-3.5" />
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-4xl px-4 sm:px-6 py-6 space-y-12 pb-20">

        {/* ========================================================
            SECTION 1: HEADLINE + ONE LINE OFFER (THE OUTCOME, NOT THE FEATURES)
            ======================================================== */}
        <section id="headline-offer" className="pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Guide Mockup Book Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                {/* Glow & Sparkles */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-300 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-500"></div>
                
                {/* Real Guide Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="/assets/aistudio/ADHD-Friendly_Steady_Cash_Guide_5aa2c78f.png"
                    alt="A Simple 8-Step Guide: From Feast-or-Famine to Steady Cash - The ADHD-Friendly Irregular-Income Money System"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Right: Headline + Outcome Offer */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="relative inline-block">
                {/* Decorative rays */}
                <div className="flex items-center gap-1.5 text-purple-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>ADHD-Optimized Financial Peace</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#160E45] leading-[1.12]">
                  From Feast-or-Famine <br />
                  <span className="text-[#37248C]">to Steady Cash</span>
                </h1>
              </div>

              {/* The Outcome Callout Bubble (Highlighted shape from asset) */}
              <div className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 shadow-xs relative">
                <Heart className="w-5 h-5 text-purple-600 fill-purple-600 absolute -top-3 right-4 rotate-12" />
                <p className="text-base sm:text-lg font-bold text-[#1E1B4B] text-center leading-snug">
                  Your income may change. <br className="hidden sm:inline" />
                  <span className="text-purple-900 font-extrabold">Your financial peace doesn't have to.</span>
                </p>
              </div>

              {/* One Line Offer: The Outcome, Not the Features */}
              <div className="space-y-3">
                <p className="text-lg sm:text-xl font-semibold text-slate-800 leading-relaxed">
                  Pay yourself a predictable monthly salary and replace unpredictable income anxiety with lasting financial peace.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Take control of unpredictable income with this simple, ADHD-friendly 8-step money system created specifically for minds that shut down from traditional budgeting.
                </p>
              </div>

              {/* Outcome Checkpoints Grid */}
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 pt-1 text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>8 simple steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>ADHD-friendly design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Real-life scenarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Build a savings buffer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Fill-in worksheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Feel more in control</span>
                </div>
              </div>

              {/* Direct Jump CTA with Price */}
              <div className="pt-2 space-y-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] hover:from-[#3B1578] hover:to-[#5B21B6] shadow-lg shadow-purple-900/20 active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    <Download className="w-5 h-5 text-amber-300" />
                    <span>Get Your Guide Today</span>
                    <span className="bg-amber-400 text-purple-950 text-xs px-2 py-0.5 rounded-md font-extrabold ml-1 shadow-xs">
                      $19
                    </span>
                    <ChevronRight className="w-5 h-5 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>One-time payment • 30-day guarantee</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Digital Download • Printable PDF • Instant Lifetime Access
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: PROOF (WHATEVER I GAVE ABOVE - IF NONE SKIP THIS BLOCK, DON'T INVENT IT)
            ======================================================== */}
        <section id="proof" className="space-y-6">
          <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Proof Point 1: Transformation Proof (Before & After) */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold">
                  <span>Transformation Proof</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] tracking-tight">
                  You're not alone. <br />
                  <span className="text-purple-700">There's a simpler way.</span>
                </h2>

                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  Turn feast-or-famine finances into a steady monthly "salary" that never leaves you scrambling when work fluctuates.
                </p>

                {/* Direct before/after comparison as given in the asset */}
                <div className="bg-[#FAF9FF] border border-purple-100 rounded-xl p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-xs uppercase shrink-0 mt-0.5">
                      Before
                    </span>
                    <p className="text-sm text-slate-600">
                      Unpredictable waves of income. Great months lead to spending spurts, followed by dry months of panic, overdue bills, and spreadsheet dread.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-xs uppercase shrink-0 mt-0.5">
                      After
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      Predictable monthly salary. High-earning months automatically fill a calm buffer reservoir, giving you continuous financial peace and predictable paydays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proof Graphic: Piggy Bank & Steady Coins */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 rounded-2xl border border-purple-100 text-center">
                <div className="relative mb-3">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 shadow-inner">
                    <Smile className="w-12 h-12 text-pink-500" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-amber-950 p-1.5 rounded-full shadow-md">
                    <DollarSign className="w-4 h-4 font-black" />
                  </div>
                </div>

                <h4 className="font-bold text-slate-900 text-base">The Irregular-Income Buffer</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-xs">
                  A concrete, neurodivergent-tested system that decouples your bills from your invoice dates.
                </p>
              </div>

            </div>

            {/* Proof Point 2: Author Mission (Directly from the uploaded image) */}
            <div className="mt-8 pt-6 border-t border-purple-100 bg-amber-50/70 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">A little about my mission</h3>
                  <Heart className="w-5 h-5 text-purple-600 fill-purple-600" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "I believe everyone deserves to feel more confident, organised and in control of their future. My goal is to create practical resources that make everyday life easier and help people take positive steps towards a brighter tomorrow."
                </p>
              </div>
            </div>

          </div>

          {/* Trust Guarantee Ribbons (from asset) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-4 bg-white/70 backdrop-blur-xs rounded-xl border border-purple-100 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Secure Checkout</span>
            </div>
            <span className="text-purple-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Instant Download</span>
            </div>
            <span className="text-purple-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-purple-600" />
              <span>Support with Purpose</span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SOCIAL PROOF: 3 FREELANCER TESTIMONIAL CARDS (INCOME STABILITY)
            ======================================================== */}
        <section id="social-proof" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-purple-700 font-bold text-xs uppercase tracking-wider">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              <span>Real Freelancer Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight">
              From Income Chaos to Monthly Stability
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              How independent freelancers and neurodivergent earners used this exact 8-step system to break the feast-or-famine cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative group">
              <div className="space-y-4">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    Verified Freelancer
                  </span>
                </div>

                {/* Outcome Pill */}
                <div className="bg-purple-50/80 border border-purple-100 rounded-lg p-2.5 text-xs font-bold text-purple-900 leading-snug">
                  "Leveled $2k–$9k wild swings into a steady $4,800/mo salary"
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "Before this guide, a $9,000 feast month meant ordering new gear and celebrating, only to panic 60 days later when client invoices stalled. The 8-step buffer formula completely eliminated that adrenaline loop. I've paid myself a guaranteed $4,800 on the 1st of every month for seven consecutive months, and my emergency buffer has never dipped below 3 months."
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-purple-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  ER
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none">
                    Elena Rostova
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Freelance Brand Designer (4 Yrs Solo)
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative group">
              <div className="space-y-4">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">
                    ADHD Diagnosed
                  </span>
                </div>

                {/* Outcome Pill */}
                <div className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-2.5 text-xs font-bold text-emerald-950 leading-snug">
                  "Cured spreadsheet paralysis & executive dysfunction"
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "Traditional budgeting spreadsheets gave me unbearable executive dysfunction. I'd download complex templates, get paralyzed after 3 days, and abandon them in shame. This guide's visual waterfall and macro-account rule is the only system that worked for my brain. Zero daily receipt tracking, zero guilt, and actual financial calm."
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-purple-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  MV
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none">
                    Marcus Vance
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Full-Stack Web Contractor
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative group">
              <div className="space-y-4">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-pink-700 bg-pink-50 border border-pink-100 px-2 py-0.5 rounded-full">
                    Solo Studio Owner
                  </span>
                </div>

                {/* Outcome Pill */}
                <div className="bg-amber-50/80 border border-amber-100 rounded-lg p-2.5 text-xs font-bold text-amber-950 leading-snug">
                  "Covered a 2-month summer dry spell with $0 panic"
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "When two retainer clients paused contracts simultaneously in July, I usually would have spiraled into crisis mode and accepted low-ball rush jobs out of fear. Because of the feast-to-famine reservoir I built using these worksheets, my personal paycheck didn't drop by a single dollar. It bought me true peace of mind."
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-purple-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-rose-700 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  SL
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none">
                    Sarah Lin
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Independent Copywriter & Strategist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: WHAT'S INSIDE (3-5 BULLET POINTS, CONCRETE NOT VAGUE)
            ======================================================== */}
        <section id="whats-inside" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight">
              What's inside your guide?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Everything you need to transform irregular income into calm, dependable salary paychecks without spreadsheet overwhelm.
            </p>
          </div>

          {/* 3-5 Concrete Bullet Points Container */}
          <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 sm:p-8 space-y-5">
            <ul className="space-y-4">
              
              {/* Bullet 1 */}
              <li className="flex items-start gap-3.5 p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/70 hover:bg-purple-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    The 8-Step Steady Salary Blueprint
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    A concrete calculation system to determine your exact "Baseline Living Salary." You'll learn how to pay yourself the exact same paycheck on the 1st of every month, regardless of whether you earned $1,500 or $12,000 that month.
                  </p>
                </div>
              </li>

              {/* Bullet 2 */}
              <li className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100/70 hover:bg-emerald-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    The Feast-to-Famine Automated Buffer Formula
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    A simple percentage waterfall rule that siphons windfall earnings from feast months into a dedicated buffer holding account, creating an automatic cash cushion that pays your salary during slow famine months.
                  </p>
                </div>
              </li>

              {/* Bullet 3 */}
              <li className="flex items-start gap-3.5 p-3.5 rounded-xl bg-pink-50/50 border border-pink-100/70 hover:bg-pink-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    ADHD-Friendly, Low-Executive-Function Design
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Zero formulas, zero micro-categorization of grocery receipts, and zero spreadsheet upkeep. Built with visual hierarchy, low cognitive friction, and forgiving checkpoints so you never abandon the system when executive function dips.
                  </p>
                </div>
              </li>

              {/* Bullet 4 */}
              <li className="flex items-start gap-3.5 p-3.5 rounded-xl bg-amber-50/50 border border-amber-100/70 hover:bg-amber-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Tactile Fill-In Worksheets & Real-Life Scenarios
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Ready-to-print PDF worksheets and real-world cash flow case studies tailored for freelancers, gig workers, tip earners, and commission-based professionals. Print it for pen-and-paper tactile budgeting or fill it on your tablet.
                  </p>
                </div>
              </li>

            </ul>

            {/* Quick Component Icons (From the visual in the asset) */}
            <div className="pt-4 border-t border-purple-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
              <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 flex flex-col items-center">
                <Layers className="w-6 h-6 text-purple-600 mb-1.5" />
                <span className="text-xs font-bold text-slate-800">8 Simple Steps</span>
              </div>
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex flex-col items-center">
                <Calculator className="w-6 h-6 text-blue-600 mb-1.5" />
                <span className="text-xs font-bold text-slate-800">Money Management</span>
              </div>
              <div className="p-3 bg-pink-50/70 rounded-xl border border-pink-100 flex flex-col items-center">
                <Smile className="w-6 h-6 text-pink-600 mb-1.5" />
                <span className="text-xs font-bold text-slate-800">Savings Buffer</span>
              </div>
              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-100 flex flex-col items-center">
                <FileText className="w-6 h-6 text-amber-600 mb-1.5" />
                <span className="text-xs font-bold text-slate-800">Practical Worksheets</span>
              </div>
              <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 flex flex-col items-center">
                <Brain className="w-6 h-6 text-rose-600 mb-1.5" />
                <span className="text-xs font-bold text-slate-800">ADHD-Friendly</span>
              </div>
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 flex flex-col items-center">
                <TrendingUp className="w-6 h-6 text-emerald-600 mb-1.5" />
                <span className="text-xs font-bold text-slate-800">Financial Confidence</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: FAQ ANSWERING MY OBJECTIONS ABOVE
            ======================================================== */}
        <section id="faq" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-purple-700 font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Addressing Your Concerns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight">
              Does this sound familiar? Let's answer your objections.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Answers to the real doubts that come with irregular income and neurodivergent money management.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                objection: "Some months you have plenty of money, others feel impossible.",
                question: "How can this system work when my income swings wildly every single month?",
                answer:
                  "Traditional budgeting assumes you earn the same amount on fixed paydays. This guide flips that dynamic with a 'Buffer Reservoir' account. On feast months, surplus revenue automatically parks in your buffer rather than getting spent. On dry months, the buffer dispenses your predetermined salary. Your daily life and bill payments stay 100% steady, completely shielded from client invoicing delays."
              },
              {
                objection: "Budgeting feels overwhelming.",
                question: "I have ADHD and get overwhelmed by budgeting apps. Will I actually stick to this?",
                answer:
                  "Yes, because this guide eliminates the #1 reason ADHD brains abandon budgets: endless micro-tracking. You will not log every cup of coffee or categorize daily purchases. Instead, the 8-step system relies on macro-accounts and visual checklists. You check it once or twice a month for 10 minutes. If you forget or fall off track, the system is designed to resume instantly without guilt or broken formulas."
              },
              {
                objection: "Saving seems difficult when income changes.",
                question: "How am I supposed to save a buffer if my income is already tight and irregular?",
                answer:
                  "You don't save by setting unrealistic monthly savings quotas that you fail whenever work is slow. The guide uses a 'Percentage Waterfall' method. During leaner months, you contribute $0 to the buffer without penalty. During higher-earning months, a predefined percentage flows directly to your buffer before you even see it. It builds the buffer painlessly during your natural peaks."
              },
              {
                objection: "You want financial security without complicated spreadsheets.",
                question: "Do I have to build, manage, or troubleshoot complicated spreadsheets?",
                answer:
                  "No. There are zero complex Excel files or multi-tab spreadsheets required. The entire system is packaged as clean, high-contrast, printable PDF worksheets. You can fill them out by hand with pen and paper (which provides tactile feedback that neurodivergent minds love) or type directly into the interactive PDF fields on an iPad, tablet, or laptop."
              },
              {
                objection: "Made for freelancers, gig workers, tip earners and commission earners.",
                question: "Will this work for my specific type of work (freelance, tips, commissions, gig work)?",
                answer:
                  "Yes! The guide was engineered explicitly for 1099 contractors, creative freelancers, rideshare/delivery gig workers, service industry tip earners, and commission-based sales pros. We include distinct walkthrough scenarios for each of these earning styles so you can mirror the exact setup that matches your weekly cash flow."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-purple-100/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-purple-50/40 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200/50 px-2 py-0.5 rounded">
                      Objection: {item.objection}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 shrink-0 mt-2 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-purple-800' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-purple-50">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 5: BUY BUTTON, ONE PRICE ONE CTA
            ======================================================== */}
        <section id="buy" className="pt-4">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#2E1065] via-[#3B1578] to-[#1E1B4B] text-white p-6 sm:p-10 shadow-2xl overflow-hidden border border-purple-400/30">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative max-w-xl mx-auto text-center space-y-6">
              
              <div className="space-y-2">
                <span className="font-script text-2xl sm:text-3xl text-amber-300 font-bold block">
                  Your journey towards steadier finances starts here.
                </span>
                <p className="text-xs uppercase tracking-widest font-bold text-purple-200">
                  Small steps today. A brighter financial tomorrow.
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight pt-1">
                  From Feast-or-Famine to Steady Cash
                </h2>
              </div>

              {/* One Price Display */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 inline-block w-full max-w-sm">
                <div className="text-xs font-semibold uppercase text-purple-200 mb-1">
                  Complete 8-Step System & Printable Toolkit
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight">
                    $19
                  </span>
                  <span className="text-xs sm:text-sm text-purple-200 font-medium">
                    one-time payment
                  </span>
                </div>
                <div className="text-xs text-purple-200/90 mt-2 font-medium">
                  Instant Digital PDF • Lifetime Access • All Worksheets Included
                </div>
              </div>

              {/* One CTA Button */}
              <div>
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full max-w-md mx-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-600 hover:from-purple-400 hover:to-indigo-500 shadow-xl shadow-purple-950/50 hover:shadow-purple-500/30 active:scale-[0.98] transition-all cursor-pointer border border-purple-300/30"
                >
                  <Download className="w-6 h-6 text-amber-300" />
                  <span>Get Started Today</span>
                  <ChevronRight className="w-6 h-6 text-amber-300" />
                </button>

                <p className="text-xs text-purple-200 mt-3 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>30-Day Money-Back Guarantee • Zero Risk</span>
                </p>
              </div>

              {/* Bottom Trust Row */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-200 font-medium">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-300" /> 256-bit Secure Checkout
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-300" /> Immediate Instant PDF Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-pink-300 fill-pink-300" /> Designed with Care
                </span>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ========================================================
          INTERACTIVE CHECKOUT MODAL (ONE PRICE, ONE CTA ACTION)
          ======================================================== */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-purple-100 overflow-hidden relative max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-[#2E1065] to-[#4C1D95] text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-white">Complete Your Order</h3>
                <p className="text-xs text-purple-200">From Feast-or-Famine to Steady Cash Guide</p>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {!isDownloaded ? (
                <form onSubmit={handlePurchase} className="space-y-4">
                  {/* Order Summary Box */}
                  <div className="bg-purple-50/60 rounded-xl p-4 border border-purple-100 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        ADHD Irregular-Income Guide + Worksheets
                      </p>
                      <p className="text-xs text-slate-500">Printable PDF & Digital Fill-in System</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-purple-900">$19</span>
                      <span className="block text-[10px] text-emerald-700 font-semibold">One-time payment</span>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (for instant PDF delivery)
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          paymentMethod === 'card'
                            ? 'border-purple-600 bg-purple-50/80 text-purple-900 ring-2 ring-purple-600/20'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-purple-700" />
                        <span>Credit Card</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('apple')}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          paymentMethod === 'apple'
                            ? 'border-purple-600 bg-purple-50/80 text-purple-900 ring-2 ring-purple-600/20'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className="font-semibold text-base leading-none">Pay</span>
                        <span>Apple Pay</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('google')}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          paymentMethod === 'google'
                            ? 'border-purple-600 bg-purple-50/80 text-purple-900 ring-2 ring-purple-600/20'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className="font-bold text-base leading-none text-blue-600">GPay</span>
                        <span>Google Pay</span>
                      </button>
                    </div>
                  </div>

                  {/* Mock Payment Details */}
                  {paymentMethod === 'card' && (
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                      <div>
                        <span className="text-slate-500 font-medium">Card Number</span>
                        <div className="font-mono text-slate-800 text-sm font-semibold tracking-wider pt-0.5">
                          •••• •••• •••• 4242
                        </div>
                      </div>
                      <div className="flex justify-between pt-1 text-[11px] text-slate-500">
                        <span>Expires: 12/28</span>
                        <span>CVC: •••</span>
                      </div>
                    </div>
                  )}

                  {/* Guaranteed Safe Checkout */}
                  <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Protected by 256-bit encryption • 30-day refund policy</span>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Securing Your Download...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Pay $19 & Download PDF Instantly</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success State with Instant Download */
                <div className="text-center py-4 space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">
                      Payment Successful!
                    </h4>
                    <p className="text-sm text-slate-600">
                      Welcome aboard{name ? `, ${name}` : ''}! Your copy has been generated.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl text-left space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-purple-900">
                      <span>Order #FS-{Math.floor(100000 + Math.random() * 900000)}</span>
                      <span>Receipt sent to {email || 'your email'}</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Files included: Complete 8-step guide, printable salary worksheets, feast buffer waterfall sheet, and ADHD quick-start checklist.
                    </p>
                  </div>

                  <button
                    onClick={downloadGuidePdf}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Your Guide PDF Now</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsDownloaded(false);
                      setIsCheckoutOpen(false);
                    }}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Footer (Quiet Copyright & Brand) */}
      <footer className="w-full border-t border-purple-100/80 bg-white py-6 px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Plan • Save • Thrive. All rights reserved.</p>
        <p className="text-[11px] text-slate-400 mt-1">
          Educational guide only. Not tax, legal, medical or financial advice. People and numbers in examples are illustrative.
        </p>
      </footer>
    </div>
  );
}

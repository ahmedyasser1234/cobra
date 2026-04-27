import type { Locale, ServiceDetail } from "@/types";

type LocalizedService = {
  slug: string;
  en: ServiceDetail;
  ar: ServiceDetail;
};

export const services: LocalizedService[] = [
  {
    slug: "web-design-development",
    en: {
      slug: "web-design-development",
      title: "Web Design & Development",
      category: "Premium Digital Products",
      image: "/images/services/service1.svg",
      intro:
        "We build high-performance websites that combine world-class design with advanced engineering to drive growth and trust.",
      overview:
        "Our development process focuses on creating a seamless bridge between aesthetic excellence and technical performance. We ensure your site is not just beautiful, but a powerful tool for your business.",
      includes: [
        "Strategic UI/UX Design",
        "Responsive Web Development",
        "Performance Optimization",
        "SEO-Friendly Structure",
        "Custom Feature Integration",
        "Post-Launch Technical Support",
      ],
      audience: [
        "Brands needing a premium web presence",
        "Businesses scaling their digital operations",
        "Startups looking for high-end design",
      ],
      process: [
        { title: "Strategy", description: "Defining goals and user journeys for maximum impact." },
        { title: "Design", description: "Crafting a unique visual identity and interface." },
        { title: "Development", description: "Coding with precision for speed and scalability." },
        { title: "Launch", description: "Testing and deploying for a flawless start." },
      ],
      benefits: [
        "Higher conversion rates",
        "Superior brand authority",
        "Lightning-fast load times",
        "Scalable technology stack",
      ],
      faqs: [
        { question: "How long does a website take?", answer: "Usually 4-8 weeks depending on complexity." },
        { question: "Will it be mobile-friendly?", answer: "Yes, we prioritize responsive design for all devices." },
        { question: "Do you handle hosting?", answer: "Yes, we provide managed hosting and deployment." },
      ],
      ctaTitle: "Ready to build a premium website?",
      ctaDescription: "Let's turn your vision into a digital masterpiece that performs.",
      heroImage: "/images/hero/hero-web-dev.png",
    },
    ar: {
      slug: "web-design-development",
      title: "تصميم وتطوير المواقع",
      category: "منتجات رقمية فاخرة",
      image: "/images/services/service1.svg",
      intro:
        "نبني مواقع فائقة الأداء تجمع بين أرقى معايير التصميم العالمي والهندسة البرمجية المتقدمة لتعزيز النمو والثقة.",
      overview:
        "تركز عملية التطوير لدينا على خلق جسر سلس بين التميز الجمالي والأداء التقني. نحن نضمن أن موقعك ليس مجرد واجهة جميلة، بل أداة قوية لنمو أعمالك.",
      includes: [
        "تصميم واجهات UI/UX استراتيجي",
        "تطوير ويب متجاوب بالكامل",
        "تحسين الأداء والسرعة",
        "بنية صديقة لمحركات البحث SEO",
        "دمج ميزات برمجية مخصصة",
        "دعم تقني مستمر بعد الإطلاق",
      ],
      audience: [
        "العلامات التي تحتاج حضوراً رقمياً فخماً",
        "الشركات التي تطور عملياتها الرقمية",
        "الشركات الناشئة التي تبحث عن تصميم راقٍ",
      ],
      process: [
        { title: "الاستراتيجية", description: "تحديد الأهداف ومسارات المستخدم لأقصى تأثير." },
        { title: "التصميم", description: "ابتكار هوية بصرية وواجهة فريدة لعلامتك." },
        { title: "التطوير", description: "برمجة دقيقة تضمن السرعة وقابلية التوسع." },
        { title: "الإطلاق", description: "اختبار ونشر الموقع لضمان بداية مثالية." },
      ],
      benefits: [
        "معدلات تحويل أعلى",
        "سلطة أقوى للعلامة التجارية",
        "سرعة تحميل فائقة",
        "تقنيات قابلة للتوسع",
      ],
      faqs: [
        { question: "كم يستغرق بناء الموقع؟", answer: "عادة من 4 إلى 8 أسابيع حسب التعقيد." },
        { question: "هل يدعم الموقع الموبايل؟", answer: "نعم، التصميم المتجاوب هو أولويتنا القصوى." },
        { question: "هل توفرون الاستضافة؟", answer: "نعم، نوفر خدمات الاستضافة المدارة والنشر." },
      ],
      ctaTitle: "هل أنت جاهز لبناء موقعك الفاخر؟",
      ctaDescription: "لنحول رؤيتك إلى تحفة رقمية تؤدي نتائج حقيقية.",
      heroImage: "/images/hero/hero-web-dev.png",
      ctaImage: "/images/hero/hero-web-dev.png",
      processImages: [
        "/images/hero/panel-creative.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/panel-code.png",
        "/images/hero/hero-web-dev.png",
      ],
      benefitImages: [
        "/images/hero/hero-web-dev.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/panel-code.png",
        "/images/hero/panel-creative.png",
      ],
    },
  },
  {
    slug: "ad-campaigns",
    en: {
      slug: "ad-campaigns",
      title: "Advertising Campaigns",
      category: "Performance Marketing",
      image: "/images/services/service2.svg",
      intro:
        "Strategically managed ad campaigns designed to reach your ideal audience and convert interest into measurable growth.",
      overview:
        "We combine data-driven strategy with creative execution to manage campaigns that actually perform. From Google Ads to Meta, we ensure every click counts.",
      includes: [
        "Campaign Strategy & Planning",
        "Ad Copywriting & Creative",
        "Target Audience Research",
        "A/B Testing & Optimization",
        "Performance Reporting",
        "ROI Tracking",
      ],
      audience: [
        "E-commerce brands looking to scale",
        "Service businesses needing leads",
        "Companies launching new products",
      ],
      process: [
        { title: "Research", description: "Identifying your target audience and competitors." },
        { title: "Setup", description: "Creating tracking and campaign structures." },
        { title: "Optimize", description: "Refining ads based on real-time data." },
        { title: "Scale", description: "Increasing budget on winning strategies." },
      ],
      benefits: [
        "Immediate traffic and leads",
        "Data-driven decision making",
        "Improved brand visibility",
        "Clear return on investment",
      ],
      faqs: [
        { question: "Which platforms do you support?", answer: "Google, Meta (FB/IG), TikTok, and LinkedIn." },
        { question: "What budget do I need?", answer: "We tailor strategies to your budget and growth goals." },
        { question: "How do you track results?", answer: "We use advanced tracking pixels and custom dashboards." },
      ],
      ctaTitle: "Want to start growing with smart ads?",
      ctaDescription: "Let's build a campaign that brings the right customers to your door.",
      heroImage: "/images/hero/hero-ads.png",
      ctaImage: "/images/hero/hero-marketing-seo.png",
      processImages: [
        "/images/services/ad-campaigns/process-1.png",
        "/images/services/ad-campaigns/process-2.png",
        "/images/services/ad-campaigns/process-3.png",
        "/images/services/ad-campaigns/process-4.png",
      ],
      benefitImages: [
        "/images/hero/hero-ads.png",
        "/images/hero/cyber-brain.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/new/ads.png",
      ],
      includeIcons: [
        "/images/services/ad-campaigns/icons/strategy.png",
        "/images/services/ad-campaigns/icons/content.png",
        "/images/services/ad-campaigns/icons/audience.png",
        "/images/services/ad-campaigns/icons/testing.png",
        "/images/services/ad-campaigns/icons/reporting.png",
        "/images/services/ad-campaigns/icons/roi.png",
      ],
    },
    ar: {
      slug: "ad-campaigns",
      title: "الحملات الإعلانية",
      category: "تسويق قائم على الأداء",
      image: "/images/services/service2.svg",
      intro:
        "حملات إعلانية مدارة استراتيجياً مصممة للوصول لجمهورك المثالي وتحويل الاهتمام إلى نمو ملموس.",
      overview:
        "نجمع بين الاستراتيجية القائمة على البيانات والتنفيذ الإبداعي لإدارة حملات تحقق نتائج فعلية. من إعلانات جوجل إلى ميتا، نضمن أن كل ضغطة لها قيمتها.",
      includes: [
        "استراتيجية وتخطيط الحملات",
        "كتابة المحتوى الإعلاني والإبداعي",
        "دراسة الجمهور المستهدف",
        "اختبارات A/B والتحسين",
        "تقارير أداء دورية",
        "تتبع العائد على الاستثمار ROI",
      ],
      audience: [
        "متاجر إلكترونية تسعى للتوسع",
        "شركات خدمية تحتاج لعملاء محتملين",
        "شركات تطلق منتجات جديدة",
      ],
      process: [
        { title: "البحث", description: "تحديد جمهورك المستهدف والمنافسين." },
        { title: "الإعداد", description: "بناء هياكل الحملات وأنظمة التتبع." },
        { title: "التحسين", description: "تطوير الإعلانات بناءً على البيانات اللحظية." },
        { title: "التوسع", description: "زيادة الميزانية في الاستراتيجيات الرابحة." },
      ],
      benefits: [
        "زيارات وعملاء فوريين",
        "قرارات مبنية على البيانات",
        "تحسين ظهور العلامة التجارية",
        "عائد واضح على الاستثمار",
      ],
      faqs: [
        { question: "ما هي المنصات التي تدعمونها؟", answer: "جوجل، ميتا (فيسبوك/انستجرام)، تيك توك، ولينكد إن." },
        { question: "ما هي الميزانية المطلوبة؟", answer: "نصمم استراتيجيات تناسب ميزانيتك وأهداف نموك." },
        { question: "كيف تتبعون النتائج؟", answer: "نستخدم بكسلات تتبع متقدمة ولوحات بيانات مخصصة." },
      ],
      ctaTitle: "هل تريد البدء بإعلانات ذكية؟",
      ctaDescription: "لنصمم حملة تجذب العملاء المناسبين لعملك.",
      heroImage: "/images/hero/hero-ads.png",
      ctaImage: "/images/hero/hero-marketing-seo.png",
      processImages: [
        "/images/services/ad-campaigns/process-1.png",
        "/images/services/ad-campaigns/process-2.png",
        "/images/services/ad-campaigns/process-3.png",
        "/images/services/ad-campaigns/process-4.png",
      ],
      benefitImages: [
        "/images/hero/hero-ads.png",
        "/images/hero/cyber-brain.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/new/ads.png",
      ],
      includeIcons: [
        "/images/services/ad-campaigns/icons/strategy.png",
        "/images/services/ad-campaigns/icons/content.png",
        "/images/services/ad-campaigns/icons/audience.png",
        "/images/services/ad-campaigns/icons/testing.png",
        "/images/services/ad-campaigns/icons/reporting.png",
        "/images/services/ad-campaigns/icons/roi.png",
      ],
    },
  },
  {
    slug: "social-media-design",
    en: {
      slug: "social-media-design",
      title: "Social Media Design",
      category: "Creative Brand Content",
      image: "/images/services/social-media-premium.png",
      intro:
        "Vibrant, professional social media graphics designed to capture attention and build a cohesive brand identity.",
      overview:
        "We create visual content that stops the scroll. Our designs are tailored to each platform's unique dynamics while keeping your brand voice consistent and premium.",
      includes: [
        "Social Media Poster Design",
        "Story & Reel Templates",
        "Profile & Cover Graphics",
        "Visual Identity Alignment",
        "Platform-Specific Optimization",
        "Campaign Visual Assets",
      ],
      audience: [
        "Brands needing a cleaner social look",
        "Creators looking for professional assets",
        "Businesses running social campaigns",
      ],
      process: [
        { title: "Concept", description: "Defining the visual vibe and messaging." },
        { title: "Design", description: "Crafting the graphics and layouts." },
        { title: "Refine", description: "Polishing details for maximum impact." },
        { title: "Deliver", description: "Providing ready-to-post high-res files." },
      ],
      benefits: [
        "Higher engagement rates",
        "Professional brand appearance",
        "Consistent visual story",
        "Scroll-stopping impact",
      ],
      faqs: [
        { question: "Do you offer monthly packages?", answer: "Yes, we can provide ongoing design support." },
        { question: "Can you match my current brand?", answer: "Absolutely, we ensure perfect alignment." },
        { question: "What formats do you provide?", answer: "PNG, JPG, and any specific platform requirements." },
      ],
      ctaTitle: "Ready to upgrade your social feed?",
      ctaDescription: "Let's create designs that make your brand stand out from the noise.",
      heroImage: "/images/hero/hero-social-media.png",
      ctaImage: "/images/hero/hero-social-media.png",
      processImages: [
        "/images/services/social-media/process/concept_new.png",
        "/images/hero/panel-creative.png",
        "/images/hero/cyber-brain.png",
        "/images/hero/hero-fusion.png",
      ],
      benefitImages: [
        "/images/services/social-media/icons/posters.png",
        "/images/services/social-media/icons/stories.png",
        "/images/services/social-media/icons/profiles.png",
        "/images/services/social-media/icons/identity.png",
      ],
      includeIcons: [
        "/images/services/social-media/icons/posters.png",
        "/images/services/social-media/icons/stories.png",
        "/images/services/social-media/icons/profiles.png",
        "/images/services/social-media/icons/identity.png",
        "/images/services/social-media/icons/optimization.png",
        "/images/services/social-media/icons/campaigns.png",
      ],
    },
    ar: {
      slug: "social-media-design",
      title: "تصميم السوشيال ميديا",
      category: "محتوى إبداعي للعلامة",
      image: "/images/services/social-media-premium.png",
      intro:
        "تصاميم سوشيال ميديا احترافية وجذابة مصممة لخطف الأنظار وبناء هوية بصرية متماسكة لعلامتك.",
      overview:
        "نصنع محتوى مرئياً يجبر المتابع على التوقف عن التصفح. تصاميمنا مصممة خصيصاً لكل منصة مع الحفاظ على روح علامتك التجارية بشكل فخم ومتسق.",
      includes: [
        "تصميم بوسترات السوشيال ميديا",
        "قوالب ستوري وريلز",
        "تصميم أغلفة وبروفايلات",
        "تنسيق الهوية البصرية",
        "تحسين الصور لكل منصة",
        "أصول بصرية للحملات",
      ],
      audience: [
        "العلامات التي تحتاج مظهراً أنظف",
        "صناع المحتوى الباحثين عن الاحترافية",
        "الشركات التي تدير حملات اجتماعية",
      ],
      process: [
        { title: "المفهوم", description: "تحديد الروح البصرية والرسالة." },
        { title: "التصميم", description: "صياغة الجرافيكس والتخطيطات." },
        { title: "الصقل", description: "تحسين التفاصيل لأقصى تأثير." },
        { title: "التسليم", description: "تقديم ملفات عالية الجودة جاهزة للنشر." },
      ],
      benefits: [
        "معدلات تفاعل أعلى",
        "ظهور مهني للعلامة",
        "قصة بصرية متسقة",
        "تأثير بصري خاطف",
      ],
      faqs: [
        { question: "هل تقدمون باقات شهرية؟", answer: "نعم، نوفر دعم تصميم مستمر." },
        { question: "هل تلتزمون بهويتي الحالية؟", answer: "بالتأكيد، نضمن التوافق التام مع هويتك." },
        { question: "ما هي الصيغ التي تقدمونها؟", answer: "PNG, JPG وأي صيغ خاصة بالمنصات." },
      ],
      ctaTitle: "هل أنت جاهز لتطوير حساباتك؟",
      ctaDescription: "لنبتكر تصاميم تجعل علامتك تبرز وسط الزحام الرقمي.",
      heroImage: "/images/hero/hero-social-media.png",
      ctaImage: "/images/hero/hero-social-media.png",
      processImages: [
        "/images/services/social-media/process/concept_new.png",
        "/images/hero/panel-creative.png",
        "/images/hero/cyber-brain.png",
        "/images/hero/hero-fusion.png",
      ],
      benefitImages: [
        "/images/services/social-media/icons/posters.png",
        "/images/services/social-media/icons/stories.png",
        "/images/services/social-media/icons/profiles.png",
        "/images/services/social-media/icons/identity.png",
      ],
      includeIcons: [
        "/images/services/social-media/icons/posters.png",
        "/images/services/social-media/icons/stories.png",
        "/images/services/social-media/icons/profiles.png",
        "/images/services/social-media/icons/identity.png",
        "/images/services/social-media/icons/optimization.png",
        "/images/services/social-media/icons/campaigns.png",
      ],
    },
  },
  {
    slug: "video-media-production",
    en: {
      slug: "video-media-production",
      title: "Media & Video Production",
      category: "Visual Storytelling",
      image: "/images/services/service4.svg",
      intro:
        "Engaging video content and media assets that tell your brand's story with clarity and creative flair.",
      overview:
        "Video is the most powerful way to connect. We produce high-quality media that captures your audience's attention and conveys your message effectively.",
      includes: [
        "Short-Form Video Production",
        "Motion Graphics & Animation",
        "Video Editing & Color Grading",
        "Product Showcases",
        "Brand Storytelling",
        "Social Media Reels & TikToks",
      ],
      audience: [
        "Brands launching new products",
        "Companies needing explainer videos",
        "Influencers and content creators",
      ],
      process: [
        { title: "Script", description: "Drafting the story and key messages." },
        { title: "Produce", description: "Capturing or creating the visual elements." },
        { title: "Edit", description: "Polishing the flow and adding effects." },
        { title: "Finalize", description: "Exporting for your target platforms." },
      ],
      benefits: [
        "High emotional engagement",
        "Clearer message delivery",
        "Professional brand image",
        "Versatile marketing assets",
      ],
      faqs: [
        { question: "What types of videos do you make?", answer: "Promo videos, animations, and social content." },
        { question: "How long is the production time?", answer: "Usually 1-3 weeks depending on complexity." },
        { question: "Do you provide scripts?", answer: "Yes, we handle the full production cycle." },
      ],
      ctaTitle: "Ready to tell your story through video?",
      ctaDescription: "Let's create content that resonates and moves your audience.",
      heroImage: "/images/hero/hero-video-media.png",
      ctaImage: "/images/hero/hero-video-media.png",
      processImages: [
        "/images/services/video-editing-pro.png",
        "/images/hero/hero-video-media.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/hero-web-dev.png",
      ],
      benefitImages: [
        "/images/hero/hero-video-media.png",
        "/images/services/video-editing-pro.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/hero-web-dev.png",
      ],
    },
    ar: {
      slug: "video-media-production",
      title: "إنتاج الميديا والفيديو",
      category: "سرد قصص بصري",
      image: "/images/services/service4.svg",
      intro:
        "محتوى فيديو جذاب وأصول ميديا تروي قصة علامتك بوضوح ولمسة إبداعية فريدة.",
      overview:
        "الفيديو هو أقوى وسيلة للتواصل. نحن ننتج ميديا عالية الجودة تخطف أنظار جمهورك وتوصل رسالتك بفعالية واحترافية.",
      includes: [
        "إنتاج فيديوهات قصيرة",
        "موشن جرافيك وأنيميشن",
        "مونتاج وتصحيح ألوان",
        "عروض المنتجات البصرية",
        "سرد قصة العلامة التجارية",
        "تصميم ريلز وتيك توك",
      ],
      audience: [
        "العلامات التي تطلق منتجات جديدة",
        "الشركات التي تحتاج فيديوهات توضيحية",
        "المؤثرون وصناع المحتوى",
      ],
      process: [
        { title: "السيناريو", description: "كتابة القصة والرسائل الأساسية." },
        { title: "الإنتاج", description: "تصوير أو ابتكار العناصر البصرية." },
        { title: "المونتاج", description: "صقل التدفق وإضافة المؤثرات." },
        { title: "الإنهاء", description: "تصدير الملفات لكل المنصات المطلوبة." },
      ],
      benefits: [
        "تفاعل عاطفي عالي",
        "إيصال رسالة أوضح",
        "صورة مهنية للعلامة",
        "أصول تسويقية متعددة الاستخدامات",
      ],
      faqs: [
        { question: "ما أنواع الفيديوهات التي تصنعونها؟", answer: "فيديوهات ترويجية، أنيميشن، ومحتوى اجتماعي." },
        { question: "كم يستغرق وقت الإنتاج؟", answer: "عادة من أسبوع إلى 3 أسابيع حسب التعقيد." },
        { question: "هل توفرون السيناريو؟", answer: "نعم، نتولى دورة الإنتاج كاملة." },
      ],
      ctaTitle: "هل أنت جاهز لتروي قصتك بالفيديو؟",
      ctaDescription: "لنبتكر محتوى يترك بصمة لدى جمهورك ويحرك مشاعرهم.",
      heroImage: "/images/hero/hero-video-media.png",
      ctaImage: "/images/hero/hero-video-media.png",
      processImages: [
        "/images/services/video-editing-pro.png",
        "/images/hero/hero-video-media.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/hero-web-dev.png",
      ],
      benefitImages: [
        "/images/hero/hero-video-media.png",
        "/images/services/video-editing-pro.png",
        "/images/hero/hero-fusion.png",
        "/images/hero/hero-web-dev.png",
      ],
    },
  },
  {
    slug: "digital-marketing",
    en: {
      slug: "digital-marketing",
      title: "Digital Marketing",
      category: "Strategic Growth Solutions",
      image: "/images/services/service5.svg",
      intro:
        "Comprehensive digital marketing strategies that combine SEO, content, and planning to grow your online presence.",
      overview:
        "We don't just market; we build growth engines. Our digital marketing services ensure your brand is seen, heard, and trusted by the right people.",
      includes: [
        "Search Engine Optimization (SEO)",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Market & Competitor Analysis",
        "Conversion Rate Optimization",
        "Brand Positioning Strategy",
      ],
      audience: [
        "Businesses wanting long-term growth",
        "Brands needing a strategic roadmap",
        "Companies looking to dominate search results",
      ],
      process: [
        { title: "Audit", description: "Analyzing your current digital performance." },
        { title: "Strategize", description: "Building a roadmap for growth." },
        { title: "Execute", description: "Implementing the marketing tactics." },
        { title: "Analyze", description: "Measuring results and adjusting for growth." },
      ],
      benefits: [
        "Sustainable organic growth",
        "Stronger market positioning",
        "Increased website traffic",
        "Higher customer retention",
      ],
      faqs: [
        { question: "How long until I see results?", answer: "SEO usually takes 3-6 months for significant impact." },
        { question: "Do you manage social media accounts?", answer: "Yes, as part of our integrated marketing plans." },
        { question: "How do you report progress?", answer: "We provide detailed monthly performance reports." },
      ],
      ctaTitle: "Ready to dominate your market?",
      ctaDescription: "Let's build a strategy that puts your brand in front of the right audience.",
      heroImage: "/images/hero/hero-marketing-seo.png",
      ctaImage: "/images/hero/hero-marketing-seo.png",
    },
    ar: {
      slug: "digital-marketing",
      title: "التسويق الرقمي",
      category: "حلول نمو استراتيجية",
      image: "/images/services/service5.svg",
      intro:
        "استراتيجيات تسويق رقمي شاملة تجمع بين الـ SEO والمحتوى والتخطيط لتنمية حضورك عبر الإنترنت.",
      overview:
        "نحن لا نسوق فقط، بل نبني محركات للنمو. تضمن خدماتنا في التسويق الرقمي أن تُرى علامتك وتُسمع وتُحترم من قبل الأشخاص المناسبين.",
      includes: [
        "تحسين محركات البحث (SEO)",
        "استراتيجية تسويق بالمحتوى",
        "حملات التسويق عبر الإيميل",
        "تحليل السوق والمنافسين",
        "تحسين معدلات التحويل (CRO)",
        "استراتيجية تموضع العلامة التجارية",
      ],
      audience: [
        "الشركات الساعية لنمو طويل الأمد",
        "العلامات التي تحتاج خارطة طريق",
        "الشركات التي تريد تصدر نتائج البحث",
      ],
      process: [
        { title: "التدقيق", description: "تحليل أدائك الرقمي الحالي." },
        { title: "الاستراتيجية", description: "بناء خارطة طريق واضحة للنمو." },
        { title: "التنفيذ", description: "تطبيق التكتيكات التسويقية." },
        { title: "التحليل", description: "قياس النتائج والتعديل للنمو." },
      ],
      benefits: [
        "نمو عضوي مستدام",
        "تموضع أقوى في السوق",
        "زيادة زوار الموقع",
        "ولاء أعلى للعملاء",
      ],
      faqs: [
        { question: "متى أرى النتائج؟", answer: "الـ SEO عادة يحتاج 3-6 أشهر لنتائج ملموسة." },
        { question: "هل تديرون حسابات السوشيال ميديا؟", answer: "نعم، كجزء من خططنا التسويقية المتكاملة." },
        { question: "كيف تقدمون التقارير؟", answer: "نوفر تقارير أداء شهرية مفصلة." },
      ],
      ctaTitle: "هل أنت جاهز لتسيطر على سوقك؟",
      ctaDescription: "لنصمم استراتيجية تضع علامتك أمام الجمهور الصحيح.",
      heroImage: "/images/hero/hero-marketing-seo.png",
      ctaImage: "/images/hero/hero-marketing-seo.png",
    },
  },
  {
    slug: "ecommerce-solutions",
    en: {
      slug: "ecommerce-solutions",
      title: "E-commerce Solutions",
      category: "Modern Online Commerce",
      image: "/images/services/service2.svg",
      intro:
        "Comprehensive online stores designed for seamless shopping experiences and high-performance sales.",
      overview:
        "We build digital storefronts that sell. From payment integration to inventory flow, we ensure your e-commerce platform is reliable, fast, and secure.",
      includes: [
        "Custom Storefront Development",
        "Payment Gateway Integration",
        "Inventory Management Setup",
        "Mobile Shopping Optimization",
        "Shopping Cart Refinement",
        "Secure Checkout Systems",
      ],
      audience: [
        "Retailers moving to digital",
        "Brands scaling their sales channels",
        "Founders launching new products",
      ],
      process: [
        { title: "Inventory", description: "Organizing your product data and categories." },
        { title: "Interface", description: "Designing a smooth buying experience." },
        { title: "Integrate", description: "Setting up payments and logistics." },
        { title: "Go Live", description: "Launching your store to the world." },
      ],
      benefits: [
        "Frictionless checkout",
        "Reliable platform stability",
        "Better customer trust",
        "Efficient sales management",
      ],
      faqs: [
        { question: "Which platforms do you use?", answer: "Custom builds, Shopify, or WooCommerce." },
        { question: "Do you handle shipping setup?", answer: "Yes, we integrate with major logistics providers." },
        { question: "Is my store secure?", answer: "Always. We use top-tier security standards." },
      ],
      ctaTitle: "Ready to sell online with confidence?",
      ctaDescription: "Let's build an e-commerce experience your customers will love.",
      heroImage: "/images/hero/hero-ecommerce.png",
      ctaImage: "/images/hero/hero-ecommerce.png",
      benefitImages: [
        "/images/services/ecommerce/benefits/payment.png",
        "/images/services/ecommerce/benefits/stability.png",
        "/images/services/ecommerce/benefits/trust.png",
        "/images/services/ecommerce/benefits/sales.png",
      ],
      processImages: [
        "/images/services/ecommerce/process/inventory.png",
        "/images/services/ecommerce/process/interface.png",
        "/images/services/ecommerce/process/integrate.png",
        "/images/services/ecommerce/process/launch.png",
      ],
      includeIcons: [
        "/images/services/ecommerce/icons/storefront.png",
        "/images/services/ecommerce/icons/payment.png",
        "/images/services/ecommerce/icons/inventory.png",
        "/images/services/ecommerce/icons/mobile.png",
        "/images/services/ecommerce/icons/cart.png",
        "/images/services/ecommerce/icons/secure.png",
      ],
    },
    ar: {
      slug: "ecommerce-solutions",
      title: "حلول التجارة الإلكترونية",
      category: "تجارة رقمية حديثة",
      image: "/images/services/service2.svg",
      intro:
        "متاجر إلكترونية متكاملة مصممة لتجارب تسوق سلسة وعمليات بيع فائقة الأداء.",
      overview:
        "نبني واجهات رقمية تبيع فعلاً. من دمج بوابات الدفع الإلكتروني إلى تنظيم تدفق المخزون، نضمن أن منصة تجارتك موثوقة وسريعة وآمنة.",
      includes: [
        "تطوير واجهة متجر مخصصة",
        "دمج بوابات الدفع الإلكتروني",
        "إعداد نظام إدارة المخزون",
        "تحسين التسوق عبر الموبايل",
        "صقل تجربة سلة الشراء",
        "أنظمة دفع آمنة ومشفرة",
      ],
      audience: [
        "تجار التجزئة المنتقلون للرقمية",
        "العلامات التي توسع قنوات بيعها",
        "المؤسسون الذين يطلقون منتجات جديدة",
      ],
      process: [
        { title: "المخزون", description: "تنظيم بيانات المنتجات والفئات." },
        { title: "الواجهة", description: "تصميم تجربة شراء سلسة ومريحة." },
        { title: "الدمج", description: "إعداد أنظمة الدفع والخدمات اللوجستية." },
        { title: "الإطلاق", description: "نشر متجرك للعالم بأسره." },
      ],
      benefits: [
        "دفع بلا احتكاك أو تعقيد",
        "استقرار وموثوقية للمنصة",
        "ثقة أكبر من العملاء",
        "إدارة مبيعات فعالة",
      ],
      faqs: [
        { question: "ما هي المنصات التي تستخدمونها؟", answer: "برمجة خاصة، Shopify، أو WooCommerce." },
        { question: "هل تدمجون شركات الشحن؟", answer: "نعم، نربط المتجر بكبرى شركات اللوجستيك." },
        { question: "هل المتجر آمن؟", answer: "دائماً. نستخدم أرقى معايير الأمان العالمية." },
      ],
      ctaTitle: "هل أنت جاهز للبيع أونلاين بثقة؟",
      ctaDescription: "لنصمم تجربة تجارة إلكترونية يحبها عملاؤك.",
      heroImage: "/images/hero/hero-ecommerce.png",
      ctaImage: "/images/hero/hero-ecommerce.png",
      benefitImages: [
        "/images/services/ecommerce/benefits/payment.png",
        "/images/services/ecommerce/benefits/stability.png",
        "/images/services/ecommerce/benefits/trust.png",
        "/images/services/ecommerce/benefits/sales.png",
      ],
      processImages: [
        "/images/services/ecommerce/process/inventory.png",
        "/images/services/ecommerce/process/interface.png",
        "/images/services/ecommerce/process/integrate.png",
        "/images/services/ecommerce/process/launch.png",
      ],
      includeIcons: [
        "/images/services/ecommerce/icons/storefront.png",
        "/images/services/ecommerce/icons/payment.png",
        "/images/services/ecommerce/icons/inventory.png",
        "/images/services/ecommerce/icons/mobile.png",
        "/images/services/ecommerce/icons/cart.png",
        "/images/services/ecommerce/icons/secure.png",
      ],
    },
  },
  {
    slug: "ui-ux-design",
    en: {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      category: "User-Centered Design",
      image: "/images/services/service3.svg",
      intro: "We create intuitive and visually stunning interfaces that provide seamless user experiences.",
      overview: "Our UI/UX process puts the user at the center. We combine research, wireframing, and high-fidelity design to create products that are both beautiful and easy to use.",
      includes: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      audience: ["Product owners", "Tech startups", "Enterprise software companies"],
      process: [
        { title: "Discovery", description: "Understanding user needs and goals." },
        { title: "Ideation", description: "Brainstorming and sketching solutions." },
        { title: "Design", description: "Creating the final look and feel." },
        { title: "Validation", description: "Testing with real users." }
      ],
      benefits: ["Increased user satisfaction", "Lower bounce rates", "Higher conversion", "Brand consistency"],
      faqs: [
        { question: "Do you design for mobile?", answer: "Yes, we specialize in mobile-first and responsive design." },
        { question: "What tools do you use?", answer: "Figma is our primary tool for design and prototyping." }
      ],
      ctaTitle: "Ready to elevate your user experience?",
      ctaDescription: "Let's design an interface that your users will love to use.",
      heroImage: "/images/hero/hero-web-dev.png",
      ctaImage: "/images/hero/hero-fusion.png"
    },
    ar: {
      slug: "ui-ux-design",
      title: "تصميم واجهات المستخدم UI/UX",
      category: "تصميم متمحور حول المستخدم",
      image: "/images/services/service3.svg",
      intro: "نبتكر واجهات بديهية ومذهلة بصرياً توفر تجارب مستخدم سلسة واحترافية.",
      overview: "عملية تصميم UI/UX لدينا تضع المستخدم في المركز. نحن نجمع بين البحث، ورسم المخططات، والتصميم عالي الدقة لإنشاء منتجات جميلة وسهلة الاستخدام في آن واحد.",
      includes: ["بحث المستخدم", "رسم المخططات (Wireframing)", "النماذج التفاعلية (Prototyping)", "التصميم البصري", "اختبار سهولة الاستخدام"],
      audience: ["أصحاب المنتجات الرقمية", "الشركات الناشئة التقنية", "شركات البرمجيات الكبرى"],
      process: [
        { title: "الاكتشاف", description: "فهم احتياجات المستخدم وأهدافه." },
        { title: "التفكير", description: "عصف ذهني ورسم الحلول المبدئية." },
        { title: "التصميم", description: "إنشاء المظهر النهائي للتطبيق." },
        { title: "التحقق", description: "الاختبار مع مستخدمين حقيقيين." }
      ],
      benefits: ["زيادة رضا المستخدمين", "تقليل معدل الارتداد", "رفع نسب التحويل", "اتساق هوية العلامة"],
      faqs: [
        { question: "هل تصممون لتطبيقات الموبايل؟", answer: "نعم، نحن متخصصون في تصميم تطبيقات الموبايل والمواقع المتجاوبة." },
        { question: "ما هي الأدوات التي تستخدمونها؟", answer: "نستخدم Figma كأداة أساسية للتصميم والنماذج." }
      ],
      ctaTitle: "هل تريد الارتقاء بتجربة مستخدميك؟",
      ctaDescription: "لنصمم واجهة تجعل استخدام منتجك تجربة ممتعة.",
      heroImage: "/images/hero/hero-web-dev.png",
      ctaImage: "/images/hero/hero-fusion.png"
    }
  },
  {
    slug: "shopify-development",
    en: {
      slug: "shopify-development",
      title: "Shopify Development",
      category: "Dedicated E-commerce",
      image: "/images/services/service2.svg",
      intro: "Professional Shopify store development and customization for fast-growing retail brands.",
      overview: "We help you leverage the power of Shopify to build a scalable and secure online store. From custom themes to app integration, we handle it all.",
      includes: ["Store Setup", "Custom Theme Design", "App Integration", "Payment & Shipping Setup", "Performance Tuning"],
      audience: ["Retailers", "D2C brands", "Global storefronts"],
      process: [
        { title: "Plan", description: "Mapping out store structure and needs." },
        { title: "Build", description: "Setting up and customizing the theme." },
        { title: "Optimize", description: "Improving speed and conversion." },
        { title: "Support", description: "Providing help after the store is live." }
      ],
      benefits: ["Fast time-to-market", "Secure & reliable", "Easy to manage", "Highly scalable"],
      faqs: [
        { question: "Can you migrate my store to Shopify?", answer: "Yes, we handle full migration from other platforms." },
        { question: "Do you offer custom themes?", answer: "Yes, we build unique themes from scratch." }
      ],
      ctaTitle: "Launch your Shopify store today!",
      ctaDescription: "Get a professional store that's built for sales success.",
      heroImage: "/images/hero/hero-ecommerce.png",
      ctaImage: "/images/hero/hero-ecommerce.png"
    },
    ar: {
      slug: "shopify-development",
      title: "تطوير متاجر Shopify",
      category: "تجارة إلكترونية متخصصة",
      image: "/images/services/service2.svg",
      intro: "تطوير وتخصيص متاجر Shopify احترافية للعلامات التجارية التي تسعى للنمو السريع.",
      overview: "نساعدك على استغلال قوة Shopify لبناء متجر آمن وقابل للتوسع. من القوالب المخصصة إلى ربط التطبيقات، نحن نتولى كل شيء.",
      includes: ["إعداد المتجر", "تصميم قوالب مخصصة", "ربط التطبيقات", "إعداد الدفع والشحن", "تحسين الأداء"],
      audience: ["تجار التجزئة", "العلامات التجارية المباشرة للمستهلك", "المتاجر العالمية"],
      process: [
        { title: "التخطيط", description: "رسم هيكل المتجر واحتياجاته." },
        { title: "البناء", description: "إعداد وتخصيص القالب والوظائف." },
        { title: "التحسين", description: "تحسين السرعة والتحويل." },
        { title: "الدعم", description: "توفير المساعدة بعد تشغيل المتجر." }
      ],
      benefits: ["إطلاق سريع للسوق", "أمان وموثوقية عالية", "سهولة في الإدارة", "قابلية توسع كبيرة"],
      faqs: [
        { question: "هل يمكنكم نقل متجري إلى Shopify؟", answer: "نعم، نتولى عملية النقل الكاملة من المنصات الأخرى." },
        { question: "هل تصممون قوالب خاصة؟", answer: "نعم، نصمم قوالب فريدة تماماً من الصفر." }
      ],
      ctaTitle: "أطلق متجر Shopify الخاص بك اليوم!",
      ctaDescription: "احصل على متجر احترافي مبني لتحقيق النجاح في المبيعات.",
      heroImage: "/images/hero/hero-ecommerce.png",
      ctaImage: "/images/hero/hero-ecommerce.png"
    }
  },
  {
    slug: "hosting-deployment",
    en: {
      slug: "hosting-deployment",
      title: "Hosting & Deployment",
      category: "Technical Infrastructure",
      image: "/images/services/service6.svg",
      intro: "Reliable managed hosting and automated deployment solutions for high-traffic websites.",
      overview: "We take the technical headache out of hosting. We ensure your site stays live, fast, and secure with modern deployment workflows.",
      includes: ["Cloud Hosting Setup", "CI/CD Pipelines", "SSL & Security", "CDN Integration", "Server Monitoring"],
      audience: ["Business owners", "Developers", "SaaS companies"],
      process: [
        { title: "Audit", description: "Evaluating infrastructure needs." },
        { title: "Setup", description: "Configuring servers and environments." },
        { title: "Secure", description: "Implementing firewalls and SSL." },
        { title: "Monitor", description: "Ongoing performance tracking." }
      ],
      benefits: ["99.9% Uptime", "Faster load times", "Enhanced security", "Peace of mind"],
      faqs: [
        { question: "Which cloud providers do you use?", answer: "AWS, Vercel, DigitalOcean, and more." },
        { question: "Do you handle domain names?", answer: "Yes, we manage DNS and renewals." }
      ],
      ctaTitle: "Need reliable hosting for your project?",
      ctaDescription: "Let's setup an infrastructure that you don't have to worry about.",
      heroImage: "/images/hero/services-combined.png",
      ctaImage: "/images/hero/services-combined.png"
    },
    ar: {
      slug: "hosting-deployment",
      title: "الاستضافة والنشر",
      category: "البنية التحتية التقنية",
      image: "/images/services/service6.svg",
      intro: "حلول استضافة مدارة موثوقة ونشر تلقائي للمواقع ذات الزيارات العالية.",
      overview: "نحن نخلصك من الصداع التقني للاستضافة. نضمن بقاء موقعك متاحاً وسريعاً وآمناً باستخدام أحدث مسارات العمل والنشر.",
      includes: ["إعداد الاستضافة السحابية", "خطوط النشر التلقائي (CI/CD)", "شهادات SSL والأمان", "ربط الـ CDN", "مراقبة السيرفرات"],
      audience: ["أصحاب الأعمال", "المطورون", "شركات الـ SaaS"],
      process: [
        { title: "التدقيق", description: "تقييم احتياجات البنية التحتية." },
        { title: "الإعداد", description: "تكوين السيرفرات والبيئات." },
        { title: "التأمين", description: "تطبيق جدران الحماية والأمان." },
        { title: "المراقبة", description: "تتبع الأداء بشكل مستمر." }
      ],
      benefits: ["تواجد بنسبة 99.9%", "سرعة تحميل أفضل", "أمان معزز", "راحة البال"],
      faqs: [
        { question: "ما هي الخدمات السحابية التي تستخدمونها؟", answer: "AWS, Vercel, DigitalOcean وغيرها." },
        { question: "هل تديرون أسماء النطاقات (Domains)؟", answer: "نعم، ندير الـ DNS والتجديدات." }
      ],
      ctaTitle: "تحتاج استضافة موثوقة لمشروعك؟",
      ctaDescription: "لنجهز بنية تحتية لا تضطر للقلق بشأنها أبداً.",
      heroImage: "/images/hero/services-combined.png",
      ctaImage: "/images/hero/services-combined.png"
    }
  },
  {
    slug: "maintenance-support",
    en: {
      slug: "maintenance-support",
      title: "Maintenance & Support",
      category: "Ongoing Care",
      image: "/images/services/service5.svg",
      intro: "Continuous technical support and maintenance to keep your digital products fresh and stable.",
      overview: "Websites need care. We provide ongoing support to fix bugs, update content, and ensure your platform evolves with your business.",
      includes: ["Bug Fixes", "Content Updates", "Performance Audits", "Security Patches", "Feature Enhancements"],
      audience: ["Established businesses", "E-commerce owners", "Non-technical teams"],
      process: [
        { title: "Report", description: "Submitting issues or change requests." },
        { title: "Action", description: "Implementing the fixes or updates." },
        { title: "Review", description: "Verifying the changes with you." },
        { title: "Update", description: "Deploying to production." }
      ],
      benefits: ["Stays secure", "Always up-to-date", "Predictable costs", "Expert help on call"],
      faqs: [
        { question: "What's your response time?", answer: "Usually under 24 hours for most requests." },
        { question: "Do you offer hourly rates?", answer: "We have both retainer and hourly options." }
      ],
      ctaTitle: "Need ongoing help with your site?",
      ctaDescription: "Let's take care of the tech so you can focus on your business.",
      heroImage: "/images/hero/services-combined.png",
      ctaImage: "/images/hero/cyber-brain.png"
    },
    ar: {
      slug: "maintenance-support",
      title: "الصيانة والدعم الفني",
      category: "رعاية مستمرة",
      image: "/images/services/service5.svg",
      intro: "دعم فني مستمر وصيانة دورية للحفاظ على منتجاتك الرقمية حديثة ومستقرة.",
      overview: "المواقع تحتاج إلى رعاية. نحن نوفر دعماً مستمراً لإصلاح الأعطال وتحديث المحتوى وضمان تطور منصتك مع عملك.",
      includes: ["إصلاح الأعطال (Bugs)", "تحديثات المحتوى", "تدقيق الأداء", "تحديثات الأمان", "تحسينات المزايا"],
      audience: ["الشركات القائمة", "أصحاب المتاجر الإلكترونية", "الفرق غير التقنية"],
      process: [
        { title: "البلاغ", description: "تقديم طلبات التغيير أو المشاكل." },
        { title: "التنفيذ", description: "تطبيق الإصلاحات أو التحديثات." },
        { title: "المراجعة", description: "التحقق من التغييرات معك." },
        { title: "التحديث", description: "النشر النهائي للموقع." }
      ],
      benefits: ["البقاء آمناً", "تحديثات مستمرة", "تكاليف متوقعة", "دعم خبراء تحت الطلب"],
      faqs: [
        { question: "ما هو وقت الاستجابة؟", answer: "عادة أقل من 24 ساعة لمعظم الطلبات." },
        { question: "هل تقدمون تسعيراً بالساعة؟", answer: "لدينا باقات شهرية وخيارات تسعير بالساعة." }
      ],
      ctaTitle: "تحتاج مساعدة مستمرة في موقعك؟",
      ctaDescription: "دعنا نتولى الجوانب التقنية لتركز أنت على نمو عملك.",
      heroImage: "/images/hero/services-combined.png",
      ctaImage: "/images/hero/cyber-brain.png"
    }
  }
];

export function getServiceBySlug(slug: string, locale: Locale = "ar") {
  const item = services.find((service) => service.slug === slug);
  if (!item) return undefined;
  return item[locale];
}

export function getLocalizedServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);

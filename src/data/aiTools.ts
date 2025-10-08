// Shared AI Tools data for search and filtering across the app
export const allAITools = [
  // WRITING ASSISTANTS
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI for writing, coding, and creative tasks.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Conversational AI', 'GPT-4', 'Writing Assistant', 'Code Generation']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant with strong safety features and writing capabilities.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://claude.ai',
    features: ['AI Assistant', 'Safe AI', 'Long Context', 'Document Analysis']
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'AI writing assistant for marketing copy and content creation.',
    category: 'copywriting-tools',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://jasper.ai',
    features: ['Marketing Copy', 'Content Templates', 'Brand Voice', 'SEO']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar, clarity, and tone.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://grammarly.com',
    features: ['Grammar Check', 'Tone Detection', 'Plagiarism Check', 'Writing Suggestions']
  },

  // IMAGE GENERATION & EDITING
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'State-of-the-art AI image generation with artistic style.',
    category: 'graphic-design',
    pricing: 'paid' as const,
    rating: 4.9,
    url: 'https://midjourney.com',
    features: ['AI Art', 'High Quality', 'Style Control', 'Community']
  },
  {
    id: 'dalle3',
    name: 'DALL·E 3',
    description: 'OpenAI\'s advanced image generation from text prompts.',
    category: 'graphic-design',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://openai.com/dall-e-3',
    features: ['Text-to-Image', 'High Accuracy', 'Safety Features', 'Integration']
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Design platform with AI-powered creation tools.',
    category: 'graphic-design',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://canva.com',
    features: ['Templates', 'AI Generation', 'Easy Design', 'Collaboration']
  },
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    description: 'AI-powered automatic background removal.',
    category: 'image-editing',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://remove.bg',
    features: ['Background Removal', 'Batch Processing', 'API Access', 'High Quality']
  },

  // VOICE & AUDIO
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Most realistic AI voice generation and cloning.',
    category: 'voice-generators',
    pricing: 'freemium' as const,
    rating: 4.9,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Text-to-Speech', 'Multilingual', 'Natural Sound']
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    description: 'Professional AI voiceover studio.',
    category: 'voice-generators',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://murf.ai',
    features: ['Studio Quality', 'Multiple Voices', 'Customization', 'Commercial Use']
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    description: 'AI music generator for royalty-free tracks.',
    category: 'music-generation',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://soundraw.io',
    features: ['Royalty-Free', 'Customizable', 'Commercial Use', 'Multiple Genres']
  },

  // VIDEO EDITING & GENERATION
  {
    id: 'runway',
    name: 'Runway',
    description: 'AI-powered video editing and generation platform.',
    category: 'video-editing',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://runwayml.com',
    features: ['Video Generation', 'AI Editing', 'Green Screen', 'Effects']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video and podcast editing with AI transcription.',
    category: 'video-editing',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://descript.com',
    features: ['Text-Based Editing', 'Transcription', 'Voice Clone', 'Screen Recording']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Create AI-generated videos with virtual avatars.',
    category: 'video-editing',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://synthesia.io',
    features: ['AI Avatars', 'Multiple Languages', 'Templates', 'No Camera Needed']
  },

  // CODE & DEVELOPMENT
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code in real-time.',
    category: 'code-generators',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://github.com/features/copilot',
    features: ['Code Completion', 'Multiple Languages', 'IDE Integration', 'Context Aware']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor built for productivity.',
    category: 'code-generators',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://cursor.sh',
    features: ['AI Editing', 'Chat Interface', 'Codebase Understanding', 'Fast']
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    description: 'AI coding assistant integrated in browser IDE.',
    category: 'code-generators',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://replit.com',
    features: ['Online IDE', 'AI Assistance', 'Collaboration', 'Deployment']
  },

  // DATA & ANALYTICS
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Industry-leading data visualization with AI insights.',
    category: 'data-cleaning',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://tableau.com',
    features: ['Data Viz', 'AI Insights', 'Business Intelligence', 'Interactive Dashboards']
  },
  {
    id: 'julius-ai',
    name: 'Julius AI',
    description: 'AI data analyst that interprets and visualizes data.',
    category: 'data-cleaning',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://julius.ai',
    features: ['Data Analysis', 'Natural Language', 'Visualizations', 'Insights']
  },

  // PRESENTATION & SLIDES
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI-powered presentation and document creator.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://gamma.app',
    features: ['AI Generation', 'Beautiful Templates', 'Interactive', 'Fast Creation']
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'Presentation software with AI-powered design.',
    category: 'presentation-makers',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://beautiful.ai',
    features: ['Smart Templates', 'Auto-Design', 'Team Collaboration', 'Brand Control']
  },

  // MEETING & TRANSCRIPTION
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'AI meeting transcription and note-taking.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://otter.ai',
    features: ['Real-Time Transcription', 'Meeting Notes', 'Summary', 'Collaboration']
  },
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    description: 'AI notetaker for meetings and conversations.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://fireflies.ai',
    features: ['Auto-Join Meetings', 'Transcription', 'CRM Integration', 'Search']
  },

  // EDUCATION & LEARNING
  {
    id: 'khan-academy-ai',
    name: 'Khan Academy Khanmigo',
    description: 'AI tutor for personalized learning.',
    category: 'ai-tutors',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://khanacademy.org',
    features: ['Personalized Tutoring', 'All Subjects', 'Safe for Kids', 'Progress Tracking']
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI paraphrasing and writing enhancement tool.',
    category: 'essay-writers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://quillbot.com',
    features: ['Paraphrasing', 'Grammar Check', 'Citation Generator', 'Summarizer']
  },

  // LIFESTYLE & PERSONAL
  {
    id: 'replika',
    name: 'Replika',
    description: 'AI companion for conversation and emotional support.',
    category: 'chat-companions',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://replika.ai',
    features: ['Personal AI', 'Conversation', 'Emotional Support', 'Always Available']
  },
  {
    id: 'freeletics-ai',
    name: 'Freeletics',
    description: 'AI-powered fitness coach.',
    category: 'health-fitness',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://freeletics.com',
    features: ['Personalized Workouts', 'Nutrition Plans', 'Progress Tracking', 'Adaptive']
  },

  // LOGO GENERATORS
  {
    id: 'looka',
    name: 'Looka',
    description: 'Generate logo ideas for free, customize them, and download high-resolution brand kits.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://looka.com/ai-logo-generator',
    features: ['Logo Ideas Free', 'Brand Kit', 'Customization', 'Color Experimentation']
  },
  {
    id: 'designs-ai',
    name: 'Designs.ai LogoMaker',
    description: 'Powerful AI logo maker with large icon library and design customization options.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://designs.ai/logomaker',
    features: ['Icon Library', 'AI Logo Maker', 'Brand Assets', 'Marketing Use']
  },
  {
    id: 'logo-com',
    name: 'Logo.com',
    description: 'Create logos for free and browse unlimited designs with premium brand kits available.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://logo.com/logos/artificial-intelligence',
    features: ['Free Logo Maker', 'Branding Kit', 'Download Full Package', 'Unlimited Designs']
  },
  {
    id: 'hatchful',
    name: 'Hatchful by Shopify',
    description: 'Simple, user-friendly, completely free logo generator for small businesses.',
    category: 'logo-generators',
    pricing: 'free' as const,
    rating: 4.6,
    url: 'https://www.andacademy.com/resources/blog/graphic-design/ai-logo-design-free-tools',
    features: ['Free Logo Tool', 'Business Logo Maker', 'Customizable Templates', 'User-Friendly']
  },
  {
    id: 'canva-logo',
    name: 'Canva AI Logo Generator',
    description: 'Combines templates with AI-based generation and drag-and-drop design functionality.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://www.canva.com/ai-logo-generator',
    features: ['Template + AI', 'Drag and Drop Logo', 'Easy Design', 'Premium Assets']
  },
  {
    id: 'namecheap-logo',
    name: 'Namecheap Logo Maker',
    description: '100% free AI-powered logo generator that creates high-quality logos with no watermark.',
    category: 'logo-generators',
    pricing: 'free' as const,
    rating: 4.5,
    url: 'https://www.namecheap.com/logo-maker',
    features: ['Free Logo No Watermark', 'AI Wizard', 'High Quality', 'Quick Branding']
  },
  {
    id: 'logomaster',
    name: 'Logomaster.ai',
    description: 'Create and edit logos freely in trial mode with premium plans for high-quality exports.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://logomaster.ai',
    features: ['Logo Templates', 'Edit Logos', 'Free Try', 'High-Quality Exports']
  },
  {
    id: 'freelogodesign',
    name: 'FreeLogoDesign.org',
    description: 'Free logo creation and editing with premium add-ons for high-resolution downloads.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://www.freelogodesign.org',
    features: ['Free Logo Maker', 'Premium Add-ons', 'Logo Editing', 'Brand Assets']
  },
  {
    id: 'myfreelogomaker',
    name: 'MyFreeLogoMaker',
    description: 'Create and download logos in PNG format completely free - minimal, fast, and ideal.',
    category: 'logo-generators',
    pricing: 'free' as const,
    rating: 4.4,
    url: 'https://myfreelogomaker.com',
    features: ['Download Free Logo', 'Free Design Tool', 'PNG Format', 'Quick Projects']
  },
  {
    id: 'logodiffusion',
    name: 'LogoDiffusion',
    description: 'Generative AI-based logo maker using text prompts to create up to 4 design options.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://logodiffusion.com',
    features: ['Text-to-Logo', 'Generative AI Logos', 'Commercial Rights', 'Multiple Options']
  },
  {
    id: 'logomakerr',
    name: 'Logomakerr.ai',
    description: 'Instant AI logo generation with deep customization options and pay-when-satisfied model.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://logomakerr.ai',
    features: ['Instant Logo', 'Customizable AI', 'Deep Customization', 'Flexible Payment']
  },
  {
    id: 'brandmark',
    name: 'Brandmark',
    description: 'Premium AI logo generator with free previews, brand kits, and social media assets.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://brandmark.io',
    features: ['Branding Assets', 'Brand Guide', 'Logo + Social', 'Cohesive Visuals']
  },
  {
    id: 'logopony',
    name: 'Logopony',
    description: 'AI logo generation with premium font and icon pairing for high-quality results.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://www.logopony.com',
    features: ['AI Logo Maker', 'Icon + Font Combinations', 'Premium Pairing', 'High Quality']
  },
  {
    id: 'logoai',
    name: 'LogoAI',
    description: 'AI-powered logo generator producing unique and customizable logos with brand guidelines.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://www.logoai.com/logo-maker',
    features: ['Unique Logos', 'Brand Guidelines', 'Customizable', 'Full Output']
  },
  {
    id: 'sologo',
    name: 'Sologo AI',
    description: 'Multilingual AI logo generation with unlimited generations and vector support.',
    category: 'logo-generators',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://www.sologo.ai',
    features: ['Brand Kit', 'Vector Support', 'Commercial Use', 'Multilingual']
  }
];

export type AITool = typeof allAITools[0];

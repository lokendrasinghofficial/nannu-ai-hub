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
  }
];

export type AITool = typeof allAITools[0];

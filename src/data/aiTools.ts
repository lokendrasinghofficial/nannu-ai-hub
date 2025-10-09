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
    description: 'AI-powered writing assistant for grammar, clarity, and tone with generative AI features.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://grammarly.com',
    features: ['Grammar Check', 'Tone Detection', 'Plagiarism Check', 'Writing Suggestions']
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    description: 'AI tool focused on generating ad copy, social media posts, and product descriptions.',
    category: 'copywriting-tools',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://copy.ai',
    features: ['Sales Copy', 'Short-Form Content', 'Product Description', 'Ad Generation']
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'Multi-style content generation for blogs, articles, ads, plus rewriting and expansion.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://writesonic.com',
    features: ['Long-Form Content', 'Content Ideas', 'Rewrite & Expand', 'SEO Optimization']
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing tool for blog posts, emails, ads with multiple tone options.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://rytr.me',
    features: ['Tone Control', 'Blog Assistant', 'Email Writing', 'Multiple Languages']
  },
  {
    id: 'anyword',
    name: 'Anyword',
    description: 'AI copywriting with predictive performance scores for ads and marketing content.',
    category: 'copywriting-tools',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://anyword.com',
    features: ['Predictive Copy', 'Ad Optimization', 'Performance Scores', 'Marketing Copy']
  },
  {
    id: 'hypotenuse-ai',
    name: 'Hypotenuse.ai',
    description: 'AI content generator optimized for eCommerce product descriptions and content scaling.',
    category: 'copywriting-tools',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://hypotenuse.ai',
    features: ['eCommerce Content', 'Bulk Generation', 'Product Descriptions', 'SEO Content']
  },
  {
    id: 'peppertype',
    name: 'Peppertype',
    description: 'AI tool focused on social captions, SEO content, and blog outlines.',
    category: 'copywriting-tools',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://peppertype.ai',
    features: ['Social Media Posts', 'SEO Content', 'Captions', 'Blog Outlines']
  },
  {
    id: 'sudowrite',
    name: 'Sudowrite',
    description: 'AI writing assistant tailored for creative and fiction writing support.',
    category: 'writing-assistants',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://sudowrite.com',
    features: ['Story Generation', 'Creative Writing Assistant', 'Fiction Tools', 'Author Support']
  },
  {
    id: 'hyperwrite',
    name: 'HyperWrite',
    description: 'Writing and research tool with summarizer, rewriting, and context assistance.',
    category: 'writing-assistants',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://hyperwrite.ai',
    features: ['Rewrite', 'Summarizer', 'Context Assistant', 'Research Support']
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
    description: 'AI slide layout with auto-design, theming, and brand consistency.',
    category: 'presentation-makers',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://beautiful.ai',
    features: ['Auto Layout', 'Smart Slides', 'Theme Design', 'Brand Control']
  },
  {
    id: 'canva-presentations',
    name: 'Canva Magic Design',
    description: 'Generate slides from a prompt or idea with AI-powered layout and content.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://canva.com',
    features: ['Auto Slides', 'Brand Kit Integration', 'Templates', 'Easy Design']
  },
  {
    id: 'tome-ai',
    name: 'Tome AI',
    description: 'Turn rough outlines into polished narrative-style presentations.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://tome.app',
    features: ['Story Deck', 'Visual Narrative', 'Outline to Deck', 'Web Style Slides']
  },
  {
    id: 'pitch',
    name: 'Pitch',
    description: 'Team-oriented slide creation with collaboration and AI suggestions.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://pitch.com',
    features: ['Team Slides', 'Smart Suggestions', 'Collaboration', 'Templates']
  },
  {
    id: 'slidebean',
    name: 'Slidebean',
    description: 'Input content and AI handles design and formatting automatically.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://slidebean.com',
    features: ['Auto Design', 'Startup Deck', 'Pitch Templates', 'Smart Formatting']
  },
  {
    id: 'prezi-ai',
    name: 'Prezi',
    description: 'Non-linear, dynamic visual presentations with AI assistance.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://prezi.com',
    features: ['Dynamic Slides', 'Visual Flow', 'Zoom Navigation', 'AI Assist']
  },
  {
    id: 'visme',
    name: 'Visme',
    description: 'Combines data visualization with AI slide generation.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://visme.co',
    features: ['Data to Slide', 'Infographics', 'Presentation', 'Charts']
  },
  {
    id: 'plus-ai',
    name: 'Plus AI',
    description: 'Plug-in for PowerPoint and Google Slides with AI slide generation.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://plusdocs.com',
    features: ['AI Plugin', 'Slide Augmentation', 'PowerPoint Integration', 'Google Slides']
  },
  {
    id: 'adobe-express-presentations',
    name: 'Adobe Express',
    description: 'Free AI slide maker with templates and PowerPoint import.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://www.adobe.com/express',
    features: ['Free Slide Maker', 'Import PowerPoint', 'AI Tweaks', 'Templates']
  },
  {
    id: 'manus-ai',
    name: 'Manus AI',
    description: 'AI-powered presentation creator with smart content generation and design.',
    category: 'presentation-makers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://manus.ai',
    features: ['AI Content Generation', 'Smart Design', 'Quick Creation', 'Templates']
  },

  // MEETING & TRANSCRIPTION
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'Live transcription and summary with speaker labeling for meetings.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://otter.ai',
    features: ['Live Transcript', 'Meeting Notes', 'Speaker Labeling', 'Summary']
  },
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    description: 'Record, transcribe, and summarize meetings with Zoom/Teams integration.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://fireflies.ai',
    features: ['Meeting AI Assistant', 'Auto Summary', 'CRM Integration', 'Search']
  },
  {
    id: 'sonix',
    name: 'Sonix',
    description: 'Audio and video transcription with AI summary and highlights.',
    category: 'meeting-transcribers',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://sonix.ai',
    features: ['Audio to Text', 'Summary & Highlight', 'Multi-Language', 'Editor']
  },
  {
    id: 'descript-transcription',
    name: 'Descript',
    description: 'Transcription, editing, and summary features for audio and video.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://descript.com',
    features: ['Transcript Editor', 'Summary Generation', 'Voice Clone', 'Video Editing']
  },
  {
    id: 'speak-ai',
    name: 'Speak.ai',
    description: 'Meeting capture with summary and insights extraction.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://speak.ai',
    features: ['Meeting Insights', 'Audio Summary', 'Transcription', 'Analytics']
  },
  {
    id: 'rev-ai',
    name: 'Rev',
    description: 'Human and AI transcription with summarization features.',
    category: 'meeting-transcribers',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://rev.com',
    features: ['Accurate Transcription', 'AI Summary', 'Fast Turnaround', 'High Quality']
  },
  {
    id: 'trint',
    name: 'Trint',
    description: 'Audio and video transcription with summary capabilities.',
    category: 'meeting-transcribers',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://trint.com',
    features: ['Video Transcript', 'Auto Summary', 'Editor', 'Collaboration']
  },
  {
    id: 'meetgeek',
    name: 'MeetGeek',
    description: 'Record meetings with AI summarization and highlights.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://meetgeek.ai',
    features: ['Meeting Highlights', 'AI Summary', 'Recording', 'Action Items']
  },
  {
    id: 'microsoft-teams-copilot',
    name: 'Microsoft Teams Copilot',
    description: 'Meeting transcription and AI summary inside Microsoft ecosystem.',
    category: 'meeting-transcribers',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://microsoft.com/microsoft-teams',
    features: ['Teams Transcript', 'Copilot Summary', 'Integration', 'Enterprise']
  },
  {
    id: 'google-meet-recap',
    name: 'Google Meet',
    description: 'Meeting transcriptions and recaps in Google Workspace.',
    category: 'meeting-transcribers',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://meet.google.com',
    features: ['Meeting Recap', 'Transcript', 'Google Integration', 'Workspace']
  },
  {
    id: 'tactiq',
    name: 'Tactiq',
    description: 'Live transcript and highlights capture from meetings.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://tactiq.io',
    features: ['Live Captions', 'Summary', 'Meeting Highlights', 'Chrome Extension']
  },
  {
    id: 'sembly-ai',
    name: 'Sembly AI',
    description: 'Meeting transcription with action item extraction.',
    category: 'meeting-transcribers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://sembly.ai',
    features: ['Action Item Detection', 'Meeting Summary', 'Transcription', 'Insights']
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
    description: 'AI paraphrasing and writing enhancement tool with summarization.',
    category: 'essay-writers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://quillbot.com',
    features: ['Paraphrasing', 'Grammar Check', 'Citation Generator', 'Summarizer']
  },

  // EMAIL AUTOMATION
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    description: 'Email automation with AI personalization and behavior-based sending.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://activecampaign.com',
    features: ['Behavioral Email', 'Automation Workflows', 'Personalization', 'CRM Integration']
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    description: 'AI-driven email flows with segmentation and product recommendations.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://klaviyo.com',
    features: ['eCommerce Email', 'Segmented Campaigns', 'Product Recommendations', 'Analytics']
  },
  {
    id: 'brevo',
    name: 'Brevo',
    description: 'Email, SMS, and CRM with AI subject and content suggestions.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://brevo.com',
    features: ['Multi-Channel Email', 'AI Subject Line', 'SMS Integration', 'CRM']
  },
  {
    id: 'hubspot-email',
    name: 'HubSpot',
    description: 'Full marketing suite with AI email content, automation, and personalization.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://hubspot.com',
    features: ['Inbound Email', 'CRM Integration', 'Automation', 'AI Content']
  },
  {
    id: 'mailerlite',
    name: 'MailerLite',
    description: 'Email campaigns with automation and AI features.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://mailerlite.com',
    features: ['Easy Email Builder', 'Automation', 'Landing Pages', 'AI Suggestions']
  },
  {
    id: 'encharge',
    name: 'Encharge',
    description: 'AI automation built for SaaS with behavior-based email flows.',
    category: 'email-automation',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://encharge.io',
    features: ['SaaS Email Automation', 'User Onboarding Flows', 'Behavioral Triggers', 'Analytics']
  },
  {
    id: 'getresponse',
    name: 'GetResponse',
    description: 'Email marketing with AI suggestions for subject lines and content.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://getresponse.com',
    features: ['All-in-One Email', 'AI Suggestions', 'Landing Pages', 'Webinars']
  },
  {
    id: 'drip',
    name: 'Drip',
    description: 'E-commerce and marketing-focused email automation with AI.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://drip.com',
    features: ['Marketing Automation', 'eCommerce Flows', 'Segmentation', 'Personalization']
  },
  {
    id: 'sender',
    name: 'Sender',
    description: 'Email marketing with automation and AI subject lines.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://sender.net',
    features: ['Affordable Email', 'Automation Features', 'Templates', 'Analytics']
  },
  {
    id: 'ortto',
    name: 'Ortto',
    description: 'Customer journey marketing with email and predictive analytics.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://ortto.com',
    features: ['Journey Builder', 'Predictive Email', 'Multi-Channel', 'Analytics']
  },
  {
    id: 'mailchimp-ai',
    name: 'Mailchimp',
    description: 'Classic email marketing with AI content and send time optimization.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://mailchimp.com',
    features: ['Email Marketing', 'AI Content Assist', 'Send Time Optimization', 'Templates']
  },
  {
    id: 'convertkit-ai',
    name: 'ConvertKit',
    description: 'Email tools for creators with AI content and subject suggestions.',
    category: 'email-automation',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://convertkit.com',
    features: ['Creator Email', 'AI Suggestions', 'Landing Pages', 'Automation']
  },

  // DOCUMENT SUMMARIZERS
  {
    id: 'chatgpt-summarizer',
    name: 'ChatGPT',
    description: 'LLM-powered text and document summarization via prompts.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Text Summary', 'LLM Summarization', 'Document Analysis', 'Multi-Format']
  },
  {
    id: 'claude-summarizer',
    name: 'Claude',
    description: 'Strong document summarization and explanation features.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://claude.ai',
    features: ['Document Summary', 'Explanation Mode', 'Long Context', 'Analysis']
  },
  {
    id: 'quillbot-summarizer',
    name: 'QuillBot Summarizer',
    description: 'Dedicated summarizer and paraphraser for text shortening.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://quillbot.com/summarize',
    features: ['Summarize', 'Paraphrase', 'Text Shortening', 'Key Points']
  },
  {
    id: 'copysmith-summarizer',
    name: 'Copysmith',
    description: 'Content suite including text summarization tools.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://copysmith.ai',
    features: ['Summaries', 'Content Tools', 'Bulk Processing', 'Templates']
  },
  {
    id: 'hyperwrite-summarizer',
    name: 'HyperWrite Summarizer',
    description: 'Automatic text summarization and condensation tool.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://hyperwrite.ai',
    features: ['Summarize Text', 'Auto Summarization', 'Key Points', 'Fast Processing']
  },
  {
    id: 'smmry',
    name: 'SMMRY',
    description: 'Simple web tool for text summarization and condensation.',
    category: 'document-summarizers',
    pricing: 'free' as const,
    rating: 4.2,
    url: 'https://smmry.com',
    features: ['Free Summarizer', 'Text Condensation', 'Simple Interface', 'Quick Results']
  },
  {
    id: 'resumo-ai',
    name: 'Resumo.ai',
    description: 'AI summarization tool for text digests and key points.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://resumo.ai',
    features: ['AI Summary', 'Text Digest', 'Quick Summaries', 'Key Points']
  },
  {
    id: 'summarizebot',
    name: 'SummarizeBot',
    description: 'AI summarizer via API and chat interface.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://summarizebot.com',
    features: ['API Summarization', 'Chat Summarizer', 'Multi-Format', 'Integration']
  },
  {
    id: 'paperdigest',
    name: 'PaperDigest',
    description: 'Summarization tool specialized for research papers.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://paperdigest.org',
    features: ['Academic Summary', 'Paper Digest', 'Research Focus', 'Citations']
  },
  {
    id: 'scisummary',
    name: 'SciSummary',
    description: 'AI summarization for scientific articles and papers.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://scisummary.com',
    features: ['Science Summary', 'Article Summary', 'Research Papers', 'Academic']
  },
  {
    id: 'upsum',
    name: 'UpSum',
    description: 'Summarize articles and documents efficiently.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://upsum.app',
    features: ['Article Summary', 'Doc Summarizer', 'Quick Processing', 'Key Points']
  },
  {
    id: 'tldr-this',
    name: 'TLDR This',
    description: 'Condense text to TL;DR summaries quickly.',
    category: 'document-summarizers',
    pricing: 'free' as const,
    rating: 4.4,
    url: 'https://tldrthis.com',
    features: ['TLDR Summary', 'Short Summary', 'Quick Read', 'Free Tool']
  },
  {
    id: 'resoomer',
    name: 'Resoomer',
    description: 'Web summarization tool for text extraction and condensation.',
    category: 'document-summarizers',
    pricing: 'free' as const,
    rating: 4.3,
    url: 'https://resoomer.com',
    features: ['Web Summarizer', 'Text Extraction', 'Free Tool', 'Browser Extension']
  },
  {
    id: 'summarize-tech',
    name: 'Summarize.tech',
    description: 'Summarize YouTube videos, papers, and long-form text.',
    category: 'document-summarizers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://summarize.tech',
    features: ['Video Summary', 'Text & Media Summary', 'YouTube Support', 'Long-Form']
  },

  // RESUME & COVER LETTER BUILDERS
  {
    id: 'zety',
    name: 'Zety',
    description: 'Resume and cover letter templates with AI suggestions.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://zety.com',
    features: ['Resume Builder', 'Cover Letter AI', 'Templates', 'Career Advice']
  },
  {
    id: 'resume-io',
    name: 'Resume.io',
    description: 'AI-powered resume templates and professional advice.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://resume.io',
    features: ['Resume Template', 'AI Suggestions', 'Professional Design', 'Cover Letters']
  },
  {
    id: 'kickresume',
    name: 'Kickresume',
    description: 'Resume, cover letter, and career site builder with AI.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://kickresume.com',
    features: ['Cover Letter AI', 'Resume Customization', 'Career Site', 'Templates']
  },
  {
    id: 'enhancv',
    name: 'Enhancv',
    description: 'Creative and visual resume builder with AI tips.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://enhancv.com',
    features: ['Design Resume', 'AI Feedback', 'Visual Templates', 'Customization']
  },
  {
    id: 'novoresume',
    name: 'Novorésumé',
    description: 'Simple and effective resume and cover letter creator.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://novoresume.com',
    features: ['Simple Resume', 'Cover Letter Tool', 'Templates', 'Easy Builder']
  },
  {
    id: 'rezi',
    name: 'Rezi',
    description: 'AI resume builder with ATS optimization.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://rezi.ai',
    features: ['Resume Optimization', 'AI Resume', 'ATS Friendly', 'Templates']
  },
  {
    id: 'teal-resume',
    name: 'Teal',
    description: 'Resume builder with cover letter generator and job tracker.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://tealhq.com',
    features: ['Job Tracker', 'Resume & Letter', 'Career Tools', 'AI Assistance']
  },
  {
    id: 'standard-resume',
    name: 'Standard Resume',
    description: 'Quick resume builder with clean design and export options.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://standardresume.co',
    features: ['Fast Resume', 'Clean Design', 'Export Options', 'Simple Interface']
  },
  {
    id: 'myperfectresume',
    name: 'MyPerfectResume',
    description: 'Template-based resume builder with AI hints and suggestions.',
    category: 'resume-builders',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://myperfectresume.com',
    features: ['Resume Hints', 'Letter AI', 'Templates', 'Professional']
  },
  {
    id: 'jobscan',
    name: 'Jobscan',
    description: 'Optimize resume to match job descriptions and ATS systems.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://jobscan.co',
    features: ['Resume Matching', 'ATS Optimization', 'Job Description Match', 'Score']
  },
  {
    id: 'resumeworded',
    name: 'ResumeWorded',
    description: 'Score and improve resumes and cover letters with AI feedback.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://resumeworded.com',
    features: ['Feedback Tool', 'Score Resume', 'AI Improvement', 'Cover Letter Review']
  },
  {
    id: 'cakeresume',
    name: 'CakeResume',
    description: 'Resume builder with AI assist optimized for Asian markets.',
    category: 'resume-builders',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://cakeresume.com',
    features: ['AI Resume Builder', 'Portfolio', 'Job Board', 'Templates']
  },

  // TASK & PROJECT MANAGEMENT
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Workspace with notes, project boards, and AI assistance.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://notion.so',
    features: ['Workspace + AI', 'Notes + Tasks', 'Databases', 'AI Writing']
  },
  {
    id: 'clickup-ai',
    name: 'ClickUp',
    description: 'Tasks, docs, and AI summaries for project management.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://clickup.com',
    features: ['Task + AI', 'Doc + AI', 'Project Views', 'Automation']
  },
  {
    id: 'asana-ai',
    name: 'Asana',
    description: 'Project management with AI suggestions and automation.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://asana.com',
    features: ['Task Automation', 'Project AI Assistant', 'Workflows', 'Timeline']
  },
  {
    id: 'monday-ai',
    name: 'Monday.com',
    description: 'Work boards with AI assist for workflow optimization.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://monday.com',
    features: ['Workflow AI', 'Task Automation', 'Boards', 'Dashboards']
  },
  {
    id: 'trello-butler',
    name: 'Trello',
    description: 'Board-based project management with Butler automation.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://trello.com',
    features: ['Board Automation', 'Task Rules', 'Butler AI', 'Workflows']
  },
  {
    id: 'wrike-ai',
    name: 'Wrike',
    description: 'Project planning with AI and smart suggestions.',
    category: 'project-management',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://wrike.com',
    features: ['Project Planning', 'AI Suggestions', 'Gantt Charts', 'Resource Management']
  },
  {
    id: 'airtable-ai',
    name: 'Airtable',
    description: 'Smart databases with AI generation and summarization.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://airtable.com',
    features: ['Database + AI', 'Smart Tables', 'Automation', 'Apps']
  },
  {
    id: 'coda-ai',
    name: 'Coda',
    description: 'Docs and tables with AI integrations and packs.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://coda.io',
    features: ['Doc Automation', 'AI Packs', 'Tables', 'Workflows']
  },
  {
    id: 'todoist-ai',
    name: 'Todoist',
    description: 'Task lists with smart suggestions and natural language.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://todoist.com',
    features: ['Smart Tasks', 'Productivity AI', 'Natural Language', 'Labels']
  },
  {
    id: 'fellow-app',
    name: 'Fellow.app',
    description: 'Meeting agendas and action management with AI aids.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://fellow.app',
    features: ['Meeting Tasks', 'Agenda AI', 'Action Items', 'Feedback']
  },
  {
    id: 'clockwise',
    name: 'Clockwise',
    description: 'Smart scheduling optimization with AI calendar management.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://getclockwise.com',
    features: ['Schedule Automation', 'Meeting Arrangement', 'Focus Time', 'Calendar AI']
  },
  {
    id: 'rescuetime',
    name: 'RescueTime',
    description: 'Productivity insights and AI suggestions for time management.',
    category: 'project-management',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://rescuetime.com',
    features: ['Productivity Analytics', 'Time AI', 'Focus Sessions', 'Reports']
  },
  {
    id: 'motion-app',
    name: 'Motion',
    description: 'AI scheduling and planning for automatic task allocation.',
    category: 'project-management',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://usemotion.com',
    features: ['Auto Planner', 'Time Allocation AI', 'Smart Calendar', 'Task Management']
  },

  // SPREADSHEET AUTOMATION
  {
    id: 'google-sheets-ai',
    name: 'Google Sheets',
    description: 'Spreadsheets with AI formula suggestions and chart generation.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://sheets.google.com',
    features: ['Formula Assist', 'Auto Charts', 'AI Explore', 'Collaboration']
  },
  {
    id: 'excel-copilot',
    name: 'Microsoft Excel Copilot',
    description: 'AI formulas, insights, and pivot automation in Excel.',
    category: 'spreadsheet-automation',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://microsoft.com/excel',
    features: ['Data Insights', 'Formula Generation', 'AI Analysis', 'Automation']
  },
  {
    id: 'airtable-spreadsheet',
    name: 'Airtable',
    description: 'Smart tables with auto summaries and AI field formulas.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://airtable.com',
    features: ['Smart Grid', 'AI Fields', 'Automation', 'Database Features']
  },
  {
    id: 'coda-spreadsheet',
    name: 'Coda',
    description: 'Docs and tables with AI formula generation.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://coda.io',
    features: ['Doc + Table AI', 'Smart Calculation', 'Automation', 'Integrations']
  },
  {
    id: 'sheetai',
    name: 'SheetAI',
    description: 'GPT integration inside sheets for auto generation.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://sheetai.app',
    features: ['GPT Formulas', 'Sheet Generation', 'AI Functions', 'Add-on']
  },
  {
    id: 'rows',
    name: 'Rows',
    description: 'Spreadsheet with API integration and AI features.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://rows.com',
    features: ['API Spreadsheet', 'Smart Functions', 'Data Integration', 'AI Features']
  },
  {
    id: 'sheet2site',
    name: 'Sheet2Site',
    description: 'Build websites from sheets with automation and AI logic.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://sheet2site.com',
    features: ['Sheet Driven Site', 'Automation', 'No Code', 'AI Logic']
  },
  {
    id: 'zoho-zia',
    name: 'Zia for Zoho Sheets',
    description: 'AI assistant in Zoho Sheets for insights and suggestions.',
    category: 'spreadsheet-automation',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://zoho.com/sheet',
    features: ['Zoho AI Insights', 'Sheet Suggestions', 'Data Analysis', 'Automation']
  },
  {
    id: 'formulabot',
    name: 'FormulaBot',
    description: 'Generate Excel and Google Sheets formulas via natural language.',
    category: 'spreadsheet-automation',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://formulabot.com',
    features: ['Formula Generation', 'NLP to Formula', 'Multi-Platform', 'Easy Interface']
  },
  {
    id: 'xltools',
    name: 'XLTools AI',
    description: 'Connectors and AI assist for spreadsheets.',
    category: 'spreadsheet-automation',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://xltools.net',
    features: ['Data Sync AI', 'Smart Add-ons', 'Excel Tools', 'Automation']
  },
  {
    id: 'smartsheet-ai',
    name: 'SmartSheet',
    description: 'Project sheets with AI assist and automation rules.',
    category: 'spreadsheet-automation',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://smartsheet.com',
    features: ['Sheet + Project AI', 'Automation Rules', 'Workflows', 'Collaboration']
  },

  // AI NOTETAKERS
  {
    id: 'evernote-ai',
    name: 'Evernote',
    description: 'Note capture with AI search and summarization.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://evernote.com',
    features: ['Note + AI', 'Semantic Search', 'Summarization', 'Web Clipper']
  },
  {
    id: 'notion-notes',
    name: 'Notion AI',
    description: 'Notes, docs, and databases with generative AI features.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://notion.so',
    features: ['AI in Notes', 'Doc Generation', 'Databases', 'Collaboration']
  },
  {
    id: 'roam-research',
    name: 'Roam Research',
    description: 'Networked thought notes with AI summarization plugins.',
    category: 'ai-notetakers',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://roamresearch.com',
    features: ['Graph Note AI', 'Linked Notes', 'Bidirectional Links', 'AI Plugins']
  },
  {
    id: 'mem-ai',
    name: 'Mem',
    description: 'Personal knowledge base with AI recall and summaries.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://mem.ai',
    features: ['Memory AI', 'Auto Recall', 'Smart Search', 'Knowledge Graph']
  },
  {
    id: 'obsidian-ai',
    name: 'Obsidian',
    description: 'Markdown notes with AI community plugins for summarization.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://obsidian.md',
    features: ['Plugin AI Note', 'Markdown + AI', 'Graph View', 'Local First']
  },
  {
    id: 'bear-notes',
    name: 'Bear',
    description: 'Beautiful note writing with AI suggestions.',
    category: 'ai-notetakers',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://bear.app',
    features: ['Writing Notes', 'AI Assist', 'Markdown', 'Tags']
  },
  {
    id: 'supernotes',
    name: 'Supernotes',
    description: 'Fast notes with smart summarization features.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://supernotes.app',
    features: ['Fast Note Tool', 'AI Summarizer', 'Card Based', 'Collaboration']
  },
  {
    id: 'logseq',
    name: 'Logseq',
    description: 'Knowledge graph with AI summarization capabilities.',
    category: 'ai-notetakers',
    pricing: 'free' as const,
    rating: 4.6,
    url: 'https://logseq.com',
    features: ['Graph Notes', 'AI Summary', 'Open Source', 'Privacy']
  },
  {
    id: 'scribe-notes',
    name: 'Scribe',
    description: 'Capture steps and generate docs with auto summary.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://scribehow.com',
    features: ['Process Capture', 'Auto Docs', 'Screenshots', 'Guides']
  },
  {
    id: 'fireflies-notes',
    name: 'Fireflies',
    description: 'Meeting and notes synced to personal knowledge base.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://fireflies.ai',
    features: ['Meeting Notes Capture', 'Note Sync', 'Transcription', 'Search']
  },
  {
    id: 'krisp',
    name: 'Krisp',
    description: 'Record and auto note extraction with noise cancellation.',
    category: 'ai-notetakers',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://krisp.ai',
    features: ['Call Notes', 'AI Transcript', 'Noise Cancellation', 'Privacy']
  },

  // AI CHATBOTS FOR BUSINESS
  {
    id: 'dialogflow',
    name: 'Dialogflow',
    description: 'Build conversational agents with NLU from Google.',
    category: 'ai-chatbots-business',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://cloud.google.com/dialogflow',
    features: ['Chatbot Platform', 'Intent Recognition', 'Multi-Language', 'Google Integration']
  },
  {
    id: 'microsoft-bot-framework',
    name: 'Microsoft Bot Framework',
    description: 'Build chatbots integrated with Azure ecosystem.',
    category: 'ai-chatbots-business',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://dev.botframework.com',
    features: ['Enterprise Chatbot', 'Azure Integration', 'Multi-Channel', 'Development Tools']
  },
  {
    id: 'rasa',
    name: 'Rasa',
    description: 'Open source self-hosted conversational AI framework.',
    category: 'ai-chatbots-business',
    pricing: 'free' as const,
    rating: 4.7,
    url: 'https://rasa.com',
    features: ['Open Source Chatbot', 'Custom Agent', 'Self-Hosted', 'Flexible']
  },
  {
    id: 'landbot',
    name: 'Landbot',
    description: 'Visual chatbot builder with AI and conversation flows.',
    category: 'ai-chatbots-business',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://landbot.io',
    features: ['Visual Chatbot', 'No-Code Bot', 'Conversational UI', 'Integrations']
  },
  {
    id: 'manychat',
    name: 'ManyChat',
    description: 'Chat marketing with AI generation for Messenger and Instagram.',
    category: 'ai-chatbots-business',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://manychat.com',
    features: ['Chat Marketing', 'Messenger Bot', 'Instagram Automation', 'AI Features']
  },
  {
    id: 'tidio',
    name: 'Tidio',
    description: 'Live chat with AI and bot features for customer support.',
    category: 'ai-chatbots-business',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://tidio.com',
    features: ['Chat + AI', 'Customer Chatbot', 'Live Chat', 'Support Automation']
  },
  {
    id: 'drift',
    name: 'Drift',
    description: 'Conversational marketing with chat and bot automation.',
    category: 'ai-chatbots-business',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://drift.com',
    features: ['Conversational Marketing', 'Lead Bot', 'Sales Automation', 'AI Chat']
  },
  {
    id: 'intercom',
    name: 'Intercom',
    description: 'Customer chat platform with AI auto responses.',
    category: 'ai-chatbots-business',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://intercom.com',
    features: ['Customer Support Bot', 'AI Helpdesk', 'Live Chat', 'Automation']
  },
  {
    id: 'botpress',
    name: 'Botpress',
    description: 'Open source chatbot building platform with AI modules.',
    category: 'ai-chatbots-business',
    pricing: 'free' as const,
    rating: 4.6,
    url: 'https://botpress.com',
    features: ['Modular Chatbot', 'Open Architecture', 'Self-Hosted', 'AI Integration']
  },
  {
    id: 'gobot',
    name: 'Gobot',
    description: 'Chat and AI sales assistant for lead qualification.',
    category: 'ai-chatbots-business',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://gobot.ai',
    features: ['Sales Chatbot', 'Lead Qualification', 'Automation', 'Analytics']
  },
  {
    id: 'ada-ai',
    name: 'Ada',
    description: 'Enterprise chatbot with AI support automation.',
    category: 'ai-chatbots-business',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://ada.cx',
    features: ['AI Support Bot', 'Customer Service', 'Enterprise Scale', 'Multi-Language']
  },
  {
    id: 'chatbot-com',
    name: 'Chatbot.com',
    description: 'Chatbot builder with AI and rule-based logic hybrid.',
    category: 'ai-chatbots-business',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://chatbot.com',
    features: ['Chatbot Builder', 'AI + Flow Logic', 'Templates', 'Integrations']
  },
  {
    id: 'ibm-watson-assistant',
    name: 'IBM Watson Assistant',
    description: 'Enterprise conversational AI with Watson NLU.',
    category: 'ai-chatbots-business',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://ibm.com/watson/assistant',
    features: ['Enterprise Chatbot', 'Watson NLU', 'Multi-Channel', 'Advanced AI']
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

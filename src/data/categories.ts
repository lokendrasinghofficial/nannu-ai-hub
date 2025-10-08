// Comprehensive AI Tool Categories
import { 
  Briefcase, Brain, Palette, Code, Video, Megaphone, 
  GraduationCap, MessageCircle, FileText, Presentation, Mail,
  FileSearch, Mic2, Calendar, BookOpen, Table, Bot, Sparkles,
  Image, Pencil, Layers, Film, Box, Wand2, Pipette, Palette as PaletteIcon,
  Frame, Layout, Terminal, Bug, Blocks, Wrench, Database, Zap,
  Music, Headphones, Radio, Captions, Users, TrendingUp, Hash,
  Globe, Target, Newspaper, Smile, Award, School, BookText,
  Calculator, Atom, MessageSquare, Heart, Dumbbell, Compass,
  DollarSign, ChefHat, MapPin, Shirt, Wallet
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: any;
  description: string;
  group: string;
  route: string;
  color: string;
}

export const categoryGroups = [
  {
    id: 'productivity',
    name: 'Productivity & Business',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'design',
    name: 'Design & Creativity',
    icon: Palette,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'development',
    name: 'AI Development & Coding',
    icon: Code,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'media',
    name: 'Audio & Video',
    icon: Video,
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'marketing',
    name: 'Content Creation & Marketing',
    icon: Megaphone,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'education',
    name: 'Education & Research',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'lifestyle',
    name: 'Communication & Lifestyle',
    icon: MessageCircle,
    color: 'from-teal-500 to-cyan-500'
  }
];

export const allCategories: Category[] = [
  // Productivity & Business
  { id: 'writing-assistants', name: 'Writing Assistants', icon: FileText, description: 'AI-powered writing and content generation tools', group: 'productivity', route: '/category/writing-assistants', color: 'ai-text' },
  { id: 'presentation-makers', name: 'Presentation Makers', icon: Presentation, description: 'Create stunning presentations with AI', group: 'productivity', route: '/category/presentation-makers', color: 'ai-text' },
  { id: 'email-automation', name: 'Email Automation', icon: Mail, description: 'Automate and enhance email communications', group: 'productivity', route: '/category/email-automation', color: 'ai-text' },
  { id: 'document-summarizers', name: 'Document Summarizers', icon: FileSearch, description: 'Quickly summarize long documents', group: 'productivity', route: '/category/document-summarizers', color: 'ai-text' },
  { id: 'meeting-transcribers', name: 'Meeting Transcribers', icon: Mic2, description: 'Transcribe and analyze meetings', group: 'productivity', route: '/category/meeting-transcribers', color: 'ai-voice' },
  { id: 'resume-builders', name: 'Resume & Cover Letter Builders', icon: FileText, description: 'Create professional resumes with AI', group: 'productivity', route: '/category/resume-builders', color: 'ai-text' },
  { id: 'task-management', name: 'Task & Project Management', icon: Calendar, description: 'AI-enhanced project management', group: 'productivity', route: '/category/task-management', color: 'ai-data' },
  { id: 'spreadsheet-automation', name: 'Spreadsheet Automation', icon: Table, description: 'Automate spreadsheet tasks', group: 'productivity', route: '/category/spreadsheet-automation', color: 'ai-data' },
  { id: 'ai-notetakers', name: 'AI Notetakers', icon: BookOpen, description: 'Smart note-taking and organization', group: 'productivity', route: '/category/ai-notetakers', color: 'ai-text' },
  { id: 'business-chatbots', name: 'AI Chatbots for Business', icon: Bot, description: 'Customer service and support bots', group: 'productivity', route: '/category/business-chatbots', color: 'ai-text' },

  // Design & Creativity
  { id: 'logo-generators', name: 'Logo Generators', icon: Sparkles, description: 'Create unique logos with AI', group: 'design', route: '/category/logo-generators', color: 'ai-image' },
  { id: 'image-editing', name: 'Image Editing & Enhancement', icon: Image, description: 'Professional image editing tools', group: 'design', route: '/category/image-editing', color: 'ai-image' },
  { id: 'graphic-design', name: 'Graphic Design Tools', icon: Pencil, description: 'AI-powered graphic design', group: 'design', route: '/category/graphic-design', color: 'ai-image' },
  { id: 'video-editing', name: 'Video Editing & Generation', icon: Film, description: 'Edit and create videos with AI', group: 'design', route: '/category/video-editing', color: 'ai-video' },
  { id: '3d-design', name: '3D Design & Modeling', icon: Box, description: '3D modeling and design tools', group: 'design', route: '/category/3d-design', color: 'ai-image' },
  { id: 'animation-tools', name: 'Animation Tools', icon: Layers, description: 'Create animations with AI', group: 'design', route: '/category/animation-tools', color: 'ai-video' },
  { id: 'color-palette', name: 'Color Palette & Font Generators', icon: Pipette, description: 'Generate color schemes and fonts', group: 'design', route: '/category/color-palette', color: 'ai-image' },
  { id: 'poster-makers', name: 'Poster & Banner Makers', icon: Frame, description: 'Design posters and banners', group: 'design', route: '/category/poster-makers', color: 'ai-image' },
  { id: 'mockup-generators', name: 'Product Mockup Generators', icon: Wand2, description: 'Create product mockups', group: 'design', route: '/category/mockup-generators', color: 'ai-image' },
  { id: 'ui-ux-design', name: 'UI/UX Design Tools', icon: Layout, description: 'Design user interfaces with AI', group: 'design', route: '/category/ui-ux-design', color: 'ai-image' },

  // AI Development & Coding
  { id: 'code-generators', name: 'Code Generators', icon: Terminal, description: 'Generate code with AI', group: 'development', route: '/category/code-generators', color: 'ai-code' },
  { id: 'debugging-tools', name: 'Debugging & Code Review Tools', icon: Bug, description: 'Debug and review code', group: 'development', route: '/category/debugging-tools', color: 'ai-code' },
  { id: 'api-integration', name: 'API Integration Platforms', icon: Blocks, description: 'Integrate APIs easily', group: 'development', route: '/category/api-integration', color: 'ai-code' },
  { id: 'ai-model-builders', name: 'AI Model Builders', icon: Brain, description: 'No-code/low-code AI model creation', group: 'development', route: '/category/ai-model-builders', color: 'ai-code' },
  { id: 'data-cleaning', name: 'Data Cleaning & Visualization', icon: Database, description: 'Clean and visualize data', group: 'development', route: '/category/data-cleaning', color: 'ai-data' },
  { id: 'prompt-engineering', name: 'Prompt Engineering Tools', icon: Wrench, description: 'Optimize AI prompts', group: 'development', route: '/category/prompt-engineering', color: 'ai-code' },
  { id: 'ai-agents', name: 'AI Agents & Workflows', icon: Zap, description: 'Build AI agents and workflows', group: 'development', route: '/category/ai-agents', color: 'ai-code' },
  { id: 'dataset-generation', name: 'Dataset Generation Tools', icon: Database, description: 'Generate training datasets', group: 'development', route: '/category/dataset-generation', color: 'ai-data' },
  { id: 'cloud-ai-platforms', name: 'Cloud AI Platforms', icon: Globe, description: 'Cloud-based AI services', group: 'development', route: '/category/cloud-ai-platforms', color: 'ai-code' },
  { id: 'ai-learning', name: 'AI Learning & Experimentation', icon: GraduationCap, description: 'Learn and experiment with AI', group: 'development', route: '/category/ai-learning', color: 'ai-code' },

  // Audio & Video
  { id: 'voice-generators', name: 'Voice Generators (TTS)', icon: Mic2, description: 'Text-to-speech AI tools', group: 'media', route: '/category/voice-generators', color: 'ai-voice' },
  { id: 'voice-cloning', name: 'Voice Cloning Tools', icon: Users, description: 'Clone and mimic voices', group: 'media', route: '/category/voice-cloning', color: 'ai-voice' },
  { id: 'music-generation', name: 'Music Generation', icon: Music, description: 'Create music with AI', group: 'media', route: '/category/music-generation', color: 'ai-voice' },
  { id: 'podcast-editing', name: 'Podcast Editing', icon: Headphones, description: 'Edit podcasts professionally', group: 'media', route: '/category/podcast-editing', color: 'ai-voice' },
  { id: 'lip-sync-dubbing', name: 'Lip Sync & Dubbing Tools', icon: Radio, description: 'Sync lips and dub videos', group: 'media', route: '/category/lip-sync-dubbing', color: 'ai-video' },
  { id: 'video-script-generators', name: 'Video Script Generators', icon: FileText, description: 'Generate video scripts', group: 'media', route: '/category/video-script-generators', color: 'ai-text' },
  { id: 'face-swap', name: 'Face Swap Tools', icon: Users, description: 'Safe face swap technology', group: 'media', route: '/category/face-swap', color: 'ai-video' },
  { id: 'subtitle-generators', name: 'Subtitle & Caption Generators', icon: Captions, description: 'Generate subtitles automatically', group: 'media', route: '/category/subtitle-generators', color: 'ai-text' },

  // Content Creation & Marketing
  { id: 'blog-writing-seo', name: 'Blog Writing & SEO Tools', icon: FileText, description: 'SEO-optimized content creation', group: 'marketing', route: '/category/blog-writing-seo', color: 'ai-text' },
  { id: 'copywriting-tools', name: 'Copywriting Tools', icon: Pencil, description: 'AI-powered copywriting', group: 'marketing', route: '/category/copywriting-tools', color: 'ai-text' },
  { id: 'social-media-creators', name: 'Social Media Post Creators', icon: MessageCircle, description: 'Create engaging social posts', group: 'marketing', route: '/category/social-media-creators', color: 'ai-text' },
  { id: 'hashtag-finders', name: 'Hashtag & Trend Finders', icon: Hash, description: 'Find trending hashtags', group: 'marketing', route: '/category/hashtag-finders', color: 'ai-data' },
  { id: 'ad-copy-generators', name: 'Ad Copy Generators', icon: Target, description: 'Generate compelling ad copy', group: 'marketing', route: '/category/ad-copy-generators', color: 'ai-text' },
  { id: 'email-marketing', name: 'Email Marketing Tools', icon: Mail, description: 'Email campaign creation', group: 'marketing', route: '/category/email-marketing', color: 'ai-text' },
  { id: 'brand-name-generators', name: 'Brand Name & Slogan Generators', icon: Sparkles, description: 'Generate brand names', group: 'marketing', route: '/category/brand-name-generators', color: 'ai-text' },
  { id: 'newsletter-creators', name: 'Newsletter Creators', icon: Newspaper, description: 'Design newsletters', group: 'marketing', route: '/category/newsletter-creators', color: 'ai-text' },
  { id: 'meme-generators', name: 'Meme & Caption Generators', icon: Smile, description: 'Create viral memes', group: 'marketing', route: '/category/meme-generators', color: 'ai-image' },
  { id: 'influencer-tools', name: 'Influencer Tools', icon: Award, description: 'Tools for influencers', group: 'marketing', route: '/category/influencer-tools', color: 'ai-data' },

  // Education & Research
  { id: 'ai-tutors', name: 'AI Tutors & Study Helpers', icon: School, description: 'Personalized learning assistants', group: 'education', route: '/category/ai-tutors', color: 'ai-text' },
  { id: 'essay-writers', name: 'Essay & Assignment Writers', icon: BookText, description: 'Academic writing assistance', group: 'education', route: '/category/essay-writers', color: 'ai-text' },
  { id: 'research-summarizers', name: 'Research Paper Summarizers', icon: FileSearch, description: 'Summarize research papers', group: 'education', route: '/category/research-summarizers', color: 'ai-text' },
  { id: 'citation-generators', name: 'Citation & Reference Generators', icon: BookOpen, description: 'Generate citations', group: 'education', route: '/category/citation-generators', color: 'ai-text' },
  { id: 'quiz-tools', name: 'Quiz & Flashcard Tools', icon: Brain, description: 'Create study materials', group: 'education', route: '/category/quiz-tools', color: 'ai-text' },
  { id: 'language-learning', name: 'Language Learning Tools', icon: Globe, description: 'Learn languages with AI', group: 'education', route: '/category/language-learning', color: 'ai-text' },
  { id: 'math-solvers', name: 'Math Problem Solvers', icon: Calculator, description: 'Solve math problems', group: 'education', route: '/category/math-solvers', color: 'ai-data' },
  { id: 'code-learning', name: 'Code Learning Platforms', icon: Terminal, description: 'Learn programming', group: 'education', route: '/category/code-learning', color: 'ai-code' },
  { id: 'scientific-research', name: 'Scientific Research Tools', icon: Atom, description: 'Research assistance tools', group: 'education', route: '/category/scientific-research', color: 'ai-data' },

  // Communication & Lifestyle
  { id: 'chat-companions', name: 'Relationship & Chat Companions', icon: MessageSquare, description: 'AI conversation partners', group: 'lifestyle', route: '/category/chat-companions', color: 'ai-text' },
  { id: 'health-fitness', name: 'Health & Fitness Coaches', icon: Dumbbell, description: 'AI fitness and health guidance', group: 'lifestyle', route: '/category/health-fitness', color: 'ai-text' },
  { id: 'meditation-mental', name: 'Meditation & Mental Health AIs', icon: Heart, description: 'Mental wellness support', group: 'lifestyle', route: '/category/meditation-mental', color: 'ai-text' },
  { id: 'career-coaches', name: 'Career & Interview Coaches', icon: Briefcase, description: 'Career guidance and prep', group: 'lifestyle', route: '/category/career-coaches', color: 'ai-text' },
  { id: 'recipe-generators', name: 'AI Recipe Generators', icon: ChefHat, description: 'Create custom recipes', group: 'lifestyle', route: '/category/recipe-generators', color: 'ai-text' },
  { id: 'travel-planners', name: 'Travel Planners', icon: MapPin, description: 'Plan trips with AI', group: 'lifestyle', route: '/category/travel-planners', color: 'ai-text' },
  { id: 'fashion-styling', name: 'Fashion & Styling Assistants', icon: Shirt, description: 'AI fashion advice', group: 'lifestyle', route: '/category/fashion-styling', color: 'ai-image' },
  { id: 'finance-advisors', name: 'Finance & Investment Advisors', icon: Wallet, description: 'Financial planning tools', group: 'lifestyle', route: '/category/finance-advisors', color: 'ai-data' },
];

// Helper function to get categories by group
export const getCategoriesByGroup = (groupId: string) => {
  return allCategories.filter(cat => cat.group === groupId);
};

// Helper function to get category by ID
export const getCategoryById = (id: string) => {
  return allCategories.find(cat => cat.id === id);
};
import { useState } from 'react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';

// Import the AITool interface from AIToolCard to avoid type conflicts
interface AITool {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  models?: string[];
  howItWorks?: string;
  howToUse?: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid';
  pricingDetails?: string;
  rating: number;
  image?: string;
  url: string;
  features: string[];
  keywords?: string[];
}

const videoEditorTools: AITool[] = [
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'Powerful AI video editor with background removal, motion tracking, and text-to-video features.',
    category: 'video',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://runwayml.com',
    features: ['Background Removal', 'Motion Tracking', 'Text-to-Video'],
    keywords: ['generative video', 'editing', 'background removal', 'AI effects', 'text-to-video']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video creator that turns text into professional videos with avatars.',
    category: 'video',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://synthesia.io',
    features: ['AI Avatars', 'Text-to-Video', 'Professional Quality'],
    keywords: ['AI avatars', 'text-to-video', 'corporate training', 'explainer videos', 'voiceovers']
  },
  {
    id: 'pictory',
    name: 'Pictory',
    description: 'AI tool to turn scripts, blogs, or articles into engaging short videos.',
    category: 'video',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://pictory.ai',
    features: ['Script to Video', 'Blog to Video', 'Short Videos'],
    keywords: ['text-to-video', 'marketing', 'short-form', 'captions', 'summaries']
  },
  {
    id: 'lumen5',
    name: 'Lumen5',
    description: 'AI-driven video editor for businesses, turning blogs and posts into professional videos.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://lumen5.com',
    features: ['Content Repurposing', 'Templates', 'Social Media'],
    keywords: ['content repurposing', 'social media', 'text-to-video', 'marketing', 'templates']
  },
  {
    id: 'veed-io',
    name: 'VEED.IO',
    description: 'Online video editing with subtitles, AI voiceovers, templates, and effects.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.6,
    url: 'https://veed.io',
    features: ['Subtitles', 'AI Voiceovers', 'Online Editor'],
    keywords: ['captions', 'subtitles', 'AI editing', 'online tool', 'social content']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered video editor with transcription, screen recording, and overdub features.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.7,
    url: 'https://descript.com',
    features: ['Overdub', 'Transcription', 'Screen Recording'],
    keywords: ['overdub', 'transcription', 'podcast', 'video editing', 'captions']
  },
  {
    id: 'invideo',
    name: 'InVideo',
    description: 'Drag-and-drop AI editor for marketing, social media, and ads.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://invideo.io',
    features: ['Ad Creation', 'Templates', 'Marketing Focus'],
    keywords: ['ad creation', 'templates', 'text-to-video', 'social media', 'fast editing']
  },
  {
    id: 'kapwing',
    name: 'Kapwing',
    description: 'AI video editing suite with meme templates, subtitles, and resizing.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://kapwing.com',
    features: ['Meme Templates', 'Subtitles', 'Video Resizing'],
    keywords: ['meme maker', 'subtitles', 'resizing', 'templates', 'online editor']
  },
  {
    id: 'magisto',
    name: 'Magisto (by Vimeo)',
    description: 'AI video editor for creating polished marketing videos automatically.',
    category: 'video',
    pricing: 'paid',
    rating: 4.1,
    url: 'https://magisto.com',
    features: ['Automatic Editing', 'Marketing Focus', 'Vimeo Integration'],
    keywords: ['automatic editing', 'templates', 'Vimeo', 'storytelling', 'video marketing']
  },
  {
    id: 'rephrase-ai',
    name: 'Rephrase.ai',
    description: 'Personalizes videos with AI-generated talking avatars.',
    category: 'video',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://rephrase.ai',
    features: ['AI Avatars', 'Personalization', 'Marketing Videos'],
    keywords: ['AI avatar', 'personalization', 'ads', 'marketing', 'text-to-video']
  },
  {
    id: 'wisecut',
    name: 'Wisecut',
    description: 'AI editor that auto-cuts silences, adds subtitles, and background music.',
    category: 'video',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://wisecut.video',
    features: ['Auto-cut Silences', 'Subtitles', 'Background Music'],
    keywords: ['silence removal', 'subtitles', 'background music', 'podcasts', 'quick editing']
  },
  {
    id: 'elai-io',
    name: 'Elai.io',
    description: 'Text-to-video tool for e-learning and business presentations with AI avatars.',
    category: 'video',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://elai.io',
    features: ['E-learning Focus', 'AI Presenters', 'Business Videos'],
    keywords: ['AI presenter', 'avatars', 'e-learning', 'training videos', 'text-to-speech']
  },
  {
    id: 'synths-video',
    name: 'Synths.Video',
    description: 'Turns blog posts into AI-powered YouTube videos with avatars.',
    category: 'video',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://synths.video',
    features: ['Blog to Video', 'YouTube Focus', 'AI Avatars'],
    keywords: ['YouTube', 'blogs', 'AI avatar', 'text-to-video', 'SEO']
  },
  {
    id: 'deepbrain-ai',
    name: 'DeepBrain AI',
    description: 'Generates AI human avatars for business and media videos.',
    category: 'video',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://deepbrainai.io',
    features: ['AI Humans', 'Media Production', 'Corporate Videos'],
    keywords: ['AI humans', 'avatars', 'media', 'broadcast', 'corporate']
  },
  {
    id: 'colossyan',
    name: 'Colossyan',
    description: 'AI presenter-based tool for creating training and explainer videos.',
    category: 'video',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://colossyan.com',
    features: ['AI Presenters', 'Training Videos', 'Explainer Focus'],
    keywords: ['AI avatar', 'explainer', 'training', 'presentations', 'business']
  },
  {
    id: 'hour-one',
    name: 'Hour One',
    description: 'Converts text into video with virtual AI characters.',
    category: 'video',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://hourone.ai',
    features: ['Virtual Characters', 'Text-to-Video', 'Training Focus'],
    keywords: ['AI characters', 'text-to-video', 'training', 'e-learning', 'business']
  },
  {
    id: 'synthmaker-ai',
    name: 'SynthMaker AI',
    description: 'Video synthesis for marketing and content creators.',
    category: 'video',
    pricing: 'paid',
    rating: 4.2,
    url: 'https://synthmaker.ai',
    features: ['Video Synthesis', 'Marketing Focus', 'Content Creation'],
    keywords: ['synthesis', 'AI avatars', 'marketing', 'social media', 'video content']
  },
  {
    id: 'gliacloud',
    name: 'GliaCloud',
    description: 'Converts news articles and text into engaging AI videos.',
    category: 'video',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://gliacloud.com',
    features: ['News Videos', 'Article Conversion', 'Media Automation'],
    keywords: ['news videos', 'text-to-video', 'automation', 'media', 'AI journalism']
  },
  {
    id: 'rocketium',
    name: 'Rocketium',
    description: 'AI video editor for enterprises with automation and scaling.',
    category: 'video',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://rocketium.com',
    features: ['Enterprise Focus', 'Automation', 'Bulk Processing'],
    keywords: ['enterprise', 'automation', 'marketing', 'bulk video', 'templates']
  },
  {
    id: 'animoto',
    name: 'Animoto',
    description: 'Easy video maker for slideshows, promos, and events.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://animoto.com',
    features: ['Slideshows', 'Promos', 'Event Videos'],
    keywords: ['slideshow', 'templates', 'business', 'social media', 'quick video']
  },
  {
    id: 'flexclip',
    name: 'FlexClip',
    description: 'Cloud-based AI editor for quick social media videos with templates and stock footage.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://flexclip.com',
    features: ['Templates', 'Stock Library', 'Social Media Focus'],
    keywords: ['templates', 'stock library', 'quick editing', 'online tool', 'social']
  },
  {
    id: 'designs-ai-videomaker',
    name: 'Designs.ai Videomaker',
    description: 'Turns text scripts into videos automatically with narration and visuals.',
    category: 'video',
    pricing: 'paid',
    rating: 4.2,
    url: 'https://designs.ai',
    features: ['Script to Video', 'AI Narrator', 'Automatic Creation'],
    keywords: ['text-to-video', 'AI narrator', 'marketing', 'explainer', 'automation']
  },
  {
    id: 'offeo',
    name: 'Offeo',
    description: 'AI design and video editing platform for ads and branding.',
    category: 'video',
    pricing: 'paid',
    rating: 4.1,
    url: 'https://offeo.com',
    features: ['Ad Videos', 'Branding Focus', 'Animation'],
    keywords: ['branding', 'ad videos', 'animation', 'templates', 'social']
  },
  {
    id: 'recast-studio',
    name: 'Recast Studio',
    description: 'AI tool to repurpose long videos into short clips for social media.',
    category: 'video',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://recast.studio',
    features: ['Video Repurposing', 'Short Clips', 'Social Media'],
    keywords: ['repurpose', 'short clips', 'podcasts', 'content creator', 'highlights']
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    description: 'AI editor that turns long-form YouTube videos into viral shorts with captions.',
    category: 'video',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://opus.pro',
    features: ['Viral Clips', 'YouTube Shorts', 'Auto Captions'],
    keywords: ['viral clips', 'repurposing', 'captions', 'YouTube', 'short-form']
  },
  {
    id: 'wave-video',
    name: 'Wave.video',
    description: 'Online AI-powered editor for social ads, intros, and live streaming.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://wave.video',
    features: ['Social Ads', 'Intros', 'Live Streaming'],
    keywords: ['intros', 'ads', 'social', 'livestream', 'templates']
  },
  {
    id: 'veed-studio-avatars',
    name: 'Veed Studio AI Avatars',
    description: 'Extension of VEED.IO, adds AI avatars for text-to-video.',
    category: 'video',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://veed.io/avatars',
    features: ['AI Avatars', 'Presentations', 'Training Videos'],
    keywords: ['avatars', 'presentations', 'training', 'AI characters', 'studio']
  },
  {
    id: 'heygen',
    name: 'HeyGen (formerly Movio)',
    description: 'Popular AI avatar-based video creator for business and influencers.',
    category: 'video',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://heygen.com',
    features: ['AI Avatars', 'Business Focus', 'Influencer Content'],
    keywords: ['avatars', 'marketing', 'explainer', 'AI characters', 'social']
  },
  {
    id: 'papercup',
    name: 'Papercup',
    description: 'AI video localization tool that translates and dubs videos.',
    category: 'video',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://papercup.com',
    features: ['Video Dubbing', 'Translation', 'Localization'],
    keywords: ['dubbing', 'translation', 'localization', 'AI voice', 'subtitles']
  },
  {
    id: 'nova-ai',
    name: 'Nova A.I.',
    description: 'AI video management tool with auto subtitles, scene detection, and translations.',
    category: 'video',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://nova.ai',
    features: ['Auto Subtitles', 'Scene Detection', 'Management'],
    keywords: ['subtitles', 'scene detection', 'management', 'translation', 'editing']
  },
  {
    id: 'quickvid',
    name: 'QuickVid',
    description: 'AI tool for auto-generating TikTok & Shorts-style videos from prompts.',
    category: 'video',
    pricing: 'paid',
    rating: 4.2,
    url: 'https://quickvid.ai',
    features: ['TikTok Videos', 'Shorts Generation', 'Auto Captions'],
    keywords: ['TikTok', 'Shorts', 'captions', 'viral', 'automation']
  },
  {
    id: 'adobe-premiere-pro',
    name: 'Adobe Premiere Pro (AI Sensei)',
    description: 'Industry-leading editor now enhanced with Adobe Sensei AI tools for smart editing.',
    category: 'video',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://adobe.com/products/premiere.html',
    features: ['Professional Editing', 'AI Effects', 'Industry Standard'],
    keywords: ['Adobe', 'professional', 'AI effects', 'sensei', 'advanced editing']
  },
  {
    id: 'filmora',
    name: 'Filmora (AI Copilot Editor)',
    description: 'Easy editor with AI Copilot for scene detection, captions, and effects.',
    category: 'video',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://filmora.wondershare.com',
    features: ['AI Copilot', 'Scene Detection', 'Easy Editing'],
    keywords: ['copilot', 'AI captions', 'transitions', 'creative', 'templates']
  },
  {
    id: 'kamua',
    name: 'Kamua',
    description: 'AI tool for auto-cropping and repurposing videos into vertical Shorts/Reels/TikToks.',
    category: 'video',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://kamua.com',
    features: ['Auto Cropping', 'Vertical Videos', 'Social Repurposing'],
    keywords: ['auto crop', 'repurpose', 'vertical', 'social', 'automation']
  },
  {
    id: 'maverick',
    name: 'Maverick',
    description: 'AI video personalization tool for e-commerce, sending customized product videos.',
    category: 'video',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://trymaverick.com',
    features: ['Video Personalization', 'E-commerce Focus', 'Product Videos'],
    keywords: ['personalization', 'e-commerce', 'AI marketing', 'customer engagement', 'automation']
  }
];

export default function VideoEditorsAI() {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            🎬 AI Video Editors & Creators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your content with powerful AI video editing tools. Create, edit, and enhance videos 
            with cutting-edge artificial intelligence technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoEditorTools.map((tool) => (
            <AIToolCard
              key={tool.id}
              tool={tool}
              onViewDetails={setSelectedTool}
            />
          ))}
        </div>
      </div>

      {selectedTool && (
        <AIToolModal
          tool={{
            ...selectedTool,
            keywords: selectedTool.keywords || []
          }}
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}
    </div>
  );
}
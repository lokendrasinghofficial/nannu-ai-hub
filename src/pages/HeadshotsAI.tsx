import { useState } from 'react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';
import { Camera, Sparkles } from 'lucide-react';

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

const headshotTools: AITool[] = [
  {
    id: 'secta-ai',
    name: 'Secta AI',
    description: 'Creates ultra-realistic corporate headshots from casual selfies, tailored for LinkedIn and professional use.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://secta.ai',
    features: ['Corporate Headshots', 'LinkedIn Optimization', 'Professional Portraits'],
    keywords: ['Headshot', 'Corporate', 'Resume', 'LinkedIn', 'AI Portrait']
  },
  {
    id: 'aragon-ai',
    name: 'Aragon AI',
    description: 'Generates professional-style portraits optimized for business and networking platforms.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://aragon.ai',
    features: ['Business Portraits', 'Networking Photos', 'Professional Style'],
    keywords: ['LinkedIn', 'Business', 'Portrait', 'AI', 'Professional']
  },
  {
    id: 'headshotpro',
    name: 'HeadshotPro',
    description: 'Creates business headshots with customizable attire, backgrounds, and lighting for different industries.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://headshotpro.com',
    features: ['Customizable Attire', 'Industry-Specific', 'Background Options'],
    keywords: ['Business', 'Background', 'Corporate', 'AI', 'Resume']
  },
  {
    id: 'studioshot',
    name: 'StudioShot',
    description: 'Focused on team/company headshots, delivering uniform style across organizations.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://studioshot.com',
    features: ['Team Photos', 'Uniform Style', 'Company Branding'],
    keywords: ['Team', 'Studio', 'Business', 'Corporate', 'Consistency']
  },
  {
    id: 'fotor-headshot',
    name: 'Fotor AI Headshot Generator',
    description: 'Quick AI-powered headshot creation and photo retouching tool.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://fotor.com',
    features: ['Quick Generation', 'Photo Retouching', 'AI Enhancement'],
    keywords: ['Fotor', 'Retouch', 'Portrait', 'Profile', 'Editing']
  },
  {
    id: 'airbrush-ai',
    name: 'AirBrush AI',
    description: 'Enhances photos and generates polished headshots with AI-powered skin and lighting fixes.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://airbrush.com',
    features: ['Skin Enhancement', 'Lighting Fixes', 'Photo Polish'],
    keywords: ['Retouch', 'Selfie', 'Portrait', 'Face', 'Enhance']
  },
  {
    id: 'pfpmaker',
    name: 'PFPMaker',
    description: 'Generates headshots and profile pictures with automatic background removal and replacement.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://pfpmaker.com',
    features: ['Background Removal', 'Profile Pictures', 'Auto Enhancement'],
    keywords: ['PFP', 'Avatar', 'Background', 'Headshot', 'Profile']
  },
  {
    id: 'profilepicture-ai',
    name: 'ProfilePicture.AI',
    description: 'Creates avatars and headshots in multiple styles (formal, creative, casual).',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://profilepicture.ai',
    features: ['Multiple Styles', 'Formal & Casual', 'Avatar Creation'],
    keywords: ['Avatar', 'Headshot', 'Styles', 'AI', 'Portrait']
  },
  {
    id: 'artbreeder-portraits',
    name: 'Artbreeder',
    description: 'Lets users mix, tweak, and generate faces — good for unique headshots.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://artbreeder.com',
    features: ['Face Mixing', 'Customization', 'Unique Generation'],
    keywords: ['Faces', 'Portrait', 'Creative', 'Mix', 'Customize']
  },
  {
    id: 'artisse-ai',
    name: 'Artisse AI',
    description: 'Creates hyper-realistic portrait variations from user-uploaded selfies.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://artisse.ai',
    features: ['Hyper-Realistic', 'Portrait Variations', 'Selfie Enhancement'],
    keywords: ['Portrait', 'Realistic', 'Selfie', 'Variations', 'AI']
  },
  {
    id: 'generated-photos',
    name: 'Generated Photos',
    description: 'Offers a massive AI-generated human face dataset and portrait creator.',
    category: 'headshots',
    rating: 4.3,
    pricing: 'paid',
    url: 'https://generated.photos',
    features: ['Face Dataset', 'Portrait Creator', 'Diverse Options'],
    keywords: ['Dataset', 'AI Faces', 'Portrait', 'Generator', 'Photos']
  },
  {
    id: 'remini-ai',
    name: 'Remini AI',
    description: 'Turns selfies into studio-quality portraits with AI upscaling and enhancement.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://remini.ai',
    features: ['Studio Quality', 'AI Upscaling', 'Enhancement'],
    keywords: ['Enhance', 'Retouch', 'Selfie', 'Portrait', 'Clear']
  },
  {
    id: 'studioshot-ai',
    name: 'StudioShot AI',
    description: 'Delivers studio-style business portraits with professional backgrounds.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://studioshot.ai',
    features: ['Studio Style', 'Professional Backgrounds', 'Business Focus'],
    keywords: ['Studio', 'Portrait', 'Professional', 'Business', 'AI']
  },
  {
    id: 'deepai-portrait',
    name: 'DeepAI Portrait Generator',
    description: 'Simple AI-based portrait generator with basic styles.',
    category: 'headshots',
    pricing: 'free',
    rating: 4.0,
    url: 'https://deepai.org',
    features: ['Basic Styles', 'Simple Generation', 'Free Access'],
    keywords: ['Portrait', 'Free', 'Generator', 'Basic', 'AI']
  },
  {
    id: 'prophotos-ai',
    name: 'ProPhotos AI',
    description: 'Creates LinkedIn and resume-ready headshots from casual images.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://prophotos.ai',
    features: ['LinkedIn Ready', 'Resume Photos', 'Professional Conversion'],
    keywords: ['Resume', 'LinkedIn', 'Professional', 'Portrait', 'AI']
  },
  {
    id: 'midjourney-portraits',
    name: 'Midjourney',
    description: 'AI art generator, can make highly stylized and professional-looking portraits.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://midjourney.com',
    features: ['Stylized Portraits', 'High Quality', 'Artistic Style'],
    keywords: ['Midjourney', 'Stylized', 'Portrait', 'AI', 'Creative']
  },
  {
    id: 'stable-diffusion-portraits',
    name: 'Stable Diffusion + LoRAs',
    description: 'Open-source model with customizable LoRAs for hyper-realistic headshots and portraits.',
    category: 'headshots',
    pricing: 'free',
    rating: 4.5,
    url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    features: ['Open Source', 'Customizable', 'LoRA Support'],
    keywords: ['Stable Diffusion', 'Open Source', 'Portrait', 'AI', 'LoRA']
  },
  {
    id: 'dalle-3-portraits',
    name: 'DALL·E 3',
    description: 'AI image model from OpenAI that generates creative and realistic portraits.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.7,
    url: 'https://openai.com/dall-e-3',
    features: ['Creative Portraits', 'High Quality', 'OpenAI Model'],
    keywords: ['OpenAI', 'DALL·E', 'Portrait', 'AI', 'Generator']
  },
  {
    id: 'leonardo-ai-portraits',
    name: 'Leonardo AI',
    description: 'Strong at character and portrait design with customizable prompts.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.6,
    url: 'https://leonardo.ai',
    features: ['Character Design', 'Customizable Prompts', 'Portrait Focus'],
    keywords: ['Portrait', 'Character', 'Design', 'AI', 'Creative']
  },
  {
    id: 'canva-magic-studio',
    name: 'Canva Magic Studio',
    description: 'AI photo editing and portrait enhancement tool inside Canva\'s design platform.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://canva.com',
    features: ['Photo Editing', 'Portrait Enhancement', 'Design Integration'],
    keywords: ['Canva', 'Portrait', 'Editing', 'Profile', 'AI']
  },
  {
    id: 'tryiton-ai',
    name: 'TryItOn AI',
    description: 'Creates professional LinkedIn and dating app profile photos from selfies.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://tryiton.ai',
    features: ['LinkedIn Photos', 'Dating Profiles', 'Professional Style'],
    keywords: ['TryItOn', 'Profile', 'Dating', 'Headshot', 'AI']
  },
  {
    id: 'headpix',
    name: 'Headpix',
    description: 'Business headshot tool that provides corporate-style portraits with professional outfits.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://headpix.com',
    features: ['Corporate Style', 'Professional Outfits', 'Business Focus'],
    keywords: ['Headpix', 'Business', 'LinkedIn', 'AI', 'Portrait']
  },
  {
    id: 'photoai',
    name: 'PhotoAI',
    description: 'AI portrait service that trains on your selfies and generates multiple professional headshots.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://photoai.com',
    features: ['Custom Training', 'Multiple Headshots', 'Personalized'],
    keywords: ['PhotoAI', 'Custom', 'Portrait', 'AI', 'Headshot']
  },
  {
    id: 'human-generator',
    name: 'Human Generator',
    description: 'Generates realistic human portraits with customizable ethnicity, age, and clothing.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://humangenerator.com',
    features: ['Diverse Portraits', 'Age Customization', 'Ethnicity Options'],
    keywords: ['Human', 'Generator', 'Portrait', 'AI', 'Faces']
  },
  {
    id: 'hotpot-portrait',
    name: 'Hotpot AI Portrait Maker',
    description: 'Quick portrait and headshot creation with retouch features.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://hotpot.ai',
    features: ['Quick Creation', 'Retouch Features', 'Portrait Maker'],
    keywords: ['Hotpot', 'Portrait', 'Profile', 'AI', 'Retouch']
  },
  {
    id: 'avaturn',
    name: 'Avaturn',
    description: '3D avatar creator that also makes realistic headshot-style portraits.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://avaturn.me',
    features: ['3D Avatars', 'Realistic Style', 'Portrait Creation'],
    keywords: ['Avatar', '3D', 'Portrait', 'Profile', 'AI']
  },
  {
    id: 'avatar-ai-codeonce',
    name: 'Avatar AI (by CodeOnce)',
    description: 'Creates hundreds of AI-generated avatars and headshots in various styles.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://avatarai.me',
    features: ['Multiple Styles', 'Bulk Generation', 'Avatar Variety'],
    keywords: ['Avatar', 'Headshot', 'Styles', 'AI', 'Portrait']
  },
  {
    id: 'faceapp-ai',
    name: 'FaceApp AI',
    description: 'Popular selfie-editing app that enhances photos into professional portraits.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://faceapp.com',
    features: ['Selfie Editing', 'Professional Enhancement', 'Popular App'],
    keywords: ['FaceApp', 'Portrait', 'Editing', 'AI', 'Retouch']
  },
  {
    id: 'headshot-ai-studio',
    name: 'Headshot AI (headshotai.studio)',
    description: 'Trains on your selfies and generates high-quality business headshots.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://headshotai.studio',
    features: ['Custom Training', 'Business Quality', 'High-End Results'],
    keywords: ['HeadshotAI', 'Business', 'LinkedIn', 'Resume', 'AI']
  },
  {
    id: 'dreampic-ai',
    name: 'DreamPic.AI',
    description: 'Generates creative and professional headshots in multiple styles.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://dreampic.ai',
    features: ['Creative Styles', 'Professional Quality', 'Style Variety'],
    keywords: ['DreamPic', 'Portrait', 'Styles', 'AI', 'Profile']
  },
  {
    id: 'facetune-ai',
    name: 'Facetune AI',
    description: 'AI-powered retouching app that improves selfies into professional-looking headshots.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://facetune.com',
    features: ['AI Retouching', 'Professional Look', 'Selfie Enhancement'],
    keywords: ['Facetune', 'Retouch', 'Portrait', 'AI', 'Selfie']
  },
  {
    id: 'avatarify-ai',
    name: 'Avatarify AI',
    description: 'AI avatar and headshot generator with realistic outputs.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://avatarify.com',
    features: ['Avatar Generation', 'Realistic Output', 'Headshot Creation'],
    keywords: ['Avatar', 'Portrait', 'AI', 'Face', 'Generator']
  },
  {
    id: 'lensa-ai',
    name: 'Lensa AI',
    description: 'Known for "Magic Avatars" — generates stylized portraits and headshots.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://lensa-ai.com',
    features: ['Magic Avatars', 'Stylized Portraits', 'Popular App'],
    keywords: ['Lensa', 'Portrait', 'AI', 'Avatar', 'Selfie']
  },
  {
    id: 'magic-headshots',
    name: 'Magic Studio AI (MagicHeadshots)',
    description: 'Creates professional business portraits with consistent lighting.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://magicstudio.com',
    features: ['Professional Quality', 'Consistent Lighting', 'Business Focus'],
    keywords: ['Magic', 'Studio', 'Headshot', 'AI', 'Portrait']
  },
  {
    id: 'bored-humans-face',
    name: 'BoredHumans Face Generator',
    description: 'Simple free AI tool to generate faces for portraits and avatars.',
    category: 'headshots',
    pricing: 'free',
    rating: 3.9,
    url: 'https://boredhumans.com',
    features: ['Free Generation', 'Simple Interface', 'Face Creation'],
    keywords: ['Faces', 'Free', 'Generator', 'Portrait', 'AI']
  },
  {
    id: 'gencraft-portraits',
    name: 'Gencraft',
    description: 'AI image generator with strong portrait/headshot modes.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://gencraft.com',
    features: ['Portrait Modes', 'AI Generation', 'Creative Options'],
    keywords: ['Gencraft', 'Portrait', 'AI', 'Creative', 'Generator']
  },
  {
    id: 'dreamup-portraits',
    name: 'DreamUp (DeviantArt AI)',
    description: 'AI image generation with portrait/headshot creation features.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://dreamup.ai',
    features: ['Portrait Creation', 'Creative Community', 'AI Generation'],
    keywords: ['DreamUp', 'Portrait', 'AI', 'Creative', 'DeviantArt']
  },
  {
    id: 'photosonic-ai',
    name: 'Photosonic AI (by Writesonic)',
    description: 'Creates realistic portraits and avatars from prompts.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://photosonic.writesonic.com',
    features: ['Realistic Portraits', 'Prompt-Based', 'Avatar Creation'],
    keywords: ['Photosonic', 'Portrait', 'AI', 'Avatar', 'Creative']
  },
  {
    id: 'ready-player-me',
    name: 'Ready Player Me',
    description: 'Builds avatars and realistic headshots for VR, AR, and professional use.',
    category: 'headshots',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://readyplayer.me',
    features: ['VR/AR Avatars', 'Professional Use', 'Realistic Quality'],
    keywords: ['Avatar', 'ReadyPlayerMe', 'Portrait', 'AI', '3D']
  },
  {
    id: 'vana-headshot',
    name: 'Headshot Generator by Vana',
    description: 'AI portrait tool that generates multiple headshots with business attire.',
    category: 'headshots',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://portrait.vana.com',
    features: ['Business Attire', 'Multiple Options', 'Professional Focus'],
    keywords: ['Vana', 'Headshot', 'Portrait', 'AI', 'Professional']
  }
];

export default function HeadshotsAI() {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-card/30 via-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Camera className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                🧑‍💻 AI Headshot & Portrait Tools
              </h1>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your selfies into professional headshots with cutting-edge AI technology. 
              Perfect for LinkedIn, resumes, and professional profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headshotTools.map((tool) => (
              <AIToolCard
                key={tool.id}
                tool={tool}
                onViewDetails={setSelectedTool}
              />
            ))}
          </div>
        </div>
      </section>

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
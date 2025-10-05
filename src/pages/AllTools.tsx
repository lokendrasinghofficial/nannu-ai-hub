import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, TrendingUp, Grid } from 'lucide-react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// ALL AI TOOLS FROM EVERY CATEGORY - 200+ TOOLS
// Complete collection of AI tools across all categories
const allAITools = [
  // TEXT & LANGUAGE AI TOOLS (27 tools)
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI, adept at generating human-like text across various domains.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Conversational AI', 'GPT-4', 'Writing Assistant', 'Code Generation']
  },
  {
    id: 'claude',
    name: 'Claude by Anthropic',
    description: 'A large language model focusing on safety and usability, suitable for diverse writing tasks.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://claude.ai',
    features: ['AI Assistant', 'Safe AI', 'Writing Support', 'Research Tool']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s AI offering with capabilities in text generation, summarization, and more.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://gemini.google.com',
    features: ['AI Chatbot', 'Text Summarization', 'Research Assistant', 'Video Creation']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI writing assistant tailored for marketers, bloggers, and content creators.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://jasper.ai',
    features: ['Copywriting', 'Blog Writing', 'SEO', 'Content Marketing']
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'Generates high-quality content for blogs, ads, and social media.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://writesonic.com',
    features: ['Content Creation', 'Marketing Copy', 'SEO', 'Blog Posts']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI tool for generating marketing copy, emails, and more.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://copy.ai',
    features: ['Marketing Copy', 'Email Templates', 'Social Media Content', 'Ad Copy']
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing assistant for creating content quickly and efficiently.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://rytr.me',
    features: ['Content Generation', 'Blog Posts', 'Product Descriptions', 'Social Media']
  },
  {
    id: 'sudowrite',
    name: 'Sudowrite',
    description: 'AI tool designed for fiction writers to enhance creativity and storytelling.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://sudowrite.com',
    features: ['Fiction Writing', 'Storytelling', 'Creative Writing', 'Character Development']
  },
  {
    id: 'frase',
    name: 'Frase',
    description: 'AI-powered content and SEO research tool.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://frase.io',
    features: ['SEO', 'Content Research', 'SERP Analysis', 'Blog Writing']
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI writing assistant that helps rewrite and improve text.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://wordtune.com',
    features: ['Text Improvement', 'Rewriting', 'Grammar Check', 'Writing Assistant']
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI paraphrasing tool for rewriting and improving text.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://quillbot.com',
    features: ['Paraphrasing', 'Text Improvement', 'Grammar Check', 'Rewriting']
  },
  {
    id: 'anyword',
    name: 'Anyword',
    description: 'AI copywriting tool optimized for performance and conversion.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://anyword.com',
    features: ['Copywriting', 'Marketing', 'Conversion Optimization', 'Ad Copy']
  },
  {
    id: 'writer',
    name: 'Writer',
    description: 'AI writing assistant for teams and enterprises.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://writer.com',
    features: ['Team Collaboration', 'Enterprise Writing', 'Content Consistency', 'Brand Voice']
  },
  {
    id: 'hypotenuse',
    name: 'Hypotenuse',
    description: 'AI content generator focused on e-commerce and product descriptions.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.0,
    url: 'https://hypotenuse.ai',
    features: ['E-commerce', 'Product Descriptions', 'Content Generation', 'SEO']
  },
  {
    id: 'copysmith',
    name: 'CopySmith',
    description: 'AI tool for generating marketing copy and product descriptions.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://copysmith.ai',
    features: ['Marketing Copy', 'Product Descriptions', 'SEO', 'Content Creation']
  },
  {
    id: 'ink-editor',
    name: 'INK Editor',
    description: 'AI-powered writing assistant with SEO optimization.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://inkforall.com',
    features: ['SEO', 'Content Writing', 'Optimization', 'Blog Posts']
  },
  {
    id: 'scalenut',
    name: 'Scalenut',
    description: 'AI writing tool for creating long-form content and SEO optimization.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://scalenut.com',
    features: ['Long-form Content', 'SEO', 'Content Strategy', 'Blog Writing']
  },
  {
    id: 'textcortex',
    name: 'TextCortex',
    description: 'AI writing assistant for generating content across various platforms.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 3.8,
    url: 'https://textcortex.com',
    features: ['Content Generation', 'Multi-platform', 'Writing Assistant', 'Marketing']
  },
  {
    id: 'peppertype',
    name: 'Peppertype',
    description: 'AI tool for creating high-quality content quickly.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://peppertype.ai',
    features: ['Content Creation', 'Marketing Copy', 'Blog Writing', 'SEO']
  },
  {
    id: 'wordhero',
    name: 'WordHero',
    description: 'AI content generator for various writing needs.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.8,
    url: 'https://wordhero.co',
    features: ['Content Generation', 'Blog Writing', 'Marketing Copy', 'SEO']
  },
  {
    id: 'ai-writer',
    name: 'AI Writer',
    description: 'AI tool for generating and editing written content.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.7,
    url: 'https://ai-writer.com',
    features: ['Content Generation', 'Editing', 'Writing Assistant', 'Blog Posts']
  },
  {
    id: 'contentbot',
    name: 'ContentBot',
    description: 'AI writing assistant for creating content quickly.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.6,
    url: 'https://contentbot.ai',
    features: ['Content Creation', 'Writing Assistant', 'Blog Posts', 'Marketing Copy']
  },
  {
    id: 'novelcrafter',
    name: 'Novelcrafter',
    description: 'AI tool for authors to plan and write novels with ease.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://novelcrafter.com',
    features: ['Novel Writing', 'Story Planning', 'Character Development', 'Plot Structuring']
  },
  {
    id: 'raptorwrite',
    name: 'RaptorWrite',
    description: 'AI writing tool focused on fiction and creative writing.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 3.9,
    url: 'https://raptorwrite.com',
    features: ['Creative Writing', 'Fiction', 'Storytelling', 'Plot Development']
  },
  {
    id: 'textfx',
    name: 'TextFX',
    description: 'AI-powered text editor for enhancing writing quality.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 3.7,
    url: 'https://textfx.withgoogle.com',
    features: ['Text Editing', 'Writing Enhancement', 'Grammar Check', 'Style Improvement']
  },
  {
    id: 'scribe-ai',
    name: 'Scribe AI',
    description: 'AI tool for transcribing and summarizing content.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.8,
    url: 'https://scribe.rip',
    features: ['Transcription', 'Summarization', 'Content Creation', 'Audio to Text']
  },
  {
    id: 'slick-write',
    name: 'Slick Write',
    description: 'AI-powered writing tool for grammar and style checking.',
    category: 'text',
    pricing: 'free' as const,
    rating: 3.5,
    url: 'https://slickwrite.com',
    features: ['Grammar Check', 'Style Improvement', 'Writing Assistant', 'Text Analysis']
  },

  // IMAGE & VISION AI TOOLS (34 tools)
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'A high-quality, stylized text → image generator used via Discord or web, known for artistic output.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://midjourney.com',
    features: ['Text-to-Image', 'Artistic', 'Stylized', 'Prompt Control']
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open-source diffusion model for generating images from text; supports inpainting and custom models.',
    category: 'image',
    pricing: 'free' as const,
    rating: 4.8,
    url: 'https://stability.ai',
    features: ['Diffusion', 'Open Source', 'Image Editing', 'Community Models']
  },
  {
    id: 'dalle-3',
    name: 'DALL·E 3',
    description: 'Early leader in text-to-image; good quality, safe content filters; widely used via API or web.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://labs.openai.com',
    features: ['Text-to-Image', 'API', 'Safety Filters', 'Quality']
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'A text-to-image model notable for producing legible text in generated images.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://ideogram.ai',
    features: ['Text-to-Image', 'Legible Text', 'Prompt Clarity', 'Design-friendly']
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    description: 'Creative image generation with strong tools for concept art, imaginative visuals.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://leonardo.ai',
    features: ['Concept Art', 'Imagination', 'Visual Fidelity', 'Prompt Tools']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Adobe\'s suite of generative image tools integrated with Creative Cloud.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://firefly.adobe.com',
    features: ['Generative Art', 'Photo Editing', 'Integration', 'Creative Cloud']
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'Offers image generation, editing, video editing / generation; used in creative industries.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://runwayml.com',
    features: ['Image Editing', 'Video Generation', 'Multimodal', 'Effects']
  },
  {
    id: 'nightcafe',
    name: 'NightCafe',
    description: 'Platform offering many different generative models, plus community features, style transfers.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://creator.nightcafe.studio',
    features: ['Community Art', 'Multiple Models', 'Style Transfer', 'Text-to-Image']
  },
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'A collaborative tool for "breeding" images — combining traits from existing images.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://artbreeder.com',
    features: ['Image Remix', 'StyleGAN', 'Variation', 'Landscape & Portrait']
  },
  {
    id: 'canva-ai',
    name: 'Canva AI Art Generator',
    description: 'Simple tool for generating images via text prompts inside Canva.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://canva.com/ai-image-generator',
    features: ['Social Graphics', 'Templates', 'Text Prompt', 'Ease of Use']
  },
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    description: 'AI tool specialized in removing backgrounds from images automatically.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://remove.bg',
    features: ['Background Removal', 'Image Masking', 'Cutout', 'Transparent']
  },
  {
    id: 'clipdrop',
    name: 'ClipDrop',
    description: 'Offers tools: background removal, object extraction, AR "dropping" images into scenes.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://clipdrop.co',
    features: ['Object Extraction', 'Background Removal', 'AR Overlay', 'Tools']
  },
  {
    id: 'photoroom',
    name: 'PhotoRoom',
    description: 'AI app for removing or editing backgrounds, making product images clean and polished.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://photoroom.com',
    features: ['Product Photos', 'Background Removal', 'E-commerce', 'Clean Images']
  },
  {
    id: 'craiyon',
    name: 'Craiyon',
    description: 'Very accessible, free-ish tool for fun images; less polished but good for experimenting.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 3.8,
    url: 'https://craiyon.com',
    features: ['Sketchy Art', 'Free Access', 'Experimental', 'Prompt Based']
  },
  {
    id: 'deepai',
    name: 'DeepAI',
    description: 'Offers simple interface to generate images, also some editing tools.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 3.9,
    url: 'https://deepai.org',
    features: ['Beginner Friendly', 'Quick Generation', 'Basic Editing', 'Web UI']
  },
  {
    id: 'recraft',
    name: 'Recraft',
    description: 'Focused on design layouts, vector graphics, composition using generated or edited images.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://recraft.ai',
    features: ['Graphic Design', 'Templates', 'Vector', 'Layouts']
  },
  {
    id: 'freepik-ai',
    name: 'Freepik AI Image Generator',
    description: 'Combines several AI image-generation models into one platform.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://freepik.com/ai/image-generator',
    features: ['Multiple Models', 'Illustration', 'Vectors', 'Web Dashboard']
  },
  {
    id: 'comfyui',
    name: 'ComfyUI',
    description: 'A node-based interface for chaining together modules to build custom image workflows.',
    category: 'image',
    pricing: 'free' as const,
    rating: 4.6,
    url: 'https://github.com/comfyanonymous/ComfyUI',
    features: ['Workflow', 'Modules', 'ControlNet', 'Diffusion']
  },
  {
    id: 'radiant-photo',
    name: 'Radiant Photo 2',
    description: 'AI-assisted photo editor: one-click photo optimization plus fine-tuning.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://radiantimaginglabs.com',
    features: ['Photo Edit', 'One-click Optimize', 'Local Processing', 'Privacy']
  },
  {
    id: 'flux-1',
    name: 'Flux.1',
    description: 'A newer open model meant as an alternative to Stable Diffusion.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://blackforestlabs.ai',
    features: ['Alternative Diffusion', 'Open Model', 'Customization', 'Visual Quality']
  },
  {
    id: 'dreamstudio',
    name: 'DreamStudio',
    description: 'Web interface for Stable Diffusion, made by Stability AI.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://dreamstudio.ai',
    features: ['Stable Diffusion', 'Web UI', 'Prompt Generation', 'Editing']
  },
  {
    id: 'luma-ai',
    name: 'Luma AI',
    description: 'AI tool for reconstructing 3D scenes, view synthesis, novel views from images.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://lumalabs.ai',
    features: ['3D Reconstruction', 'View Synthesis', 'Novel View', 'Depth']
  },
  {
    id: 'fotor-ai',
    name: 'Fotor AI',
    description: 'Online photo editor + AI image generator, style transfer, retouching.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://fotor.com',
    features: ['Photo Edit', 'Style Transfer', 'AI Art', 'Online Editor']
  },
  {
    id: 'hotpot-ai',
    name: 'Hotpot AI',
    description: 'AI art & design toolkit: image creation, background removal, mockups, portraits.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://hotpot.ai',
    features: ['AI Art', 'Background Removal', 'Mockups', 'Portraits']
  },
  {
    id: 'cvat',
    name: 'CVAT',
    description: 'Web-based open-source tool for annotating images/videos for training computer vision models.',
    category: 'image',
    pricing: 'free' as const,
    rating: 4.2,
    url: 'https://cvat.ai',
    features: ['Annotation', 'Dataset Labeling', 'Object Detection', 'Segmentation']
  },
  {
    id: 'google-vision',
    name: 'Google Cloud Vision',
    description: 'Google\'s vision APIs for OCR, image labeling, moderation, plus generative editing.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://cloud.google.com/vision',
    features: ['OCR', 'Object Detection', 'Generative Edit', 'API']
  },
  {
    id: 'reve-ai',
    name: 'Rêve AI',
    description: 'Newer image generator with good adherence to prompts; aimed at better prompt understanding.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://reve.ai',
    features: ['Prompt Fidelity', 'Realism', 'New Model', 'Creative Control']
  },
  {
    id: 'gpt-4o-image',
    name: 'GPT-4o Image Generation',
    description: 'OpenAI\'s multi-modal model; integrates image generation/editing with ChatGPT UI.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://chat.openai.com',
    features: ['Multi-modal', 'Prompt + Image', 'Editing', 'Integration']
  },
  {
    id: 'pixray',
    name: 'Pixray',
    description: 'A flexible text → image tool / framework that allows many adjustments, chaining, styles.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://pixray.gob.cl',
    features: ['Custom Pipeline', 'Prompt Variation', 'Artistic', 'Style Control']
  },
  {
    id: 'deep-dream',
    name: 'Deep Dream Generator',
    description: 'AI tool that produces dreamlike surreal images by emphasizing patterns in images.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 3.8,
    url: 'https://deepdreamgenerator.com',
    features: ['Surreal Art', 'Neural Patterns', 'Style Exaggeration', 'Dream Effects']
  },
  {
    id: 'faceapp',
    name: 'FaceApp',
    description: 'Tools that apply AI transformations to human faces (aging, swaps, style, filters).',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://faceapp.com',
    features: ['Face Editing', 'Style Transfer', 'Age Filter', 'Face Swap']
  },
  {
    id: 'neural-love',
    name: 'Neural.love',
    description: 'AI image & video enhancement: upscaling, colorizing, restoration, generation.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://neural.love',
    features: ['Upscale', 'Colorize', 'Restoration', 'AI Art']
  },
  {
    id: 'prisma-ai',
    name: 'Prisma AI',
    description: 'Popular app for applying AI art filters to photos, transforming them into artistic styles.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://prisma-ai.com',
    features: ['Art Filters', 'Style Transfer', 'Mobile App', 'Photo Enhancement']
  },

  // VOICE & AUDIO AI TOOLS (50+ tools)
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Most realistic AI voice generator with voice cloning, multilingual support, and emotional speech.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Multilingual Support', 'Emotional Speech', 'API Access']
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    description: 'Professional AI voiceover platform with 120+ realistic voices in 20+ languages.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://murf.ai',
    features: ['120+ Voices', '20+ Languages', 'Voice Editing', 'Commercial Use']
  },
  {
    id: 'speechify',
    name: 'Speechify',
    description: 'AI-powered text-to-speech app that reads any text aloud with natural voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://speechify.com',
    features: ['Document Reading', 'Web Page Reading', 'Speed Control', 'Highlighting']
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    description: 'Real-time voice cloning and speech synthesis platform for developers.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://www.resemble.ai',
    features: ['Real-time Cloning', 'Custom Voices', 'Developer API', 'Voice Security']
  },
  {
    id: 'play-ht',
    name: 'Play.ht',
    description: 'AI voice generator with 600+ ultra-realistic voices in 142+ languages.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://play.ht',
    features: ['600+ Voices', '142+ Languages', 'Voice Cloning', 'SSML Support']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video and podcast editing with AI voice cloning and text-based editing.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://www.descript.com',
    features: ['Text-based Editing', 'Voice Cloning', 'Transcription', 'Collaboration']
  },
  {
    id: 'wellsaid',
    name: 'WellSaid Labs',
    description: 'Enterprise AI voice platform with custom voice avatars and natural speech synthesis.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://wellsaidlabs.com',
    features: ['Voice Avatars', 'Enterprise Features', 'Team Collaboration', 'Brand Voices']
  },
  {
    id: 'lovo',
    name: 'LOVO AI',
    description: 'AI voice generator and video editing platform with 500+ voices in 100+ languages.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://lovo.ai',
    features: ['500+ Voices', 'Video Editing', 'AI Writer', 'Voice Cloning']
  },
  {
    id: 'replica-studios',
    name: 'Replica Studios',
    description: 'AI voice actors for games, film, and digital media with performance-driven voice synthesis.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://replicastudios.com',
    features: ['Voice Acting', 'Emotional Range', 'Character Voices', 'Game Integration']
  },
  {
    id: 'voice123',
    name: 'Voice123 AI',
    description: 'AI-powered voice marketplace connecting clients with voice talent and AI voice generation.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://voice123.com',
    features: ['Voice Marketplace', 'AI Generation', 'Talent Matching', 'Project Management']
  },
  {
    id: 'synthesia-voice',
    name: 'Synthesia Voice',
    description: 'AI voice generation component of Synthesia platform, offering natural voices for AI avatar videos.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://www.synthesia.io',
    features: ['Avatar Sync', 'Natural Voices', 'Multiple Languages', 'Video Integration']
  },
  {
    id: 'fliki',
    name: 'Fliki',
    description: 'AI video and voice generator that creates videos from text with realistic voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://fliki.ai',
    features: ['Text-to-Video', 'Voice Generation', 'Auto Visuals', 'Music Library']
  },
  {
    id: 'narakeet',
    name: 'Narakeet',
    description: 'Text-to-speech and video creation platform with 700+ voices in 90+ languages.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://www.narakeet.com',
    features: ['700+ Voices', 'PowerPoint Integration', '90+ Languages', 'Auto Timing']
  },
  {
    id: 'naturalreaders',
    name: 'NaturalReader',
    description: 'AI text-to-speech software with OCR capabilities, dyslexia support, and natural voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://www.naturalspeech.com',
    features: ['OCR Reading', 'Dyslexia Support', 'Document Reading', 'Learning Aid']
  },
  {
    id: 'clipchamp-voice',
    name: 'Clipchamp Voice',
    description: 'Microsoft\'s video editor with integrated AI text-to-speech for video narration.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://clipchamp.com',
    features: ['Video Integration', 'Microsoft 365', 'Auto Sync', 'Cloud Storage']
  },
  {
    id: 'voice-ai',
    name: 'Voice.ai',
    description: 'Real-time voice changer and AI voice cloning for gaming, streaming, and online communication.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://voice.ai',
    features: ['Real-time Voice Change', 'Celebrity Voices', 'Gaming Integration', 'Streaming Support']
  },
  {
    id: 'voicemod',
    name: 'Voicemod',
    description: 'Real-time voice changer and soundboard with AI voices, effects, and custom voice creation.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://www.voicemod.net',
    features: ['Real-time Effects', 'Voice Lab', 'Soundboard', 'Game Integration']
  },
  {
    id: 'uberduck',
    name: 'Uberduck',
    description: 'AI voice generation and cloning platform with celebrity voices, custom voice training, and API access.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://uberduck.ai',
    features: ['Celebrity Voices', 'Custom Training', 'API Access', 'Voice Cloning']
  },
  {
    id: 'fakeyou',
    name: 'FakeYou',
    description: 'Text-to-speech platform with thousands of celebrity and character voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://fakeyou.com',
    features: ['Celebrity Voices', 'Character Voices', 'Large Library', 'Community Voices']
  },
  {
    id: 'coqui-ai',
    name: 'Coqui AI',
    description: 'Open-source voice AI platform for voice cloning and speech synthesis.',
    category: 'voice',
    pricing: 'free' as const,
    rating: 4.2,
    url: 'https://coqui.ai',
    features: ['Open Source', 'Voice Cloning', 'Speech Synthesis', 'Developer Friendly']
  },
  {
    id: 'tortoise-tts',
    name: 'Tortoise TTS',
    description: 'High-quality text-to-speech system focused on voice cloning with excellent results.',
    category: 'voice',
    pricing: 'free' as const,
    rating: 4.3,
    url: 'https://github.com/neonbjb/tortoise-tts',
    features: ['High Quality', 'Voice Cloning', 'Open Source', 'Research Grade']
  },
  {
    id: 'bark-suno',
    name: 'Bark by Suno',
    description: 'Generative audio model that can create highly realistic, multilingual speech.',
    category: 'voice',
    pricing: 'free' as const,
    rating: 4.4,
    url: 'https://github.com/suno-ai/bark',
    features: ['Generative Audio', 'Multilingual', 'Realistic Speech', 'Open Source']
  },
  {
    id: 'valle-x',
    name: 'VALL-E X',
    description: 'Microsoft\'s neural codec language model for zero-shot voice synthesis.',
    category: 'voice',
    pricing: 'free' as const,
    rating: 4.1,
    url: 'https://vallex-demo.github.io',
    features: ['Zero-shot Synthesis', 'Neural Codec', 'Microsoft Research', 'High Quality']
  },
  {
    id: 'speechelo',
    name: 'Speechelo',
    description: 'Text-to-speech software with human-like voices and breathing sounds.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://speechelo.com',
    features: ['Human-like Voices', 'Breathing Sounds', 'Multiple Languages', 'Commercial License']
  },
  {
    id: 'voicera',
    name: 'Voicera',
    description: 'AI voice synthesis platform for creating natural-sounding voiceovers.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.8,
    url: 'https://voicera.io',
    features: ['Voice Synthesis', 'Voiceovers', 'Natural Sound', 'Easy Use']
  },
  {
    id: 'listnr',
    name: 'Listnr',
    description: 'AI voice generator and podcast hosting platform with text-to-speech capabilities.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://listnr.tech',
    features: ['Podcast Hosting', 'Text-to-Speech', 'Voice Generation', 'Audio Editing']
  },
  {
    id: 'voicely',
    name: 'Voicely',
    description: 'Cloud-based text-to-speech platform with multiple voice options.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.7,
    url: 'https://voicely.io',
    features: ['Cloud-based', 'Multiple Voices', 'Text-to-Speech', 'API Access']
  },
  {
    id: 'neospeech',
    name: 'NeoSpeech',
    description: 'Text-to-speech technology provider with natural-sounding voices.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://neospeech.com',
    features: ['Natural Voices', 'TTS Technology', 'Multiple Languages', 'Enterprise Solutions']
  },
  {
    id: 'cereproc',
    name: 'CereProc',
    description: 'Text-to-speech technology with character voices and emotional expression.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 4.0,
    url: 'https://cereproc.com',
    features: ['Character Voices', 'Emotional Expression', 'Custom Voices', 'SDK Available']
  },
  {
    id: 'amazon-polly',
    name: 'Amazon Polly',
    description: 'AWS text-to-speech service that turns text into lifelike speech.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://aws.amazon.com/polly',
    features: ['AWS Integration', 'Lifelike Speech', 'Multiple Languages', 'SSML Support']
  },
  {
    id: 'google-tts',
    name: 'Google Text-to-Speech',
    description: 'Google\'s cloud text-to-speech API with natural-sounding voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://cloud.google.com/text-to-speech',
    features: ['Google Cloud', 'Natural Voices', 'API Integration', 'WaveNet Technology']
  },
  {
    id: 'azure-speech',
    name: 'Azure Cognitive Services Speech',
    description: 'Microsoft\'s speech services including text-to-speech and speech-to-text.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://azure.microsoft.com/services/cognitive-services/speech-services',
    features: ['Microsoft Azure', 'Speech Services', 'Neural Voices', 'Custom Voice']
  },
  {
    id: 'ibm-watson-tts',
    name: 'IBM Watson Text to Speech',
    description: 'IBM\'s AI-powered text-to-speech service with expressive voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://www.ibm.com/watson/services/text-to-speech',
    features: ['IBM Watson', 'Expressive Voices', 'SSML Support', 'Neural Voices']
  },
  {
    id: 'ttsmp3',
    name: 'TTSMp3',
    description: 'Free online text-to-speech converter with multiple languages.',
    category: 'voice',
    pricing: 'free' as const,
    rating: 3.5,
    url: 'https://ttsmp3.com',
    features: ['Free Online', 'Multiple Languages', 'MP3 Download', 'Simple Interface']
  },
  {
    id: 'acapela',
    name: 'Acapela Group',
    description: 'Voice solutions provider with personalized and expressive digital voices.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.8,
    url: 'https://acapela-group.com',
    features: ['Personalized Voices', 'Expressive Speech', 'Voice Solutions', 'Multiple Languages']
  },
  {
    id: 'ivona',
    name: 'IVONA Text-to-Speech',
    description: 'High-quality text-to-speech voices (now part of Amazon Polly).',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://ivona.com',
    features: ['High Quality', 'Natural Voices', 'Amazon Integration', 'Multiple Languages']
  },
  {
    id: 'responsivevoice',
    name: 'ResponsiveVoice',
    description: 'HTML5-based text-to-speech library for websites and applications.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.6,
    url: 'https://responsivevoice.org',
    features: ['HTML5 TTS', 'Web Integration', 'Multiple Voices', 'Easy Implementation']
  },
  {
    id: 'speechkit',
    name: 'SpeechKit',
    description: 'Yandex\'s speech technology for voice synthesis and recognition.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.9,
    url: 'https://yandex.com/dev/speechkit',
    features: ['Yandex Technology', 'Voice Synthesis', 'Speech Recognition', 'API Access']
  },
  {
    id: 'voicerss',
    name: 'Voice RSS',
    description: 'Text-to-speech API service with simple integration.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.4,
    url: 'https://voicerss.org',
    features: ['Simple API', 'Text-to-Speech', 'Multiple Languages', 'Easy Integration']
  },
  {
    id: 'ispeech',
    name: 'iSpeech',
    description: 'Text-to-speech and speech recognition API provider.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.5,
    url: 'https://ispeech.org',
    features: ['TTS and STT', 'API Provider', 'Mobile SDKs', 'Cloud Service']
  },
  {
    id: 'oddcast',
    name: 'Oddcast TTS',
    description: 'Avatar-based text-to-speech technology with animated characters.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.3,
    url: 'https://oddcast.com',
    features: ['Avatar TTS', 'Animated Characters', 'Interactive Voices', 'Web Integration']
  },
  {
    id: 'speak4me',
    name: 'Speak4Me',
    description: 'Text-to-speech app with reading support for students and professionals.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.8,
    url: 'https://speak4me.co',
    features: ['Reading Support', 'Student Focus', 'Professional Use', 'Mobile App']
  },
  {
    id: 'voicemaker',
    name: 'VoiceMaker',
    description: 'Online text-to-speech converter with various voice options.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 3.7,
    url: 'https://voicemaker.in',
    features: ['Online Converter', 'Various Voices', 'Multiple Languages', 'Audio Download']
  },
  {
    id: 'textaloud',
    name: 'TextAloud',
    description: 'Desktop text-to-speech software for Windows with natural voices.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.6,
    url: 'https://textaloud.com',
    features: ['Desktop Software', 'Windows Compatible', 'Natural Voices', 'File Reading']
  },
  {
    id: 'balabolka',
    name: 'Balabolka',
    description: 'Free text-to-speech program that can use various speech synthesizers.',
    category: 'voice',
    pricing: 'free' as const,
    rating: 3.5,
    url: 'http://balabolka.site',
    features: ['Free Software', 'Multiple Synthesizers', 'File Support', 'Windows App']
  },
  {
    id: 'naturalsoft',
    name: 'NaturalSoft',
    description: 'Text-to-speech software with natural-sounding voices for various applications.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 3.4,
    url: 'https://naturalsoft.com',
    features: ['Natural Voices', 'Software Solutions', 'Multiple Applications', 'Voice Quality']
  },

  // DATA & ANALYTICS AI TOOLS (40 tools)
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Industry-leading data visualization platform with AI-powered insights and natural language queries.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://tableau.com',
    features: ['Data Visualization', 'AI Analytics', 'Natural Language', 'Enterprise Integration']
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    description: 'Microsoft\'s business analytics solution with AI-driven insights and automated data preparation.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://powerbi.microsoft.com',
    features: ['AI Insights', 'Auto ML', 'Natural Language Q&A', 'Real-time Analytics']
  },
  {
    id: 'datarobot',
    name: 'DataRobot',
    description: 'Automated machine learning platform that accelerates data science workflows.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://datarobot.com',
    features: ['AutoML', 'Model Deployment', 'Predictive Analytics', 'MLOps']
  },
  {
    id: 'h2o-ai',
    name: 'H2O.ai',
    description: 'Open source machine learning and AI platform for data scientists and developers.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://h2o.ai',
    features: ['AutoML', 'Open Source', 'Scalable ML', 'Feature Engineering']
  },
  {
    id: 'alteryx',
    name: 'Alteryx',
    description: 'Self-service data analytics platform with drag-and-drop interface and AI capabilities.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://alteryx.com',
    features: ['Data Preparation', 'Predictive Analytics', 'Spatial Analytics', 'Machine Learning']
  },
  {
    id: 'qlik-sense',
    name: 'Qlik Sense',
    description: 'AI-powered business intelligence platform with associative analytics engine.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://qlik.com',
    features: ['Associative Analytics', 'AI Insights', 'Self-Service BI', 'Data Discovery']
  },
  {
    id: 'looker',
    name: 'Looker',
    description: 'Google Cloud\'s modern BI platform with modeling language and embedded analytics.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://looker.com',
    features: ['LookML', 'Embedded Analytics', 'Data Platform', 'Real-time Insights']
  },
  {
    id: 'sisense',
    name: 'Sisense',
    description: 'AI-driven analytics platform that simplifies complex data for business users.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://sisense.com',
    features: ['AI Analytics', 'Data Fusion', 'Embedded BI', 'Natural Language']
  },
  {
    id: 'domo',
    name: 'Domo',
    description: 'Cloud-native business intelligence platform with real-time data integration.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://domo.com',
    features: ['Real-time Data', 'Mobile BI', 'Data Integration', 'Executive Dashboards']
  },
  {
    id: 'thoughtspot',
    name: 'ThoughtSpot',
    description: 'Search-driven analytics platform that lets users search data like Google.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://thoughtspot.com',
    features: ['Search Analytics', 'Self-Service BI', 'Embedded Analytics', 'AI Insights']
  },
  {
    id: 'palantir-foundry',
    name: 'Palantir Foundry',
    description: 'Data integration and analytics platform for large-scale enterprise operations.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.0,
    url: 'https://palantir.com',
    features: ['Data Integration', 'Large Scale Analytics', 'AI/ML', 'Decision Support']
  },
  {
    id: 'databricks',
    name: 'Databricks',
    description: 'Unified analytics platform for big data and machine learning with collaborative notebooks.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://databricks.com',
    features: ['Unified Analytics', 'MLflow', 'Delta Lake', 'Collaborative ML']
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    description: 'Cloud data platform with built-in analytics and machine learning capabilities.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://snowflake.com',
    features: ['Cloud Data Warehouse', 'Data Sharing', 'ML Functions', 'Elastic Scaling']
  },
  {
    id: 'amazon-quicksight',
    name: 'Amazon QuickSight',
    description: 'AWS\'s serverless business intelligence service with machine learning insights.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://aws.amazon.com/quicksight',
    features: ['Serverless BI', 'ML Insights', 'Natural Language', 'Pay-per-use']
  },
  {
    id: 'google-analytics-intelligence',
    name: 'Google Analytics Intelligence',
    description: 'AI-powered insights for Google Analytics with automated anomaly detection.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://analytics.google.com/analytics/intelligence',
    features: ['AI Insights', 'Anomaly Detection', 'Natural Language', 'Automated Reporting']
  },
  {
    id: 'ibm-watson-analytics',
    name: 'IBM Watson Analytics',
    description: 'Cognitive analytics platform with natural language processing and visualization.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://ibm.com/watson/analytics',
    features: ['Cognitive Analytics', 'NLP Queries', 'Predictive Modeling', 'Data Discovery']
  },
  {
    id: 'sas-viya',
    name: 'SAS Viya',
    description: 'Cloud-native analytics platform with advanced machine learning and AI capabilities.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://sas.com/viya',
    features: ['Advanced Analytics', 'AI/ML', 'Model Management', 'Visual Analytics']
  },
  {
    id: 'plotly-dash',
    name: 'Plotly Dash',
    description: 'Python framework for building analytical web applications with interactive visualizations.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://plotly.com/dash',
    features: ['Interactive Dashboards', 'Python/R Integration', 'Real-time Updates', 'Custom Analytics Apps']
  },
  {
    id: 'observable',
    name: 'Observable',
    description: 'Collaborative data visualization platform with live, interactive notebooks.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://observablehq.com',
    features: ['Interactive Notebooks', 'D3.js Integration', 'Collaborative Analytics', 'Real-time Visualization']
  },
  {
    id: 'hex',
    name: 'Hex',
    description: 'Modern data workspace combining SQL, Python, and no-code tools for analytics.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://hex.tech',
    features: ['Multi-language Support', 'Collaborative Notebooks', 'Version Control', 'App Building']
  },
  {
    id: 'retool',
    name: 'Retool',
    description: 'Low-code platform for building internal analytics dashboards and business applications.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://retool.com',
    features: ['Low-code Dashboards', 'Database Integration', 'Custom Apps', 'Team Collaboration']
  },
  {
    id: 'metabase',
    name: 'Metabase',
    description: 'Open-source business intelligence tool for creating dashboards and asking data questions.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://metabase.com',
    features: ['Open Source', 'Self-hosted', 'SQL Queries', 'Dashboard Builder']
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: 'Open platform for monitoring and observability with powerful visualization capabilities.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://grafana.com',
    features: ['Monitoring Dashboards', 'Alerting', 'Plugin Ecosystem', 'Multi-source Data']
  },
  {
    id: 'apache-superset',
    name: 'Apache Superset',
    description: 'Modern data exploration and visualization platform with SQL Lab and dashboard builder.',
    category: 'data',
    pricing: 'free' as const,
    rating: 4.0,
    url: 'https://superset.apache.org',
    features: ['Open Source', 'SQL Lab', 'Rich Visualizations', 'Extensible']
  },
  {
    id: 'chartio',
    name: 'Chartio',
    description: 'Cloud-based business intelligence platform with drag-and-drop interface.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 3.8,
    url: 'https://chartio.com',
    features: ['Drag-and-Drop', 'SQL Mode', 'Dashboard Sharing', 'Data Alerts']
  },
  {
    id: 'mode-analytics',
    name: 'Mode Analytics',
    description: 'Collaborative analytics platform combining SQL, Python, and R with visualization tools.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://mode.com',
    features: ['SQL + Python/R', 'Collaborative Analytics', 'Report Automation', 'Data Science Workflows']
  },
  {
    id: 'periscope-data',
    name: 'Periscope Data',
    description: 'Data science platform for analysts with SQL, Python, R, and Scala support.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.0,
    url: 'https://sisense.com/product/periscope-data',
    features: ['Multi-language Support', 'Advanced Analytics', 'Real-time Dashboards', 'Data Science Tools']
  },
  {
    id: 'holistics',
    name: 'Holistics',
    description: 'Self-service business intelligence platform with modeling layer and automated reporting.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://holistics.io',
    features: ['Data Modeling', 'Self-service BI', 'Automated Reports', 'Version Control']
  },
  {
    id: 'klipfolio',
    name: 'Klipfolio',
    description: 'Cloud-based dashboard and reporting platform for connecting and visualizing data.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.0,
    url: 'https://klipfolio.com',
    features: ['Dashboard Builder', 'Data Connectors', 'Real-time Monitoring', 'Custom Metrics']
  },
  {
    id: 'zoho-analytics',
    name: 'Zoho Analytics',
    description: 'Self-service business intelligence and data analytics software with AI assistant.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://zoho.com/analytics',
    features: ['AI Assistant', 'Drag-and-Drop', 'Collaborative BI', 'Embedded Analytics']
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    description: 'Product analytics platform with event tracking, funnel analysis, and user behavior insights.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://mixpanel.com',
    features: ['Event Analytics', 'User Segmentation', 'Funnel Analysis', 'A/B Testing']
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    description: 'Digital analytics platform for understanding user behavior and product performance.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://amplitude.com',
    features: ['User Journey Analytics', 'Cohort Analysis', 'Predictive Analytics', 'Experimentation']
  },
  {
    id: 'segment',
    name: 'Segment',
    description: 'Customer data platform that collects, cleans, and controls customer data.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://segment.com',
    features: ['Data Collection', 'Customer Profiles', 'Real-time Streaming', 'Privacy Controls']
  },
  {
    id: 'census',
    name: 'Census',
    description: 'Reverse ETL platform that syncs data from warehouses to business tools.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://getcensus.com',
    features: ['Reverse ETL', 'Data Syncing', 'Operational Analytics', 'Data Activation']
  },
  {
    id: 'fivetran',
    name: 'Fivetran',
    description: 'Automated data integration platform that centralizes data from various sources.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://fivetran.com',
    features: ['Automated ETL', 'Data Connectors', 'Schema Migration', 'Real-time Sync']
  },
  {
    id: 'stitch-data',
    name: 'Stitch',
    description: 'Simple, powerful ETL service for getting data into your data warehouse quickly.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://stitchdata.com',
    features: ['Simple ETL', 'Data Integration', 'Automated Pipelines', 'Monitoring']
  },
  {
    id: 'airbyte',
    name: 'Airbyte',
    description: 'Open-source data integration platform with extensive connector library.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://airbyte.com',
    features: ['Open Source', 'Connector Marketplace', 'Custom Connectors', 'ELT Platform']
  },
  {
    id: 'great-expectations',
    name: 'Great Expectations',
    description: 'Data validation framework that helps teams eliminate pipeline debt and data quality issues.',
    category: 'data',
    pricing: 'free' as const,
    rating: 4.1,
    url: 'https://greatexpectations.io',
    features: ['Data Validation', 'Pipeline Testing', 'Quality Monitoring', 'Documentation']
  },
  {
    id: 'monte-carlo',
    name: 'Monte Carlo',
    description: 'Data observability platform that uses machine learning to detect data quality issues.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://montecarlodata.com',
    features: ['Data Observability', 'Anomaly Detection', 'Data Quality', 'Pipeline Monitoring']
  },
  {
    id: 'atlan',
    name: 'Atlan',
    description: 'Active metadata platform and modern data catalog for collaborative data discovery.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://atlan.com',
    features: ['Data Catalog', 'Collaborative Discovery', 'Data Lineage', 'Governance']
  },

  // HEADSHOTS AI TOOLS (40 tools)
  {
    id: 'secta-ai',
    name: 'Secta AI',
    description: 'Creates ultra-realistic corporate headshots from casual selfies, tailored for LinkedIn and professional use.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://secta.ai',
    features: ['Corporate Headshots', 'LinkedIn Optimization', 'Professional Portraits', 'Realistic Quality']
  },
  {
    id: 'aragon-ai',
    name: 'Aragon AI',
    description: 'Generates professional-style portraits optimized for business and networking platforms.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://aragon.ai',
    features: ['Business Portraits', 'Networking Photos', 'Professional Style', 'High Quality']
  },
  {
    id: 'headshotpro',
    name: 'HeadshotPro',
    description: 'Creates business headshots with customizable attire, backgrounds, and lighting for different industries.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://headshotpro.com',
    features: ['Customizable Attire', 'Industry-Specific', 'Background Options', 'Professional Lighting']
  },
  {
    id: 'studioshot',
    name: 'StudioShot',
    description: 'Focused on team/company headshots, delivering uniform style across organizations.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://studioshot.com',
    features: ['Team Photos', 'Uniform Style', 'Company Branding', 'Consistency']
  },
  {
    id: 'profilepicture-ai',
    name: 'ProfilePicture.AI',
    description: 'Creates avatars and headshots in multiple styles (formal, creative, casual).',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://profilepicture.ai',
    features: ['Multiple Styles', 'Formal & Casual', 'Avatar Creation', 'Style Variety']
  },
  {
    id: 'artisse-ai',
    name: 'Artisse AI',
    description: 'Creates hyper-realistic portrait variations from user-uploaded selfies.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://artisse.ai',
    features: ['Hyper-Realistic', 'Portrait Variations', 'Selfie Enhancement', 'High Quality']
  },
  {
    id: 'prophotos-ai',
    name: 'ProPhotos AI',
    description: 'Creates LinkedIn and resume-ready headshots from casual images.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://prophotos.ai',
    features: ['LinkedIn Ready', 'Resume Photos', 'Professional Conversion', 'Career Focus']
  },
  {
    id: 'headshot-ai-studio',
    name: 'Headshot AI Studio',
    description: 'Trains on your selfies and generates high-quality business headshots.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://headshotai.studio',
    features: ['Custom Training', 'Business Quality', 'High-End Results', 'Professional Focus']
  },
  {
    id: 'photoai',
    name: 'PhotoAI',
    description: 'AI portrait service that trains on your selfies and generates multiple professional headshots.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://photoai.com',
    features: ['Custom Training', 'Multiple Headshots', 'Personalized', 'Professional Quality']
  },
  {
    id: 'magic-headshots',
    name: 'Magic Studio AI',
    description: 'Creates professional business portraits with consistent lighting.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://magicstudio.com',
    features: ['Professional Quality', 'Consistent Lighting', 'Business Focus', 'Studio Quality']
  },
  {
    id: 'dreampic-ai',
    name: 'DreamPic.AI',
    description: 'Generates creative and professional headshots in multiple styles.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://dreampic.ai',
    features: ['Creative Styles', 'Professional Quality', 'Style Variety', 'High Quality']
  },
  {
    id: 'headpix',
    name: 'Headpix',
    description: 'Business headshot tool that provides corporate-style portraits with professional outfits.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://headpix.com',
    features: ['Corporate Style', 'Professional Outfits', 'Business Focus', 'Quality Results']
  },
  {
    id: 'vana-headshot',
    name: 'Headshot Generator by Vana',
    description: 'AI portrait tool that generates multiple headshots with business attire.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://portrait.vana.com',
    features: ['Business Attire', 'Multiple Options', 'Professional Focus', 'Quality Output']
  },
  {
    id: 'tryiton-ai',
    name: 'TryItOn AI',
    description: 'Creates professional LinkedIn and dating app profile photos from selfies.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://tryiton.ai',
    features: ['LinkedIn Photos', 'Dating Profiles', 'Professional Style', 'Profile Optimization']
  },
  {
    id: 'airbrush-ai',
    name: 'AirBrush AI',
    description: 'Enhances photos and generates polished headshots with AI-powered skin and lighting fixes.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://airbrush.com',
    features: ['Skin Enhancement', 'Lighting Fixes', 'Photo Polish', 'Enhancement Tools']
  },
  {
    id: 'remini-ai',
    name: 'Remini AI',
    description: 'Turns selfies into studio-quality portraits with AI upscaling and enhancement.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://remini.ai',
    features: ['Studio Quality', 'AI Upscaling', 'Enhancement', 'Quality Improvement']
  },
  {
    id: 'avatar-ai-codeonce',
    name: 'Avatar AI by CodeOnce',
    description: 'Creates hundreds of AI-generated avatars and headshots in various styles.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://avatarai.me',
    features: ['Multiple Styles', 'Bulk Generation', 'Avatar Variety', 'Style Options']
  },
  {
    id: 'lensa-ai',
    name: 'Lensa AI',
    description: 'Known for "Magic Avatars" — generates stylized portraits and headshots.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://lensa-ai.com',
    features: ['Magic Avatars', 'Stylized Portraits', 'Popular App', 'Creative Styles']
  },
  {
    id: 'ready-player-me',
    name: 'Ready Player Me',
    description: 'Builds avatars and realistic headshots for VR, AR, and professional use.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://readyplayer.me',
    features: ['VR/AR Avatars', 'Professional Use', 'Realistic Quality', 'Cross-platform']
  },
  {
    id: 'generated-photos',
    name: 'Generated Photos',
    description: 'Offers a massive AI-generated human face dataset and portrait creator.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://generated.photos',
    features: ['Face Dataset', 'Portrait Creator', 'Diverse Options', 'Large Library']
  },
  {
    id: 'fotor-headshot',
    name: 'Fotor AI Headshot Generator',
    description: 'Quick AI-powered headshot creation and photo retouching tool.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://fotor.com',
    features: ['Quick Generation', 'Photo Retouching', 'AI Enhancement', 'Easy to Use']
  },
  {
    id: 'facetune-ai',
    name: 'Facetune AI',
    description: 'AI-powered retouching app that improves selfies into professional-looking headshots.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://facetune.com',
    features: ['AI Retouching', 'Professional Look', 'Selfie Enhancement', 'Popular App']
  },
  {
    id: 'avaturn',
    name: 'Avaturn',
    description: '3D avatar creator that also makes realistic headshot-style portraits.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://avaturn.me',
    features: ['3D Avatars', 'Realistic Style', 'Portrait Creation', '3D Technology']
  },
  {
    id: 'canva-magic-studio',
    name: 'Canva Magic Studio',
    description: 'AI photo editing and portrait enhancement tool inside Canva\'s design platform.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://canva.com',
    features: ['Photo Editing', 'Portrait Enhancement', 'Design Integration', 'Easy to Use']
  },
  {
    id: 'human-generator',
    name: 'Human Generator',
    description: 'Generates realistic human portraits with customizable ethnicity, age, and clothing.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://humangenerator.com',
    features: ['Diverse Portraits', 'Age Customization', 'Ethnicity Options', 'Clothing Styles']
  },
  {
    id: 'faceapp-ai-headshots',
    name: 'FaceApp AI',
    description: 'Popular selfie-editing app that enhances photos into professional portraits.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://faceapp.com',
    features: ['Selfie Editing', 'Professional Enhancement', 'Popular App', 'Easy Enhancement']
  },
  {
    id: 'pfpmaker',
    name: 'PFPMaker',
    description: 'Generates headshots and profile pictures with automatic background removal and replacement.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://pfpmaker.com',
    features: ['Background Removal', 'Profile Pictures', 'Auto Enhancement', 'PFP Creation']
  },
  {
    id: 'photosonic-ai',
    name: 'Photosonic AI',
    description: 'Creates realistic portraits and avatars from prompts.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://photosonic.writesonic.com',
    features: ['Realistic Portraits', 'Prompt-Based', 'Avatar Creation', 'AI Generation']
  },
  {
    id: 'gencraft-portraits',
    name: 'Gencraft',
    description: 'AI image generator with strong portrait/headshot modes.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://gencraft.com',
    features: ['Portrait Modes', 'AI Generation', 'Creative Options', 'Strong Quality']
  },
  {
    id: 'artbreeder-portraits',
    name: 'Artbreeder',
    description: 'Lets users mix, tweak, and generate faces — good for unique headshots.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://artbreeder.com',
    features: ['Face Mixing', 'Customization', 'Unique Generation', 'Creative Control']
  },
  {
    id: 'hotpot-portrait',
    name: 'Hotpot AI Portrait Maker',
    description: 'Quick portrait and headshot creation with retouch features.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://hotpot.ai',
    features: ['Quick Creation', 'Retouch Features', 'Portrait Maker', 'Easy to Use']
  },
  {
    id: 'dreamup-portraits',
    name: 'DreamUp by DeviantArt',
    description: 'AI image generation with portrait/headshot creation features.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://dreamup.ai',
    features: ['Portrait Creation', 'Creative Community', 'AI Generation', 'Art Platform']
  },
  {
    id: 'avatarify-ai',
    name: 'Avatarify AI',
    description: 'AI avatar and headshot generator with realistic outputs.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://avatarify.com',
    features: ['Avatar Generation', 'Realistic Output', 'Headshot Creation', 'AI Technology']
  },
  {
    id: 'dalle-3-portraits',
    name: 'DALL·E 3 Portraits',
    description: 'AI image model from OpenAI that generates creative and realistic portraits.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://openai.com/dall-e-3',
    features: ['Creative Portraits', 'High Quality', 'OpenAI Model', 'Realistic Output']
  },
  {
    id: 'leonardo-ai-portraits',
    name: 'Leonardo AI',
    description: 'Strong at character and portrait design with customizable prompts.',
    category: 'headshots',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://leonardo.ai',
    features: ['Character Design', 'Customizable Prompts', 'Portrait Focus', 'High Quality']
  },
  {
    id: 'stable-diffusion-portraits',
    name: 'Stable Diffusion + LoRAs',
    description: 'Open-source model with customizable LoRAs for hyper-realistic headshots and portraits.',
    category: 'headshots',
    pricing: 'free' as const,
    rating: 4.5,
    url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    features: ['Open Source', 'Customizable', 'LoRA Support', 'High Quality']
  },
  {
    id: 'midjourney-portraits',
    name: 'Midjourney',
    description: 'AI art generator, can make highly stylized and professional-looking portraits.',
    category: 'headshots',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://midjourney.com',
    features: ['Stylized Portraits', 'High Quality', 'Artistic Style', 'Professional Look']
  },
  {
    id: 'deepai-portrait',
    name: 'DeepAI Portrait Generator',
    description: 'Simple AI-based portrait generator with basic styles.',
    category: 'headshots',
    pricing: 'free' as const,
    rating: 4.0,
    url: 'https://deepai.org',
    features: ['Basic Styles', 'Simple Generation', 'Free Access', 'Easy to Use']
  },
  {
    id: 'bored-humans-face',
    name: 'BoredHumans Face Generator',
    description: 'Simple free AI tool to generate faces for portraits and avatars.',
    category: 'headshots',
    pricing: 'free' as const,
    rating: 3.9,
    url: 'https://boredhumans.com',
    features: ['Free Generation', 'Simple Interface', 'Face Creation', 'Easy Access']
  },

  // VIDEO AI TOOLS (40 tools)
  {
    id: 'runway-ml-video',
    name: 'Runway ML',
    description: 'Powerful AI video editor with background removal, motion tracking, and text-to-video features.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://runwayml.com',
    features: ['Background Removal', 'Motion Tracking', 'Text-to-Video', 'AI Effects']
  },
  {
    id: 'synthesia-video',
    name: 'Synthesia',
    description: 'AI video creator that turns text into professional videos with avatars.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://synthesia.io',
    features: ['AI Avatars', 'Text-to-Video', 'Professional Quality', 'Multiple Languages']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'Popular AI avatar-based video creator for business and influencers.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://heygen.com',
    features: ['AI Avatars', 'Business Focus', 'Influencer Content', 'High Quality']
  },
  {
    id: 'deepbrain-ai',
    name: 'DeepBrain AI',
    description: 'Generates AI human avatars for business and media videos.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://deepbrainai.io',
    features: ['AI Humans', 'Media Production', 'Corporate Videos', 'Broadcast Quality']
  },
  {
    id: 'descript-video',
    name: 'Descript',
    description: 'AI-powered video editor with transcription, screen recording, and overdub features.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://descript.com',
    features: ['Overdub', 'Transcription', 'Screen Recording', 'Text-based Editing']
  },
  {
    id: 'veed-io',
    name: 'VEED.IO',
    description: 'Online video editing with subtitles, AI voiceovers, templates, and effects.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://veed.io',
    features: ['Subtitles', 'AI Voiceovers', 'Online Editor', 'Templates']
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    description: 'AI editor that turns long-form YouTube videos into viral shorts with captions.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://opus.pro',
    features: ['Viral Clips', 'YouTube Shorts', 'Auto Captions', 'Content Repurposing']
  },
  {
    id: 'elai-io',
    name: 'Elai.io',
    description: 'Text-to-video tool for e-learning and business presentations with AI avatars.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://elai.io',
    features: ['E-learning Focus', 'AI Presenters', 'Business Videos', 'Training Content']
  },
  {
    id: 'pictory-video',
    name: 'Pictory',
    description: 'AI tool to turn scripts, blogs, or articles into engaging short videos.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://pictory.ai',
    features: ['Script to Video', 'Blog to Video', 'Short Videos', 'Auto Generation']
  },
  {
    id: 'veed-studio-avatars',
    name: 'Veed Studio AI Avatars',
    description: 'Extension of VEED.IO, adds AI avatars for text-to-video.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://veed.io/avatars',
    features: ['AI Avatars', 'Presentations', 'Training Videos', 'Professional Quality']
  },
  {
    id: 'colossyan',
    name: 'Colossyan',
    description: 'AI presenter-based tool for creating training and explainer videos.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://colossyan.com',
    features: ['AI Presenters', 'Training Videos', 'Explainer Focus', 'Education Content']
  },
  {
    id: 'rephrase-ai',
    name: 'Rephrase.ai',
    description: 'Personalizes videos with AI-generated talking avatars.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://rephrase.ai',
    features: ['AI Avatars', 'Personalization', 'Marketing Videos', 'Custom Content']
  },
  {
    id: 'maverick',
    name: 'Maverick',
    description: 'AI video personalization tool for e-commerce, sending customized product videos.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.5,
    url: 'https://trymaverick.com',
    features: ['Video Personalization', 'E-commerce Focus', 'Product Videos', 'Customer Engagement']
  },
  {
    id: 'lumen5',
    name: 'Lumen5',
    description: 'AI-driven video editor for businesses, turning blogs and posts into professional videos.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://lumen5.com',
    features: ['Content Repurposing', 'Templates', 'Social Media', 'Business Focus']
  },
  {
    id: 'synths-video',
    name: 'Synths.Video',
    description: 'Turns blog posts into AI-powered YouTube videos with avatars.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://synths.video',
    features: ['Blog to Video', 'YouTube Focus', 'AI Avatars', 'Content Creation']
  },
  {
    id: 'hour-one',
    name: 'Hour One',
    description: 'Converts text into video with virtual AI characters.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://hourone.ai',
    features: ['Virtual Characters', 'Text-to-Video', 'Training Focus', 'Business Content']
  },
  {
    id: 'rocketium',
    name: 'Rocketium',
    description: 'AI video editor for enterprises with automation and scaling.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://rocketium.com',
    features: ['Enterprise Focus', 'Automation', 'Bulk Processing', 'Scalability']
  },
  {
    id: 'recast-studio',
    name: 'Recast Studio',
    description: 'AI tool to repurpose long videos into short clips for social media.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://recast.studio',
    features: ['Video Repurposing', 'Short Clips', 'Social Media', 'Content Optimization']
  },
  {
    id: 'papercup',
    name: 'Papercup',
    description: 'AI video localization tool that translates and dubs videos.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://papercup.com',
    features: ['Video Dubbing', 'Translation', 'Localization', 'Multilingual']
  },
  {
    id: 'filmora-ai',
    name: 'Filmora AI Copilot',
    description: 'Easy editor with AI Copilot for scene detection, captions, and effects.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://filmora.wondershare.com',
    features: ['AI Copilot', 'Scene Detection', 'Easy Editing', 'Creative Tools']
  },
  {
    id: 'invideo-ai',
    name: 'InVideo',
    description: 'Drag-and-drop AI editor for marketing, social media, and ads.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://invideo.io',
    features: ['Ad Creation', 'Templates', 'Marketing Focus', 'Social Media']
  },
  {
    id: 'wisecut',
    name: 'Wisecut',
    description: 'AI editor that auto-cuts silences, adds subtitles, and background music.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://wisecut.video',
    features: ['Auto-cut Silences', 'Subtitles', 'Background Music', 'Automation']
  },
  {
    id: 'flexclip',
    name: 'FlexClip',
    description: 'Cloud-based AI editor for quick social media videos with templates and stock footage.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://flexclip.com',
    features: ['Templates', 'Stock Library', 'Social Media Focus', 'Quick Editing']
  },
  {
    id: 'wave-video',
    name: 'Wave.video',
    description: 'Online AI-powered editor for social ads, intros, and live streaming.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://wave.video',
    features: ['Social Ads', 'Intros', 'Live Streaming', 'Templates']
  },
  {
    id: 'nova-ai',
    name: 'Nova A.I.',
    description: 'AI video management tool with auto subtitles, scene detection, and translations.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://nova.ai',
    features: ['Auto Subtitles', 'Scene Detection', 'Management', 'Translation']
  },
  {
    id: 'gliacloud',
    name: 'GliaCloud',
    description: 'Converts news articles and text into engaging AI videos.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://gliacloud.com',
    features: ['News Videos', 'Article Conversion', 'Media Automation', 'AI Journalism']
  },
  {
    id: 'kamua',
    name: 'Kamua',
    description: 'AI tool for auto-cropping and repurposing videos into vertical Shorts/Reels/TikToks.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://kamua.com',
    features: ['Auto Cropping', 'Vertical Videos', 'Social Repurposing', 'Format Optimization']
  },
  {
    id: 'quickvid',
    name: 'QuickVid',
    description: 'AI tool for auto-generating TikTok & Shorts-style videos from prompts.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://quickvid.ai',
    features: ['TikTok Videos', 'Shorts Generation', 'Auto Captions', 'Viral Content']
  },
  {
    id: 'synthmaker-ai',
    name: 'SynthMaker AI',
    description: 'Video synthesis for marketing and content creators.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://synthmaker.ai',
    features: ['Video Synthesis', 'Marketing Focus', 'Content Creation', 'AI Generation']
  },
  {
    id: 'kapwing',
    name: 'Kapwing',
    description: 'AI video editing suite with meme templates, subtitles, and resizing.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://kapwing.com',
    features: ['Meme Templates', 'Subtitles', 'Video Resizing', 'Online Editor']
  },
  {
    id: 'designs-ai-videomaker',
    name: 'Designs.ai Videomaker',
    description: 'Turns text scripts into videos automatically with narration and visuals.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://designs.ai',
    features: ['Script to Video', 'AI Narrator', 'Automatic Creation', 'Visual Matching']
  },
  {
    id: 'magisto',
    name: 'Magisto',
    description: 'AI video editor for creating polished marketing videos automatically.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://magisto.com',
    features: ['Automatic Editing', 'Marketing Focus', 'Vimeo Integration', 'Template Based']
  },
  {
    id: 'offeo',
    name: 'Offeo',
    description: 'AI design and video editing platform for ads and branding.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://offeo.com',
    features: ['Ad Videos', 'Branding Focus', 'Animation', 'Marketing Content']
  },
  {
    id: 'animoto',
    name: 'Animoto',
    description: 'Easy video maker for slideshows, promos, and events.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://animoto.com',
    features: ['Slideshows', 'Promos', 'Event Videos', 'Template Library']
  },
  {
    id: 'adobe-premiere-pro',
    name: 'Adobe Premiere Pro with AI',
    description: 'Industry-leading editor now enhanced with Adobe Sensei AI tools for smart editing.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://adobe.com/products/premiere.html',
    features: ['Professional Editing', 'AI Effects', 'Industry Standard', 'Advanced Tools']
  },
  {
    id: 'fliki-video',
    name: 'Fliki',
    description: 'AI video and voice generator that creates videos from text with realistic voices.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://fliki.ai',
    features: ['Text-to-Video', 'Voice Generation', 'Auto Visuals', 'Music Library']
  },
  {
    id: 'loom-ai',
    name: 'Loom AI',
    description: 'Screen recording with AI-powered editing and transcription features.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://loom.com',
    features: ['Screen Recording', 'AI Editing', 'Transcription', 'Team Collaboration']
  },
  {
    id: 'clipchamp-video',
    name: 'Clipchamp',
    description: 'Microsoft\'s video editor with integrated AI text-to-speech and editing features.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://clipchamp.com',
    features: ['Video Integration', 'Microsoft 365', 'Auto Sync', 'Cloud Storage']
  },
  {
    id: 'narakeet-video',
    name: 'Narakeet',
    description: 'Text-to-speech and video creation platform with 700+ voices in 90+ languages.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://www.narakeet.com',
    features: ['700+ Voices', 'PowerPoint Integration', '90+ Languages', 'Auto Timing']
  }
];

export default function AllTools() {
  const [searchParams] = useSearchParams();
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [pricingFilter, setPricingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Set search query from URL params on mount
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const handleViewDetails = (tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  // Filter and search tools
  const filteredTools = allAITools
    .filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.features.some(feature => 
                            feature.toLowerCase().includes(searchQuery.toLowerCase())
                          );
      
      const matchesCategory = categoryFilter === 'all' || tool.category === categoryFilter;
      const matchesPricing = pricingFilter === 'all' || tool.pricing === pricingFilter;
      
      return matchesSearch && matchesCategory && matchesPricing;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const stats = {
    total: allAITools.length,
    free: allAITools.filter(tool => tool.pricing === 'free').length,
    freemium: allAITools.filter(tool => tool.pricing === 'freemium').length,
    paid: allAITools.filter(tool => tool.pricing === 'paid').length,
    categories: [...new Set(allAITools.map(tool => tool.category))].length
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-card/30 via-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                All AI Tools
              </h1>
              <Grid className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our complete collection of AI tools across all categories. Find the perfect solution 
              for your text, image, voice, data, and video needs in one comprehensive directory.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-primary">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Total Tools</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-green-500">{stats.free}</div>
                <div className="text-sm text-muted-foreground">Free Tools</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-blue-500">{stats.freemium}</div>
                <div className="text-sm text-muted-foreground">Freemium</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-amber-500">{stats.paid}</div>
                <div className="text-sm text-muted-foreground">Paid Tools</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-purple-500">{stats.categories}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-b border-border/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="text">Text AI</SelectItem>
                  <SelectItem value="image">Image AI</SelectItem>
                  <SelectItem value="voice">Voice AI</SelectItem>
                  <SelectItem value="data">Data AI</SelectItem>
                  <SelectItem value="video">Video AI</SelectItem>
                </SelectContent>
              </Select>

              <Select value={pricingFilter} onValueChange={setPricingFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pricing</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="freemium">Freemium</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredTools.length} of {allAITools.length} tools
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find more tools.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool, index) => (
                <div 
                  key={tool.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index % 12) * 50}ms` }}
                >
                  <AIToolCard 
                    tool={tool} 
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* AI Tool Details Modal */}
      <AIToolModal 
        tool={selectedTool}
        isOpen={!!selectedTool}
        onClose={handleCloseModal}
      />
    </div>
  );
}
import { useState } from 'react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';
import { Image, Sparkles } from 'lucide-react';

const imageAITools = [
  {
    id: '1',
    name: 'Ideogram',
    description: 'A text-to-image model notable for producing legible text in generated images; good for design work where you need both style and clarity.',
    detailedDescription: 'Ideogram is a cutting-edge text-to-image model that excels at generating images containing legible text, making it particularly valuable for design work requiring both visual appeal and textual clarity.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium (some free credits / limited use + paid tiers)',
    rating: 4.7,
    url: 'https://ideogram.ai',
    features: ['Text-to-image', 'Legible text', 'Prompt clarity', 'Design-friendly'],
    keywords: ['Text-to-image', 'Legible text', 'Prompt clarity', 'Design-friendly', 'Creative visuals']
  },
  {
    id: '2',
    name: 'Stable Diffusion',
    description: 'Open-source diffusion model for generating images from text; supports inpainting, image-to-image, and a wide community of custom models.',
    detailedDescription: 'Stable Diffusion is a powerful, open-source diffusion model that transforms text prompts into high-quality images. It supports advanced features like inpainting and image-to-image generation.',
    category: 'image',
    pricing: 'free' as const,
    pricingDetails: 'Free / Open source + some paid platforms hosting it',
    rating: 4.8,
    url: 'https://stability.ai',
    features: ['Diffusion', 'Open source', 'Image editing', 'Community models'],
    keywords: ['Diffusion', 'Open source', 'Image editing', 'Community models', 'Customization']
  },
  {
    id: '3',
    name: 'ComfyUI',
    description: 'A node-based interface for chaining together modules (e.g. diffusion, control nets) to build custom image workflows; more flexible than simple prompt tools.',
    category: 'image',
    pricing: 'free' as const,
    pricingDetails: 'Free / Open source',
    rating: 4.6,
    url: 'https://github.com/comfyanonymous/ComfyUI',
    features: ['Workflow', 'Modules', 'ControlNet', 'Diffusion'],
    keywords: ['Workflow', 'Modules', 'ControlNet', 'Diffusion', 'Custom pipelines']
  },
  {
    id: '4',
    name: 'Artbreeder',
    description: 'A collaborative tool for "breeding" images — combining traits from existing images (faces, landscapes) to create new variations.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium (free basic; paid for more control)',
    rating: 4.3,
    url: 'https://artbreeder.com',
    features: ['Image remix', 'StyleGAN', 'Variation', 'Landscape & portrait'],
    keywords: ['Image remix', 'StyleGAN', 'Variation', 'Landscape & portrait', 'Generative art']
  },
  {
    id: '5',
    name: 'Radiant Photo 2',
    description: 'AI-assisted photo editor: one-click photo optimization plus fine-tuning; works locally, respects privacy.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid (probably with trial)',
    rating: 4.4,
    url: 'https://radiantimaginglabs.com',
    features: ['Photo edit', 'One-click optimize', 'Local processing', 'Privacy'],
    keywords: ['Photo edit', 'One-click optimize', 'Local processing', 'Color/tone', 'Privacy']
  },
  {
    id: '6',
    name: 'CVAT (Computer Vision Annotation Tool)',
    description: 'Web-based open-source tool for annotating images/videos (bounding boxes, segmentation) for training computer vision models.',
    category: 'image',
    pricing: 'free' as const,
    pricingDetails: 'Free / Open source',
    rating: 4.2,
    url: 'https://cvat.ai',
    features: ['Annotation', 'Dataset labeling', 'Object detection', 'Segmentation'],
    keywords: ['Annotation', 'Dataset labeling', 'Object detection', 'Segmentation', 'Open-source']
  },
  {
    id: '7',
    name: 'Google Cloud Vision / Vertex Vision AI',
    description: 'Google\'s vision APIs can do OCR, image labeling, moderation, plus generative editing & image generation via Vertex AI.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free tier + paid based on usage',
    rating: 4.5,
    url: 'https://cloud.google.com/vision',
    features: ['OCR', 'Object detection', 'Generative edit', 'API'],
    keywords: ['OCR', 'Object detection', 'Generative edit', 'API', 'Moderation']
  },
  {
    id: '8',
    name: 'Flux.1',
    description: 'A newer open model meant as an alternative to Stable Diffusion, offering better performance or different licensing; used in various generators.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Mixed: free credits in some platforms; paid in others',
    rating: 4.6,
    url: 'https://blackforestlabs.ai',
    features: ['Alternative diffusion', 'Open model', 'Customization', 'Visual quality'],
    keywords: ['Alternative diffusion', 'Open model', 'Customization', 'Visual quality', 'Community use']
  },
  {
    id: '9',
    name: 'Adobe Firefly',
    description: 'Adobe\'s suite of generative image tools integrated with Creative Cloud; includes text-to-image, photo editing, vector recoloring etc.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid (some free credits; many advanced features require subscription)',
    rating: 4.7,
    url: 'https://firefly.adobe.com',
    features: ['Generative art', 'Photo editing', 'Integration', 'Creative Cloud'],
    keywords: ['Generative art', 'Photo editing', 'Integration', 'Creative Cloud', 'Commercial safe']
  },
  {
    id: '10',
    name: 'Freepik AI Image Generator',
    description: 'Combines several AI image-generation models into one platform; easy web-based generation for illustrations, vectors etc.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium (some free; subscription for higher limits)',
    rating: 4.3,
    url: 'https://freepik.com/ai/image-generator',
    features: ['Multiple models', 'Illustration', 'Vectors', 'Web dashboard'],
    keywords: ['Multiple models', 'Illustration', 'Vectors', 'Web dashboard', 'Freemium']
  },
  {
    id: '11',
    name: 'Canva AI Art Generator',
    description: 'Simple tool for generating images via text prompts inside Canva; good for quick designs and social media content.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free tier + paid / premium subscription',
    rating: 4.2,
    url: 'https://canva.com/ai-image-generator',
    features: ['Social graphics', 'Templates', 'Text prompt', 'Ease of use'],
    keywords: ['Social graphics', 'Templates', 'Text prompt', 'Ease of use', 'Design simplicity']
  },
  {
    id: '12',
    name: 'Craiyon',
    description: 'Very accessible, free-ish tool for fun images; less polished but good for experimenting and concept sketches.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free / Freemium (basic is free with limitations)',
    rating: 3.8,
    url: 'https://craiyon.com',
    features: ['Sketchy art', 'Free access', 'Experimental', 'Prompt based'],
    keywords: ['Sketchy art', 'Free access', 'Experimental', 'Prompt based', 'Humorous output']
  },
  {
    id: '13',
    name: 'DeepAI (Image generation etc)',
    description: 'Offers simple interface to generate images, also some editing tools; lower barrier to entry for beginners.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free / Paid (limits / paid tiers)',
    rating: 3.9,
    url: 'https://deepai.org',
    features: ['Beginner friendly', 'Quick generation', 'Basic editing', 'Web UI'],
    keywords: ['Beginner friendly', 'Quick generation', 'Basic editing', 'Web UI', 'Free credits']
  },
  {
    id: '14',
    name: 'Recraft (AI-graphic design)',
    description: 'Focused more on design layouts, vector graphics, composition using generated or edited images; good for marketing/design assets.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.4,
    url: 'https://recraft.ai',
    features: ['Graphic design', 'Templates', 'Vector', 'Layouts'],
    keywords: ['Graphic design', 'Templates', 'Vector', 'Layouts', 'Branding assets']
  },
  {
    id: '15',
    name: 'Rêve (AI image generator)',
    description: 'Newer image generator with good adherence to prompts; aimed at better prompt understanding and fidelity.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Likely paid / some free trial / credits',
    rating: 4.5,
    url: 'https://reve.ai',
    features: ['Prompt fidelity', 'Realism', 'New model', 'Creative control'],
    keywords: ['Prompt fidelity', 'Realism', 'New model', 'Creative control', 'High quality']
  },
  {
    id: '16',
    name: 'GPT-4o (ChatGPT with Image Generation)',
    description: 'OpenAI\'s multi-modal model; you can give prompts that include image generation/editing; integrates with ChatGPT UI.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Part of ChatGPT plans (some free; better features for paid)',
    rating: 4.6,
    url: 'https://chat.openai.com',
    features: ['Multi-modal', 'Prompt + image', 'Editing', 'Integration'],
    keywords: ['Multi-modal', 'Prompt + image', 'Editing', 'Integration', 'Versatility']
  },
  {
    id: '17',
    name: 'NightCafe',
    description: 'Platform offering many different generative models (Stable Diffusion, etc.), plus community features, style transfers, etc.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Credit based with paid tiers',
    rating: 4.3,
    url: 'https://creator.nightcafe.studio',
    features: ['Community art', 'Multiple models', 'Style transfer', 'Text-to-image'],
    keywords: ['Community art', 'Multiple models', 'Style transfer', 'Text-to-image', 'Credits based']
  },
  {
    id: '18',
    name: 'Leonardo AI',
    description: 'Creative image generation with strong tools for concept art, imaginative visuals, often used by game-dev / entertainment creators.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid tiers',
    rating: 4.5,
    url: 'https://leonardo.ai',
    features: ['Concept art', 'Imagination', 'Visual fidelity', 'Prompt tools'],
    keywords: ['Concept art', 'Imagination', 'Visual fidelity', 'Prompt tools', 'Style variation']
  },
  {
    id: '19',
    name: 'DALL·E (OpenAI\'s models)',
    description: 'Early leader in text-to-image; good quality, safe content filters; widely used via API or web.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid / some free credit offers',
    rating: 4.4,
    url: 'https://labs.openai.com',
    features: ['Text-to-image', 'API', 'Safety filters', 'Quality'],
    keywords: ['Text-to-image', 'API', 'Safety filters', 'Quality', 'Creativity']
  },
  {
    id: '20',
    name: 'Runway ML (image + video tools)',
    description: 'Offers image generation, editing, video editing / generation; often used in creative industries.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Subscription / paid (some free trial)',
    rating: 4.6,
    url: 'https://runwayml.com',
    features: ['Image editing', 'Video generation', 'Multimodal', 'Effects'],
    keywords: ['Image editing', 'Video generation', 'Multimodal', 'Effects', 'Creative tools']
  },
  {
    id: '21',
    name: 'Midjourney',
    description: 'A high-quality, stylized text → image generator used via Discord or web, known for artistic output and prompt control.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Subscription (paid)',
    rating: 4.8,
    url: 'https://midjourney.com',
    features: ['Text → image', 'Artistic', 'Stylized', 'Prompt control'],
    keywords: ['Text → image', 'Artistic', 'Stylized', 'Prompt control', 'Discord integration']
  },
  {
    id: '22',
    name: 'Runway / RunwayML',
    description: 'Platform for generative image/video tools, offering multimodal models, video editing, effects, etc.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid tiers',
    rating: 4.5,
    url: 'https://runwayml.com',
    features: ['Video generation', 'Image editing', 'Multimodal', 'Effects'],
    keywords: ['Video generation', 'Image editing', 'Multimodal', 'Effects', 'API']
  },
  {
    id: '23',
    name: 'Luma AI',
    description: 'AI tool for reconstructing 3D scenes, view synthesis, novel views from images.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid (some free features)',
    rating: 4.4,
    url: 'https://lumalabs.ai',
    features: ['3D reconstruction', 'View synthesis', 'Novel view', 'Depth'],
    keywords: ['3D reconstruction', 'View synthesis', 'Novel view', 'Depth', 'Scene modeling']
  },
  {
    id: '24',
    name: 'Fotor AI (Image tools)',
    description: 'Online photo editor + AI image generator, style transfer, retouching.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.1,
    url: 'https://fotor.com',
    features: ['Photo edit', 'Style transfer', 'AI art', 'Online editor'],
    keywords: ['Photo edit', 'Style transfer', 'AI art', 'Online editor', 'Templates']
  },
  {
    id: '25',
    name: 'Hotpot AI',
    description: 'AI art & design toolkit: image creation, background removal, mockups, portraits.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.2,
    url: 'https://hotpot.ai',
    features: ['AI art', 'Background removal', 'Mockups', 'Portraits'],
    keywords: ['AI art', 'Background removal', 'Mockups', 'Portraits', 'Toolkit']
  },
  {
    id: '26',
    name: 'Remove.bg',
    description: 'AI tool specialized in removing backgrounds from images automatically.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free (with limits) / Paid',
    rating: 4.7,
    url: 'https://remove.bg',
    features: ['Background removal', 'Image masking', 'Cutout', 'Transparent'],
    keywords: ['Background removal', 'Image masking', 'Cutout', 'Transparent', 'Automation']
  },
  {
    id: '27',
    name: 'ClipDrop',
    description: 'Offers tools: background removal, object extraction, AR "dropping" images into scenes.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.3,
    url: 'https://clipdrop.co',
    features: ['Object extraction', 'Background removal', 'AR overlay', 'Tools'],
    keywords: ['Object extraction', 'Background removal', 'AR overlay', 'Tools', 'Capture']
  },
  {
    id: '28',
    name: 'DreamStudio (by Stability AI)',
    description: 'Web interface for Stable Diffusion, made by Stability AI; generate, edit images via prompt.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid / credit system',
    rating: 4.4,
    url: 'https://dreamstudio.ai',
    features: ['Stable Diffusion', 'Web UI', 'Prompt generation', 'Editing'],
    keywords: ['Stable Diffusion', 'Web UI', 'Prompt generation', 'Editing', 'Model access']
  },
  {
    id: '29',
    name: 'Pixray',
    description: 'A flexible text → image tool / framework that allows many adjustments, chaining, styles.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free / Paid (depending on host)',
    rating: 4.0,
    url: 'https://pixray.gob.cl',
    features: ['Custom pipeline', 'Prompt variation', 'Artistic', 'Style control'],
    keywords: ['Custom pipeline', 'Prompt variation', 'Artistic', 'Style control', 'Open usage']
  },
  {
    id: '30',
    name: 'Deep Dream Generator',
    description: 'AI tool that produces dreamlike surreal images by emphasizing patterns in images.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 3.8,
    url: 'https://deepdreamgenerator.com',
    features: ['Surreal art', 'Neural patterns', 'Style exaggeration', 'Dream effects'],
    keywords: ['Surreal art', 'Neural patterns', 'Style exaggeration', 'Dream effects', 'AI filters']
  },
  {
    id: '31',
    name: 'FaceApp / Face swapping tools',
    description: 'Tools that apply AI transformations to human faces (aging, swaps, style, filters).',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Free / Paid',
    rating: 4.0,
    url: 'https://faceapp.com',
    features: ['Face editing', 'Style transfer', 'Age filter', 'Face swap'],
    keywords: ['Face editing', 'Style transfer', 'Age filter', 'Face swap', 'Portrait tools']
  },
  {
    id: '32',
    name: 'PhotoRoom',
    description: 'AI app for removing or editing backgrounds, making product images clean and polished.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.4,
    url: 'https://photoroom.com',
    features: ['Product photos', 'Background removal', 'E-commerce', 'Clean images'],
    keywords: ['Product photos', 'Background removal', 'E-commerce', 'Clean images', 'App tool']
  },
  {
    id: '33',
    name: 'Neural.love',
    description: 'AI image & video enhancement: upscaling, colorizing, restoration, generation.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid / some free trials',
    rating: 4.2,
    url: 'https://neural.love',
    features: ['Upscale', 'Colorize', 'Restoration', 'AI art'],
    keywords: ['Upscale', 'Colorize', 'Restoration', 'AI art', 'Video enhancement']
  },
  {
    id: '34',
    name: 'Prisma AI / Prisma filter tools',
    description: 'Style transfer tool that transforms photos into artistic paintings using AI filters.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.1,
    url: 'https://prisma-ai.com',
    features: ['Style transfer', 'Artistic filters', 'Painting style', 'Photo to art'],
    keywords: ['Style transfer', 'Artistic filters', 'Painting style', 'Photo to art', 'Mobile app']
  },
  {
    id: '35',
    name: 'Krea.ai',
    description: 'AI art community + tool; generate, remix, explore prompts & images.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.3,
    url: 'https://krea.ai',
    features: ['Remixes', 'Community', 'Prompt sharing', 'AI art'],
    keywords: ['Remixes', 'Community', 'Prompt sharing', 'AI art', 'Collaborative']
  },
  {
    id: '36',
    name: 'Veo / Veo3 (video + image AI)',
    description: 'AI model for video generation / editing, possibly integrated with image capabilities.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid / limited free',
    rating: 4.4,
    url: 'https://deepmind.google/technologies/veo',
    features: ['Video generation', 'Multi-modal', 'Editing', 'Motion'],
    keywords: ['Video generation', 'Multi-modal', 'Editing', 'Motion', 'Synthesis']
  },
  {
    id: '37',
    name: 'Seedream',
    description: 'AI tool for image generation with special styles & prompt sensitivity.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.1,
    url: 'https://seedream.ai',
    features: ['Stylized art', 'Prompt fidelity', 'Creative generation', 'Control'],
    keywords: ['Stylized art', 'Prompt fidelity', 'Creative generation', 'Control']
  },
  {
    id: '38',
    name: 'Imagiyo',
    description: 'AI image generation & editing platform, focus on ease and creative options.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.0,
    url: 'https://imagiyo.com',
    features: ['Easy art', 'Editing', 'AI image', 'Templates'],
    keywords: ['Easy art', 'Editing', 'AI image', 'Templates', 'Intuitive']
  },
  {
    id: '39',
    name: 'Photopea (with AI enhancements)',
    description: 'Web-based Photoshop-like tool with AI features (object selection, removal, content-aware)',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.5,
    url: 'https://photopea.com',
    features: ['Web editor', 'AI removal', 'Selection', 'Photo edit'],
    keywords: ['Web editor', 'AI removal', 'Selection', 'Photo edit', 'Layers']
  },
  {
    id: '40',
    name: 'Artisto / style transfer apps',
    description: 'Mobile apps that apply neural style transfer / artistic filters to videos/photos.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 3.9,
    url: 'https://artisto.my.com',
    features: ['Style transfer', 'Filters', 'Artistic video', 'Neural network'],
    keywords: ['Style transfer', 'Filters', 'Artistic video', 'Neural network', 'Mobile']
  },
  {
    id: '41',
    name: 'Sloyd (3D + image)',
    description: 'Tool for generating 3D assets/scenes from prompts (mix of 2D/3D), used in visuals.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid / some free usage',
    rating: 4.2,
    url: 'https://sloyd.ai',
    features: ['3D generation', 'Scene design', 'Assets', 'Prompt → object'],
    keywords: ['3D generation', 'Scene design', 'Assets', 'Prompt → object', 'Visual content']
  },
  {
    id: '42',
    name: 'Vizcom',
    description: 'Tool for concept design: sketches to refined visuals using AI.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.3,
    url: 'https://vizcom.ai',
    features: ['Concept art', 'Sketch → visual', 'Design iteration', 'Prompt assist'],
    keywords: ['Concept art', 'Sketch → visual', 'Design iteration', 'Prompt assist', 'UI tool']
  },
  {
    id: '43',
    name: 'PlaygroundAI',
    description: 'Web platform aggregating several image generation models and tools for experimentation.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.4,
    url: 'https://playgroundai.com',
    features: ['Model gallery', 'Prompt workbench', 'Art exploration', 'UI'],
    keywords: ['Model gallery', 'Prompt workbench', 'Art exploration', 'UI', 'Multiple backends']
  },
  {
    id: '44',
    name: 'Nanobanana (Google\'s image model, concept)',
    description: 'Google\'s internal / experimental image model sometimes called in leaks; expected as image generator.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Likely paid / internal',
    rating: 4.0,
    url: 'https://ai.google.dev',
    features: ['Research model', 'Experimental', 'Google', 'Vision'],
    keywords: ['Research model', 'Experimental', 'Google', 'Vision', 'Generation']
  },
  {
    id: '45',
    name: 'Photor AI',
    description: 'AI tool for photo generation & editing, creative filters and art effects.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.1,
    url: 'https://photor.io',
    features: ['Filters', 'Editing', 'AI art', 'Photo generation'],
    keywords: ['Filters', 'Editing', 'AI art', 'Photo generation', 'Effects']
  },
  {
    id: '46',
    name: 'Recraft / Recraft AI',
    description: 'Design / image + layout AI tool for marketing graphics, vector + raster mix.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 4.4,
    url: 'https://recraft.ai',
    features: ['Graphic design', 'Layout AI', 'Marketing visuals', 'Templates'],
    keywords: ['Graphic design', 'Layout AI', 'Marketing visuals', 'Templates', 'Vector mix']
  },
  {
    id: '47',
    name: 'FLUX.1',
    description: 'An alternative diffusion model to Stable Diffusion optimized for visual quality and licensing.',
    category: 'image',
    pricing: 'free' as const,
    pricingDetails: 'Free / open in some platforms',
    rating: 4.5,
    url: 'https://github.com/black-forest-labs/flux',
    features: ['Diffusion', 'Alternative model', 'Visual quality', 'Model innovation'],
    keywords: ['Diffusion', 'Alternative model', 'Visual quality', 'Model innovation']
  },
  {
    id: '48',
    name: 'Pika (AI image / video)',
    description: 'AI that can generate images or short animations, often used in creative tools.',
    category: 'image',
    pricing: 'paid' as const,
    pricingDetails: 'Paid / limited free',
    rating: 4.3,
    url: 'https://pika.art',
    features: ['Short video', 'Image → video', 'Creative generation', 'Prompt motion'],
    keywords: ['Short video', 'Image → video', 'Creative generation', 'Prompt motion']
  },
  {
    id: '49',
    name: 'VYO (Vision AI models)',
    description: 'Tool / model suite for vision tasks: object detection, segmentation, generation.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Likely open / paid depending on deployment',
    rating: 4.0,
    url: 'https://vyo.ai',
    features: ['Vision tasks', 'Detection', 'Segmentation', 'Multi-modal'],
    keywords: ['Vision tasks', 'Detection', 'Segmentation', 'Multi-modal', 'Generation']
  },
  {
    id: '50',
    name: 'DeepArt / DeepArt.io',
    description: 'Style transfer web tool: convert your photo into famous painting styles using neural networks.',
    category: 'image',
    pricing: 'freemium' as const,
    pricingDetails: 'Freemium / Paid',
    rating: 3.9,
    url: 'https://deepart.io',
    features: ['Style transfer', 'Artistic filter', 'Photo → painting', 'Web tool'],
    keywords: ['Style transfer', 'Artistic filter', 'Photo → painting', 'Web tool']
  }
];

export default function ImageAI() {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleViewDetails = (tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-card/30 via-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Image & Vision AI Tools
              </h1>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover cutting-edge AI tools for image generation, editing, and computer vision. 
              From text-to-image generators to advanced photo editing and 3D reconstruction tools.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span>{imageAITools.filter(tool => tool.pricing === 'free').length} Free Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
                <span>{imageAITools.filter(tool => tool.pricing === 'freemium').length} Freemium Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <span>{imageAITools.filter(tool => tool.pricing === 'paid').length} Paid Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imageAITools.map((tool, index) => (
              <div 
                key={tool.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AIToolCard 
                  tool={tool} 
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
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
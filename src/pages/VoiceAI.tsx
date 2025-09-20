import { useState } from 'react';
import { Mic, Volume2, Headphones, Music, AudioWaveform } from 'lucide-react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';

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

const voiceAITools: AITool[] = [
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Most realistic AI voice generator with voice cloning, multilingual support, and emotional speech synthesis.',
    detailedDescription: 'ElevenLabs is the leading AI voice platform offering ultra-realistic speech synthesis, voice cloning, and multilingual support. Create professional voiceovers, audiobooks, and interactive voice experiences.',
    models: ['Eleven Multilingual v2', 'Eleven Turbo v2.5', 'Eleven English v1'],
    howItWorks: 'Uses advanced neural networks to analyze voice patterns, intonation, and speech characteristics to generate natural-sounding speech from text input.',
    howToUse: '1. Sign up for an account 2. Choose a voice from the library or clone your own 3. Input your text 4. Adjust speech settings 5. Generate and download your audio',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 10k characters/month, Starter: $5/month, Creator: $22/month, Pro: $99/month',
    rating: 4.8,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Multilingual Support', 'Emotional Speech', 'API Access'],
    keywords: ['voice cloning', 'text-to-speech', 'multilingual', 'realistic voices', 'audiobooks', 'podcasts']
  },
  {
    id: 'murf',
    name: 'Murf AI',
    description: 'Professional AI voiceover platform with 120+ realistic voices in 20+ languages for video, presentations, and e-learning.',
    detailedDescription: 'Murf AI transforms text into studio-quality voiceovers with natural-sounding AI voices. Perfect for video creators, educators, and businesses.',
    models: ['Murf Studio', 'Murf API', 'Custom Voice Models'],
    howItWorks: 'Combines advanced TTS technology with voice synthesis to create human-like speech with proper pronunciation and natural flow.',
    howToUse: '1. Enter your script 2. Choose voice and language 3. Adjust pace, pitch, and emphasis 4. Preview and edit 5. Export high-quality audio',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 10 minutes, Basic: $19/month, Pro: $26/month, Enterprise: Custom',
    rating: 4.6,
    url: 'https://murf.ai',
    features: ['120+ Voices', '20+ Languages', 'Voice Editing', 'Commercial Use'],
    keywords: ['voiceover', 'e-learning', 'presentations', 'commercial voices', 'professional audio']
  },
  {
    id: 'speechify',
    name: 'Speechify',
    description: 'AI-powered text-to-speech app that reads any text aloud with natural voices, supporting documents, PDFs, and web pages.',
    detailedDescription: 'Speechify converts text from any source into natural-sounding speech, helping with reading, learning, and accessibility.',
    howItWorks: 'Uses AI to analyze text structure and context to deliver natural speech with proper pronunciation and emphasis.',
    howToUse: '1. Upload document or paste text 2. Select reading voice 3. Adjust speed and settings 4. Listen or download audio',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Basic voices, Premium: $11.58/month with premium voices',
    rating: 4.5,
    url: 'https://speechify.com',
    features: ['Document Reading', 'Web Page Reading', 'Speed Control', 'Highlighting'],
    keywords: ['text-to-speech', 'accessibility', 'reading assistant', 'document reader', 'learning aid']
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    description: 'Real-time voice cloning and speech synthesis platform for developers with custom voice creation and API integration.',
    detailedDescription: 'Resemble AI offers real-time voice cloning, custom voice creation, and neural speech synthesis for applications requiring personalized voice experiences.',
    models: ['Resemble Fill', 'Resemble Enhance', 'Resemble Detect'],
    howItWorks: 'Uses neural voice cloning technology to capture voice characteristics from small audio samples and generate speech.',
    howToUse: '1. Record voice samples 2. Train custom voice model 3. Integrate via API 4. Generate speech in real-time',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Developer: $0.006/second, Pro: Custom pricing, Enterprise: Contact sales',
    rating: 4.7,
    url: 'https://www.resemble.ai',
    features: ['Real-time Cloning', 'Custom Voices', 'Developer API', 'Voice Security'],
    keywords: ['voice cloning', 'developer API', 'real-time synthesis', 'custom voices', 'speech generation']
  },
  {
    id: 'play-ht',
    name: 'Play.ht',
    description: 'AI voice generator with 600+ ultra-realistic voices in 142+ languages, perfect for content creation and accessibility.',
    detailedDescription: 'Play.ht provides the most diverse collection of AI voices with advanced customization options for professional content creation.',
    models: ['PlayHT 2.0', 'PlayHT Turbo', 'Cloned Voices'],
    howItWorks: 'Advanced neural networks trained on diverse voice data to produce natural speech with emotional expressions and accents.',
    howToUse: '1. Paste or type text 2. Browse and select voice 3. Customize speech parameters 4. Generate and download',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 12,500 characters, Creator: $31.20/month, Pro: $39.20/month, Enterprise: Custom',
    rating: 4.4,
    url: 'https://play.ht',
    features: ['600+ Voices', '142+ Languages', 'Voice Cloning', 'SSML Support'],
    keywords: ['multilingual voices', 'voice diversity', 'content creation', 'accessibility', 'voice customization']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video and podcast editing with AI voice cloning, transcription, and text-based editing capabilities.',
    detailedDescription: 'Descript revolutionizes content creation with text-based editing, allowing you to edit audio and video by editing text transcripts.',
    models: ['Overdub AI Voice', 'Studio Sound', 'Eye Contact AI'],
    howItWorks: 'Combines transcription, voice cloning, and editing tools to enable text-based multimedia editing workflows.',
    howToUse: '1. Upload audio/video 2. Get automatic transcription 3. Edit by changing text 4. Use AI voice for corrections',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 1 hour transcription, Creator: $12/month, Pro: $24/month, Enterprise: $40/month',
    rating: 4.6,
    url: 'https://www.descript.com',
    features: ['Text-based Editing', 'Voice Cloning', 'Transcription', 'Collaboration'],
    keywords: ['podcast editing', 'video editing', 'transcription', 'voice cloning', 'text-based editing']
  },
  {
    id: 'wellsaid',
    name: 'WellSaid Labs',
    description: 'Enterprise AI voice platform with custom voice avatars and natural speech synthesis for business applications.',
    detailedDescription: 'WellSaid Labs creates AI voice avatars that sound human, designed for enterprise training, marketing, and product narration.',
    howItWorks: 'Deep learning models trained on professional voice talent to create consistent, high-quality speech for business use.',
    howToUse: '1. Choose voice avatar 2. Input script 3. Adjust pronunciation 4. Generate professional audio',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Maker: $44/month, Creative: $99/month, Team: $199/month, Enterprise: Custom',
    rating: 4.3,
    url: 'https://wellsaidlabs.com',
    features: ['Voice Avatars', 'Enterprise Features', 'Team Collaboration', 'Brand Voices'],
    keywords: ['enterprise voices', 'business narration', 'training content', 'voice avatars', 'professional audio']
  },
  {
    id: 'lovo',
    name: 'LOVO AI',
    description: 'AI voice generator and video editing platform with 500+ voices in 100+ languages, plus AI writer and art generator.',
    detailedDescription: 'LOVO combines voice generation, video editing, and content creation tools in one platform for comprehensive multimedia production.',
    models: ['Genny', 'LOVO Studio', 'Voice Cloning'],
    howItWorks: 'Integrated platform combining TTS, video editing, and AI content creation for streamlined multimedia production.',
    howToUse: '1. Create project 2. Generate script with AI writer 3. Choose voice and create audio 4. Add visuals and export',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 14-day trial, Basic: $25/month, Pro: $48/month, Pro+: $149/month',
    rating: 4.2,
    url: 'https://lovo.ai',
    features: ['500+ Voices', 'Video Editing', 'AI Writer', 'Voice Cloning'],
    keywords: ['voice generation', 'video creation', 'content platform', 'multilingual', 'AI writer']
  },
  {
    id: 'replica-studios',
    name: 'Replica Studios',
    description: 'AI voice actors for games, film, and digital media with performance-driven voice synthesis and emotional range.',
    detailedDescription: 'Replica Studios provides AI voice actors specifically designed for entertainment industry with natural performance and emotional expression.',
    howItWorks: 'Performance-based AI models that capture acting nuances, emotional range, and character consistency for entertainment content.',
    howToUse: '1. Browse voice actors 2. Input dialogue 3. Direct performance with emotional cues 4. Generate character voices',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Limited use, Creator: $5/month, Pro: $25/month, Enterprise: Custom',
    rating: 4.5,
    url: 'https://replicastudios.com',
    features: ['Voice Acting', 'Emotional Range', 'Character Voices', 'Game Integration'],
    keywords: ['voice acting', 'game voices', 'character dialogue', 'entertainment', 'emotional AI']
  },
  {
    id: 'voice123',
    name: 'Voice123 AI',
    description: 'AI-powered voice marketplace connecting clients with voice talent and offering AI voice generation services.',
    detailedDescription: 'Voice123 combines traditional voice talent marketplace with AI voice generation, offering both human and AI voice solutions.',
    howItWorks: 'Hybrid platform matching voice projects with talent while providing AI alternatives for quick turnaround projects.',
    howToUse: '1. Post voice project 2. Choose between human talent or AI 3. Review submissions 4. Select and purchase',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free browsing, Premium: $39/month, Enterprise: Custom packages',
    rating: 4.1,
    url: 'https://voice123.com',
    features: ['Voice Marketplace', 'AI Generation', 'Talent Matching', 'Project Management'],
    keywords: ['voice marketplace', 'talent platform', 'voiceover services', 'AI voices', 'project matching']
  },
  {
    id: 'synthesia-voice',
    name: 'Synthesia Voice',
    description: 'AI voice generation component of Synthesia platform, offering natural voices for AI avatar videos and presentations.',
    detailedDescription: 'Part of the Synthesia ecosystem, providing high-quality voice synthesis specifically optimized for AI avatar synchronization.',
    howItWorks: 'Voice models designed to work seamlessly with AI avatars, ensuring natural lip-sync and expression matching.',
    howToUse: '1. Create Synthesia account 2. Choose avatar and voice combination 3. Input script 4. Generate synchronized video',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Personal: $22.50/month, Creator: $67/month, Enterprise: Custom',
    rating: 4.4,
    url: 'https://www.synthesia.io',
    features: ['Avatar Sync', 'Natural Voices', 'Multiple Languages', 'Video Integration'],
    keywords: ['AI avatars', 'video voices', 'presentation', 'lip-sync', 'corporate training']
  },
  {
    id: 'fliki',
    name: 'Fliki',
    description: 'AI video and voice generator that creates videos from text with realistic voices, music, and stock footage.',
    detailedDescription: 'Fliki combines voice generation with video creation, automatically matching visuals to speech for complete video production.',
    howItWorks: 'AI analyzes text to generate matching voice, selects relevant visuals, and synchronizes everything into professional videos.',
    howToUse: '1. Input text or blog post 2. Choose voice and style 3. AI selects visuals 4. Customize and export video',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 5 minutes, Basic: $21/month, Standard: $66/month, Premium: $199/month',
    rating: 4.3,
    url: 'https://fliki.ai',
    features: ['Text-to-Video', 'Voice Generation', 'Auto Visuals', 'Music Library'],
    keywords: ['text-to-video', 'automated videos', 'content creation', 'social media', 'marketing videos']
  },
  {
    id: 'narakeet',
    name: 'Narakeet',
    description: 'Text-to-speech and video creation platform with 700+ voices in 90+ languages, PowerPoint integration.',
    detailedDescription: 'Narakeet specializes in creating narrated videos from presentations and text, with extensive language and voice options.',
    howItWorks: 'Converts presentation slides and text into narrated videos with automatic timing and voice synchronization.',
    howToUse: '1. Upload PowerPoint or text 2. Select voice and language 3. Auto-generate timing 4. Download video with narration',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 20 minutes/month, Hobbyist: $6/month, Creator: $25/month, Business: $75/month',
    rating: 4.2,
    url: 'https://www.narakeet.com',
    features: ['700+ Voices', 'PowerPoint Integration', '90+ Languages', 'Auto Timing'],
    keywords: ['presentation narration', 'PowerPoint voices', 'educational videos', 'multilingual', 'automated timing']
  },
  {
    id: 'naturalreaders',
    name: 'NaturalReader',
    description: 'AI text-to-speech software with OCR capabilities, dyslexia support, and natural-sounding voices for accessibility.',
    detailedDescription: 'NaturalReader focuses on accessibility and learning support, converting text, PDFs, and images to natural speech.',
    howItWorks: 'Combines OCR technology with advanced TTS to read any text format with natural pronunciation and pacing.',
    howToUse: '1. Upload document or image 2. OCR extracts text automatically 3. Choose voice and speed 4. Listen or save audio',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Basic voices, Plus: $99.50/year, Premium: $199.50/year, Ultimate: $299.50/year',
    rating: 4.1,
    url: 'https://www.naturalspeech.com',
    features: ['OCR Reading', 'Dyslexia Support', 'Document Reading', 'Learning Aid'],
    keywords: ['accessibility', 'dyslexia support', 'OCR reading', 'learning disabilities', 'document reader']
  },
  {
    id: 'clipchamp-voice',
    name: 'Clipchamp Voice',
    description: 'Microsoft\'s video editor with integrated AI text-to-speech, offering natural voices for video narration and content creation.',
    detailedDescription: 'Part of Microsoft 365, Clipchamp provides integrated voice generation within its video editing platform.',
    howItWorks: 'Built-in TTS engine optimized for video content with automatic timing and synchronization features.',
    howToUse: '1. Create video project 2. Add text-to-speech element 3. Input script and choose voice 4. Auto-sync with video',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Basic features, Premium: $11.99/month (Microsoft 365), Enterprise: Volume licensing',
    rating: 4.0,
    url: 'https://clipchamp.com',
    features: ['Video Integration', 'Microsoft 365', 'Auto Sync', 'Cloud Storage'],
    keywords: ['Microsoft video', 'integrated TTS', 'video narration', 'cloud editing', 'Office integration']
  },
  {
    id: 'voice-ai',
    name: 'Voice.ai',
    description: 'Real-time voice changer and AI voice cloning for gaming, streaming, and online communication with celebrity voices.',
    detailedDescription: 'Voice.ai provides real-time voice transformation and cloning capabilities for entertainment and communication applications.',
    howItWorks: 'Real-time voice processing using AI models to transform speech characteristics while maintaining natural quality.',
    howToUse: '1. Install desktop app 2. Select target voice 3. Enable real-time processing 4. Use in games/calls',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Basic voices, Pro: $25/month with premium voices and features',
    rating: 4.2,
    url: 'https://voice.ai',
    features: ['Real-time Voice Change', 'Celebrity Voices', 'Gaming Integration', 'Streaming Support'],
    keywords: ['voice changer', 'real-time processing', 'gaming voices', 'streaming', 'entertainment']
  },
  {
    id: 'voicemod',
    name: 'Voicemod',
    description: 'Real-time voice changer and soundboard with AI voices, effects, and custom voice creation for gaming and streaming.',
    detailedDescription: 'Voicemod is the leading real-time voice modification software with AI-powered voices and extensive customization options.',
    howItWorks: 'Real-time audio processing with AI voice models and effects applied instantly during live communication.',
    howToUse: '1. Download and install 2. Select voice effect 3. Configure microphone 4. Use in any app or game',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Limited voices, Pro: $4/month with unlimited voices and features',
    rating: 4.3,
    url: 'https://www.voicemod.net',
    features: ['Real-time Effects', 'Voice Lab', 'Soundboard', 'Game Integration'],
    keywords: ['voice effects', 'real-time changer', 'gaming', 'streaming', 'soundboard']
  },
  {
    id: 'uberduck',
    name: 'Uberduck',
    description: 'AI voice generation and cloning platform with celebrity voices, custom voice training, and API access for developers.',
    detailedDescription: 'Uberduck offers a vast library of celebrity and character voices plus custom voice cloning capabilities.',
    howItWorks: 'Deep learning models trained on voice samples to replicate speech patterns and characteristics of various personalities.',
    howToUse: '1. Select celebrity voice 2. Input text 3. Generate audio 4. Download or use via API',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: Limited generation, Creator: $9.99/month, Clone: $25/month, Enterprise: Custom',
    rating: 4.0,
    url: 'https://uberduck.ai',
    features: ['Celebrity Voices', 'Voice Cloning', 'Developer API', 'Custom Training'],
    keywords: ['celebrity voices', 'voice cloning', 'character voices', 'API access', 'entertainment']
  },
  {
    id: 'listnr',
    name: 'Listnr',
    description: 'AI podcast generator and text-to-speech platform with voice cloning, podcast hosting, and monetization features.',
    detailedDescription: 'Listnr combines voice generation with podcast creation and distribution, offering end-to-end podcast production.',
    howItWorks: 'Integrated platform for creating, hosting, and monetizing podcasts using AI-generated voices and automated workflows.',
    howToUse: '1. Create podcast project 2. Generate script or upload 3. Choose voices 4. Publish to podcast platforms',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free: 1000 words, Solo: $9/month, Starter: $19/month, Pro: $39/month',
    rating: 4.1,
    url: 'https://www.listnr.tech',
    features: ['Podcast Generation', 'Voice Cloning', 'Hosting Platform', 'Monetization'],
    keywords: ['podcast creation', 'automated podcasts', 'voice cloning', 'podcast hosting', 'content monetization']
  },
  {
    id: 'podcast-ai',
    name: 'Podcast.ai',
    description: 'AI-powered podcast creation platform that generates entire podcast episodes from topics using AI hosts and voices.',
    detailedDescription: 'Fully automated podcast generation system that creates content, scripts, and voices for complete podcast episodes.',
    howItWorks: 'AI analyzes topics to generate engaging scripts, then uses AI voices to create natural conversational podcast episodes.',
    howToUse: '1. Input podcast topic 2. AI generates script and structure 3. Choose host voices 4. Generate complete episode',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Starter: $19/month, Professional: $49/month, Enterprise: Custom pricing',
    rating: 3.9,
    url: 'https://podcast.ai',
    features: ['Automated Episodes', 'AI Hosts', 'Topic Generation', 'Full Production'],
    keywords: ['automated podcasts', 'AI hosts', 'episode generation', 'content automation', 'podcast AI']
  },
  {
    id: 'coqui-tts',
    name: 'Coqui TTS',
    description: 'Open-source text-to-speech toolkit with voice cloning, multi-speaker models, and real-time synthesis capabilities.',
    detailedDescription: 'Community-driven TTS platform offering advanced features for developers and researchers with extensive customization options.',
    howItWorks: 'Open-source neural TTS models that can be trained and customized for specific use cases and voice characteristics.',
    howToUse: '1. Install Coqui TTS 2. Choose or train model 3. Configure voice parameters 4. Generate speech via API',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Completely free and open-source, cloud services available for convenience',
    rating: 4.4,
    url: 'https://coqui.ai',
    features: ['Open Source', 'Voice Cloning', 'Custom Training', 'Real-time Synthesis'],
    keywords: ['open source TTS', 'voice cloning', 'custom models', 'developer tools', 'research platform']
  },
  {
    id: 'tortoise-tts',
    name: 'Tortoise TTS',
    description: 'High-quality text-to-speech model with expressive voice cloning and controllable speech generation for research.',
    detailedDescription: 'Advanced TTS model focused on quality over speed, offering highly expressive and controllable voice synthesis.',
    howItWorks: 'Slow but high-quality autoregressive model that generates expressive speech with fine control over prosody.',
    howToUse: '1. Install via Python 2. Prepare voice samples 3. Configure generation parameters 4. Generate high-quality speech',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source model, free to use and modify',
    rating: 4.2,
    url: 'https://github.com/neonbjb/tortoise-tts',
    features: ['High Quality', 'Voice Cloning', 'Expressive Speech', 'Research Grade'],
    keywords: ['research TTS', 'high quality', 'expressive voices', 'voice cloning', 'open source']
  },
  {
    id: 'bark-tts',
    name: 'Bark',
    description: 'Transformer-based text-to-audio model that generates speech, music, and sound effects with speaker consistency.',
    detailedDescription: 'Suno\'s Bark is a universal audio model capable of generating not just speech but also background noise, music, and effects.',
    howItWorks: 'Transformer model trained on diverse audio data to generate speech with environmental sounds and musical elements.',
    howToUse: '1. Install Bark 2. Use special tokens for effects 3. Generate speech with audio context 4. Export results',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source model available on Hugging Face and GitHub',
    rating: 4.1,
    url: 'https://github.com/suno-ai/bark',
    features: ['Multi-modal Audio', 'Sound Effects', 'Music Generation', 'Speaker Consistency'],
    keywords: ['transformer TTS', 'audio generation', 'sound effects', 'music synthesis', 'multi-modal']
  },
  {
    id: 'azure-speech',
    name: 'Azure Cognitive Services Speech',
    description: 'Microsoft\'s enterprise text-to-speech service with neural voices, SSML support, and custom voice creation.',
    detailedDescription: 'Enterprise-grade speech service with high availability, security, and extensive customization options for business applications.',
    howItWorks: 'Cloud-based neural TTS with global availability, enterprise security, and integration with Microsoft ecosystem.',
    howToUse: '1. Create Azure account 2. Get API credentials 3. Send text via REST API 4. Receive high-quality audio',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Pay-per-use: $4/million characters, Free tier: 0.5M characters/month',
    rating: 4.5,
    url: 'https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/',
    features: ['Enterprise Grade', 'Neural Voices', 'Custom Voices', 'Global Availability'],
    keywords: ['Microsoft Azure', 'enterprise TTS', 'cloud speech', 'neural voices', 'business integration']
  },
  {
    id: 'google-cloud-tts',
    name: 'Google Cloud Text-to-Speech',
    description: 'Google\'s cloud TTS service with WaveNet voices, SSML support, and integration with Google Cloud Platform.',
    detailedDescription: 'Scalable cloud TTS service leveraging Google\'s machine learning expertise with high-quality neural voices.',
    howItWorks: 'WaveNet and neural2 models provide natural-sounding speech with cloud scalability and reliability.',
    howToUse: '1. Set up GCP project 2. Enable TTS API 3. Authenticate and make requests 4. Process audio responses',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'WaveNet: $16/million characters, Standard: $4/million characters, Free: 1M characters/month',
    rating: 4.4,
    url: 'https://cloud.google.com/text-to-speech',
    features: ['WaveNet Voices', 'Cloud Scalability', 'SSML Support', 'Multiple Languages'],
    keywords: ['Google Cloud', 'WaveNet', 'cloud TTS', 'enterprise API', 'machine learning']
  },
  {
    id: 'amazon-polly',
    name: 'Amazon Polly',
    description: 'AWS text-to-speech service with lifelike voices, speech marks, and integration with Amazon Web Services ecosystem.',
    detailedDescription: 'Fully managed TTS service that converts text into lifelike speech with extensive AWS integrations and global infrastructure.',
    howItWorks: 'Advanced deep learning technologies to synthesize natural-sounding human speech with real-time streaming.',
    howToUse: '1. Access via AWS console 2. Configure voice and settings 3. Submit text via API 4. Stream or download audio',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Standard voices: $4/million characters, Neural voices: $16/million characters, Free tier included',
    rating: 4.3,
    url: 'https://aws.amazon.com/polly/',
    features: ['Neural Voices', 'Real-time Streaming', 'Speech Marks', 'AWS Integration'],
    keywords: ['Amazon AWS', 'neural TTS', 'cloud speech', 'real-time streaming', 'enterprise integration']
  },
  {
    id: 'ibm-watson-tts',
    name: 'IBM Watson Text to Speech',
    description: 'Enterprise TTS service with expressive neural voices, custom voice models, and industry-specific optimizations.',
    detailedDescription: 'AI-powered speech synthesis designed for enterprise applications with advanced customization and security features.',
    howItWorks: 'Deep neural networks trained on diverse datasets to produce natural speech with enterprise-level reliability.',
    howToUse: '1. Create IBM Cloud account 2. Provision TTS service 3. Use REST API or SDKs 4. Process synthesized speech',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Lite: Free up to 10k characters/month, Standard: $0.02/thousand characters',
    rating: 4.1,
    url: 'https://www.ibm.com/cloud/watson-text-to-speech',
    features: ['Enterprise Security', 'Custom Voices', 'Expressive Synthesis', 'Industry Solutions'],
    keywords: ['IBM Watson', 'enterprise TTS', 'custom voices', 'business AI', 'industry solutions']
  },
  {
    id: 'speechelo',
    name: 'Speechelo',
    description: 'One-time purchase text-to-speech software with human-like voices, emotion control, and commercial usage rights.',
    detailedDescription: 'Affordable TTS solution with lifetime license, offering natural voices with emotional expressions for content creators.',
    howItWorks: 'Cloud-based TTS with local software interface, providing natural speech synthesis with emotional control.',
    howToUse: '1. Purchase and download software 2. Enter text and select voice 3. Choose tone and emotion 4. Generate and download',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'One-time payment: $47 for standard version, $77 for pro version with additional features',
    rating: 4.0,
    url: 'https://speechelo.com',
    features: ['One-time Purchase', 'Emotional Voices', 'Commercial Rights', 'Offline Access'],
    keywords: ['lifetime license', 'commercial rights', 'emotional TTS', 'content creation', 'affordable TTS']
  },
  {
    id: 'voicery',
    name: 'Voicery',
    description: 'High-quality neural text-to-speech API with custom voice creation, brand voice development, and enterprise solutions.',
    detailedDescription: 'Professional TTS service focusing on brand voice creation and high-quality neural synthesis for business applications.',
    howItWorks: 'Neural voice synthesis technology optimized for brand consistency and professional audio quality.',
    howToUse: '1. Create account and get API key 2. Design custom voice or use existing 3. Integrate via API 4. Generate brand-consistent audio',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Contact for custom pricing based on usage and voice development needs',
    rating: 4.2,
    url: 'https://www.voicery.com',
    features: ['Custom Brand Voices', 'High Quality Neural', 'Enterprise API', 'Voice Design'],
    keywords: ['brand voices', 'enterprise TTS', 'custom voice development', 'professional audio', 'business solutions']
  },
  {
    id: 'respeecher',
    name: 'Respeecher',
    description: 'Hollywood-grade voice cloning and synthesis technology for film, gaming, and media production with ethical AI practices.',
    detailedDescription: 'Professional voice cloning technology used in major film and game productions, focusing on ethical AI and consent-based cloning.',
    howItWorks: 'Advanced neural networks trained to capture subtle voice characteristics while maintaining ethical standards and consent protocols.',
    howToUse: '1. Contact for project consultation 2. Provide voice samples with consent 3. Custom model training 4. Professional production integration',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Custom enterprise pricing based on project scope and requirements',
    rating: 4.6,
    url: 'https://www.respeecher.com',
    features: ['Hollywood Grade', 'Ethical AI', 'Film Production', 'Gaming Integration'],
    keywords: ['professional voice cloning', 'film production', 'ethical AI', 'Hollywood technology', 'consent-based']
  },
  {
    id: 'modulate',
    name: 'Modulate',
    description: 'Real-time voice conversion technology for gaming and virtual worlds, focusing on safety and identity protection.',
    detailedDescription: 'Pioneering real-time voice transformation technology designed to enhance online safety and enable new forms of digital identity.',
    howItWorks: 'Real-time neural voice conversion that transforms speech characteristics while maintaining conversation flow and safety.',
    howToUse: '1. Integrate SDK into application 2. Configure voice transformations 3. Enable real-time processing 4. Monitor for safety',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Enterprise licensing based on integration scope and user base',
    rating: 4.3,
    url: 'https://modulate.ai',
    features: ['Real-time Conversion', 'Safety Features', 'Gaming Integration', 'Identity Protection'],
    keywords: ['real-time voice conversion', 'online safety', 'gaming technology', 'identity protection', 'virtual worlds']
  },
  {
    id: 'lyrebird',
    name: 'Lyrebird (Descript)',
    description: 'AI voice synthesis technology now integrated into Descript, offering personalized voice avatars and speech generation.',
    detailedDescription: 'Original Lyrebird technology now powering Descript\'s voice features, providing personalized AI voice avatars.',
    howItWorks: 'Neural voice modeling technology that creates personalized voice avatars from speech samples.',
    howToUse: '1. Record voice samples in Descript 2. Train personal voice model 3. Generate speech using your voice 4. Edit and refine output',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Included in Descript pricing plans, see Descript for current rates',
    rating: 4.1,
    url: 'https://www.descript.com/lyrebird',
    features: ['Personal Voice Avatars', 'Descript Integration', 'Voice Modeling', 'Speech Generation'],
    keywords: ['personal voice avatar', 'Descript integration', 'voice modeling', 'speech synthesis', 'AI voice clone']
  },
  {
    id: 'cereproc',
    name: 'CereProc',
    description: 'Text-to-speech technology with character voices, emotional expression, and custom voice creation for media and assistive technology.',
    detailedDescription: 'Specialized TTS technology focusing on character voices and emotional expression for entertainment and accessibility applications.',
    howItWorks: 'Advanced speech synthesis with focus on character development and emotional expression capabilities.',
    howToUse: '1. Choose character voice or create custom 2. Input text with emotion markers 3. Generate expressive speech 4. Integrate into applications',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Licensing fees vary by application type and distribution scope',
    rating: 4.0,
    url: 'https://www.cereproc.com',
    features: ['Character Voices', 'Emotional Expression', 'Custom Creation', 'Accessibility Focus'],
    keywords: ['character voices', 'emotional TTS', 'assistive technology', 'accessibility', 'custom voice creation']
  },
  {
    id: 'acapela',
    name: 'Acapela Group',
    description: 'Multilingual text-to-speech solutions with over 200 voices in 30+ languages for accessibility, education, and business.',
    detailedDescription: 'Established TTS provider with extensive language support and specialized solutions for accessibility and education sectors.',
    howItWorks: 'Mature TTS technology with emphasis on clear pronunciation and language accuracy across diverse linguistic contexts.',
    howToUse: '1. Select appropriate voice and language 2. Configure speech parameters 3. Generate clear, accurate speech 4. Deploy in applications',
    category: 'voice',
    pricing: 'paid',
    pricingDetails: 'Licensing model varies by application type, contact for enterprise pricing',
    rating: 3.9,
    url: 'https://www.acapela-group.com',
    features: ['200+ Voices', '30+ Languages', 'Accessibility Focus', 'Education Solutions'],
    keywords: ['multilingual TTS', 'accessibility solutions', 'education technology', 'clear pronunciation', 'established provider']
  },
  {
    id: 'readloud',
    name: 'ReadLoud',
    description: 'Web-based text-to-speech tool with natural voices, reading speed control, and support for multiple document formats.',
    detailedDescription: 'Simple web-based TTS solution focused on document reading and accessibility with straightforward interface.',
    howItWorks: 'Browser-based TTS engine that processes various document formats to provide accessible audio output.',
    howToUse: '1. Upload document or paste text 2. Choose voice and reading speed 3. Start playback with highlighting 4. Download audio if needed',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free with limitations, Premium plans available for extended features',
    rating: 3.8,
    url: 'https://readloud.net',
    features: ['Web-based', 'Document Support', 'Speed Control', 'Text Highlighting'],
    keywords: ['web TTS', 'document reading', 'accessibility tool', 'reading assistance', 'browser-based']
  },
  {
    id: 'ttsmp3',
    name: 'TTSMp3',
    description: 'Free online text-to-speech converter supporting multiple languages with downloadable MP3 output.',
    detailedDescription: 'Simple, free TTS service for basic text-to-speech conversion with support for multiple languages and direct MP3 download.',
    howItWorks: 'Basic TTS engine providing straightforward text-to-speech conversion with standard voice quality.',
    howToUse: '1. Enter text on website 2. Select language and voice 3. Generate speech 4. Download MP3 file',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Completely free to use with no registration required',
    rating: 3.6,
    url: 'https://ttsmp3.com',
    features: ['Free Service', 'MP3 Download', 'Multiple Languages', 'No Registration'],
    keywords: ['free TTS', 'MP3 conversion', 'simple interface', 'basic TTS', 'no registration']
  },
  {
    id: 'voicerss',
    name: 'VoiceRSS',
    description: 'Text-to-speech API service providing simple integration with multiple languages and voice options for developers.',
    detailedDescription: 'Developer-focused TTS API offering reliable text-to-speech conversion with straightforward integration options.',
    howItWorks: 'RESTful API service that converts text to speech with various language and voice parameter options.',
    howToUse: '1. Get free API key 2. Make HTTP requests with text 3. Receive audio response 4. Integrate into applications',
    category: 'voice',
    pricing: 'freemium',
    pricingDetails: 'Free tier with daily limits, paid plans for higher usage volumes',
    rating: 3.9,
    url: 'https://www.voicerss.org',
    features: ['Developer API', 'Multiple Languages', 'Easy Integration', 'Reliable Service'],
    keywords: ['TTS API', 'developer tools', 'simple integration', 'multilingual API', 'reliable service']
  },
  {
    id: 'festival-tts',
    name: 'Festival TTS',
    description: 'Open-source text-to-speech system from University of Edinburgh, widely used for research and development.',
    detailedDescription: 'Academic TTS system providing foundation for many commercial applications and research projects in speech synthesis.',
    howItWorks: 'Modular TTS architecture allowing extensive customization and research into speech synthesis components.',
    howToUse: '1. Install Festival system 2. Configure voices and parameters 3. Process text through command line 4. Customize for specific needs',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source and completely free for all uses including commercial',
    rating: 3.7,
    url: 'http://www.cstr.ed.ac.uk/projects/festival/',
    features: ['Open Source', 'Research Platform', 'Customizable', 'Academic Foundation'],
    keywords: ['open source TTS', 'research platform', 'academic TTS', 'customizable system', 'development foundation']
  },
  {
    id: 'espeak',
    name: 'eSpeak NG',
    description: 'Compact open-source text-to-speech synthesizer supporting over 100 languages with small footprint and high customization.',
    detailedDescription: 'Lightweight, multilingual TTS engine designed for embedded systems and applications requiring minimal resources.',
    howItWorks: 'Formant synthesis approach providing compact TTS engine with extensive language support and pronunciation rules.',
    howToUse: '1. Install eSpeak NG 2. Use command line interface 3. Configure voice parameters 4. Integrate into applications',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source software, completely free to use and modify',
    rating: 3.5,
    url: 'https://github.com/espeak-ng/espeak-ng',
    features: ['100+ Languages', 'Compact Size', 'Open Source', 'Embedded Systems'],
    keywords: ['lightweight TTS', 'multilingual support', 'embedded systems', 'open source', 'compact engine']
  },
  {
    id: 'mary-tts',
    name: 'MaryTTS',
    description: 'Open-source, multilingual text-to-speech synthesis platform written in Java, designed for research and development.',
    detailedDescription: 'Modular TTS platform providing comprehensive speech synthesis capabilities with research-grade features and customization.',
    howItWorks: 'Modular architecture allowing component customization and research into various aspects of speech synthesis.',
    howToUse: '1. Set up Java environment 2. Install MaryTTS server 3. Configure voices and modules 4. Access via web interface or API',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source platform, free for research and commercial use',
    rating: 3.8,
    url: 'http://mary.dfki.de',
    features: ['Java Platform', 'Modular Design', 'Research Grade', 'Web Interface'],
    keywords: ['Java TTS', 'research platform', 'modular system', 'open source', 'customizable synthesis']
  },
  {
    id: 'pico-tts',
    name: 'Pico TTS',
    description: 'Small footprint text-to-speech engine originally developed by SVOX, used in Android and embedded systems.',
    detailedDescription: 'Compact TTS engine designed for mobile and embedded applications where resource efficiency is critical.',
    howItWorks: 'Efficient synthesis algorithm optimized for low memory and processing requirements while maintaining acceptable quality.',
    howToUse: '1. Integrate into Android project 2. Configure voice parameters 3. Call TTS functions 4. Handle speech output',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source, included in Android AOSP',
    rating: 3.4,
    url: 'https://android.googlesource.com/platform/external/svox/',
    features: ['Small Footprint', 'Android Integration', 'Embedded Systems', 'Efficient Processing'],
    keywords: ['Android TTS', 'embedded TTS', 'mobile synthesis', 'SVOX engine', 'resource efficient']
  },
  {
    id: 'flite-tts',
    name: 'Flite',
    description: 'Small, fast run-time text-to-speech synthesis engine developed at Carnegie Mellon University for embedded use.',
    detailedDescription: 'Lightweight TTS engine designed for real-time applications and embedded systems requiring fast, efficient synthesis.',
    howItWorks: 'Optimized synthesis algorithms designed for speed and small memory footprint while maintaining speech quality.',
    howToUse: '1. Compile for target platform 2. Link with application 3. Call synthesis functions 4. Handle audio output',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source software with permissive licensing for commercial use',
    rating: 3.6,
    url: 'http://www.festvox.org/flite/',
    features: ['Fast Synthesis', 'Small Memory', 'Real-time Processing', 'Embedded Focus'],
    keywords: ['fast TTS', 'embedded synthesis', 'real-time TTS', 'Carnegie Mellon', 'lightweight engine']
  },
  {
    id: 'mimic-tts',
    name: 'Mimic',
    description: 'Fast, lightweight text-to-speech engine by Mycroft AI, designed for voice assistants and IoT devices.',
    detailedDescription: 'Modern TTS engine optimized for voice assistant applications with focus on speed and natural-sounding output.',
    howItWorks: 'Efficient neural synthesis designed for real-time voice assistant interactions with natural speech quality.',
    howToUse: '1. Install Mimic engine 2. Configure voice models 3. Integrate with voice assistant 4. Process real-time synthesis',
    category: 'voice',
    pricing: 'free',
    pricingDetails: 'Open-source project, free for all uses including commercial applications',
    rating: 3.9,
    url: 'https://github.com/MycroftAI/mimic3',
    features: ['Voice Assistant Focus', 'Fast Processing', 'IoT Compatible', 'Natural Quality'],
    keywords: ['voice assistant TTS', 'Mycroft AI', 'IoT synthesis', 'fast TTS', 'open source assistant']
  }
];

export default function VoiceAI() {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (tool: AITool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTool(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-voice/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-voice">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                AI Audio & Voice Tools
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Transform text into natural speech, clone voices, and create professional audio content with cutting-edge AI voice technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-ai-voice" />
                <span>Voice Synthesis</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-ai-voice" />
                <span>Voice Cloning</span>
              </div>
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-ai-voice" />
                <span>Audio Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <AudioWaveform className="w-4 h-4 text-ai-voice" />
                <span>Speech Processing</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voiceAITools.map((tool) => (
              <AIToolCard
                key={tool.id}
                tool={tool}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AIToolModal
        tool={selectedTool}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
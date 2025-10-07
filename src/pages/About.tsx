import { Brain, Target, Users, Rocket, Heart, Zap, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'AI Tools Listed', icon: Zap },
    { number: '50+', label: 'Categories', icon: Target },
    { number: '100k+', label: 'Users Helped', icon: Users },
    { number: '95%', label: 'User Satisfaction', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Our mission is to democratize AI by making it accessible and understandable for everyone.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'We prioritize user experience and provide personalized recommendations tailored to your needs.',
    },
    {
      icon: TrendingUp,
      title: 'Always Evolving',
      description: 'We continuously update our database with the latest AI innovations and improvements.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every AI tool is carefully evaluated to ensure we only feature high-quality solutions.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Brain className="w-12 h-12 text-primary animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              About NannuAI
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted companion in navigating the ever-expanding universe of artificial intelligence tools
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Our Story</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In an age where AI technology is advancing at an unprecedented pace, we recognized a critical need: people were overwhelmed by the sheer number of AI tools available, struggling to find the right solution for their specific needs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                NannuAI was born from this challenge. We set out to create a comprehensive, user-friendly platform that not only catalogs AI tools but also helps users discover the perfect match for their unique requirements through intelligent recommendations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we serve over 100,000 users worldwide, helping professionals, creators, researchers, and enthusiasts discover and leverage the power of AI in their daily work.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from curating tools to building features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-smooth"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                What Makes Us Different
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto neon-glow">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Discovery</h3>
                <p className="text-muted-foreground">
                  Our intelligent recommendation system uses AI to understand your needs and suggest the perfect tools
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Comprehensive Coverage</h3>
                <p className="text-muted-foreground">
                  From text generation to video editing, we cover every category of AI tools in one place
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-data rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Curated Quality</h3>
                <p className="text-muted-foreground">
                  Every tool is carefully reviewed and evaluated to ensure we only feature the best
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of thousands of users who are leveraging AI to transform their work and creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:opacity-90 transition-smooth neon-glow"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore AI Tools
              </a>
              <a
                href="mailto:hello@nannuai.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-card/50 border border-border/50 rounded-xl font-semibold hover:border-primary/30 transition-smooth"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { FileText, AlertCircle, Scale, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Terms of Service
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to NannuAI. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NannuAI provides a comprehensive directory and discovery platform for AI tools. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>AI tool discovery and search functionality</li>
                  <li>AI-powered recommendations based on user queries</li>
                  <li>Categorized listings of AI tools</li>
                  <li>Tool descriptions, pricing information, and feature comparisons</li>
                  <li>Links to third-party AI tool providers</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <Scale className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using NannuAI, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and current information when using our services</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to interfere with or disrupt the service</li>
                  <li>Not use automated systems to access the service without permission</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not misuse or attempt to gain unauthorized access to any part of the service</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Tools and Links</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NannuAI serves as a directory and provides links to third-party AI tools and services. Please note:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We do not own, operate, or control the third-party tools featured on our platform</li>
                  <li>We are not responsible for the content, functionality, or practices of third-party tools</li>
                  <li>Your interactions with third-party providers are solely between you and them</li>
                  <li>You should review the terms of service and privacy policies of any third-party tools you use</li>
                  <li>We do not guarantee the availability, quality, or performance of third-party tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content, design, graphics, compilation, and other matters related to NannuAI are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication of any such matters or any part of the site is prohibited, except as expressly permitted in these Terms of Service.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NannuAI is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The accuracy, completeness, or reliability of information about AI tools</li>
                  <li>The availability or functionality of the service</li>
                  <li>That the service will be uninterrupted or error-free</li>
                  <li>The performance or results of any third-party AI tools featured</li>
                  <li>That defects will be corrected</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <Scale className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall NannuAI, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">AI Recommendations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI-powered recommendation feature uses machine learning to suggest tools based on your queries. These recommendations are provided for informational purposes only and should not be considered as professional advice or endorsements. We encourage you to conduct your own research before using any AI tool.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Modifications to Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. You agree that NannuAI shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <Scale className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Your use of the service may also be subject to other local, state, national, or international laws.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-card/50 border border-border/50 rounded-lg">
              <p className="text-foreground">Email: legal@nannuai.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

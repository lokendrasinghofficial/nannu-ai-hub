import { BarChart3 } from 'lucide-react';
import AIToolCard from '@/components/AIToolCard';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid';
  rating: number;
  url: string;
  features: string[];
}

const dataAITools: AITool[] = [
  {
    id: '1',
    name: 'Tableau',
    description: 'Industry-leading data visualization platform with AI-powered insights and natural language queries.',
    category: 'data',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://tableau.com',
    features: ['Data Visualization', 'AI Analytics', 'Natural Language', 'Enterprise Integration']
  },
  {
    id: '2',
    name: 'Power BI',
    description: 'Microsoft\'s business analytics solution with AI-driven insights and automated data preparation.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.7,
    url: 'https://powerbi.microsoft.com',
    features: ['AI Insights', 'Auto ML', 'Natural Language Q&A', 'Real-time Analytics']
  },
  {
    id: '3',
    name: 'DataRobot',
    description: 'Automated machine learning platform that accelerates data science workflows.',
    category: 'data',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://datarobot.com',
    features: ['AutoML', 'Model Deployment', 'Predictive Analytics', 'MLOps']
  },
  {
    id: '4',
    name: 'H2O.ai',
    description: 'Open source machine learning and AI platform for data scientists and developers.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.5,
    url: 'https://h2o.ai',
    features: ['AutoML', 'Open Source', 'Scalable ML', 'Feature Engineering']
  },
  {
    id: '5',
    name: 'Alteryx',
    description: 'Self-service data analytics platform with drag-and-drop interface and AI capabilities.',
    category: 'data',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://alteryx.com',
    features: ['Data Preparation', 'Predictive Analytics', 'Spatial Analytics', 'Machine Learning']
  },
  {
    id: '6',
    name: 'Qlik Sense',
    description: 'AI-powered business intelligence platform with associative analytics engine.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://qlik.com',
    features: ['Associative Analytics', 'AI Insights', 'Self-Service BI', 'Data Discovery']
  },
  {
    id: '7',
    name: 'Looker',
    description: 'Google Cloud\'s modern BI platform with modeling language and embedded analytics.',
    category: 'data',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://looker.com',
    features: ['LookML', 'Embedded Analytics', 'Data Platform', 'Real-time Insights']
  },
  {
    id: '8',
    name: 'Sisense',
    description: 'AI-driven analytics platform that simplifies complex data for business users.',
    category: 'data',
    pricing: 'paid',
    rating: 4.2,
    url: 'https://sisense.com',
    features: ['AI Analytics', 'Data Fusion', 'Embedded BI', 'Natural Language']
  },
  {
    id: '9',
    name: 'Domo',
    description: 'Cloud-native business intelligence platform with real-time data integration.',
    category: 'data',
    pricing: 'paid',
    rating: 4.1,
    url: 'https://domo.com',
    features: ['Real-time Data', 'Mobile BI', 'Data Integration', 'Executive Dashboards']
  },
  {
    id: '10',
    name: 'ThoughtSpot',
    description: 'Search-driven analytics platform that lets users search data like Google.',
    category: 'data',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://thoughtspot.com',
    features: ['Search Analytics', 'Self-Service BI', 'Embedded Analytics', 'AI Insights']
  },
  {
    id: '11',
    name: 'Palantir Foundry',
    description: 'Data integration and analytics platform for large-scale enterprise operations.',
    category: 'data',
    pricing: 'paid',
    rating: 4.0,
    url: 'https://palantir.com',
    features: ['Data Integration', 'Large Scale Analytics', 'AI/ML', 'Decision Support']
  },
  {
    id: '12',
    name: 'Databricks',
    description: 'Unified analytics platform for big data and machine learning with collaborative notebooks.',
    category: 'data',
    pricing: 'paid',
    rating: 4.5,
    url: 'https://databricks.com',
    features: ['Unified Analytics', 'MLflow', 'Delta Lake', 'Collaborative ML']
  },
  {
    id: '13',
    name: 'Snowflake',
    description: 'Cloud data platform with built-in analytics and machine learning capabilities.',
    category: 'data',
    pricing: 'paid',
    rating: 4.6,
    url: 'https://snowflake.com',
    features: ['Cloud Data Warehouse', 'Data Sharing', 'ML Functions', 'Elastic Scaling']
  },
  {
    id: '14',
    name: 'Amazon QuickSight',
    description: 'AWS\'s serverless business intelligence service with machine learning insights.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.0,
    url: 'https://aws.amazon.com/quicksight',
    features: ['Serverless BI', 'ML Insights', 'Natural Language', 'Pay-per-use']
  },
  {
    id: '15',
    name: 'Google Analytics Intelligence',
    description: 'AI-powered insights for Google Analytics with automated anomaly detection.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://analytics.google.com/analytics/intelligence',
    features: ['AI Insights', 'Anomaly Detection', 'Natural Language', 'Automated Reporting']
  },
  {
    id: '16',
    name: 'IBM Watson Analytics',
    description: 'Cognitive analytics platform with natural language processing and visualization.',
    category: 'data',
    pricing: 'paid',
    rating: 3.9,
    url: 'https://ibm.com/watson/analytics',
    features: ['Cognitive Analytics', 'NLP Queries', 'Predictive Modeling', 'Data Discovery']
  },
  {
    id: '17',
    name: 'SAS Viya',
    description: 'Cloud-native analytics platform with advanced machine learning and AI capabilities.',
    category: 'data',
    pricing: 'paid',
    rating: 4.1,
    url: 'https://sas.com/viya',
    features: ['Advanced Analytics', 'AI/ML', 'Model Management', 'Visual Analytics']
  },
  {
    id: '18',
    name: 'Plotly Dash',
    description: 'Python framework for building analytical web applications with interactive visualizations.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://plotly.com/dash',
    features: ['Interactive Dashboards', 'Python/R Integration', 'Real-time Updates', 'Custom Analytics Apps']
  },
  {
    id: '19',
    name: 'Observable',
    description: 'Collaborative data visualization platform with live, interactive notebooks.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://observablehq.com',
    features: ['Interactive Notebooks', 'D3.js Integration', 'Collaborative Analytics', 'Real-time Visualization']
  },
  {
    id: '20',
    name: 'Hex',
    description: 'Modern data workspace combining SQL, Python, and no-code tools for analytics.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://hex.tech',
    features: ['Multi-language Support', 'Collaborative Notebooks', 'Version Control', 'App Building']
  },
  {
    id: '21',
    name: 'Retool',
    description: 'Low-code platform for building internal analytics dashboards and business applications.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.5,
    url: 'https://retool.com',
    features: ['Low-code Dashboards', 'Database Integration', 'Custom Apps', 'Team Collaboration']
  },
  {
    id: '22',
    name: 'Metabase',
    description: 'Open-source business intelligence tool for creating dashboards and asking data questions.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://metabase.com',
    features: ['Open Source', 'Self-hosted', 'SQL Queries', 'Dashboard Builder']
  },
  {
    id: '23',
    name: 'Grafana',
    description: 'Open platform for monitoring and observability with powerful visualization capabilities.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://grafana.com',
    features: ['Monitoring Dashboards', 'Alerting', 'Plugin Ecosystem', 'Multi-source Data']
  },
  {
    id: '24',
    name: 'Apache Superset',
    description: 'Modern data exploration and visualization platform with SQL Lab and dashboard builder.',
    category: 'data',
    pricing: 'free',
    rating: 4.0,
    url: 'https://superset.apache.org',
    features: ['Open Source', 'SQL Lab', 'Rich Visualizations', 'Extensible']
  },
  {
    id: '25',
    name: 'Chartio',
    description: 'Cloud-based business intelligence platform with drag-and-drop interface.',
    category: 'data',
    pricing: 'paid',
    rating: 3.8,
    url: 'https://chartio.com',
    features: ['Drag-and-Drop', 'SQL Mode', 'Dashboard Sharing', 'Data Alerts']
  },
  {
    id: '26',
    name: 'Mode Analytics',
    description: 'Collaborative analytics platform combining SQL, Python, and R with visualization tools.',
    category: 'data',
    pricing: 'paid',
    rating: 4.2,
    url: 'https://mode.com',
    features: ['SQL + Python/R', 'Collaborative Analytics', 'Report Automation', 'Data Science Workflows']
  },
  {
    id: '27',
    name: 'Periscope Data',
    description: 'Data science platform for analysts with SQL, Python, R, and Scala support.',
    category: 'data',
    pricing: 'paid',
    rating: 4.0,
    url: 'https://sisense.com/product/periscope-data',
    features: ['Multi-language Support', 'Advanced Analytics', 'Real-time Dashboards', 'Data Science Tools']
  },
  {
    id: '28',
    name: 'Holistics',
    description: 'Self-service business intelligence platform with modeling layer and automated reporting.',
    category: 'data',
    pricing: 'paid',
    rating: 4.1,
    url: 'https://holistics.io',
    features: ['Data Modeling', 'Self-service BI', 'Automated Reports', 'Version Control']
  },
  {
    id: '29',
    name: 'Klipfolio',
    description: 'Cloud-based dashboard and reporting platform for connecting and visualizing data.',
    category: 'data',
    pricing: 'paid',
    rating: 4.0,
    url: 'https://klipfolio.com',
    features: ['Dashboard Builder', 'Data Connectors', 'Real-time Monitoring', 'Custom Metrics']
  },
  {
    id: '30',
    name: 'Zoho Analytics',
    description: 'Self-service business intelligence and data analytics software with AI assistant.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://zoho.com/analytics',
    features: ['AI Assistant', 'Drag-and-Drop', 'Collaborative BI', 'Embedded Analytics']
  },
  {
    id: '31',
    name: 'Mixpanel',
    description: 'Product analytics platform with event tracking, funnel analysis, and user behavior insights.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://mixpanel.com',
    features: ['Event Analytics', 'User Segmentation', 'Funnel Analysis', 'A/B Testing']
  },
  {
    id: '32',
    name: 'Amplitude',
    description: 'Digital analytics platform for understanding user behavior and product performance.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://amplitude.com',
    features: ['User Journey Analytics', 'Cohort Analysis', 'Predictive Analytics', 'Experimentation']
  },
  {
    id: '33',
    name: 'Segment',
    description: 'Customer data platform that collects, cleans, and controls customer data.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://segment.com',
    features: ['Data Collection', 'Customer Profiles', 'Real-time Streaming', 'Privacy Controls']
  },
  {
    id: '34',
    name: 'Census',
    description: 'Reverse ETL platform that syncs data from warehouses to business tools.',
    category: 'data',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://getcensus.com',
    features: ['Reverse ETL', 'Data Syncing', 'Operational Analytics', 'Data Activation']
  },
  {
    id: '35',
    name: 'Fivetran',
    description: 'Automated data integration platform that centralizes data from various sources.',
    category: 'data',
    pricing: 'paid',
    rating: 4.4,
    url: 'https://fivetran.com',
    features: ['Automated ETL', 'Data Connectors', 'Schema Migration', 'Real-time Sync']
  },
  {
    id: '36',
    name: 'Stitch',
    description: 'Simple, powerful ETL service for getting data into your data warehouse quickly.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://stitchdata.com',
    features: ['Simple ETL', 'Data Integration', 'Automated Pipelines', 'Monitoring']
  },
  {
    id: '37',
    name: 'Airbyte',
    description: 'Open-source data integration platform with extensive connector library.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://airbyte.com',
    features: ['Open Source', 'Connector Marketplace', 'Custom Connectors', 'ELT Platform']
  },
  {
    id: '38',
    name: 'Great Expectations',
    description: 'Data validation framework that helps teams eliminate pipeline debt and data quality issues.',
    category: 'data',
    pricing: 'free',
    rating: 4.1,
    url: 'https://greatexpectations.io',
    features: ['Data Validation', 'Pipeline Testing', 'Quality Monitoring', 'Documentation']
  },
  {
    id: '39',
    name: 'Monte Carlo',
    description: 'Data observability platform that uses machine learning to detect data quality issues.',
    category: 'data',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://montecarlodata.com',
    features: ['Data Observability', 'Anomaly Detection', 'Data Quality', 'Pipeline Monitoring']
  },
  {
    id: '40',
    name: 'Atlan',
    description: 'Active metadata platform and modern data catalog for collaborative data discovery.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://atlan.com',
    features: ['Data Catalog', 'Collaborative Discovery', 'Data Lineage', 'Governance']
  },
  {
    id: '36',
    name: 'Stitch',
    description: 'Simple, powerful ETL service for getting data into your data warehouse quickly.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.1,
    url: 'https://stitchdata.com',
    features: ['Simple ETL', 'Data Integration', 'Automated Pipelines', 'Monitoring']
  },
  {
    id: '37',
    name: 'Airbyte',
    description: 'Open-source data integration platform with extensive connector library.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://airbyte.com',
    features: ['Open Source', 'Connector Marketplace', 'Custom Connectors', 'ELT Platform']
  },
  {
    id: '38',
    name: 'Great Expectations',
    description: 'Data validation framework that helps teams eliminate pipeline debt and data quality issues.',
    category: 'data',
    pricing: 'free',
    rating: 4.1,
    url: 'https://greatexpectations.io',
    features: ['Data Validation', 'Pipeline Testing', 'Quality Monitoring', 'Documentation']
  },
  {
    id: '39',
    name: 'Monte Carlo',
    description: 'Data observability platform that uses machine learning to detect data quality issues.',
    category: 'data',
    pricing: 'paid',
    rating: 4.3,
    url: 'https://montecarlodata.com',
    features: ['Data Observability', 'Anomaly Detection', 'Data Quality', 'Pipeline Monitoring']
  },
  {
    id: '40',
    name: 'Atlan',
    description: 'Active metadata platform and modern data catalog for collaborative data discovery.',
    category: 'data',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://atlan.com',
    features: ['Data Catalog', 'Collaborative Discovery', 'Data Lineage', 'Governance']
  }
];

export default function DataAI() {
  const handleViewDetails = (tool: AITool) => {
    // TODO: Implement modal or detailed view
    console.log('View details for:', tool.name);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <BarChart3 className="w-12 h-12 text-primary animate-float" />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              AI Data & Analytics Tools
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover powerful AI-driven analytics platforms, business intelligence tools, 
            and data science solutions to transform your data into actionable insights.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dataAITools.map((tool) => (
              <AIToolCard
                key={tool.id}
                tool={tool}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
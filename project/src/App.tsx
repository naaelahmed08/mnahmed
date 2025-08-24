import React, { useEffect, useState } from 'react';
import { TrendingUp, BarChart3, PieChart, Activity, Github, Linkedin, Mail, Code, Brain, Calculator, Briefcase, FolderOpen, Award, Target, Database, LineChart, Zap, BookOpen } from 'lucide-react';


const FullScreenRunningNumbers = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    // Generate multiple streams of numbers covering the entire screen
    const generateStreams = () => {
      const numbers = [
        '$175.43', '+2.1%', 'AAPL', '-1.3%', '$142.56', 'GOOGL', '+5.7%', '$248.91', 'TSLA',
        '+1.8%', '$378.12', 'MSFT', '-2.4%', '$145.67', 'AMZN', '+3.2%', '$312.89', 'META',
        '+8.9%', '$456.78', 'NVDA', '-4.1%', '$43,567', 'BTC', '+6.3%', '$2,456', 'ETH',
        '+0.8%', '$445.23', 'SPY', '-1.2%', '$378.45', 'QQQ', '+12.3%', '18.45', 'VIX',
        '+0.5%', '$2,034', 'GOLD', '-2.1%', '$78.23', 'OIL', '+0.3%', '1.0845', 'EUR/USD',
        '127.43', '89.21', '234.56', '67.89', '345.12', '98.76', '456.78', '123.45',
        'σ²', 'β', 'α', 'ρ', 'μ', 'λ', 'Δ', 'Γ', 'Θ', 'Ω', '∑', '∫', '∂', '∇',
        'VaR', 'CVaR', 'PnL', 'ROI', 'IRR', 'NPV', 'CAPM', 'APT', 'EMH', 'BSM'
      ];

      const streamTypes = [
        // 'horizontal-left', 'horizontal-right', 'vertical-up', 'vertical-down',
        // 'diagonal-tl-br', 'diagonal-tr-bl', 'diagonal-bl-tr', 'diagonal-br-tl'
      ];

      return Array.from({ length: 200 }, (_, i) => ({
        id: i,
        text: numbers[Math.floor(Math.random() * numbers.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: streamTypes[Math.floor(Math.random() * streamTypes.length)],
        speed: 0.5 + Math.random() * 2,
        size: 0.6 + Math.random() * 0.8,
        opacity: 0.2 + Math.random() * 0.4,
        color: Math.random() > 0.5 ? 'green' : 'red',
        delay: Math.random() * 10
      }));
    };

    setStreams(generateStreams());
  }, []);

  const getAnimationClass = (type) => {
    switch (type) {
      case 'horizontal-left': return 'animate-scroll-left';
      case 'horizontal-right': return 'animate-scroll-right';
      case 'vertical-up': return 'animate-scroll-up';
      case 'vertical-down': return 'animate-scroll-down';
      case 'diagonal-tl-br': return 'animate-scroll-diagonal-1';
      case 'diagonal-tr-bl': return 'animate-scroll-diagonal-2';
      case 'diagonal-bl-tr': return 'animate-scroll-diagonal-3';
      case 'diagonal-br-tl': return 'animate-scroll-diagonal-4';
      default: return 'animate-scroll-left';
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[15]">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className={`absolute font-mono text-sm ${getAnimationClass(stream.type)}`}
          style={{
            left: `${stream.x}%`,
            top: `${stream.y}%`,
            fontSize: `${stream.size}rem`,
            opacity: stream.opacity,
            color: stream.color === 'green' ? '#22c55e' : '#ef4444',
            textShadow: `0 0 10px ${stream.color === 'green' ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'}`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${stream.delay}s`
          }}
        >
          {stream.text}
        </div>
      ))}

      {/* Additional floating matrix-style numbers */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute font-mono animate-matrix-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
              fontSize: `${0.5 + Math.random() * 0.5}rem`,
              color: Math.random() > 0.5 ? '#22c55e' : '#ef4444',
              opacity: 0.3 + Math.random() * 0.4,
              textShadow: '0 0 8px currentColor',
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          >
            {Math.random() > 0.7 ? 
              ['$', '€', '¥', '£', '₿', '%', '+', '-'][Math.floor(Math.random() * 8)] :
              Math.floor(Math.random() * 10)
            }
          </div>
        ))}
      </div>

      {/* Continuous number streams across screen edges */}
      <div className="absolute inset-0">
        {/* Top edge stream */}
        <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
          <div className="animate-scroll-horizontal-continuous text-green-400 font-mono text-sm opacity-40">
            AAPL: $175.43 +2.1% | GOOGL: $142.56 -1.3% | TSLA: $248.91 +5.7% | MSFT: $378.12 +1.8% | AMZN: $145.67 -2.4% | META: $312.89 +3.2% | NVDA: $456.78 +8.9% | BTC: $43,567 -4.1% | ETH: $2,456 +6.3% | SPY: $445.23 +0.8% | QQQ: $378.45 -1.2% | VIX: 18.45 +12.3% | GOLD: $2,034 +0.5% | OIL: $78.23 -2.1% | EUR/USD: 1.0845 +0.3%
          </div>
        </div>

        {/* Bottom edge stream */}
        <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
          <div className="animate-scroll-horizontal-reverse text-red-400 font-mono text-sm opacity-40">
            σ²: 0.0234 | β: 1.23 | α: 0.045 | VaR: -2.3% | Sharpe: 1.87 | Sortino: 2.14 | Calmar: 1.56 | Max DD: -8.9% | Win Rate: 67.8% | Profit Factor: 1.89 | Kelly: 0.23 | IR: 0.78 | Treynor: 0.156
          </div>
        </div>

        {/* Left edge stream */}
        <div className="absolute left-0 top-0 w-8 h-full overflow-hidden">
          <div className="animate-scroll-vertical-continuous text-green-400 font-mono text-xs opacity-40 transform rotate-90 origin-center whitespace-nowrap">
            Monte Carlo | Black-Scholes | GARCH | ARIMA | VAR | LSTM | Random Forest | SVM | PCA | ICA
          </div>
        </div>

        {/* Right edge stream */}
        <div className="absolute right-0 top-0 w-8 h-full overflow-hidden">
          <div className="animate-scroll-vertical-reverse text-red-400 font-mono text-xs opacity-40 transform -rotate-90 origin-center whitespace-nowrap">
            Quant | Algo | HFT | ML | AI | DL | NLP | RL | GA | PSO | ACO | DE | SA | TS
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingElement = ({ children, delay = 0, className = "" }) => (
  <div 
    className={`transform-gpu transition-all duration-500 hover:scale-110 hover:rotate-3 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const ChartElement = ({ Icon, value, label, trend, className = "" }) => (
  <FloatingElement className={`${className} animate-bounce-slow`}>
    <div className="bg-black/60 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-red-500/30 hover:bg-black/70 transition-all duration-500 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-6 h-6 text-white/80" />
        <span className={`text-xs font-mono ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      </div>
      <div className="text-white font-bold text-lg font-mono">{value}</div>
      <div className="text-white/60 text-xs uppercase tracking-wider">{label}</div>
    </div>
  </FloatingElement>
);

// const ExperienceCard = ({ title, company, period, description, skills, icon: Icon }) => (
//   <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-red-500/20 hover:bg-black/50 transition-all duration-500 shadow-2xl group">
//     <div className="flex items-start space-x-4">
//       <div className="w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/20 transition-all">
//         <Icon className="w-6 h-6 text-white/80" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
//         <p className="text-white/70 font-medium mb-2">{company}</p>
//         <p className="text-white/50 text-sm mb-3 font-mono">{period}</p>
//         <p className="text-white/70 mb-4 leading-relaxed">{description}</p>
//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <span key={index} className="px-3 py-1 bg-black/60 rounded-full text-xs text-white/70 border border-white/10 hover:border-red-500/20 transition-all">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// BEFORE:
// const ExperienceCard = ({ title, company, period, description, skills, icon: Icon }) => (

// AFTER:
// const ExperienceCard = ({ title, company, period, description, skills, icon: Icon }) => (
//   <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-red-500/20 hover:bg-black/50 transition-all duration-500 shadow-2xl group">
//     <div className="flex items-start space-x-4">
//       <div className="w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/20 transition-all">
//         <Icon className="w-6 h-6 text-white/80" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
//         <p className="text-white/70 font-medium mb-2">{company}</p>
//         <p className="text-white/50 text-sm mb-3 font-mono">{period}</p>

//         {/* Always render description as bullet points */}
//         <ul className="list-disc pl-5 space-y-2 text-white/80 mb-4 marker:text-red-400">
//           {description.map((point, i) => (
//             <li key={i} className="leading-relaxed">
//               {point}
//             </li>
//           ))}
//         </ul>

//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <span key={index} className="px-3 py-1 bg-black/60 rounded-full text-xs text-white/70 border border-white/10 hover:border-red-500/20 transition-all">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );


type IconProp =
  | string
  | React.ComponentType<React.SVGProps<SVGSVGElement>>;

type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  icon: IconProp; // <-- union: string path OR component
};

const ExperienceCard = ({title,company,period,description,skills,icon,
}: ExperienceCardProps) => (
  <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-red-500/20 hover:bg-black/50 transition-all duration-500 shadow-2xl group">
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/20 transition-all overflow-hidden">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={`${company} logo`}
            className="object-contain w-8 h-8"
          />
        ) : (
          // render a React icon component
          React.createElement(icon as React.ComponentType<React.SVGProps<SVGSVGElement>>, {
            className: "w-6 h-6 text-white/80",
          })
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/70 font-medium mb-2">{company}</p>
        <p className="text-white/50 text-sm mb-3 font-mono">{period}</p>

        <ul className="list-disc pl-5 space-y-2 text-white/80 mb-4 marker:text-red-400">
          {description.map((point, i) => (
            <li key={i} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black/60 rounded-full text-xs text-white/70 border border-white/10 hover:border-red-500/20 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// export default ExperienceCard;



const ProjectCard = ({ title, description, tech, metrics, icon: Icon, status = "Completed" }) => (
  <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-red-500/20 hover:bg-black/50 transition-all duration-500 shadow-2xl group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/20 transition-all">
          <Icon className="w-5 h-5 text-white/80" />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs font-mono ${
        status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
      }`}>
        {status}
      </span>
    </div>
    {Array.isArray(description) ? (
      <ul className="list-disc pl-5 space-y-2 text-white/70 mb-4 marker:text-red-400">
        {description.map((point, i) => (
          <li key={i} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-white/70 mb-4 leading-relaxed">{description}</p>
    )}
    <div className="mb-4">
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((item, index) => (
          <span key={index} className="px-2 py-1 bg-black/60 rounded text-xs text-white/70 border border-white/10 hover:border-red-500/20 transition-all">
            {item}
          </span>
        ))}
      </div>
    </div>
    {metrics && (
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-white font-bold font-mono">{metric.value}</div>
            <div className="text-white/60 text-xs">{metric.label}</div>
          </div>
        ))}
      </div>
    )}
  </div>
);


//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------

function MainApp() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const experiences = [
    {
      title: "Incoming Climate Risk modeling Intern",
      company: "scotiabank",
      period: "Sept 2025 - Present",
      description: [
        "Will be working on building, deploying, and enhancing quantitative models to assess the impact of climate change on risk metrics (PD, LGD, EAD, ECL), integrating scenario analysis into bank-wide risk processes using Python/R."
      ],
      skills: ["Python", "R", "SQL", "Machine Learning", "Risk Management", "Modeling"],
      icon: "/sb.svg"

    },
    {
      title: "Business Analyst",
      company: "HalalMeals",
      period: "Sept 2024 - Dec 2024",
      description: [
        "Implemented end-to-end data cleansing and normalization pipelines in Python (using pandas), handling missing values, standardizing date formats, and enforcing data types—streamlining data preparation and cutting turnaround by 30%.",
        "Automated revenue allocation processes with Python-powered lookup tables and rule-based modules, reducing manual effort and improving report accuracy by 15%.",
        "Collaborated on a cross-functional team to implement NLP and machine-learning workflows within a microservices architecture, contributing to a 20% boost in user engagement."
      ],
      
      skills: ["Python", "TensorFlow", "Pandas", "Statistical Analysis", "Credit Risk", "Fraud Detection"],
      icon: "/hml.jpg"
    },
    {
      title: "Financial Analyst",
      company: "Netlink Software Group America Inc",
      period: "Mar 2023 - Aug 2023",
      description: [
        "Synthesized data from 35 datasets using Python, SQL, R, and Excel, uncovering valuable financial insights. These insights informed strategic decisions in sales, marketing, and customer support, aligning with organizational goals.",
        "Led financial analytics with data analysts, investment strategists, and business partners through R-based modeling, improving revenue forecasting by 20%, reducing discrepancies by 17%, and increasing profits by 11%.",
        "Applied time series modeling and predictive analytics in R to drive strategic $12,500 increase in quarterly sales."
      ],
      skills: ["Excel", "VBA", "Financial Modeling", "Portfolio Analysis", "Risk Assessment"],
      icon: "/nl.png"
    }
  ];

  const projects = [
    {
      title: "Algorithmic Trading Bot",
      description: [
        "Developed a Python-based Algorithmic Trading Bot using an SMA strategy, real-time data, and a mock trading API.",
        "Utilized yfinance, Pandas, and NumPy to analyze 5+ years of data, simulating trade executions and optimizing signals.",
        "Backtested 10,000+ trades, optimizing buy/sell signals and improving strategy performance by 20%."
      ],
      tech: ["Python", "Yfinance", "Pandas", "NumPy", "SQL"],
      metrics: [
        { value: "10K+", label: "Trades Backtested" },
        { value: "20%", label: "Performance Improvement" }
      ],
      icon: Zap,
      status: "Completed"
    },
    {
      title: "Watopoly C++ Project",
      description: [
        "Architected and implemented modular C++ components (Players, Properties, Dice, Card decks) using STL containers; performed peer code reviews and unit/integration testing under a formal SDLC framework.",
        "Managed build and release pipelines in a UNIX/Linux environment, implemented comprehensive logging and error-handling for incident management, and optimized game-loop performance to deliver a robust gameplay experience.",
        "Implemented a command-line user interface to facilitate player interactions and display real-time game state updates."
      ],
      tech: ["C++", "STL", "SDLC", "Linux Environment"],
      metrics: [
        { value: "Modular", label: "Architecture" },
        { value: "CLI", label: "Interface" }
      ],
      icon: Code,
      status: "Completed"
    },
    {
      title: "Market Sentiment Analysis",
      description: "Developing an NLP-based system to analyze market sentiment from news and social media for trading signals.",
      tech: ["Python", "NLTK", "Transformers", "Twitter API", "News API"],
      metrics: [
        { value: "10K+", label: "Daily Articles" },
        { value: "85%", label: "Sentiment Accuracy" }
      ],
      icon: Brain,
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* FULL SCREEN RUNNING NUMBERS BACKGROUND */}
      <FullScreenRunningNumbers />
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80 pointer-events-none z-0"></div>
      
      {/* Main Content */}
      <div className="relative z-20">
        
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col lg:flex-row">
          
          {/* Left Panel - About Me */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-r-3xl border-r border-red-500/10"></div>
            {/* div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-r-3xl border-r border-red-500/10" */}
            {/* "replace this in above section for having stocks running in top right window"  */}
            
            <div className="relative z-10 max-w-lg">
              <div className="mb-8">
                <div className="w-24 h-24 bg-black/80 backdrop-blur-xl rounded-full mb-6 flex items-center justify-center border border-red-500/20 shadow-2xl">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">
                  Mohammad Naael Ahmed
                </h1>
                <h2 className="text-xl lg:text-2xl text-white/80 mb-6 font-light tracking-wide">
                  Data Analyst and Quantitative Analyst 
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/70 text-lg leading-relaxed">
                  Passionate about leveraging data science and machine learning to solve complex financial problems. 
                  Specialized in algorithmic trading, risk management, and quantitative research.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-all">
                      <Calculator className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors">Mathematical Modeling & Statistics</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-all">
                      <Code className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors">C/C++, Python, R, SQL</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-all">
                      <TrendingUp className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors">Financial Markets & Trading Algorithms</span>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex space-x-6">
                    
                    <a href="https://github.com/naaelahmed08" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/60 hover:text-white transition-all duration-300 group">
                      <div className="w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-all">
                        <Github className="w-4 h-4" />
                      </div>
                      <span className="text-sm">GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/mohdnahmed/" 
                    target="_blank"
                    rel="noopener noreferrer"className="flex items-center space-x-2 text-white/60 hover:text-white transition-all duration-300 group">
                      <div className="w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-all">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    
                    <a href="mailto:mnahmed@uwaterloo.ca"
                    target="_blank"
                    rel="noopener noreferrer" className="flex items-center space-x-2 text-white/60 hover:text-white transition-all duration-300 group">
                      <div className="w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-all">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Finance 3D Elements */}
          <div className="lg:w-1/2 relative overflow-hidden">
            
            {/* Market Time Display */}
            <div className="absolute top-8 right-8 z-20">
              <div className="bg-black/60 backdrop-blur-xl rounded-xl p-4 border border-red-500/20 shadow-2xl">
                <div className="text-green-400 text-lg font-mono font-bold">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider">
                  Market Time
                </div>
              </div>
            </div>

            {/* 3D Finance Elements */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full max-w-2xl max-h-2xl">
                
                {/* Central Chart Element */}
                <FloatingElement className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow">
                  <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 shadow-2xl hover:border-red-500/50 transition-all duration-500">
                    <div className="flex items-center justify-center mb-4">
                      <Activity className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2 font-mono">$5,360</div>
                      <div className="text-green-400 text-sm uppercase tracking-wider">Portfolio Value</div>
                    </div>
                  </div>
                </FloatingElement>

                {/* Floating Chart Elements */}
                <ChartElement
                  Icon={TrendingUp}
                  value="18.7%"
                  label="Annual Return"
                  trend={18.7}
                  className="absolute top-16 left-16"
                />

                <ChartElement
                  Icon={BarChart3}
                  value="2.34"
                  label="Sharpe Ratio"
                  trend={15.2}
                  className="absolute top-20 right-20"
                />

                <ChartElement
                  Icon={PieChart}
                  value="12.8%"
                  label="Max Drawdown"
                  trend={-3.4}
                  className="absolute bottom-20 left-12"
                />

                <ChartElement
                  Icon={Activity}
                  value="94.3%"
                  label="Win Rate"
                  trend={6.7}
                  className="absolute bottom-16 right-16"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="py-20 px-8 lg:px-16 relative">
          {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-red-500/20 shadow-2xl">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Professional Experience</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Building innovative solutions in quantitative finance and data science across leading financial institutions.
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-8 lg:px-16 relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-red-500/20 shadow-2xl">
                  <FolderOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Cutting-edge quantitative finance projects leveraging machine learning and advanced analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 lg:px-16 relative">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="text-white/60 text-sm">
              © 2024 Mohammad Naael Ahmed. Crafted with precision and passion for quantitative finance.
            </div>
          </div>
        </footer>
      </div>

      {/* FULL SCREEN ANIMATION STYLES */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100vw); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes scroll-up {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100vh); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes scroll-diagonal-1 {
          0% { transform: translate(-100vw, -100vh); }
          100% { transform: translate(100vw, 100vh); }
        }
        
        @keyframes scroll-diagonal-2 {
          0% { transform: translate(100vw, -100vh); }
          100% { transform: translate(-100vw, 100vh); }
        }
        
        @keyframes scroll-diagonal-3 {
          0% { transform: translate(-100vw, 100vh); }
          100% { transform: translate(100vw, -100vh); }
        }
        
        @keyframes scroll-diagonal-4 {
          0% { transform: translate(100vw, 100vh); }
          100% { transform: translate(-100vw, -100vh); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes scroll-horizontal-continuous {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll-horizontal-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scroll-vertical-continuous {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        
        @keyframes scroll-vertical-reverse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
        
        .animate-scroll-diagonal-1 {
          animation: scroll-diagonal-1 linear infinite;
        }
        
        .animate-scroll-diagonal-2 {
          animation: scroll-diagonal-2 linear infinite;
        }
        
        .animate-scroll-diagonal-3 {
          animation: scroll-diagonal-3 linear infinite;
        }
        
        .animate-scroll-diagonal-4 {
          animation: scroll-diagonal-4 linear infinite;
        }
        
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
        
        .animate-scroll-horizontal-continuous {
          animation: scroll-horizontal-continuous 30s linear infinite;
        }
        
        .animate-scroll-horizontal-reverse {
          animation: scroll-horizontal-reverse 25s linear infinite;
        }
        
        .animate-scroll-vertical-continuous {
          animation: scroll-vertical-continuous 40s linear infinite;
        }
        
        .animate-scroll-vertical-reverse {
          animation: scroll-vertical-reverse 35s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// ===========================================================
// AESTHETIC PRELOADER (Welcome + date/time + market ticker)
// Paste at the very end of src/App.tsx (after your MainApp)
// ===========================================================

const AestheticPreloader: React.FC = () => {
  const [now, setNow] = React.useState(new Date());

  // Static, aesthetic market sample (placeholders)
  const [tickers] = React.useState(
    () => [
      { s: "SPY",   p: 445.23, c: +0.8 },
      { s: "QQQ",   p: 378.45, c: -1.2 },
      { s: "AAPL",  p: 175.43, c: +2.1 },
      { s: "MSFT",  p: 378.12, c: +1.8 },
      { s: "NVDA",  p: 456.78, c: +8.9 },
      { s: "TSLA",  p: 248.91, c: +5.7 },
      { s: "BTC",   p: 43567,  c: -4.1 },
      { s: "ETH",   p: 2456,   c: +6.3 },
      { s: "GOLD",  p: 2034,   c: +0.5 },
      { s: "OIL",   p: 78.23,  c: -2.1 },
      { s: "VIX",   p: 18.45,  c: +12.3 },
      { s: "EUR/USD", p: 1.0845, c: +0.3 },
    ]
  );

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dateStr = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeStr = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Build one ticker line
  const line = (
    <>
      {tickers.map((t, i) => {
        const up = t.c >= 0;
        return (
          <span key={i} className="mx-6 inline-flex items-center gap-2">
            <span className="font-mono text-white/80">{t.s}:</span>
            <span className="font-mono text-white/90">
              {t.s === "BTC" || t.s === "ETH" || t.s === "GOLD" || t.s === "OIL"
                ? (t.p as number).toLocaleString()
                : typeof t.p === "number"
                  ? (t.p as number).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                  : t.p}
            </span>
            <span className={`font-mono ${up ? "text-green-400" : "text-red-400"}`}>
              {up ? "+" : ""}
              {t.c}%
            </span>
          </span>
        );
      })}
    </>
  );

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black text-white">
      {/* subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black pointer-events-none" />

      {/* faint moving digits in the background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute -top-10 left-0 whitespace-nowrap font-mono text-sm"
          style={{ animation: "slideDiag 25s linear infinite" }}
        >
          {Array.from({ length: 120 }).map((_, i) => (
            <span key={i} className="mx-3 text-green-400/80">
              {Math.floor(Math.random() * 900 + 100)}
            </span>
          ))}
        </div>
      </div>

      {/* center card */}
      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div className="relative max-w-xl w-full bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
          {/* glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-2xl" />

          <div className="relative">
            {/* icon bubble */}
            <div className="mx-auto w-24 h-24 rounded-full border border-white/10 bg-black/70 flex items-center justify-center shadow-xl">
              {/* You already import Brain from 'lucide-react' at top of file */}
              <Brain className="w-10 h-10 text-white/90" />
            </div>

            <h1 className="mt-6 text-center text-3xl font-bold">Welcome</h1>
            <p className="mt-2 text-center text-white/70">
              Mohammad Naael Ahmed
            </p>

            <div className="mt-6 flex flex-col items-center gap-1 font-mono">
              <div className="text-white/80">{dateStr}</div>
              <div className="text-green-400 text-xl">{timeStr}</div>
            </div>

            {/* mini market stats row */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="bg-black/60 rounded-xl border border-white/10 p-3 text-center">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wide">Futures</span>
                </div>
                <div className="mt-1 font-mono text-green-400 text-sm">+0.62%</div>
              </div>
              <div className="bg-black/60 rounded-xl border border-white/10 p-3 text-center">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wide">VIX</span>
                </div>
                <div className="mt-1 font-mono text-red-400 text-sm">18.45</div>
              </div>
              <div className="bg-black/60 rounded-xl border border-white/10 p-3 text-center">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <span className="w-4 h-4 inline-block rounded-full border border-white/30" />
                  <span className="text-xs uppercase tracking-wide">10Y</span>
                </div>
                <div className="mt-1 font-mono text-white/90 text-sm">4.24%</div>
              </div>
            </div>

            {/* loading bar */}
            <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-red-500"
                style={{ animation: "fill 2.2s ease-in-out forwards" }}
              />
            </div>

            <div className="mt-3 text-center text-xs text-white/50 tracking-wide">
              Preparing your experience…
            </div>
          </div>
        </div>
      </div>

      {/* bottom ticker */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/70">
        <div className="relative w-full overflow-hidden">
          <div
            className="whitespace-nowrap py-2 font-mono text-sm"
            style={{ animation: "ticker 35s linear infinite" }}
          >
            {/* duplicate the line twice for seamless loop */}
            {line}
            {line}
          </div>
        </div>
      </div>

      {/* local keyframes (plain <style>, not styled-jsx) */}
      <style>{`
        @keyframes fill { from { width: 0% } to { width: 100% } }
        @keyframes ticker { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        @keyframes slideDiag {
          0% { transform: translateX(0) translateY(0) }
          100% { transform: translateX(-50%) translateY(20%) }
        }
      `}</style>
    </div>
  );
};

// Wrapper: shows the preloader, then your real site
export default function App() {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200); // how long the splash stays
    return () => clearTimeout(t);
  }, []);
  return show ? <AestheticPreloader /> : <MainApp />; // <-- your renamed big component
}


// export default App;
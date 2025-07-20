import React from 'react';
import Icon from '../../../components/AppIcon';

const WorkflowVisualization = () => {
  const workflowSteps = [
    {
      id: 1,
      phase: "Planning & Design",
      tools: ["Figma", "Notion"],
      icon: "Lightbulb",
      color: "bg-blue-500"
    },
    {
      id: 2,
      phase: "Development",
      tools: ["VS Code", "Git"],
      icon: "Code",
      color: "bg-green-500"
    },
    {
      id: 3,
      phase: "Testing & Quality",
      tools: ["Postman", "SonarQube", "Jest"],
      icon: "CheckCircle",
      color: "bg-yellow-500"
    },
    {
      id: 4,
      phase: "Deployment",
      tools: ["Docker", "GitHub Actions", "Vercel"],
      icon: "Rocket",
      color: "bg-purple-500"
    },
    {
      id: 5,
      phase: "Monitoring & Maintenance",
      tools: ["Sentry", "New Relic"],
      icon: "Eye",
      color: "bg-red-500"
    }

  ];

  return (
    <div className="bg-card rounded-2xl p-8 mb-16 border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Development Workflow Pipeline
        </h2>
        <p className="text-text-secondary">
          End-to-end development process powered by professional tools
        </p>
      </div>
      
      <div className="relative">
        {/* Workflow Line */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {workflowSteps.map((step, index) => (
            <div 
              key={step.id}
              className="relative text-center fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Circle */}
              <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 hover:scale-110 transition-transform duration-300`}>
                <Icon name={step.icon} size={32} className="text-white" />
              </div>
              
              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                {step.id}
              </div>
              
              {/* Phase Name */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {step.phase}
              </h3>
              
              {/* Tools List */}
              <div className="space-y-1">
                {step.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex}
                    className="text-sm text-text-secondary bg-muted px-3 py-1 rounded-full inline-block mx-1"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              
              {/* Arrow for desktop */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 z-20">
                  <Icon name="ChevronRight" size={20} className="text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisualization;
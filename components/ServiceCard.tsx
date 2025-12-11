import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>
        
        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <button className="w-full bg-blue-50 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
            Läs Mer
          </button>
        </div>
      </div>
    </div>
  );
}
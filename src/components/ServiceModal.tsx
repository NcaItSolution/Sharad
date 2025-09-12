import React from 'react';
import { X } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
        />

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{service.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
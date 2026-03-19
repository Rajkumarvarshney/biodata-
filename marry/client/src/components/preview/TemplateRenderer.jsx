import React from 'react';
import ClassicTemplate from '../../templates/Classic/ClassicTemplate';
import ModernTemplate from '../../templates/Modern/ModernTemplate';

// Registry maps template IDs to their respective React components
const templateRegistry = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  // Add other templates here...
};

/**
 * Central TemplateRenderer system
 * Dynamically renders the selected marriage biodata template.
 */
const TemplateRenderer = ({ templateId, biodata }) => {
  const SelectedTemplate = templateRegistry[templateId];

  if (!SelectedTemplate) {
    return <div className="p-4 text-red-500">Template "{templateId}" not found.</div>;
  }

  return (
    <div className="template-renderer-container w-full h-full shadow-lg rounded-md overflow-hidden bg-white">
      <SelectedTemplate data={biodata} />
    </div>
  );
};

export default TemplateRenderer;

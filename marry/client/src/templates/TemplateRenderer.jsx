import React from 'react';
import BloomTemplate from './bloom/BloomTemplate';
import ClassicTemplate from './ClassicTemplate';

export default function TemplateRenderer({ data, template, theme }) {
    let Content;

    switch (template) {
        case "bloom":
            Content = <BloomTemplate data={data} theme={theme} />;
            break;
        case "classic":
            Content = <ClassicTemplate data={data} theme={theme} />;
            break;
        default:
            Content = (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                    <span className="text-lg font-medium">Select a template to begin</span>
                </div>
            );
    }

    return (
        <div className="w-full h-full flex flex-col scale-90 sm:scale-100 origin-top">
            {Content}
        </div>
    );
}

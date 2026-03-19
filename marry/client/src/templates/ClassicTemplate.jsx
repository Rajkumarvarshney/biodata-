import React from 'react';

/**
 * A beautiful, premium classic template mapping user data into a clean UI.
 */
export default function ClassicTemplate({ data, theme }) {
    const { name, fields } = data;
    const dynamicPrimary = theme?.primary || "#ec4899"; // Fallback to a pinkish color
    const dynamicBg = theme?.background || "#ffffff";

    return (
        <div
            className="text-slate-900 border-x-4 shadow-[0_0_15px_rgba(0,0,0,0.05)] h-full min-h-[500px] flex flex-col p-8 sm:p-12 relative animate-fade-in-up transition-colors duration-500"
            style={{ borderColor: dynamicPrimary, backgroundColor: dynamicBg }}
        >

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 opacity-50 m-4 rounded-tl-xl pointer-events-none transition-colors duration-500" style={{ borderColor: dynamicPrimary }} />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 opacity-50 m-4 rounded-tr-xl pointer-events-none transition-colors duration-500" style={{ borderColor: dynamicPrimary }} />

            {/* Header */}
            <div className="text-center mb-10 border-b border-slate-100 pb-8 transition-colors duration-500">
                <h1
                    className="text-3xl sm:text-4xl font-serif font-bold tracking-wide uppercase mb-2 drop-shadow-sm transition-colors duration-500"
                    style={{ color: dynamicPrimary }}
                >
                    {name || "Your Name"}
                </h1>
                <p className="text-sm font-medium text-slate-500 tracking-widest uppercase">
                    Marriage Biodata
                </p>
            </div>

            {/* Main Details Grid */}
            <div className="flex-1 max-w-2xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-8">

                    {fields && fields.map((field) => (
                        <div key={field.id} className="flex flex-col gap-1 group">
                            <span
                                className="text-xs font-bold uppercase tracking-widest transition-colors duration-500"
                                style={{ color: dynamicPrimary }}
                            >
                                {field.label || "Custom Field"}
                            </span>
                            <span className="text-lg text-slate-800 border-b border-dashed border-slate-200 pb-1.5 transition-colors group-hover:border-slate-300">
                                {field.value || "-"}
                            </span>
                        </div>
                    ))}

                </div>
            </div>

            {/* Footer watermark */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex justify-center opacity-40">
                <div className="flex items-center gap-2">
                    <div
                        className="w-5 h-5 rounded-md flex items-center justify-center text-white font-bold text-[10px] transition-colors duration-500"
                        style={{ backgroundColor: dynamicPrimary }}
                    >
                        M
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">MarryBuilder</span>
                </div>
            </div>
        </div>
    );
}

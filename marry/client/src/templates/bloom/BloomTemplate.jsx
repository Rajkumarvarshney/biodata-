import React from 'react';

export default function BloomTemplate({ data, theme }) {
    const { name, fields, photo } = data;
    const dynamicBg = theme?.background || "#f0f9ff";
    const dynamicPrimary = theme?.primary || "#4a6c8c";

    return (
        <div
            className="w-full min-h-[600px] p-8 sm:p-12 rounded-3xl relative text-center shadow-md border border-sky-100 overflow-hidden animate-fade-in-up transition-colors duration-500"
            style={{ backgroundColor: dynamicBg }}
        >

            {/* Decorative Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[40%] bg-blue-200/40 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-pink-200/30 rounded-full blur-[100px] pointer-events-none" />

            {/* Photo */}
            <div className="relative w-40 h-40 mx-auto mt-4 mb-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-300 to-indigo-300 rounded-full animate-pulse opacity-50 blur-md"></div>
                <div className="relative w-full h-full rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                    {photo ? (
                        <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-1">
                            <span className="text-slate-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </span>
                            <span className="text-slate-400 font-medium tracking-widest uppercase text-xs">Photo</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Name */}
            <h1
                className="text-4xl font-extrabold drop-shadow-sm mb-2 relative z-10 tracking-tight transition-colors duration-500"
                style={{ color: dynamicPrimary }}
            >
                {name || "Your Name"}
            </h1>

            {/* Details Card */}
            <div className="mt-10 mx-auto max-w-xl bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white/80 text-left relative z-10 transition-all hover:shadow-md">

                <div className="flex flex-col gap-5">
                    {fields && fields.map((field, index) => (
                        <div
                            key={field.id}
                            className={`flex flex-col sm:flex-row sm:items-center ${index !== fields.length - 1 ? 'border-b border-sky-100/50 pb-4' : 'pb-1'} gap-1 sm:gap-6 group`}
                        >
                            <span
                                className="sm:w-1/3 text-xs font-bold uppercase tracking-widest pt-1 transition-colors duration-500"
                                style={{ color: dynamicPrimary, opacity: 0.8 }}
                            >
                                {field.label || "Custom Field"}
                            </span>
                            <span className="sm:w-2/3 text-lg text-[#334b61] font-medium leading-tight">
                                {field.value || "-"}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

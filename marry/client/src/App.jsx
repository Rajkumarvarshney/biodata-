import React, { useState } from 'react';
import Editor from './pages/Editor';

function App() {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex flex-col relative overflow-hidden">

            {/* Abstract Background Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-accent-500/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Navigation */}
            <header className="sticky top-0 z-50 glass-panel mt-4 mx-4 md:mx-8 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        M
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight hidden sm:block">
                        Marry<span className="text-primary-600">Builder</span>
                    </h1>
                </div>
                <nav className="flex gap-1 bg-slate-100/50 p-1 rounded-xl">
                    {['Home', 'Templates', 'Editor'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab
                                ? 'bg-white text-primary-600 shadow-sm'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
                <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                    Sign In
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 flex flex-col items-center justify-center">
                {activeTab === 'Home' && (
                    <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-primary-600 mb-8 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                            </span>
                            v2.0 Beta is now live
                        </div>

                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                            Craft your perfect <br />
                            <span className="gradient-text">Marriage Biodata</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                            Create stunning, modern, and traditional biodata profiles in minutes.
                            Impress prospective matches with professionally designed templates that highlight your best qualities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={() => setActiveTab('Editor')}
                                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-2xl text-lg font-bold shadow-xl shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Create Biodata Free
                            </button>
                            <button
                                onClick={() => setActiveTab('Templates')}
                                className="px-8 py-4 bg-white text-slate-700 rounded-2xl text-lg font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                            >
                                View Templates
                            </button>
                        </div>
                    </div>
                )}

                {/* Placeholder states for other tabs */}
                {activeTab === 'Templates' && (
                    <div className="w-full glass-panel p-12 text-center">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Premium Templates</h3>
                        <p className="text-slate-500">Select a template to begin customizing.</p>
                        {/* Template grid mockup will go here */}
                    </div>
                )}

                {activeTab === 'Editor' && (
                    <Editor />
                )}
            </main>
        </div>
    );
}

export default App;

import { useState } from "react";
import BiodataForm from "../components/form/BiodataForm";
import TemplateRenderer from "../templates/TemplateRenderer";

export default function Editor() {
    const [template, setTemplate] = useState("bloom");
    const [theme, setTheme] = useState({
        primary: "#4a6c8c",
        background: "#f0f9ff"
    });

    // Manage dynamic fields to match user requirements
    const [name, setName] = useState("");
    const [fields, setFields] = useState([
        { id: '1', label: 'Age', value: '' },
        { id: '2', label: 'Height', value: '' },
        { id: '3', label: 'Date of Birth', value: '' },
        { id: '4', label: 'Place of Birth', value: '' },
        { id: '5', label: 'Caste', value: '' },
        { id: '6', label: 'Phone', value: '' },
        { id: '7', label: 'Education', value: '' },
        { id: '8', label: 'Occupation', value: '' },
        { id: '9', label: 'Income', value: '' },
        { id: '10', label: "Father's Occupation", value: '' },
        { id: '11', label: "Mother's Occupation", value: '' },
        { id: '12', label: 'Siblings', value: '' },
        { id: '13', label: 'Address', value: '' }
    ]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full animate-fade-in-up">
            {/* LEFT - FORM */}
            <div className="w-full lg:w-[45%] flex flex-col">
                <div className="glass-panel p-6 shadow-md border-t-4 border-t-primary-500 rounded-2xl flex-1 sticky top-24 max-h-[85vh] overflow-y-auto">
                    {/* Template Selector */}
                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Templates</h3>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setTemplate("bloom")}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${template === 'bloom' ? 'bg-sky-50 border-sky-200 text-sky-700 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                Bloom
                            </button>
                            <button
                                onClick={() => setTemplate("classic")}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${template === 'classic' ? 'bg-primary-50 border-primary-200 text-primary-700 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                Classic
                            </button>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Biodata Details</h2>
                    <BiodataForm
                        name={name} setName={setName}
                        fields={fields} setFields={setFields}
                    />
                </div>
            </div>

            {/* RIGHT - PREVIEW */}
            <div className="w-full lg:w-[55%] flex flex-col gap-4">

                {/* Theme Selector UI */}
                <div className="glass-panel p-4 shadow-sm border border-slate-200 rounded-xl flex items-center gap-4 bg-white/60">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-2">Themes</h3>
                    <div className="flex gap-3 flex-wrap">
                        {/* Theme 1 - Blue */}
                        <div
                            onClick={() => setTheme({ primary: "#4a6c8c", background: "#f0f9ff" })}
                            className={`w-8 h-8 rounded-full cursor-pointer shadow-sm border-2 transition-transform hover:scale-110 ${theme.primary === "#4a6c8c" ? "border-slate-800 scale-110" : "border-white"}`}
                            style={{ background: "#4a6c8c" }}
                            title="Blue Theme"
                        />
                        {/* Theme 2 - Pink */}
                        <div
                            onClick={() => setTheme({ primary: "#d63384", background: "#fdf2f8" })}
                            className={`w-8 h-8 rounded-full cursor-pointer shadow-sm border-2 transition-transform hover:scale-110 ${theme.primary === "#d63384" ? "border-slate-800 scale-110" : "border-white"}`}
                            style={{ background: "#d63384" }}
                            title="Pink Theme"
                        />
                        {/* Theme 3 - Green */}
                        <div
                            onClick={() => setTheme({ primary: "#198754", background: "#f0fdf4" })}
                            className={`w-8 h-8 rounded-full cursor-pointer shadow-sm border-2 transition-transform hover:scale-110 ${theme.primary === "#198754" ? "border-slate-800 scale-110" : "border-white"}`}
                            style={{ background: "#198754" }}
                            title="Green Theme"
                        />
                    </div>
                </div>

                <div className="glass-panel p-2 shadow-lg bg-slate-100/50 rounded-2xl flex-1 border border-slate-200 min-h-[600px] flex items-center justify-center relative overflow-hidden">
                    {/* Label positioned absolutely */}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/80 shadow text-xs font-semibold text-slate-500 rounded-full border border-slate-200">
                        Live Preview Canvas
                    </div>

                    <div className="w-full h-full p-4 md:p-8 bg-white rounded-xl shadow-sm border border-slate-100 overflow-y-auto max-h-[800px]">
                        <TemplateRenderer data={{ name, fields }} template={template} theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    );
}

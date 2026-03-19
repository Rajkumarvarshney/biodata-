import React from 'react';

export default function BiodataForm({ name, setName, fields, setFields }) {

    const updateField = (id, key, value) => {
        setFields(fields.map(f => f.id === id ? { ...f, [key]: value } : f));
    };

    const removeField = (id) => {
        setFields(fields.filter(f => f.id !== id));
    };

    const addField = () => {
        const newId = Date.now().toString();
        setFields([...fields, { id: newId, label: 'Custom Field', value: '' }]);
    };

    return (
        <div className="flex flex-col gap-4 w-full animate-fade-in-up">
            {/* Name is static main field */}
            <div className="flex flex-col gap-2 mb-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                    type="text"
                    placeholder="Type your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-800 shadow-sm w-full bg-slate-50 text-lg font-medium tracking-wide transition-all placeholder:font-normal"
                />
            </div>

            <div className="w-full h-px bg-slate-200 mb-2"></div>

            {fields.map((field) => (
                <div key={field.id} className="flex gap-2 sm:gap-3 items-center group bg-white p-1 rounded-xl hover:shadow-sm border border-transparent hover:border-slate-200 transition-all">
                    {/* Label Input */}
                    <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateField(field.id, 'label', e.target.value)}
                        className="w-[35%] px-3 py-2.5 rounded-lg border border-transparent hover:border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 bg-slate-50/50 focus:bg-white text-slate-600 focus:text-slate-800 text-sm font-semibold transition-all shadow-none"
                    />
                    {/* Value Input */}
                    <input
                        type="text"
                        placeholder={field.label}
                        value={field.value}
                        onChange={(e) => updateField(field.id, 'value', e.target.value)}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white text-slate-800 text-sm shadow-sm transition-all"
                    />
                    {/* Delete Button */}
                    <button
                        type="button"
                        onClick={() => removeField(field.id)}
                        title="Remove Field"
                        className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors sm:opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            ))}

            {/* Add Field Button */}
            <button
                type="button"
                onClick={addField}
                className="mt-4 w-full py-3.5 border-2 border-dashed border-primary-200 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                + Add field
            </button>
        </div>
    );
}

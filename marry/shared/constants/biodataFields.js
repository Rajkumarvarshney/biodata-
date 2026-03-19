// Contains exhaustive constant fields and options used across both Frontend and Backend
// Ensures 100% parity between data models and inputs.

export const PERSONAL_DETAILS = {
    fullName: { type: 'string', required: true, label: 'Full Name' },
    dateOfBirth: { type: 'date', required: true, label: 'Date of Birth' },
    timeOfBirth: { type: 'string', required: false, label: 'Time of Birth' },
    placeOfBirth: { type: 'string', required: false, label: 'Place of Birth' },
    complexion: { type: 'string', required: false, label: 'Complexion' },
    height: { type: 'string', required: true, label: 'Height (e.g. 5ft 8in)' },
    bloodGroup: { type: 'string', required: false, label: 'Blood Group' },
    maritalStatus: { type: 'string', required: true, options: ['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce'] }
};

export const FAMILY_DETAILS = {
    fathersName: { type: 'string', required: true, label: "Father's Name" },
    fathersOccupation: { type: 'string', required: true, label: "Father's Occupation" },
    mothersName: { type: 'string', required: true, label: "Mother's Name" },
    mothersOccupation: { type: 'string', required: true, label: "Mother's Occupation" },
    siblings: { type: 'array', required: false, label: 'Siblings' }
};

export const EDUCATION_CAREER = {
    highestEducation: { type: 'string', required: true, label: 'Highest Education' },
    occupation: { type: 'string', required: true, label: 'Occupation/Profession' },
    income: { type: 'string', required: false, label: 'Annual Income' }
};

export const RELIGION_ASTROLOGY = {
    religion: { type: 'string', required: true, label: 'Religion' },
    caste: { type: 'string', required: false, label: 'Caste/Sub-Caste' },
    gotra: { type: 'string', required: false, label: 'Gotra' },
    rashi: { type: 'string', required: false, label: 'Rashi (Moon Sign)' },
    manglik: { type: 'string', required: false, options: ['Yes', 'No', 'Partial', 'Don\'t Know'] }
};

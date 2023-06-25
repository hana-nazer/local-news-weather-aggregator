import React from "react";

function Languages({ onLanguageChange }) {
  // Array of language options
  const languageOptions = [
    { value: "ar", label: "Arabic" },
    { value: "zh", label: "Chinese" },
    { value: "nl", label: "Dutch" },
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "el", label: "Greek" },
    { value: "he", label: "Hebrew" },
    { value: "hi", label: "Hindi" },
    { value: "it", label: "Italian" },
    { value: "ja", label: "Japanese" },
    { value: "ml", label: "Malayalam" },
    { value: "mr", label: "Marathi" },
    { value: "no", label: "Norwegian" },
    { value: "pt", label: "Portuguese" },
    { value: "ro", label: "Romanian" },
    { value: "ru", label: "Russian" },
    { value: "es", label: "Spanish" },
    { value: "sv", label: "Swedish" },
    { value: "ta", label: "Tamil" },
    { value: "te", label: "Telugu" },
    { value: "uk", label: "Ukrainian" },
  ];

  // Handle language selection
  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    onLanguageChange(selectedLanguage);
  };

  return (
    // Dropdown select for language options
    <select onChange={handleLanguageSelect}>
      <option>choose language</option>
      {languageOptions.map((option) => (
        // Individual language option
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Languages;

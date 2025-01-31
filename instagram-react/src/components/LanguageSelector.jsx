import { useState } from "react";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const languages = [
    { code: "af", label: "Afrikaans" },
    { code: "ar", label: "العربية" },
    { code: "cs", label: "Čeština" },
    { code: "da", label: "Dansk" },
    { code: "de", label: "Deutsch" },
    { code: "el", label: "Ελληνικά" },
    { code: "en", label: "English" },
    { code: "en-uk", label: "English (UK)" },
    { code: "es-es", label: "Español (España)" },
    { code: "es", label: "Español" },
    { code: "fa", label: "فارسی" },
    { code: "fi", label: "Suomi" },
    { code: "fr", label: "Français" },
    { code: "he", label: "עברית" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "it", label: "Italiano" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "ms", label: "Bahasa Melayu" },
    { code: "no", label: "Norsk" },
  ];

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center justify-center ">
      <select
        className="w-3/4 -m-4 bg-white cursor-pointer overflow-y: auto"
        id="language-select"
        value={language}
        onChange={handleChange}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

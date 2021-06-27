import React from 'react';
import { useTranslation } from 'react-i18next';

import { localStorageService } from 'app/services/LocalStorageService';
import { Lang } from 'app/models/Lang';

export const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();

  function onLangSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
    const lang = event.target.value as Lang;
    i18n.changeLanguage(lang);
    localStorageService.setLang(lang);
  }

  return (
    <select onChange={onLangSelect} defaultValue={i18n.language}>
      <option value='en'>en</option>
      <option value='ru'>ru</option>
    </select>
  );
};

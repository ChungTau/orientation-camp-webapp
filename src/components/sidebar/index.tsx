import React from 'react';
import SidebarUI from './ui';
import { LocaleProps } from '@/types/localeProps';
import { useTranslation } from '@/lib/i18n';

const Sidebar = async({lng}:LocaleProps) => {
  const { t } = await useTranslation(lng, "content");
  return <SidebarUI t={t} />;
};

export default Sidebar

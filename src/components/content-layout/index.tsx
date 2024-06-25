import React from 'react';
import { LocaleProps } from '@/types/localeProps';
import { useTranslation } from '@/lib/i18n';
import ContentLayoutUI from './ui';
import ContentLayoutProps from './types';

const ContentLayout = async({lng, title, children}:ContentLayoutProps & LocaleProps) => {
  const { t } = await useTranslation(lng, "content");
  return <ContentLayoutUI title={title} t={t}>{children}</ContentLayoutUI>;
};

export default ContentLayout

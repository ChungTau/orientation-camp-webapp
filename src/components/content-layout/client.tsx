"use client";

import React from 'react';
import { LocaleProps } from '@/types/localeProps';
import { useTranslation } from '@/lib/i18n/client';
import ContentLayoutUI from './ui';
import ContentLayoutProps from './types';

const ContentLayout = ({lng, title, children}:ContentLayoutProps & LocaleProps) => {
  const { t } = useTranslation(lng, ["content", "sidebar"]);

  return <ContentLayoutUI title={title} t={t}>{children}</ContentLayoutUI>;
};

export default ContentLayout

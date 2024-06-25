"use client";

import React from 'react';
import SidebarUI from './ui';
import { LocaleProps } from '@/types/localeProps';
import { useTranslation } from '@/lib/i18n/client';

const Sidebar = ({lng}:LocaleProps) => {
  const { t } = useTranslation(lng, ["content"]);

  return <SidebarUI t={t} />;
};

export default Sidebar

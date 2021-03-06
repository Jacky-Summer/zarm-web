import React, { CSSProperties } from 'react';
import { NotificationIcon, NotificationPropsBase } from './PropsType';

export function mapToIconType(type: NotificationIcon) {
  switch (type) {
    case 'success':
      return 'right-round-fill';
    case 'error':
      return 'wrong-round-fill';
    case 'warning':
      return 'warning-round-fill';
    case 'info':
      return 'info-round-fill';
    default:
      return undefined;
  }
}

export function mapToIconTheme(type: NotificationIcon) {
  switch (type) {
    case 'error':
      return 'danger';
    case 'info':
      return 'primary';
    case 'loading':
      return 'default';
    default:
      return type;
  }
}

export function handleOptions(options: NotificationPropsBase | React.ReactNode): NotificationPropsBase {
  if (
    options
    && Object.prototype.toString.call(options) === '[object Object]'
    && !React.isValidElement(options)
  ) {
    return { ...options as NotificationPropsBase };
  }
  return { content: options as React.ReactNode };
}

export function getStyle(initStyle, top, bottom) {
  const style: CSSProperties = { ...initStyle };
  if (top) {
    style.top = top;
  } else if (bottom) {
    style.bottom = bottom;
    style.top = 'auto';
    style.marginBottom = 0;
  }
  return style;
}

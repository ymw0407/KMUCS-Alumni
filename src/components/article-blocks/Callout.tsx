import type { ReactNode } from 'react';
import { callout, calloutIcon, calloutContent } from './Callout.css';

type CalloutType = 'info' | 'warning' | 'success' | 'error' | 'default';

const icons: Record<CalloutType, string> = {
  info: '\u2139\uFE0F',
  warning: '\u26A0\uFE0F',
  success: '\u2705',
  error: '\u274C',
  default: '\uD83D\uDCA1',
};

interface CalloutProps {
  type?: CalloutType;
  icon?: string;
  children: ReactNode;
}

export function Callout({ type = 'default', icon, children }: CalloutProps) {
  return (
    <div className={callout({ type })} role="note">
      <span className={calloutIcon({ type })} aria-hidden="true">
        {icon ?? icons[type]}
      </span>
      <div className={calloutContent({ type })}>{children}</div>
    </div>
  );
}

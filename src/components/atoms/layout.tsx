import '../util/base.css';
import React, { ReactElement } from 'react';

export default function PageTemplate({
  children,
}: {
  children?: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}

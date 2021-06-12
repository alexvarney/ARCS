import '../util/normalize.css';
import React, { ReactElement } from 'react';

export default function PageTemplate({
  children,
}: {
  children?: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}

import React from 'react';

type ContainerProp = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProp) {
  return (
    <div style={{ background: 'red' }} className="container">
      {children}
    </div>
  );
}

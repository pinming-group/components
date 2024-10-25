import React from 'react';
import { ToggleOpenButton } from 'luckybird';

const Demo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ToggleOpenButton
      open={isOpen}
      onClick={(open) => {
        setIsOpen(!open);
      }}
    />
  );
};

export default Demo;

import React, { useState, useEffect } from 'react';

const Example = () => {
  const [test, setTest] = useState([]);

  const run = () => {
    // Do something
  };

  useEffect(() => {
    run();
  }, []);

  return <>example component</>;
};

export default Example;

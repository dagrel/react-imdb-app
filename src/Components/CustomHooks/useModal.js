import { useState } from 'react';

const useModal = () => {
  const [visibleId, setVisible] = useState(null);
  const toggle = id => () => setVisible(visibleId => visibleId === id ? null : id);
  return {toggle, visibleId}
};

export default useModal;
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Routes from './routes';

function App() {
  const { addToast } = useToasts();
  const { toast } = useSelector((state) => state.Toast);
  useEffect(() => {
    if (toast) {
      addToast(toast.message, { appearance: toast.type });
    }
  }, [addToast, toast]);

  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

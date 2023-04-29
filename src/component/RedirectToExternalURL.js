import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToExternalURL() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToURL = () => {
      const externalURL = 'https://fitlife-app.netlify.app/';
      window.open(externalURL, '_blank');
    };

    redirectToURL();
  }, [navigate]);

  return (
    <div>
        Please allow pop-up to see the dashbard.
      Redirecting...
    </div>
  );
}

export default RedirectToExternalURL;

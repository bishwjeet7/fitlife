import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToExternalURL() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToURL = () => {
      const externalURL = 'https://64666af089ec473fcb5b67d5--glittering-gelato-4b805a.netlify.app/';
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



import React, { useState } from 'react';
import { Form } from './form/form';
import { fetchInfo } from 'services/api';
import apiInfo from 'services/apiInfo';
import styles from './app.module.css';

export const App = () => {
  const [inputIpValue, setInputIpValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputIpValue(event.target.value);
  };

  const handleIpLookup = async (event) => {
    event.preventDefault();
    if (!isValidIp(inputIpValue)) {
      setError('Invalid IP address');
      setResult(null);
      return;
    }

    try {
      const data = await fetchInfo(inputIpValue, apiInfo.API_KEY);
      setResult(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setResult(null);
    }
  };

  const isValidIp = (ip) => {
    const pattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(ip);
  };

  return (
    <div className={styles.container}>
      <h1>Enter the IP address and click the button!</h1>
      <div className={styles.appContainer}>
        
        <div className={styles.leftContainer}>
          <Form
            inputValue={inputIpValue}
            onInputChange={handleInputChange}
            onIpLookup={handleIpLookup}
          />
        </div>
        <div className={styles.rightContainer}>
          {result && (
            <div className={styles.resultInfo}>
              <p>IP Address: {result.address}</p>
              <p>Country: {result.country}</p>
              <p>City: {result.city}</p>
              <p>Latitude: {result.latitude}</p>
              <p>Longitude: {result.longitude}</p>
              <p>Timezone: {result.timezone}</p>
            </div>
          )}
          {error && <p className={styles.errorMessage}>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

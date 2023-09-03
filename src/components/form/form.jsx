

import React from 'react';
import styles from './form.module.css';

export const Form = ({ inputValue, onInputChange, onIpLookup }) => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter IP address"
          value={inputValue}
          onChange={onInputChange}
          className={styles.inputField}
          minLength={8}
          maxLength={16}
        />
        <button onClick={onIpLookup} className={styles.button}>
          IP Lookup
        </button>
      </div>
    </form>
  );
};

export default Form;

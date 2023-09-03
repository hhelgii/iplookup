import React from 'react';
import styles from './form.module.css'; 

export const Form = ({ inputValue, onInputChange, onIpLookup }) => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Enter IP address"
        value={inputValue}
        onChange={onInputChange}
        className={styles.input} 
      />
      <button onClick={onIpLookup} className={styles.button}>IP Lookup</button> 
    </form>
  );
};

export default Form;

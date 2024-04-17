import CryptoJS from 'crypto-js';

const encryptData = (data, secretKey) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export default encryptData;

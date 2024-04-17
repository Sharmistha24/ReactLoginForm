
// Email validation function
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Password validation function
const validatePassword = (password) => {
  const re = /^(?=.*[A-Z])(?!.*\s).{7,20}$/;
  return re.test(password);
};

export { validateEmail, validatePassword };

export const validateField = (field, value) => {
  if (field.required && (value === undefined || value === "")) {
    return `${field.label} is required.`;
  }
  if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return `Invalid email address.`;
    }
  }
  if (field.validator) {
    const result = field.validator(value);
    if (result !== true) return result;
  }
  return null;
};
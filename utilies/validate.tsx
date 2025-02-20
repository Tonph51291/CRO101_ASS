export const isValidateEmail = stringEmail =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(stringEmail);

export const isValidatePassword = stringPassword => stringPassword.length > 3;

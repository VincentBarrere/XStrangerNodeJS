module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo")) {
    errors.pseudo = "Pseudo incorrect";
  }

  if (err.message.includes("email")) {
    errors.email = "Email incorrect";
  }

  if (err.message.includes("password")) {
    errors.password = "Le mot de passe doit faire 6 caractères minimum";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo")) {
    errors.pseudo = "Ce pseudo est déjà pris";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email")) {
    errors.email = "Ce email est déjà lié à un compte";
  }

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) {
    errors.email = "Email inconnu";
  } else if (err.message.includes("password")) {
    errors.password = "Mauvais mot de passe";
  }
  return errors;
};

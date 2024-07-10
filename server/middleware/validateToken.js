import jwt from "jsonwebtoken";

const validateToken = (request, response, next) => {
  const token = request.cookies.access_token;

  if (!token) {
    return response
      .status(403)
      .json({ message: "Token inexistent - Accés no autoritzat!" });
  }

  jwt.verify(token, process.env.SECRET_JWT, (err, dataDecoded) => {
    if (err) {
      return response
        .status(401)
        .json({ message: "Token invàlid - Accés no autoritzat!" });
    }
    // Guardar la informació decodificada del token en el request
    request.userId = dataDecoded.id; // ID present el el token que correspon a un usuari
    request.username = dataDecoded.username; // username present el el token que correspon a un usuari
    next();
  });
};

export default validateToken;

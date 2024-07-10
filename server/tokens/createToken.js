import jwt from "jsonwebtoken";

const createToken = (userForToken, response) => {
  const token = jwt.sign(userForToken, process.env.SECRET_JWT, {
    expiresIn: "24h",
  });

  response.cookie("access_token", token, {
    httpOnly: true, // --> La cookie sol es pot accedir des del servidor
    secure: process.env.NODE_ENV === "production", // --> només funciona amb https
    sameSite: "strict", // --> la cookie nomès es pot accedir en el mateix domini
    maxAge: 1000 * 60 * 60 * 24, //  --> Té validesa de un dia
  });
};

export default createToken;

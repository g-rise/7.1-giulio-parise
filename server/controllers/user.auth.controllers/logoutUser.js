import UserModel from "../../models/user.model.js";

const logoutUser = async (request, response) => {
  try {
    response.cookie("access_token", "", { maxAge: 0 });
    return response
      .status(200)
      .json({ message: "Desconnexió realitzada correctament!" });
  } catch (error) {
    console.log("Error en el login de l'usuari", error.message);
    return response.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export default logoutUser;

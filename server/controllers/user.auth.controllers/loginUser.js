import UserModel from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import createToken from "../../tokens/createToken.js";

const loginUser = async (request, response) => {
  try {
    const { username, password } = request.body;

    const checkUser = await UserModel.findOne({ username });
    const checkPassword =
      checkUser === null
        ? false
        : await bcryptjs.compare(password, checkUser.password);

    // Es gestiona d'aquesta manera per evitar donar informació de quin camp ha sigut el incorrecte
    if (!checkPassword) {
      console.log(`Nom d'usuari o password incorrecte`);
      return response.status(400).json({
        error: `Nom d'usuari o password incorrecte`,
      });
    }

    /**
    CREACIÓ DE TOKEN
     */

    const userForToken = {
      id: checkUser._id,
      username: checkUser.username,
    };

    createToken(userForToken, response);

    // Desestructuro checkUser per eliminar la password
    const user = {
      id: checkUser._id,
      firstname: checkUser.firstname,
      lastname: checkUser.lastname,
      username: checkUser.username,
      email: checkUser.email,
    };
    // console.log(checkUser);

    return response.status(200).json({
      message: "Login realitzada amb éxit!",
      user: user,
    });
  } catch (error) {
    console.log("Error en el login de l'usuari", error.error);
    return response.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

export default loginUser;

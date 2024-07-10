import UserModel from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import createToken from "../../tokens/createToken.js";

const registerUser = async (request, response) => {
  try {
    const { firstname, lastname, username, email, password } = request.body;

    // COMPROVO PRIMER QUE NO EXISTEIXI UN USUARI
    const checkUsername = await UserModel.findOne({ username });
    if (checkUsername) {
      console.log(`L'usuari ${username} ja existeix`);
      return response.status(400).json({
        error: `L'usuari ${username} ja existeix`,
      });
    }

    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      console.log(`Ja existeix un usuari amb aquest email`);
      return response.status(400).json({
        error: `Ja existeix un usuari amb aquest email`,
      });
    }

    // ENCRIPTACIÓ PASSWORD
    const saltRound = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, saltRound);

    // CREAR UN OBJECTE A PASSAR AL UserModel
    const payload = {
      firstname,
      lastname,
      username,
      email,
      password: hashPassword,
    };

    const newUser = new UserModel(payload);

    if (!newUser) {
      return response
        .status(400)
        .json({ error: "Error al crear el nou usuari" });
    }

    // CREACIÓ USER PER TOKEN
    const userForToken = {
      id: newUser._id,
      username: newUser.username,
    };

    createToken(userForToken, response);

    await newUser.save();

    return response.status(201).json({
      message: "Usuari creat correctament",
      user: {
        id: newUser._id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Error en el registre de l'usuari", error.message);
    return response.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

export default registerUser;

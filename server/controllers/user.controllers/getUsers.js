import UserModel from "../../models/user.model.js";

const getUsers = async (request, response) => {
  try {
    const userLogged = request.userId;

    const users = await UserModel.find({ _id: { $ne: userLogged } }).select(
      "-password"
    );

    if (!users) {
      return response
        .status(200)
        .json({ message: "Encara no hi ha usuaris que participin al xat" });
    }

    return response.status(200).json(users);
  } catch (error) {
    console.log("Error en la recepció dels usuaris", error.message);
    return response.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

export default getUsers;

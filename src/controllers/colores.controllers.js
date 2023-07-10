import Color from "../models/color";

export const obtenerColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener los colores de la paleta",
    });
  }
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({
      mensaje: "El color ha sido creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el color solicitado",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El color fue eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El color no pudo ser eliminado",
    });
  }
};

export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El color fue actualizado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El color no pudo ser actualizado",
    });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el color buscado",
    });
  }
};

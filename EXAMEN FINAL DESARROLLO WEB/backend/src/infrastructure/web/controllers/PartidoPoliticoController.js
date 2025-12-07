/**
 * Controlador REST (Adaptador)
 * Maneja las peticiones HTTP y delega a los casos de uso
 */
export class PartidoPoliticoController {
  constructor(createUseCase, getUseCase, listUseCase, updateUseCase, deleteUseCase) {
    this.createUseCase = createUseCase;
    this.getUseCase = getUseCase;
    this.listUseCase = listUseCase;
    this.updateUseCase = updateUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  create = async (req, res) => {
    try {
      const partido = await this.createUseCase.execute(req.body);
      res.status(201).json({
        success: true,
        data: this._toDTO(partido)
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

  getById = async (req, res) => {
    try {
      const partido = await this.getUseCase.execute(req.params.id);
      res.status(200).json({
        success: true,
        data: this._toDTO(partido)
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  };

  list = async (req, res) => {
    try {
      const partidos = await this.listUseCase.execute();
      res.status(200).json({
        success: true,
        data: partidos.map(p => this._toDTO(p)),
        count: partidos.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };

  update = async (req, res) => {
    try {
      const partido = await this.updateUseCase.execute(req.params.id, req.body);
      res.status(200).json({
        success: true,
        data: this._toDTO(partido)
      });
    } catch (error) {
      const statusCode = error.message.includes('no encontrado') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
  };

  delete = async (req, res) => {
    try {
      await this.deleteUseCase.execute(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Partido político eliminado exitosamente'
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  };

  _toDTO(partido) {
    return {
      id: partido.id || (partido._id ? partido._id.toString() : null),
      nombre: partido.nombre,
      eslogan: partido.eslogan,
      presidente: partido.presidente,
      secretario: partido.secretario,
      tesorero: partido.tesorero,
      pais: partido.pais,
      numPresidentes: partido.numPresidentes,
      numGobernadores: partido.numGobernadores,
      numAlcaldes: partido.numAlcaldes,
      numConcejales: partido.numConcejales,
      numCongresistas: partido.numCongresistas
    };
  }
}


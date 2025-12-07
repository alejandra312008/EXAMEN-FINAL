/**
 * Caso de uso: Obtener Partido Político por ID
 */
export class GetPartidoPolitico {
  constructor(partidoPoliticoRepository) {
    this.partidoPoliticoRepository = partidoPoliticoRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error('ID es requerido');
    }

    const partido = await this.partidoPoliticoRepository.findById(id);
    
    if (!partido) {
      throw new Error('Partido político no encontrado');
    }

    return partido;
  }
}




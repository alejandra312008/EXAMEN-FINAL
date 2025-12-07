import { PartidoPolitico } from '../../domain/entities/PartidoPolitico.js';

/**
 * Caso de uso: Crear Partido Político
 */
export class CreatePartidoPolitico {
  constructor(partidoPoliticoRepository) {
    this.partidoPoliticoRepository = partidoPoliticoRepository;
  }

  async execute(partidoData) {
    const partido = new PartidoPolitico(partidoData);
    const validation = partido.validate();

    if (!validation.isValid) {
      throw new Error(`Validación fallida: ${validation.errors.join(', ')}`);
    }

    return await this.partidoPoliticoRepository.save(partido);
  }
}




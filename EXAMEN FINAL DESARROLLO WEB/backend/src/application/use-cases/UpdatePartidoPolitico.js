import { PartidoPolitico } from '../../domain/entities/PartidoPolitico.js';

/**
 * Caso de uso: Actualizar Partido Político
 */
export class UpdatePartidoPolitico {
  constructor(partidoPoliticoRepository) {
    this.partidoPoliticoRepository = partidoPoliticoRepository;
  }

  async execute(id, partidoData) {
    if (!id) {
      throw new Error('ID es requerido');
    }

    // Verificar que existe
    const existing = await this.partidoPoliticoRepository.findById(id);
    if (!existing) {
      throw new Error('Partido político no encontrado');
    }

    const partido = new PartidoPolitico(partidoData);
    const validation = partido.validate();

    if (!validation.isValid) {
      throw new Error(`Validación fallida: ${validation.errors.join(', ')}`);
    }

    return await this.partidoPoliticoRepository.update(id, partido);
  }
}




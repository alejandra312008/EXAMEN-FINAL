/**
 * Interfaz del repositorio (Puerto)
 * Define el contrato que debe cumplir cualquier implementación del repositorio
 */
export class PartidoPoliticoRepository {
  async save(partidoPolitico) {
    throw new Error('Method save() must be implemented');
  }

  async findById(id) {
    throw new Error('Method findById() must be implemented');
  }

  async findAll() {
    throw new Error('Method findAll() must be implemented');
  }

  async update(id, partidoPolitico) {
    throw new Error('Method update() must be implemented');
  }

  async delete(id) {
    throw new Error('Method delete() must be implemented');
  }
}




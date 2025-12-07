/**
 * Caso de uso: Listar todos los Partidos Políticos
 */
export class ListPartidosPoliticos {
  constructor(partidoPoliticoRepository) {
    this.partidoPoliticoRepository = partidoPoliticoRepository;
  }

  async execute() {
    return await this.partidoPoliticoRepository.findAll();
  }
}




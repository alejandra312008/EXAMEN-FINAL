/**
 * Entidad de dominio: PartidoPolitico
 * Representa un partido político con sus atributos
 */
export class PartidoPolitico {
  constructor({
    id,
    nombre,
    eslogan,
    presidente,
    secretario,
    tesorero,
    pais,
    numPresidentes = 0,
    numGobernadores = 0,
    numAlcaldes = 0,
    numConcejales = 0,
    numCongresistas = 0
  }) {
    this.id = id;
    this.nombre = nombre;
    this.eslogan = eslogan;
    this.presidente = presidente;
    this.secretario = secretario;
    this.tesorero = tesorero;
    this.pais = pais;
    this.numPresidentes = numPresidentes;
    this.numGobernadores = numGobernadores;
    this.numAlcaldes = numAlcaldes;
    this.numConcejales = numConcejales;
    this.numCongresistas = numCongresistas;
  }

  validate() {
    const errors = [];
    
    if (!this.nombre || this.nombre.trim() === '') {
      errors.push('El nombre es requerido');
    }
    
    if (!this.eslogan || this.eslogan.trim() === '') {
      errors.push('El eslogan es requerido');
    }
    
    if (!this.presidente || this.presidente.trim() === '') {
      errors.push('El presidente es requerido');
    }
    
    if (!this.secretario || this.secretario.trim() === '') {
      errors.push('El secretario es requerido');
    }
    
    if (!this.tesorero || this.tesorero.trim() === '') {
      errors.push('El tesorero es requerido');
    }
    
    if (!this.pais || this.pais.trim() === '') {
      errors.push('El país es requerido');
    }

    if (this.numPresidentes < 0) errors.push('numPresidentes debe ser >= 0');
    if (this.numGobernadores < 0) errors.push('numGobernadores debe ser >= 0');
    if (this.numAlcaldes < 0) errors.push('numAlcaldes debe ser >= 0');
    if (this.numConcejales < 0) errors.push('numConcejales debe ser >= 0');
    if (this.numCongresistas < 0) errors.push('numCongresistas debe ser >= 0');

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}


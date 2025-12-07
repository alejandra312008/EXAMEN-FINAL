import { PartidoPoliticoRepository } from '../../../domain/repositories/PartidoPoliticoRepository.js';
import { PartidoPoliticoModel } from './PartidoPoliticoSchema.js';
import { PartidoPolitico } from '../../../domain/entities/PartidoPolitico.js';

/**
 * Implementación del repositorio usando MongoDB (Adaptador)
 */
export class MongoPartidoPoliticoRepository extends PartidoPoliticoRepository {
  async save(partidoPolitico) {
    const doc = new PartidoPoliticoModel({
      nombre: partidoPolitico.nombre,
      eslogan: partidoPolitico.eslogan,
      presidente: partidoPolitico.presidente,
      secretario: partidoPolitico.secretario,
      tesorero: partidoPolitico.tesorero,
      pais: partidoPolitico.pais,
      numPresidentes: partidoPolitico.numPresidentes,
      numGobernadores: partidoPolitico.numGobernadores,
      numAlcaldes: partidoPolitico.numAlcaldes,
      numConcejales: partidoPolitico.numConcejales,
      numCongresistas: partidoPolitico.numCongresistas
    });

    const saved = await doc.save();
    return this._toDomain(saved);
  }

  async findById(id) {
    const doc = await PartidoPoliticoModel.findById(id);
    return doc ? this._toDomain(doc) : null;
  }

  async findAll() {
    const docs = await PartidoPoliticoModel.find();
    return docs.map(doc => this._toDomain(doc));
  }

  async update(id, partidoPolitico) {
    const doc = await PartidoPoliticoModel.findByIdAndUpdate(
      id,
      {
        nombre: partidoPolitico.nombre,
        eslogan: partidoPolitico.eslogan,
        presidente: partidoPolitico.presidente,
        secretario: partidoPolitico.secretario,
        tesorero: partidoPolitico.tesorero,
        pais: partidoPolitico.pais,
        numPresidentes: partidoPolitico.numPresidentes,
        numGobernadores: partidoPolitico.numGobernadores,
        numAlcaldes: partidoPolitico.numAlcaldes,
        numConcejales: partidoPolitico.numConcejales,
        numCongresistas: partidoPolitico.numCongresistas
      },
      { new: true, runValidators: true }
    );

    return doc ? this._toDomain(doc) : null;
  }

  async delete(id) {
    const doc = await PartidoPoliticoModel.findByIdAndDelete(id);
    return doc ? this._toDomain(doc) : null;
  }

  _toDomain(doc) {
    const partido = new PartidoPolitico({
      nombre: doc.nombre,
      eslogan: doc.eslogan,
      presidente: doc.presidente,
      secretario: doc.secretario,
      tesorero: doc.tesorero,
      pais: doc.pais,
      numPresidentes: doc.numPresidentes,
      numGobernadores: doc.numGobernadores,
      numAlcaldes: doc.numAlcaldes,
      numConcejales: doc.numConcejales,
      numCongresistas: doc.numCongresistas
    });
    // Asignar el ID de MongoDB
    partido.id = doc._id.toString();
    partido._id = doc._id; // También mantener _id para compatibilidad
    return partido;
  }
}


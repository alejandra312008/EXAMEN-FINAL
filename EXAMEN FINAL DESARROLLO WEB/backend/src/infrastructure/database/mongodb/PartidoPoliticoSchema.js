import mongoose from 'mongoose';

/**
 * Esquema de MongoDB para PartidoPolitico
 */
const partidoPoliticoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  eslogan: {
    type: String,
    required: true,
    trim: true
  },
  presidente: {
    type: String,
    required: true,
    trim: true
  },
  secretario: {
    type: String,
    required: true,
    trim: true
  },
  tesorero: {
    type: String,
    required: true,
    trim: true
  },
  pais: {
    type: String,
    required: true,
    trim: true
  },
  numPresidentes: {
    type: Number,
    default: 0,
    min: 0
  },
  numGobernadores: {
    type: Number,
    default: 0,
    min: 0
  },
  numAlcaldes: {
    type: Number,
    default: 0,
    min: 0
  },
  numConcejales: {
    type: Number,
    default: 0,
    min: 0
  },
  numCongresistas: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
});

export const PartidoPoliticoModel = mongoose.model('PartidoPolitico', partidoPoliticoSchema);




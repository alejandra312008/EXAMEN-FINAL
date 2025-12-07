import React, { useState, useEffect } from 'react';
import './PartidoForm.css';

const PartidoForm = ({ partido, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    eslogan: '',
    presidente: '',
    secretario: '',
    tesorero: '',
    pais: '',
    numPresidentes: 0,
    numGobernadores: 0,
    numAlcaldes: 0,
    numConcejales: 0,
    numCongresistas: 0
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (partido) {
      setFormData({
        nombre: partido.nombre || '',
        eslogan: partido.eslogan || '',
        presidente: partido.presidente || '',
        secretario: partido.secretario || '',
        tesorero: partido.tesorero || '',
        pais: partido.pais || '',
        numPresidentes: partido.numPresidentes || 0,
        numGobernadores: partido.numGobernadores || 0,
        numAlcaldes: partido.numAlcaldes || 0,
        numConcejales: partido.numConcejales || 0,
        numCongresistas: partido.numCongresistas || 0
      });
    }
  }, [partido]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.startsWith('num') ? parseInt(value) || 0 : value
    }));
    
    // Limpiar error del campo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.eslogan.trim()) newErrors.eslogan = 'El eslogan es requerido';
    if (!formData.presidente.trim()) newErrors.presidente = 'El presidente es requerido';
    if (!formData.secretario.trim()) newErrors.secretario = 'El secretario es requerido';
    if (!formData.tesorero.trim()) newErrors.tesorero = 'El tesorero es requerido';
    if (!formData.pais.trim()) newErrors.pais = 'El país es requerido';

    if (formData.numPresidentes < 0) newErrors.numPresidentes = 'Debe ser >= 0';
    if (formData.numGobernadores < 0) newErrors.numGobernadores = 'Debe ser >= 0';
    if (formData.numAlcaldes < 0) newErrors.numAlcaldes = 'Debe ser >= 0';
    if (formData.numConcejales < 0) newErrors.numConcejales = 'Debe ser >= 0';
    if (formData.numCongresistas < 0) newErrors.numCongresistas = 'Debe ser >= 0';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="partido-form-container">
      <h2>{partido ? '✏️ Editar Partido Político' : '➕ Nuevo Partido Político'}</h2>
      
      <form onSubmit={handleSubmit} className="partido-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={errors.nombre ? 'error' : ''}
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="eslogan">Eslogan *</label>
            <input
              type="text"
              id="eslogan"
              name="eslogan"
              value={formData.eslogan}
              onChange={handleChange}
              className={errors.eslogan ? 'error' : ''}
            />
            {errors.eslogan && <span className="error-message">{errors.eslogan}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="presidente">Presidente *</label>
            <input
              type="text"
              id="presidente"
              name="presidente"
              value={formData.presidente}
              onChange={handleChange}
              className={errors.presidente ? 'error' : ''}
            />
            {errors.presidente && <span className="error-message">{errors.presidente}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="secretario">Secretario *</label>
            <input
              type="text"
              id="secretario"
              name="secretario"
              value={formData.secretario}
              onChange={handleChange}
              className={errors.secretario ? 'error' : ''}
            />
            {errors.secretario && <span className="error-message">{errors.secretario}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tesorero">Tesorero *</label>
            <input
              type="text"
              id="tesorero"
              name="tesorero"
              value={formData.tesorero}
              onChange={handleChange}
              className={errors.tesorero ? 'error' : ''}
            />
            {errors.tesorero && <span className="error-message">{errors.tesorero}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="pais">País *</label>
            <input
              type="text"
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className={errors.pais ? 'error' : ''}
            />
            {errors.pais && <span className="error-message">{errors.pais}</span>}
          </div>
        </div>

        <div className="stats-section">
          <h3>Estadísticas de Cargos</h3>
          <div className="stats-grid">
            <div className="form-group">
              <label htmlFor="numPresidentes">Número de Presidentes</label>
              <input
                type="number"
                id="numPresidentes"
                name="numPresidentes"
                value={formData.numPresidentes}
                onChange={handleChange}
                min="0"
                className={errors.numPresidentes ? 'error' : ''}
              />
              {errors.numPresidentes && <span className="error-message">{errors.numPresidentes}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="numGobernadores">Número de Gobernadores</label>
              <input
                type="number"
                id="numGobernadores"
                name="numGobernadores"
                value={formData.numGobernadores}
                onChange={handleChange}
                min="0"
                className={errors.numGobernadores ? 'error' : ''}
              />
              {errors.numGobernadores && <span className="error-message">{errors.numGobernadores}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="numAlcaldes">Número de Alcaldes</label>
              <input
                type="number"
                id="numAlcaldes"
                name="numAlcaldes"
                value={formData.numAlcaldes}
                onChange={handleChange}
                min="0"
                className={errors.numAlcaldes ? 'error' : ''}
              />
              {errors.numAlcaldes && <span className="error-message">{errors.numAlcaldes}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="numConcejales">Número de Concejales</label>
              <input
                type="number"
                id="numConcejales"
                name="numConcejales"
                value={formData.numConcejales}
                onChange={handleChange}
                min="0"
                className={errors.numConcejales ? 'error' : ''}
              />
              {errors.numConcejales && <span className="error-message">{errors.numConcejales}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="numCongresistas">Número de Congresistas</label>
              <input
                type="number"
                id="numCongresistas"
                name="numCongresistas"
                value={formData.numCongresistas}
                onChange={handleChange}
                min="0"
                className={errors.numCongresistas ? 'error' : ''}
              />
              {errors.numCongresistas && <span className="error-message">{errors.numCongresistas}</span>}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={loading}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Guardando...' : (partido ? 'Actualizar' : 'Crear')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartidoForm;




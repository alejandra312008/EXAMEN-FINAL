import React from 'react';
import './PartidoList.css';

const PartidoList = ({ partidos, onEdit, onDelete, loading }) => {
  if (loading && partidos.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando partidos políticos...</p>
      </div>
    );
  }

  if (partidos.length === 0) {
    return (
      <div className="empty-state">
        <p>📋 No hay partidos políticos registrados</p>
        <p className="empty-hint">Haz clic en "Nuevo Partido Político" para agregar uno</p>
      </div>
    );
  }

  return (
    <div className="partido-list">
      <div className="table-container">
        <table className="partido-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Eslogan</th>
              <th>Presidente</th>
              <th>País</th>
              <th>Estadísticas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {partidos.map((partido) => (
              <tr key={partido.id}>
                <td className="nombre-cell">
                  <strong>{partido.nombre}</strong>
                </td>
                <td className="eslogan-cell">
                  <em>"{partido.eslogan}"</em>
                </td>
                <td>{partido.presidente}</td>
                <td>{partido.pais}</td>
                <td className="stats-cell">
                  <div className="stats-grid">
                    <span>👤 Pres: {partido.numPresidentes}</span>
                    <span>🏛️ Gov: {partido.numGobernadores}</span>
                    <span>🏙️ Alc: {partido.numAlcaldes}</span>
                    <span>📋 Conc: {partido.numConcejales}</span>
                    <span>💼 Cong: {partido.numCongresistas}</span>
                  </div>
                </td>
                <td className="actions-cell">
                  <button
                    className="btn btn-edit"
                    onClick={() => onEdit(partido)}
                    disabled={loading}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(partido.id)}
                    disabled={loading}
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartidoList;




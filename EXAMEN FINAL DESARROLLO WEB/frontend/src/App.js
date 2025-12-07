import React, { useState, useEffect } from 'react';
import './App.css';
import PartidoList from './components/PartidoList';
import PartidoForm from './components/PartidoForm';
import { partidoService } from './services/partidoService';

function App() {
  const [partidos, setPartidos] = useState([]);
  const [selectedPartido, setSelectedPartido] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadPartidos();
  }, []);

  const loadPartidos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await partidoService.getAll();
      setPartidos(data);
    } catch (err) {
      setError('Error al cargar los partidos políticos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (partidoData) => {
    setLoading(true);
    setError(null);
    try {
      await partidoService.create(partidoData);
      await loadPartidos();
      setShowForm(false);
      setSelectedPartido(null);
    } catch (err) {
      setError('Error al crear el partido político');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, partidoData) => {
    setLoading(true);
    setError(null);
    try {
      await partidoService.update(id, partidoData);
      await loadPartidos();
      setShowForm(false);
      setSelectedPartido(null);
    } catch (err) {
      setError('Error al actualizar el partido político');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este partido político?')) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await partidoService.delete(id);
      await loadPartidos();
    } catch (err) {
      setError('Error al eliminar el partido político');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (partido) => {
    setSelectedPartido(partido);
    setShowForm(true);
  };

  const handleNew = () => {
    setSelectedPartido(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedPartido(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🏛️ Gestión de Partidos Políticos</h1>
        <p>Sistema CRUDL - Create, Read, Update, Delete, List</p>
      </header>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <main className="App-main">
        {!showForm ? (
          <>
            <div className="actions-bar">
              <button className="btn btn-primary" onClick={handleNew}>
                ➕ Nuevo Partido Político
              </button>
              <button className="btn btn-secondary" onClick={loadPartidos} disabled={loading}>
                🔄 Actualizar
              </button>
            </div>
            <PartidoList
              partidos={partidos}
              onEdit={handleEdit}
              onDelete={handleDelete}
              loading={loading}
            />
          </>
        ) : (
          <PartidoForm
            partido={selectedPartido}
            onSubmit={selectedPartido ? (data) => handleUpdate(selectedPartido.id, data) : handleCreate}
            onCancel={handleCancel}
            loading={loading}
          />
        )}
      </main>
    </div>
  );
}

export default App;




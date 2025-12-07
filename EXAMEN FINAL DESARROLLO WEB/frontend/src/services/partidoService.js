import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/partidos';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const partidoService = {
  async getAll() {
    try {
      const response = await api.get('/');
      return response.data.data || [];
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener los partidos');
    }
  },

  async getById(id) {
    try {
      const response = await api.get(`/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener el partido');
    }
  },

  async create(partido) {
    try {
      const response = await api.post('/', partido);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al crear el partido');
    }
  },

  async update(id, partido) {
    try {
      const response = await api.put(`/${id}`, partido);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al actualizar el partido');
    }
  },

  async delete(id) {
    try {
      await api.delete(`/${id}`);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al eliminar el partido');
    }
  }
};




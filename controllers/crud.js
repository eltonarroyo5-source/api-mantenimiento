const crud = (Modelo, opciones = {}) => ({
  listar: async (req, res) => {
    try {
      res.json(await Modelo.findAll(opciones));
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const item = await Modelo.findByPk(req.params.id, opciones);
      if (!item) return res.status(404).json({ error: 'No encontrado' });
      res.json(item);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  crear: async (req, res) => {
    try {
      res.status(201).json(await Modelo.create(req.body));
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  actualizar: async (req, res) => {
    try {
      const item = await Modelo.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'No encontrado' });
      await item.update(req.body);
      res.json(item);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  eliminar: async (req, res) => {
    try {
      const item = await Modelo.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'No encontrado' });
      await item.destroy();
      res.status(204).end();
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }
});

module.exports = crud;
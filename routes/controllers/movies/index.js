class MoviesController {
  async create(req, res) {
    try {
      res.send(
        await session.run(
          `CREATE (m: Movie {title: '${req.body.title}', budget: ${req.body.budget}, rating: ${req.body.rating}, genre: '${req.body.genre}'})`
        )
      );
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getByGenre(req, res) {
    try {
      res.send(
        await session.run(
          `MATCH (m: Movie) WHERE m.genre = '${req.params.genre}' RETURN m`
        )
      );
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getByTitle(req, res) {
    try {
      res.send(
        await session.run(
          `MATCH (m: Movie) WHERE m.title = '${req.params.title}' RETURN m`
        )
      );
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getByBudget(req, res) {
    try {
      res.send(
        await session.run(
          `MATCH (m: Movie) WHERE m.budget = ${req.params.budget} RETURN m`
        )
      );
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getByRating(req, res) {
    try {
      res.send(
        await session.run(
          `MATCH (m: Movie) WHERE m.rating = ${req.params.rating} RETURN m`
        )
      );
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

export default new MoviesController();

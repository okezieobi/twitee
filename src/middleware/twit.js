export default class Twit {
  constructor(services) {
    this.services = services;
    this.findOneById = this.findOneById.bind(this);
  }

  async findOneById({ params: { id } }, res, next) {
    try {
      const data = await this.services.twit.findOneByOwner({ UserId: res.locals.userId, id });
      if (data.message) next(data);
      else {
        res.locals.data = data;
        next();
      }
    } catch (err) {
      next(err);
    }
  }
}

const validateId = (req, res, next) => {
  if (
    (req.method === 'GET' && req.params.id) ||
    req.method === 'PUT' ||
    req.method === 'DELETE'
  ) {
    const { id } = req.params.id;
    if (!Number.isInteger(Number(id))) throw new Error('Id must be an integer');
  }
  next();
};

export default validateId;

export const login = async (req, res) => {
  res.send('Login');
};

export const dashboard = async (req, res) => {
  const number = Math.floor(Math.random() * 100);

  res.status(200).json({
    message: 'Dashboard',
    secret: 'This is a secret',
    number,
  });
};

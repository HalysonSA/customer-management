const customerRoot = 'customer';
const userRoot = 'user';

export const routesV1 = {
  version: 'v1',
  user: {
    root: userRoot,
  },
  customer: {
    root: customerRoot,
    find: `${customerRoot}/:id`,
  },
};

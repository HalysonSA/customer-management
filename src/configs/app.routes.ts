const customerRoot = 'customer';

export const routesV1 = {
  version: 'v1',
  customer: {
    root: customerRoot,
    find: `${customerRoot}/:id`,
  },
};

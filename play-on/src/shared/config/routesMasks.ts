export const routesMasks = {
  main: {
    mask: '/',
    create: () => '/',
  },
  login: {
    mask: '/login',
    create: () => '/login',
  },
  signup: {
    mask: '/signup',
    create: () => '/signup',
  },
  movies: {
    mask: '/movies',
    create: () => '/movies',
  },
  series: {
    mask: '/series',
    create: () => '/series',
  },
  top: {
    mask: '/top',
    create: () => '/top',
  },
  profile: {
    mask: '/profile',
    create: () => '/profile',
  },
  commingSoon: {
    mask: 'commingSoon',
    create: ()=> '/commingSoon'
  }
};

export type RouteKeys = keyof typeof routesMasks;
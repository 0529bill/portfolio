import ReactGA from 'react-ga';

export const GApageView = (page) => {
  ReactGA.pageview(page);
};

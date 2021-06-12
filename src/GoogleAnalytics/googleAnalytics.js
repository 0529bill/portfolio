import ReactGA from 'react-ga';

export const GApageView = (page) => {
  ReactGA.pageview(page);
};

export const GAevent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};

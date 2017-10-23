import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Footer.css';
import Link from '../Link';

const Footer = () => (
  <footer className={s.footer}>
    <section className="copyright" style={{}}>
      <Link className={s.link} to="/">
        Adam Goldman
      </Link>{' '}
      © 2017
    </section>
    <Link className={`${s.link} legal-stuff`} to="/legal-stuff/">
      legal stuff
    </Link>
  </footer>
);

export default withStyles(s)(Footer);
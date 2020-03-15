/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Australia from '../components/australia';
import InfoBoard from '../components/infoBoard';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
import 'whatwg-fetch';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  mainContent: {
    display: 'flex',
  },
  footer: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    color: '#fffccc',
    [theme.breakpoints.up('lg')]: {
      bottom: 0,
    },
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '50px',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const router = useRouter();
  const [location, setLocation] = useState(['AUSTRALIA']);

  const onLocationClick = stateName => {
    setLocation(stateName);
  };
  const handleClick = e => {
    e.preventDefault();
    router.push('/buyUsCoffee');
  };

  return (
    <div className={classes.container}>
      <Grid>
        <Grid item xs={12} lg={6}>
          <Australia onLocationClick={onLocationClick} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InfoBoard location={location} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.footer}>
          Made and maintained by{' '}
          <a href="https://www.cthroo.com">www.cthroo.com</a> | Data source:{' '}
          <a href="https://www.health.nsw.gov.au/" target="_black">
            health.nsw.gov.au
          </a>
          <br />
          If you ❤️ this project 👉
          <a onClick={handleClick}> maybe you can buy us a coffee ☕ 😊</a>
        </div>
      </Grid>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          background: #222222;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

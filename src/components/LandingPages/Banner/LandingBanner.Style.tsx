export const LandingBannerStyles: any = (theme: any) => ({
  boxWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  bannerText: {
    fontSize: '15px !important',
    fontWeight: '600 !important',
    fontFamily: ' inter,sans-serif !important',
    color: '#685f78',
    '&:hover': {
      color: '#ff6575',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  burgerOptions: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '80%',
    },
  },
  imgBox: {
    width: 'auto !important',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },
  imgLogo: { maxWidth: '200px !important' },
  regBtn: {
    fontFamily: ' inter,sans-serif !important',
    borderRadius: '50px !important',
    textAlign: 'center',
    fontSize: '15px !important',
    color: '#b4a7f5 !important',
    textTransform: 'capitalize',
    fontWeight: '600 !important',
    minWidth: '120px !important',
    border: '2px solid #b4a7f5 !important',
    padding: '10px 15px !important',
    minHeight: '50px !important',
    '&:hover': {
      backgroundColor: '#ff6575 !important',
      color: '#ffffff !important',
      border: '2px solid #ff6575 !important',
    },
  },
  logBtn: {
    fontFamily: ' inter,sans-serif !important',
    borderRadius: '50px !important',
    backgroundColor: '#ffffff !important',
    textAlign: 'center',
    fontSize: '15px !important',
    color: '#000000 !important',
    textTransform: 'capitalize',
    fontWeight: '600 !important',
    minWidth: '120px !important',
    padding: '10px 15px !important',
    minHeight: '50px !important',
    border: '2px solid #ffffff !important',
    marginRight: '20px !important',
    '&:hover': {
      backgroundColor: '#ff6575 !important',
      color: '#ffffff !important',
      border: '2px solid #ff6575 !important',
    },
  },
});

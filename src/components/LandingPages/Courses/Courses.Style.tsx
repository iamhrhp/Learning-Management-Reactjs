export const CoursesStyles: any = (theme: any) => ({
    boxWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: '20px',
      marginBottom: '10px',
    },
    bannerText: {
      fontSize: '15px !important',
      fontWeight: '600 !important',
      fontFamily: ' inter,sans-serif !important',
      color: '#685f78',
      '&:hover': {
        color: '#ff6575',
        cursor: 'pointer',
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    burgerOptions: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
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
      [theme.breakpoints.down('sm')]: {
        padding: '0px 0px !important',
        marginRight: '5px !important',
        fontSize: '11px !important',
        minWidth: '80px !important',
        minHeight: '30px !important',
        height: '30px',
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
      [theme.breakpoints.down('sm')]: {
        padding: '0px 0px !important',
        marginRight: '5px !important',
        fontSize: '11px !important',
        minWidth: '80px !important',
        minHeight: '30px !important',
        height: '30px',
      },
    },
    bannerOptions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '50%',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    ButtonBox: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    sidebarOptionText: {
      color: '#ffffff',
      padding: '20px 0px 20px 20px',
      '&:hover': {
        cursor: 'pointer',
        background: '#ffffff',
        color: '#ff6575',
        transition: '0.3s ease-in-out',
      },
    },
    sidebarBoxWrapper: {
      width: 250,
      background: '#ff6575',
      height: '100vh',
    },
  });
  
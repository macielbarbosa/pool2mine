export const style = theme => ({
  root: {
    width: '100%',
    '& > *': {
      marginBottom: 20,
    },
  },
  wallet: {
    display: 'flex',
    alignItems: 'baseline',
    '& > :first-child': {
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: 400,
      letterSpacing: 5,
    },
    '& > *': {
      cursor: 'pointer',
    },
    '& :hover': {
      color: theme.palette.primary.main,
    },
    '& svg': {
      marginLeft: 5,
      color: theme.palette.text,
    },
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiPaper-root': {
      flexGrow: 1,
    },
  },
  spotLight: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  threeData: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})

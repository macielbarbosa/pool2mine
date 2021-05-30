export const style = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  textField: {
    width: 420,
    backgroundColor: '#151519',
    '& .MuiInputBase-input': {
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: 400,
      color: '#eee',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1E9FF2',
    },
  },
  walletInput: {
    display: 'flex',
    alignItems: 'center',
    height: 30,
  },
  icon: {
    color: '#1E9FF2',
  },
})

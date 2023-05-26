import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        textAlign: 'center',
      },
      title: {
        margin: theme.spacing(2),
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#333',
      },
      hotspot: {
        background: '#fff',
        borderRadius: '50%',
        height: '24px',
        width: '24px',
        border: '2px solid #333',
        cursor: 'pointer',
      }
}));
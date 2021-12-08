import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@material-ui/core';
import appTheme from '../../globalStyles';

const ChangeInputShow = styled(
  Box,
  appTheme
)({
  height: '100%',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between !important',
  marginLeft: '-30px !important important',
});

const ChangeInputHide = styled(
  Box,
  appTheme
)({
  display: 'block',
  maxHeight: '45px',
});

const TextAr = styled(
  TextField,
  appTheme
)({
  width: '100%',
});

const NotesStat = styled(
  Container,
  appTheme
)({
  position: 'relative',
  minHeight: 'fit-content',
  marginBottom: '50px',
  textAlign: 'center',
});

export { ChangeInputShow, ChangeInputHide, TextAr, NotesStat };

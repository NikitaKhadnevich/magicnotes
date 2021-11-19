import { styled } from '@mui/styles';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import appTheme from '../../../globalStyles';

const GridMain = styled(
  Grid,
  appTheme
)({
  marginTop: '15px !important',
});
export default GridMain;

export const ListActive = styled(
  List,
  appTheme
)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 'fitContent',
  boxSizing: 'border-box',
  borderRadius: '7px',
  background: appTheme.palette.primary.light,
  outline: `2px solid ${appTheme.palette.primary.dark}`,
  boxShadow: `0px 0px 10px 6px ${appTheme.palette.primary.dark}`,
});

export const ListNoActive = styled(
  List,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '140px',
  boxSizing: 'border-box',
  borderRadius: '7px',
  background: appTheme.palette.primary.main,
  outline: `2px solid ${appTheme.palette.primary.main}`,
  boxShadow: `0px 0px 15px 3px ${appTheme.palette.primary.main}`,
});

export const NoteText = styled(
  Box,
  appTheme
)({
  display: 'flex !important',
  flexDirection: 'column',
  width: '100%',
  margin: '0',
  alignSelf: 'center !important',
  maxHeight: '100% !importnat',
  overflow: 'auto !important',
  backGround: appTheme.palette.primary.light,
});

export const BottonChange = styled(
  Box,
  appTheme
)({
  dispaly: 'initial',
  minHeight: '40px !important',
  justifyContent: 'start !important',
  position: 'static !important',
  margin: '0 !important',
  width: 'fit-content !important',
  boxShadow: 'none !important',
  borderRadius: '0px !important',
  outline: 'none !important',
  zIndex: '0 !important',
  textAlign: 'start',
});

export const Title = styled(
  Typography,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  margin: '0',
  textAlign: 'center',
  color: `${appTheme.palette.secondary.dark} !important`,
});

export const Description = styled(
  Typography,
  appTheme
)({
  maxHeight: '20px !important',
  overflow: 'hidden !important',
  display: 'block !important',
  color: `${appTheme.palette.primary.dark} !important`,
});

export const NoteActions = styled(
  Stack,
  appTheme
)({
  width: '100%',
  maxHeight: 'fitContent',
  margin: 0,
  marginTop: '5px',
  background: appTheme.palette.primary.main,
  display: 'flex',
});

export const NoAddedNotes = styled(
  Container,
  appTheme
)({
  position: 'relative',
  minHeight: '100vh',
});

import { styled } from '@mui/styles';
import List from '@mui/material/List';
import appTheme from '../../../globalStyles';

const ListNoActive = styled(
  List,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'fit-content',
  boxSizing: 'border-box',
  borderRadius: '7px',
  background: appTheme.palette.primary.main,
  outline: `2px solid ${appTheme.palette.primary.main}`,
  boxShadow: `0px 0px 15px 3px ${appTheme.palette.primary.main}`,
});
export default ListNoActive;

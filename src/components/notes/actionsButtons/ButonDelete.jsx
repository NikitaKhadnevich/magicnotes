/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { notesList } from '../ButtonReceiver';

const ButtonDelete = ({ index, handleDelete, id }) => {
  const noteList = useSelector(notesList);
  return (
    <>
      <Stack direction='row' spacing={0.5} alignItems='center'>
        <IconButton
          aria-label='delete'
          color='primary'
          onClick={() => handleDelete(index, noteList, id)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </>
  );
};

ButtonDelete.propTypes = {
  handleDelete: PropTypes.func,
  index: PropTypes.number,
  id: PropTypes.number,
};

ButtonDelete.defaultProps = {
  handleDelete: 'handleDelete',
  index: 'index',
  id: 'id',
};

export default ButtonDelete;

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { NotesStat } from '../styled';
import INFO_MESSAGES from '../../../config/constants/infoMessages';

const NotesFetching = ({ isFetching }) => {
  const { fetchLoading, readAllNotes } = INFO_MESSAGES;
  return (
    <NotesStat>
      <Typography component='body2' variant='body2' align='center'>
        {isFetching ? fetchLoading : readAllNotes}
      </Typography>
    </NotesStat>
  );
};

export default NotesFetching;

NotesFetching.propTypes = {
  isFetching: PropTypes.string,
};

NotesFetching.defaultProps = {
  isFetching: 'isFetching',
};

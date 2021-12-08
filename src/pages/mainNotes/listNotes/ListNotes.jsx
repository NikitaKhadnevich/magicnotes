/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import GridMain, { NoteActions, BottonChange } from './styled';
import {
  ButtonEdit,
  ButtonShare,
  InputChange,
  FormikAddNote,
  ERROR_MESSAGES,
  notesList,
  NotesStatus,
  NotesFetching,
} from './ListNotesReceiver';
import ListNoteStatus from './ListNotesGrid/ListNoteStatus';

const ListNotes = ({
  handleItem,
  handleShare,
  handleSaveNote,
  handleDelete,
  chooseNote,
  sliceDescription,
  callToEditNote,
  fetchNextPage,
  data,
  isFetching,
}) => {
  const { noAddedNotes } = ERROR_MESSAGES;
  const noteList = useSelector(notesList);
  const [element, setElement] = useState(null);
  const observConditions = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    },
    { threshold: 0.9 }
  );
  const observer = useRef(observConditions);

  useEffect(() => {
    if (element) {
      observer.current.observe(element);
    }
    return () => {
      if (element) {
        observer.current.unobserve(element);
      }
    };
  }, [element]);

  return (
    <>
      <FormikAddNote />
      <GridMain container spacing={2} ref={setElement}>
        {noteList ? (
          noteList.map((noteItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={`${noteItem.id}_gridStatus`}>
              <ListNoteStatus
                handleItem={handleItem}
                chooseNote={chooseNote}
                sliceDescription={sliceDescription}
                noteList={noteList}
                noteItem={noteItem}
              />
              <NoteActions
                key={`${noteItem.id}_buttonStack`}
                direction='row'
                spacing={-3}
                alignItems='flex-start'
                justifyContent='flex-start'
              >
                <BottonChange key={`${noteItem.id}_buttonEdit`}>
                  <ButtonEdit
                    handleItem={handleItem}
                    callToEditNote={callToEditNote}
                    noteList={noteList}
                    id={noteItem.id}
                  />
                  <ButtonShare
                    key={`${noteItem.id}_buttonShare`}
                    handleShare={handleShare}
                    noteList={noteList}
                    id={noteItem.id}
                  />
                </BottonChange>
                <InputChange
                  key={`${noteItem.id}_noteInput`}
                  handleSaveNote={handleSaveNote}
                  handleDelete={handleDelete}
                  isChange={noteItem.isChange}
                  description={noteItem.description}
                  id={noteItem.id}
                  index={index}
                  currentState={noteList}
                />
              </NoteActions>
            </Grid>
          ))
        ) : (
          <NotesStatus noAddedNotes={noAddedNotes} />
        )}
        <NotesFetching isFetching={isFetching} />
      </GridMain>
    </>
  );
};
export default ListNotes;

ListNotes.propTypes = {
  data: PropTypes.string,
  fetchNextPage: PropTypes.func,
  callToEditNote: PropTypes.func,
  sliceDescription: PropTypes.func,
  chooseNote: PropTypes.func,
  handleItem: PropTypes.func,
  handleShare: PropTypes.func,
  handleSaveNote: PropTypes.func,
  handleDelete: PropTypes.func,
  isFetching: PropTypes.bool,
  observerCreator: PropTypes.func,
};

ListNotes.defaultProps = {
  data: 'data',
  fetchNextPage: 'fetchNextPage',
  callToEditNote: 'callToEditNote',
  sliceDescription: 'sliceDescription',
  chooseNote: 'chooseNote',
  handleItem: 'handleItem',
  handleShare: 'handleShare',
  handleSaveNote: 'handleSaveNote',
  handleDelete: 'handleDelete',
  isFetching: 'isFetching',
  observerCreator: 'observerCreator',
};

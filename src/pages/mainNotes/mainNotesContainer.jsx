/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useInfiniteQuery } from 'react-query';
import MainNoteWrapper from './styled';

import {
  Spinner,
  ListWrapper,
  AboutNoteContainer,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  sharedNotes,
  chooseNote,
  callToEditNote,
  saveEditedNote,
  sliceDescription,
  deleteNote,
  setToLocalStorage,
  getToLocalStorage,
  shareHelper,
  removeShareNote,
  NOTES_LIST,
  notesURL,
  runUpdateUser,
  runDELETEuser,
  runGETInfinityNotes,
  SET_NOTES_LIST,
  SET_INFINITE_FETCH_COUNTER,
  notesList,
  fetchHelper,
} from './mainNotesReceiver';

const MainNotesContainer = () => {
  const dispatch = useDispatch();
  const sharedNoteArray = useSelector(sharedNotes);
  const [fetchState, setFetchState] = useState(true);
  const [urlForPut, setUrlForPut] = useState('');
  const noteList = useSelector(notesList);
  const fetchCounter = useSelector(fetchHelper);

  const { isLoading, isError, data, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery('InfiniteNotes', runGETInfinityNotes, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 6) {
          return pages.length + 1;
        }
        return undefined;
      },
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    noteList && setToLocalStorage(noteList, NOTES_LIST);
  }, [noteList]);

  useEffect(() => {
    const pagesLength = data?.pages.length;
    if (data && pagesLength > fetchCounter) {
      data.pages.map(
        (item) => dispatch(SET_NOTES_LIST([...noteList, ...item.data])),
        dispatch(SET_INFINITE_FETCH_COUNTER(pagesLength))
      );
    }
    if (!data || isError) {
      const localNote = getToLocalStorage(NOTES_LIST);
      if (localNote && !data) {
        dispatch(SET_NOTES_LIST(localNote));
      }
    }
  }, [data]);

  // ------ MUTATIONS -----///
  const deleteMutatuion = useMutation('DeleteNote', (id) =>
    runDELETEuser(notesURL, id)
  );
  const updateMutation = useMutation('UpdateNote', (updateUser) =>
    runUpdateUser(urlForPut, updateUser)
  );

  // ------ HANDLE ACTIONS ----//
  const handleShare = (id) => {
    const sharedNotesay = shareHelper(id, noteList);
    dispatch(GET_SHARED_POST(sharedNotesay));
  };
  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, noteList);
    dispatch(SET_NOTES_LIST(filtredNotes));
    setUrlForPut(`${notesURL}/${id}`);
  };
  const handleDelete = (index, id) => {
    const actualNotes = deleteNote(index, noteList);
    dispatch(SET_NOTES_LIST(actualNotes));
    dispatch(GET_SHARED_POST(actualNotes));
    const actualSharedNote = removeShareNote(id, sharedNoteArray);
    dispatch(GET_UPDATE_SHARED_POST(actualSharedNote));
    deleteMutatuion.mutateAsync(id);
  };
  const handleSaveNote = (id, valueFromInput) => {
    const savedNotes = saveEditedNote(id, noteList, valueFromInput);
    dispatch(SET_NOTES_LIST(savedNotes));
    dispatch(GET_SHARED_POST(savedNotes));
    const savedSharedNotes = saveEditedNote(
      id,
      sharedNoteArray,
      valueFromInput
    );
    dispatch(GET_UPDATE_SHARED_POST(savedSharedNotes));
    const [filtredForPut] = savedNotes.filter((elem) => elem.id === id);
    updateMutation.mutateAsync(filtredForPut);
  };

  return (
    <MainNoteWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AboutNoteContainer noteList={noteList} />
          <ListWrapper
            handleItem={handleItem}
            handleShare={handleShare}
            handleSaveNote={handleSaveNote}
            handleDelete={handleDelete}
            chooseNote={chooseNote}
            sliceDescription={sliceDescription}
            callToEditNote={callToEditNote}
            noteList={noteList}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            data={data}
            isFetching={isFetching}
          />
        </>
      )}
    </MainNoteWrapper>
  );
};
export default MainNotesContainer;

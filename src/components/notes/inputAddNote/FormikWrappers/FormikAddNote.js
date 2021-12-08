import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import InputAddNote from '../InputAddNote';
import {
  validationADDNOTE,
  initAddNoteValue,
  parseDateOptions,
  runPOSTuser,
  notesURL,
  notesList,
  SET_NOTES_LIST,
} from '../inputAddReceiver';

const FormikAddNoteContainer = () => {
  const noteList = useSelector(notesList);
  const dispatch = useDispatch();
  const addNoteMutation = useMutation('PostNote', (newNote) =>
    runPOSTuser(notesURL, newNote)
  );
  const formik = useFormik({
    initialValues: initAddNoteValue,
    validationSchema: validationADDNOTE,
    onSubmit: (values, { resetForm }) => {
      const mutableValues = {
        id: Math.random().toFixed(3) * noteList.length,
        ...values,
        date: new Date().toLocaleString('en-US', parseDateOptions),
      };
      dispatch(SET_NOTES_LIST([mutableValues, ...noteList]));
      resetForm();
      addNoteMutation.mutate(mutableValues);
    },
  });

  return (
    <Box>
      <InputAddNote formik={formik} />
    </Box>
  );
};

export default FormikAddNoteContainer;

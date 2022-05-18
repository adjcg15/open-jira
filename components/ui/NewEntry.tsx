import { Button, Box, TextField } from '@mui/material';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if(inputValue.length === 0) return;
        
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setInputValue('');
        setTouched(false);
    }

    const onCancel = () => {
        setIsAddingEntry(false);
        setInputValue('');
        setTouched(false);
    }
    
    return (
        <Box sx={{marginBottom: 2, paddingX: 2}}>
            {
                isAddingEntry ? (
                    <>
                        <TextField 
                            fullWidth
                            sx={{marginTop: 2, marginBottom: 1}}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            error={ inputValue.length <= 0 && touched }
                            value={ inputValue }
                            onChange={ onTextFieldChanged }
                            onBlur={() => setTouched(true)}
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='text'
                                endIcon= { <HighlightOffRoundedIcon /> }
                                onClick={ onCancel }
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon= { <SaveRoundedIcon /> }
                                onClick={ onSave }
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
                )
                : (
                    <Button
                        endIcon={ <AddCircleOutlineRoundedIcon /> }
                        fullWidth
                        variant='outlined'
                        onClick={ () => setIsAddingEntry(true) }
                    >
                        Agregar tarea
                    </Button>
                )
            }
            
        </Box>
    )
}

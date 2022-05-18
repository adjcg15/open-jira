import { DragEvent, FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UIContext);

    const allowDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const entriesByStatus = useMemo(() => {
        return entries.filter(entry => entry.status === status );
    }, [entries, status]);

    const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text');
        const entry = entries.find(entry => entry._id === id)!;

        updateEntry({
            ...entry,
            status
        });
        endDragging();
    }

    return (
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : ''}
        >
            <Paper 
                sx={{ 
                    height: 'calc(100vh - 100px)', 
                    overflowY: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '5px 12px'
                }}
                className={ styles.containerOverflowed }
            >
                <List 
                sx={{ 
                    opacity: isDragging ? 0.2 : 1, 
                    transition: 'all 0.3s ease',
                    paddingBottom: '65px',
                }}
                >
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={ entry._id } entry={ entry }/>
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}

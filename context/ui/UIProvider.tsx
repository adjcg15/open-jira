import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

interface Props {
    children?: React.ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({
            type: '[UI] - Open Sidebar'
        })
    }

    const closeSideMenu = () => {
        dispatch({
            type: '[UI] - Close Sidebar'
        })
    }

    const setIsAddingEntry = (adding: boolean) => {
        dispatch({
            type: '[UI] - Change adding',
            payload: adding
        })
    }

    const startDragging = () => dispatch({type: '[UI] - Start dragging'});
    const endDragging = () => dispatch({type: '[UI] - End dragging'});

    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging
        }}>
            { children }
        </UIContext.Provider>
    )
}
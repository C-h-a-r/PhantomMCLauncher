import { memo } from 'react';
import type { FC } from 'react';

interface Props {
    className?: string;
}


export const Taskbar: FC<Props> = memo(function Taskbar() {
    return (
        <div
            className="taskbar"
            id="taskbar"
            data-tauri-drag-region
            style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '20px',
                backgroundColor: '#1D2745',
                zIndex: 9999,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"

            }}
        />
    );
});

import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';

interface GridCellExpandProps {
    value: string;
    width: number;
}

function isOverflown(element: Element): boolean {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

const GridCellExpand = React.memo(function GridCellExpand(props: GridCellExpandProps) {
    const { width, value } = props;
    const wrapper = React.useRef<HTMLDivElement | null>(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
        const isCurrentlyOverflown = isOverflown(cellValue.current!);
        setShowPopper(isCurrentlyOverflown);
        setAnchorEl(cellDiv.current);
        setShowFullCell(true);
    };

    const handleMouseLeave = () => {
        setShowFullCell(false);
    };

    React.useEffect(() => {
        if (!showFullCell) {
            return undefined;
        }

        function handleKeyDown(nativeEvent: KeyboardEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
                setShowFullCell(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={wrapper}
            sx={{
                alignItems: 'center',
                lineHeight: '24px',
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
            }}
        >
            <Box
                ref={cellDiv}
                sx={{
                    height: '100%',
                    width,
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                }}
            />
            <Box ref={cellValue} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {value}
            </Box>
            {showPopper && (
                <Popper anchorEl={anchorEl} open={showFullCell && anchorEl !== null} style={{ width, marginLeft: -17 }}>
                    <Paper elevation={1} style={{ minHeight: wrapper.current!.offsetHeight - 3 }}>
                        <Typography style={{ padding: 8 }} variant="body2">
                            {value}
                        </Typography>
                    </Paper>
                </Popper>
            )}
        </Box>
    );
});

export default GridCellExpand;

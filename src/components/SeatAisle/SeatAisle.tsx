import { Box } from '@mui/material';

import { SeatAisleProps } from './SeatAisle.types';

//Provides spacing between seats as an aisle
export const SeatAisle = (props: SeatAisleProps) => {
    //Props
    const { orientation = 'horizontal' } = props;

    return (
        <Box
            height={orientation === 'horizontal' ? 32 : 'auto'}
            width={orientation === 'vertical' ? 32 : '100%'}
            flexShrink={0}
        />
    );
};

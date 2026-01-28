import { Box, Typography } from '@mui/material';

import ScreenIndicator from '@assets/images/screen-indicator.svg';

export const SeatScreenIndicator = () => (
    <Box
        maxWidth="1440px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        justifyContent="center"
    >
        {/*Screen Indicator*/}
        <img src={ScreenIndicator} alt="Screen" />
        {/*Help Text*/}
        <Typography variant="body1" color="text.secondary">
            All eyes this way please
        </Typography>
    </Box>
);

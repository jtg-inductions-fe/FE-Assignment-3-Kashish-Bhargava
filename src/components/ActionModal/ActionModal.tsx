import { Box, Button, Modal, Typography } from '@mui/material';

import { ActionModalProps } from './ActionModal.types';

export const ActionModal = (props: ActionModalProps) => {
    //Props
    const {
        open,
        bookingId,
        onClose,
        title,
        primaryActionLabel,
        onPrimaryAction,
        secondaryActionLabel = 'Close',
        onSecondaryAction,
    } = props;

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                bgcolor="common.white"
                p={18}
                borderRadius={4}
                width={320}
                mx="auto"
                mt="20vh"
                display="flex"
                flexDirection="column"
                gap={16}
                textAlign="center"
            >
                {/*Modal title*/}
                <Typography variant="h2" color="success.main">
                    {title}
                </Typography>
                {/*Booking id*/}
                {bookingId !== null && (
                    <Typography>
                        Your booking ID is <strong>{bookingId}</strong>
                    </Typography>
                )}
                {/*Close modal button*/}
                <Box display="flex" gap={12} justifyContent="center">
                    {secondaryActionLabel && (
                        <Button
                            variant="outlined"
                            onClick={onSecondaryAction ?? onClose}
                            aria-label="Click to close modal"
                        >
                            {secondaryActionLabel}
                        </Button>
                    )}
                    {/*Primary Action Button*/}
                    {primaryActionLabel && onPrimaryAction && (
                        <Button
                            variant="contained"
                            onClick={onPrimaryAction}
                            aria-label={primaryActionLabel}
                        >
                            {primaryActionLabel}
                        </Button>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

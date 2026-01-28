import { Box, Button, Modal, Typography } from '@mui/material';
import { ModalProps } from '@mui/material';

import { useActionModalStyles } from './ActionModal.styles';
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
        description,
    } = props;

    const handleModalClose: ModalProps['onClose'] = (_, reason) => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            return;
        }
        onClose();
    };

    /**Styles using custom hook */
    const { classes } = useActionModalStyles();

    return (
        <Modal open={open} onClose={handleModalClose}>
            <Box
                className={classes.mainContainer}
                bgcolor="common.white"
                p={18}
                borderRadius={2}
                mx="auto"
                mt="40vh"
                display="flex"
                flexDirection="column"
                gap={16}
            >
                {/*Modal title*/}
                <Typography variant="h2" color="success.main">
                    {title}
                </Typography>
                {/**Modal description*/}
                {description && (
                    <Box display="flex" flexDirection="column" gap={8}>
                        {description}
                    </Box>
                )}
                {/*Booking id*/}
                {bookingId !== null && (
                    <Typography>
                        Your booking ID is <strong>{bookingId}</strong>
                    </Typography>
                )}
                <Box display="flex" gap={12} justifyContent="flex-end">
                    {/*Close modal button*/}
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

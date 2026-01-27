import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';

import { PurchaseHistoryContainer } from '@containers/PurchaseHistory';
import type { BookingStatusFilter } from '@services/BookingApi';

import { usePurchaseHistoryStyles } from './PurchaseHistory.styles';

export const PurchaseHistory = () => {
    //Navigation
    const navigate = useNavigate();
    /**Currently selected booking filter tab defaults to upcoming*/
    const [activeTab, setActiveTab] = useState<BookingStatusFilter>('upcoming');

    /** Styles using custom hook*/
    const { classes } = usePurchaseHistoryStyles();

    return (
        <Box display="flex" flexDirection="column" gap={32} marginBottom={12}>
            {/* Header */}
            <Box display="flex" alignItems="center" gap={12}>
                <IconButton onClick={() => void navigate(-1)}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Typography variant="h2">Your Orders</Typography>
            </Box>

            {/* Tabs for filtering*/}
            <Tabs
                value={activeTab}
                onChange={(_, value) =>
                    setActiveTab(value as BookingStatusFilter)
                }
            >
                <Tab
                    className={classes.tabFontSize}
                    label="Upcoming"
                    value="upcoming"
                />
                <Tab
                    label="Past"
                    value="past"
                    className={classes.tabFontSize}
                />
                <Tab
                    label="Cancelled"
                    value="cancelled"
                    className={classes.tabFontSize}
                />
            </Tabs>

            {/* Content */}
            <PurchaseHistoryContainer activeTab={activeTab} />
        </Box>
    );
};

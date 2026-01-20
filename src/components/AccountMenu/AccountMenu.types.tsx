import React from 'react';

/**
 * State type for AccountMenu anchor element
 */
export type AccountMenuAnchor = null | HTMLElement;

/**
 * Click handler type for opening the menu
 */
export type AccountMenuClickHandler = (
    event: React.MouseEvent<HTMLElement>,
) => void;

/**
 * Logout handler type
 */
export type LogoutHandler = () => Promise<void>;

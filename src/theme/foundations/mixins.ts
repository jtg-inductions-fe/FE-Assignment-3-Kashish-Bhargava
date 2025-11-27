import type {
    CSSProperties,
    MixinsOptions,
} from '@mui/material/styles/createMixins';

/**
 * Creates a CSS block for clamping text to a specified number of lines
 * @param lines - Number of Lines to clamp
 * @returns Returns Line clamp CSS properties
 */
const lineClamp = (lines: number = 1): CSSProperties => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
});

const flexCenter = (): CSSProperties => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const flex = (
    justify: CSSProperties['justifyContent'] = 'flex-start',
    align: CSSProperties['alignItems'] = 'stretch',
    gap: CSSProperties['gap'] = 0,
    direction: CSSProperties['flexDirection'] = 'row',
): CSSProperties => ({
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    gap,
    flexDirection: direction,
});

export const mixins: MixinsOptions = {
    lineClamp,
    flexCenter,
    flex,
};

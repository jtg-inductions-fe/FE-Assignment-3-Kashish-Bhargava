//Format movie duration "HH:MM:SS" to "Hh MMm"
export const formatDuration = (duration: string): string => {
    if (!duration || !duration.includes(':')) return '';
    const [hours, minutes] = duration.split(':').map(Number);
    if (Number.isNaN(hours) && Number.isNaN(minutes)) return '';
    if (!hours && !minutes) return '';

    return `${hours ? `${hours}h` : ''}${minutes ? ` ${minutes}m` : ''}`.trim();
};

// Format movie release date "YYYY-MM-DD" to "DD Mon YYYY"
export const formatReleaseDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return '';
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };

    return date.toLocaleDateString('en-GB', options);
};

//Capitalizes the first letter of each string in an array. (e.g., ['action', 'drama'] to ['Action','Drama']
export const capitalizeArray = (items: string[]): string[] =>
    items.map((item) => item.charAt(0).toUpperCase() + item.slice(1));

//Toggles a value in an array (add if missing, remove if present )
export const toggleValue = <T>(list: T[], value: T): T[] =>
    list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];

//Calculates the fill percentage of a cinema hall
export const calculateFillPercentage = (
    booked: number,
    total: number,
): number => {
    if (total === 0) return 0;

    return Math.round((booked / total) * 100);
};

//Determines the fill status of a cinema slot
export const getSlotFillStatus = (fillPercentage: number) => {
    if (fillPercentage >= 60) return 'fast';

    return 'available';
};

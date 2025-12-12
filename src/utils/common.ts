//Format movie duration "HH:MM:SS" to "Hh MMm"
export const formatDuration = (duration: string): string => {
    const [hours, minutes] = duration.split(':').map(Number);
    if (!hours && !minutes) return '';
    return `${hours ? `${hours}h` : ''}${minutes ? ` ${minutes}m` : ''}`.trim();
};

// Format movie release date "YYYY-MM-DD" to "DD Mon YYYY"
export const formatReleaseDate = (dateStr: string): string => {
    const date = new Date(dateStr);
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

/**
 * Formats a time duration (in seconds) into a human-readable string.
 * Example: 3661 -> '1h 1m 1s'
 */
const formatTimeLeft = (seconds: number): string => {
    const totalMinutes = Math.max(0, Math.round(seconds / 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours}h ${minutes}m`;
    }

    if (hours > 0) {
        return `${hours}h`;
    }

    return `${minutes}m`;
};

export default formatTimeLeft;
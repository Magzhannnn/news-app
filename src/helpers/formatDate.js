export const formatDate = (date) => {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }

    return date.toLocaleDateString('en-US', options)
};

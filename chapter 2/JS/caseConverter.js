export const convertCase = (chars) => {
    const changedCharacters = chars.map((c) => {
        if (c === c.toLowerCase()) {
            return c.toUpperCase();
        } else {
            return c.toLowerCase();
        }
    }); return changedCharacters;
}
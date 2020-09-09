/* Create the players table */
export const PlayersTable = (players, title) => {
    /* Create the table row */
    const row = (data) => {
        return `<tr>
                    <td>${data.name}</td>
                    <td>${data.flag}</td>
                    <td>${data.rating}</td>
                </tr>`;
    };

    /* Create the rows by iterating the players variable */
    let rows = players.map((player) => row(player));

    /* Return the final table */
    return `<table>
            <tr>
                <th colspan="3">${title}</th>
            </tr>
            ${rows.join("")}
        </table>`;
};

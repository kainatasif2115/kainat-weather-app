const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to month because months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const UserFavoritesTable = ({ data }) => (
   
    <div className="w-full">
        <table className="w-full table-auto border-collapse border border-blue-500 shadow-md">
            <thead>
                <tr className="bg-blue-500 text-white">
                <th className="p-4">City</th>
                <th className="p-4">Date</th>
                    <th className="p-4">Day</th>
                    <th className="p-4">Probability</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((city) =>
                    data[city].map((weather, index) => (
                    <tr key={`${city}_${index}`}>
                        {index === 0 && (
                        <td
                            className="p-4"
                            rowSpan={data[city].length}
                            style={{ verticalAlign: 'top' }}
                        >
                            {city}
                        </td>
                        )}
                        <td className="p-4">{formatDateString(weather.date)}</td>
                        <td className="p-4">
                        {new Date(weather.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                        })}
                        </td>
                        <td className="p-4">{weather.probability}</td>
                    </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
);



export default UserFavoritesTable;
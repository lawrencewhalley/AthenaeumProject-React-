import React, { useState, useEffect } from 'react';
import './MovieList.css';

const MovieList = () => {
    const [jsonData, setJsonData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const RecordsPerPage = 12;
    const [blobUrls, setBlobUrls] = useState({});

    const apiUrl = 'https://localhost:7259/api/Movie/GetMovieData';
    const apiUrl2 = 'https://localhost:7259/api/Movie/GetMoviePoster?movieName=';

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    setJsonData(data);
                } else {
                    console.log("fail");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        if (jsonData) {
            const fetchMoviePosters = async () => {
                const posters = {};
                for (const movie of jsonData) {
                    const response = await fetch(apiUrl2 + movie.movieName);
                    const data = await response.json();
                    posters[movie.movieName] = testtest(data);
                }
                setBlobUrls(posters);
            };
            fetchMoviePosters();
        }
    }, [jsonData]);

    function testtest(input) {
        const uint8Array = Uint8Array.from(atob(input), c => c.charCodeAt(0));
        return new Blob([uint8Array], { type: 'application/octet-stream' });
    }

    let records = [];
    let npage = 0;
    let numbers = [];

    if (jsonData !== null) {
        const lastIndex = currentPage * RecordsPerPage;
        const firstIndex = lastIndex - RecordsPerPage;
        records = jsonData.slice(firstIndex, lastIndex);
        npage = Math.ceil(jsonData.length / RecordsPerPage);
        numbers = [...Array(npage + 1).keys()].slice(1);
    }

    const changeCPage = (id) => {
        setCurrentPage(id);
    };

    const prePage = () => {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <table className="MovieListTable">
                <tbody>
                    {records.reduce((rows, record, index) => {
                        if (index % 6 === 0) {
                            rows.push([]);
                        }
                        rows[rows.length - 1].push(record);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <tr className='moviesrow' key={rowIndex}>
                            {row.map((d, columnIndex) => (
                                <td className='movie' key={columnIndex}>
                                    <span className='image'>
                                        {blobUrls[d.movieName] && <img src={URL.createObjectURL(blobUrls[d.movieName])} alt="Movie Poster" />}
                                    </span>
                                    <span className='movieName'>{d.movieName}</span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table >
            <nav>
                <table className="pagination">
                    <tbody>
                        <tr>
                            <th className="page-item">
                                <a href="#" className="page-link" onClick={prePage}>
                                    Prev
                                </a>
                            </th>
                            {numbers.map((n, i) => (
                                <th
                                    className={`page-item ${currentPage === n ? 'active' : ''}`}
                                    key={i}
                                >
                                    <a
                                        href="#"
                                        className="hyperlink"
                                        onClick={() => changeCPage(n)}
                                    >
                                        {n}
                                    </a>
                                </th>
                            ))}
                            <th className="page-item">
                                <a href="#" className="page-link" onClick={nextPage}>
                                    Next
                                </a>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </>
    );
};

export default MovieList;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Student = () => {
    const [url, setUrl] = useState("http://localhost:3000/matekatika");
    const [api, setApi] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get(url).then((response) => {
            setApi(response.data);
        });
    }, []);
    console.log(api);

    const sortedData = api.sort((a, b) => {
        return b.nb - a.nb;
    });
    console.log(sortedData);

    return (
        <div className="max-h-[100%] h-[600px] ">
            <div className="min-h-[100%] h-[600px] overflow-x-auto ">
                <table className="table  table-xs  table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Ism</td>
                            <td>Soat</td>
                            <td>Sababli</td>
                            <td>NB</td>
                            <td>Dars sanasi</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // api.sort((a, b) => {
                            //     return b.nb - a.nb
                            // })

                            sortedData &&
                            sortedData.map((value, index) => {
                                return (
                                    <tr key={value.id}>
                                        <th className="text-[18px]">{index + 1}</th>
                                        <td>
                                            {value.familiya} {value.ism}
                                        </td>
                                        <td>{value.kredit}</td>
                                        <td>Sababsiz</td>
                                        <td>
                                            {value.nb >= 6 ? (
                                                <div
                                                    role="alert"
                                                    className="alert alert-error w-[50px] h-[5px] flex justify-center"
                                                >
                                                    <span>{value.nb}</span>
                                                </div>
                                            ) : (
                                                <div
                                                    role="alert"
                                                    className="alert alert-warning w-[50px] h-[5px] flex justify-center"
                                                >
                                                    <span>{value.nb}</span>
                                                </div>
                                            )}
                                        </td>
                                        <td>04-03-2024</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Student;

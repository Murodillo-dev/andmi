import React from 'react'

const Student = () => {
    return (
        <div className='max-h-[100%] h-[600px] '>
            <div className="min-h-[100%] h-[600px] overflow-x-auto ">
                <table className="table  table-xs  table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Ism</td>
                            <td>Fan Nomi</td>
                            <td>Soat</td>
                            <td>Sababli</td>
                            <td>Dars sanasi</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='' >
                        <tr>
                            <th>1</th>
                            <td>Murodillo</td>
                            <td>Matematika</td>
                            <td>3</td>
                            <td>Sababsiz</td>
                            <td>04-03-2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student
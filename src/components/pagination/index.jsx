import React, { useState, useEffect } from 'react'
import * as SC from './styles'

export default function Pagination({ totalPages, currentPage, changeCurrentPage }) {
    const [pagination, setPagination] = useState([])

    useEffect(() => {
        const tempPagination = []
        for (let i = 1; i <= totalPages; i++) {
            tempPagination.push(i)
        }
        setPagination(tempPagination)
    }, [totalPages])

    return (
        <SC.Pagination>
            {pagination.map((page) => (
                <div
                    key={page}
                    style={{ color: currentPage === page ? 'blue' : 'black' }}
                    onClick={() => {
                        changeCurrentPage(page)
                    }}
                >
                    {page}
                </div>
            ))}
        </SC.Pagination>
    )
}
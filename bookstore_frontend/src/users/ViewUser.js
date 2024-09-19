import { useState, useEffect } from "react";
import axios from "axios";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import CreateButton from "../buttons/CreateButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function ViewUser() {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const pageSize = 10;
    useEffect(() => {
        axios.get(`http://localhost:8080/api/allusers?page=${page}&size=${pageSize}`)
            .then(response => {
                setUsers(response.data.content);
                setTotalPages(response.data.totalPages);
                setTotalElements(response.data.totalElements);
            })
    }, [page]);

    const handlePrevious = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    }

    return (
        <div className="users container w-full mx-auto flex flex-col items-stretch my-20">
            <div className="w-full flex items-center">
                <p className="mr-auto">A total of {totalElements} users found.</p>
                <p className="ml-auto text-sm font-semibold"><CreateButton /></p>
            </div>
            <table className="table user-table w-full mx-auto mt-10 bg-neutral-100 text-sm">
                <thead>
                    <tr className="p-2 bg-slate-600 text-white">
                        <th>id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id} className="">
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <EditButton />
                                    <DeleteButton />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="pagination mt-20">
                <button className="pagi-button prev text-sm" onClick={handlePrevious} disabled={page === 0}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {/* <span className="text-sm">Page {page+1} of {totalPages}</span> */}
                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setPage(index);
                            }}
                            className={`pagi-num text-sm ${page === index ? 'bg-slate-600 text-white' : 'bg-white'}`}
                        >
                            {index + 1}
                        </button>
                    ))
                }
                <button className="pagi-button next text-sm" onClick={handleNext} disabled={page === totalPages - 1}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="flex ml-auto">
                <span className="text-xs">Page {page + 1} of {totalPages}</span>
            </div>
        </div>
    );
}
import { useState, useEffect } from "react";
import axios from "axios";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import CreateButton from "../buttons/CreateButton";

export default function Home() {
    const [users, setUsers] = useState([{
        name: "",
        username: "",
        email: "",
    }]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/users");
        console.log(result);
        setUsers(result.data);
    }

    return (
        <div className="container w-full mx-auto flex flex-col items-stretch my-20">
            <div className="w-full flex justify-end">
                <p className="text-sm font-semibold"><CreateButton /></p>
            </div>
            <div className="w-full">
                <table className="table user-table w-full mx-auto mt-10 bg-neutral-100">
                    <thead className="p-2 border-slate-900 border-b-2">
                        <tr>
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
                                <tr key={user.id} className="border-slate-200 border-b-2">
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
            </div>
        </div>
    );
}
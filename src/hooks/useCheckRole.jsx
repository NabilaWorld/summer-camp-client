import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";
// import { createLogger } from "vite";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const  useCheckRole = () =>{
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: role = ''} = useQuery({
        queryKey: ['role', user?.email],
        enabled:!loading && !!user,
        queryFn: async () =>{
            const res = await axios(`https://b7a12-summer-camp-server-side-steel.vercel.app/role/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [role]
}

export default useCheckRole;
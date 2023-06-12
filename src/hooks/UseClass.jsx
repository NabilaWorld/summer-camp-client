import { useQuery } from "@tanstack/react-query";


const useClass = () =>{
    
    const {data: myClass = [], isloading: loading, refetch} = useQuery({
        queryKey: ['myClass'],
        queryFn: async() =>{
            const res = await fetch('https://b7a12-summer-camp-server-side-steel.vercel.app/class');
            return res.json();
        }
    })

    return[myClass, loading, refetch]
}

export default useClass;
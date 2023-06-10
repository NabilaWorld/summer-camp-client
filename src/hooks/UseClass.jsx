import { useQuery } from "@tanstack/react-query";


const useClass = () =>{
    
    const {data: myClass = [], isloading: loading, refetch} = useQuery({
        queryKey: ['myClass'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })

    return[myClass, loading, refetch]
}

export default useClass;
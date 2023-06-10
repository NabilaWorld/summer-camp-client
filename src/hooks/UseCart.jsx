import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure';
import useAuth from './UseAuth';




const useCart = () => {
    const {user, loading } = useAuth();;
    
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        
       
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;
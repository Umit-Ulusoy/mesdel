import { useDispatch, useSelector } from 'react-redux';
import { setTokenFound } from '../store/slices/keepSlice'

const useDispatchs = () => {
  const dispatch = useDispatch()

  const handleTokenFound = (value) => {
    dispatch(setTokenFound(value))
  }
  const tokenFoundValue = ()=> {
    return useSelector((state)=>state.keep.tokenFound)
  }


  return {
    handleTokenFound,
    tokenFoundValue
  }
}

export default useDispatchs
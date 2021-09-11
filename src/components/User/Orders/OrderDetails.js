import { useParams } from "react-router"

const OrderDetails = () => {

  const {orderId} = useParams()

  return (
    <div>
      ...orderDetails
    </div>
  )
}

export default OrderDetails

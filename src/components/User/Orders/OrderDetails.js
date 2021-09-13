import { useParams } from "react-router"

const OrderDetails = () => {

  const {orderId} = useParams()

  return (
    <div>
      {orderId}
    </div>
  )
}

export default OrderDetails

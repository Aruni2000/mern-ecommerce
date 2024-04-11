import { product } from "@/utils/product";
import Container  from "@/app/components/Container";

interface IPrams {
    productId?: string;
}


const Product = ({ params } : { params: IPrams}) => {
       console.log("params", params);
    return <div className="p-8">
        <Container>
       <div>Product Page </div>
        </Container>
         </div>;
}
 
export default Product;
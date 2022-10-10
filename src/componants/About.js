import Herosection from '../componant/Herosection'
import { useProductContext } from '../context/productcontex'

const About = () => {
const {myName}=useProductContext();

  const data={
    name:"Man shopping"
  }
  return (
    <div>
      {myName}
      <Herosection myData={data} />

    </div>
  )
}

export default About
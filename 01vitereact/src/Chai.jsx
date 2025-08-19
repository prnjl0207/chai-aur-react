import { useParams } from "react-router";

const Chai = ({ name = "Pranjal", surname = "Verma" }) => {
  const { id } = useParams();
  return (
    <h3 className="text-red-600">
      Chai is ready now {name} {surname} and id is : {id}!!!
    </h3>
  );
};

export default Chai;

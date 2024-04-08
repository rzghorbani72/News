import { isValidArray } from "../../../utils/helpers";
import Card, { TCard } from "../../molecules/card";

function Cards({ list }: { list: TCard[] }) {
  if (!isValidArray(list)) return null;
  return (
    <>
      {list.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </>
  );
}

export default Cards;

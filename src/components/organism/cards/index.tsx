import Card from "../../molecules/card";

type TCard = {
  urlToImage: string;
  title: string;
  desc: string;
  content: string;
  publishedAt: string;
};

function Cards({ list }: { list: TCard[] }) {
  return (
    <>
      {list.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </>
  );
}

export default Cards;

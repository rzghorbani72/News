import DateTime from "../../atoms/date";
import Description from "../../atoms/description";
import Image from "../../atoms/image";
import Title from "../../atoms/title";

type TCard = {
  urlToImage: string;
  title: string;
  desc: string;
  content: string;
  publishedAt: string;
};

function Card({ item, index }: { item: TCard; index: number }) {
  return (
    <div key={index} className="h-30 w-auto flex mx-2 my-4">
      <div className="sm:w-1/3 lg:w-1/4">
        <Image src={item.urlToImage} alt={item.title} />
      </div>
      <div className="sm:w-2/3 lg:w-3/4 overflow-hidden">
        <h3>
          <Title title={item.title} />
          <Description desc={item.content} />
        </h3>
        <DateTime date={item.publishedAt} />
      </div>
    </div>
  );
}

export default Card;

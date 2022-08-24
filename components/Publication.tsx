import DOMPurify from "dompurify";
import ButtonLink from "./ButtonLink";

interface Author {
  name: string;
  authtype: string;
  clusterid: string;
}

interface Props {
  title: string;
  uid: string;
  pubdate: string;
  journal: string;
  authors: Author[];
}

const Publication = ({ title, uid, pubdate, journal, authors }: Props) => {
  const createTitleMarkup = () => {
    return {
      __html: DOMPurify.sanitize(title, { USE_PROFILES: { html: true } }),
    };
  };

  return (
    // TODO: link on mobile?
    // TODO: remove divider?
    <li className="flex gap-8">
      <div className="w-full">
        <p
          className="font-bold"
          //  eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={createTitleMarkup()}
        />
        <p>{pubdate}</p>
        <p>{journal}</p>
        <p>
          {authors.map(({ name }, i) => (
            <span
              className={name === "Shenderov E" ? "font-bold" : ""}
              key={name}
            >
              {name + (i < authors.length - 1 ? ", " : "")}
            </span>
          ))}
        </p>
      </div>
      <div className="hidden h-full border-r border-peach/50 xl:block" />
      <ButtonLink
        className="hidden xl:flex"
        href={`https://pubmed.ncbi.nlm.nih.gov/${uid}`}
      />
    </li>
  );
};

export default Publication;

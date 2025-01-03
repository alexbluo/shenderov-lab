import NewsBlock from "./NewsBlock";

const NewsSection = () => {
  return (
    <section id="news">
      <h2 className="inline-block bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-12 text-5xl font-black text-transparent sm:text-6xl">
        News
      </h2>
      <div className="grid gap-12 lg:grid-cols-2 2xl:grid-cols-3">
        {/* add news blocks inside here. top to bottom in code equates to left to right, top to bottom in the website. */}
        {/* <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock> */}
        <NewsBlock
          headline="Promising Immunotherapy to Treat Localized High-Risk Prostate Cancer"
          date="February, 2024"
        >
          For men with localized high-risk prostate cancer the HEAT trial is
          active across multiple locations in the United States and
          investigating if a promising immunotherapy can increase the cure rate
          of surgery and prevent cancer recurrence.
          <br />
          <a
            href="https://clinicaltrials.gov/study/NCT06014255"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            https://clinicaltrials.gov/study/NCT06014255
          </a>
        </NewsBlock>
      </div>
    </section>
  );
};

export default NewsSection;

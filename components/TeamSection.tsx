import { motion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import Gallery from "./Gallery";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  return (
    <section id="team">
      <h2 className="pb-12 text-center font-outline text-5xl font-black text-green-apple sm:text-[4rem] lg:pb-24">
        <span className="text-[4.25rem]">Meet The&nbsp;</span>
        <span className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text font-sans text-transparent">
          Team
        </span>
      </h2>
      <div className="flex flex-wrap justify-center pb-12 lg:pb-24">
        {/* add team members inside here. top to bottom in code equates to left to right, top to bottom in the website */}
        {/* notice the / before the file name instead of the expected public/FILE_NAME */}
        <TeamMember name="Adam Luo" src="/adam.jpg">
          Adam is currently a third-year undergraduate at JHU majoring in
          neuroscience. He is working on various projects ranging from the deep
          learning-based diagnosis of leukemia to the spatial proteogenomics of
          brain tumors. Fun fact: he has been in the lab for over four years
          (since high school)!
        </TeamMember>
        <TeamMember name="Justin Hyun" src="/alex.jpg">
          Justin is an undergraduate Hopkins student from San Diego majoring in
          molecular and cellular biology. He hopes to gain research experience
          while pursuing his interests in the medical field. When not in the
          lab, Justin enjoys cooking and listening to music.
        </TeamMember>
        <TeamMember name="Kelly Casella" src="/alex.jpg">
          Kelly is a research technologist working closely with the GeoMx
          Digital Spatial Profiler for spatial transcriptomics and proteomics.
          She is currently pursuing a Master’s degree in Biotechnology with a
          concentration in Molecular Targets and Drug Discovery Technologies
          from Johns Hopkins University. In her spare time, she enjoys caring
          for her house plants.
        </TeamMember>
        <TeamMember name="Ling" src="/alex.jpg"></TeamMember>
        <TeamMember name="Nikita" src="/alex.jpg"></TeamMember>
        <TeamMember name="Eugene" src="/alex.jpg"></TeamMember>
        <TeamMember name="Alex" src="/alex.jpg"></TeamMember>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <Gallery />
        <article className="flex w-full flex-col justify-between gap-12 sm:gap-4 lg:w-2/5">
          <div>
            <h3 className="pb-2 text-2xl font-medium text-green-apple">
              We have a lot of fun here...
            </h3>
            <span className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              fuga obcaecati error laborum aperiam quod delectus aliquam
              aliquid, dolor voluptatem.
            </span>
          </div>
          <motion.div className="flex items-center justify-end gap-4 text-2xl font-medium text-peach">
            <p>Join us</p>
            <ButtonLink
              className="flex"
              href="mailto:Eugene.Shenderov@jhmi.edu"
            />
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default TeamSection;

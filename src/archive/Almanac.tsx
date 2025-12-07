import { MyModal } from "../components";

const Almanac = () => {
  return (
    <>
      <div className="lg:mx-8">
        <p>Almanac: Read more about my characters here - lore and shtuff!!</p>

        <AboutOscillo />
        <AboutSnowTrap />
        <AboutMilo />
      </div>
    </>
  );
};

export default Almanac;

// Oscillo's Almanac Entry
const AboutOscillo = () => {
  const modalId = "modal_abtOscillo";
  const title = "About Oscillo 🦉";

  // return (
  //   <>
  //     <button
  //       className="btn btn-secondary btn-outline m-2 transition-all ease-in-out hover:scale-110"
  //       onClick={() => {
  //         const modal = document.querySelector(
  //           `#${modalId}`
  //         ) as HTMLDialogElement;
  //         modal!.showModal();
  //       }}
  //     >
  //       {title}
  //     </button>
  //     <dialog id={modalId} className="modal">
  //       <form method="dialog" className="modal-backdrop">
  //         <button>close</button>
  //       </form>
  //       <div className={modalSizes.large}>
  //         <form method="dialog">
  //           {/* if there is a button in form, it will close the modal */}
  //           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
  //             ✕
  //           </button>
  //         </form>

  //         <h3>{title}</h3>

  //         <div className="lg:w-5/6 mx-auto">
  //           <div className="lg:flex">
  //             <div className="lg:w-1/2">
  //               <img
  //                 className="almanacPortrait"
  //                 src="/images/owl comm_stroke.webp"
  //                 alt="Oscillo"
  //               />
  //             </div>
  //             <div className="text-left lg:mt-6">
  //               <ul>
  //                 {[
  //                   { name: "Name", content: "Oscillo Strix" },
  //                   { name: "Gender", content: "male" },
  //                   { name: "Pronouns", content: "he/him" },
  //                   { name: "Species", content: "Stilt Owl" },
  //                   {
  //                     name: "Current Residence",
  //                     content: "Suburbia, Neighborville",
  //                   },
  //                   {
  //                     name: "Likes",
  //                     content:
  //                       "Unorthodox teaching methods, hoodies, deep but clean jokes, Chinese tea (esp. Oolong)",
  //                   },
  //                   // {
  //                   // 	name: "Special",
  //                   // 	content: "exhibits Ghost/Flying type behavior",
  //                   // },
  //                 ].map((charDetail, key) => (
  //                   <li key={key} className="leading-8">
  //                     {charDetail.name}:{" "}
  //                     <span className="text-emerald-700">
  //                       {charDetail.content}
  //                     </span>
  //                   </li>
  //                 ))}
  //                 <li className="mt-2 text-amber-700">
  //                   Your average, not-so-old, not-so-wise, and inexperienced
  //                   owl. While usually reserved, he has a keen interest in
  //                   education and loves being a teacher figure. Definitely not
  //                   that Grass-type Pokémon, if you happen to assume any
  //                   resemblance. His favorite color isn't green either.
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>

  //           <hr className="my-4" />

  //           <div className="text-left">
  //             <p className="italic">
  //               "The stilt-owls (Grallistrix) is an extinct genus of true owls
  //               which contains four species, all of which lived on the Hawaiian
  //               Islands." - Wikipedia
  //             </p>

  //             <p>
  //               "How the heck did this one hatch out of nowhere then?", you may
  //               ask. Also how do stilt owls act? The sheer number of questions
  //               you can think of really accentuate the long-standing conundrum
  //               behind how Oscillo initially hatched into existence. "I wish I
  //               knew," he postulates. "But I really do hope to find out some
  //               day. For now, I'm just winging it till that happens!"
  //             </p>

  //             <p>
  //               As an oddball amongst the others while growing up, making
  //               friends was tough for Oscillo. This, along with his upbringing
  //               has mostly shaped him to prefer to not be in the limelight in
  //               several situations. Given that he's naturally an introvert,
  //               however, it more or less worked out in his favor. "I also do end
  //               up learning to observe from a distance a lot, and it does pay
  //               off to be eventually heard in the end!"
  //             </p>

  //             <p>
  //               His go-to pastime activities include sudoku puzzles, casual
  //               video games, web dev, and seeking out relics of his childhood
  //               nostalgia. As an aspiring educator, he's also passionate about
  //               education and learning. He strives to give his all to ensure the
  //               next generations are better than he is. "Being on top isn't
  //               something that would satisfy me in the long run. It's seeing
  //               those lives I touch achieve more than I did that would satisfy
  //               me immensely. I think that's what I hoped my teachers I was
  //               blessed to have had felt when they taught me."
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </dialog>
  //   </>
  // );

  return (
    <>
      <MyModal
        modalId={modalId}
        title={title}
        btnStyle="btn-secondary"
        modalSize="large"
      >
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <img
              className="almanacPortrait"
              src="/images/owl comm_stroke.webp"
              alt="Oscillo"
            />
          </div>
          <div className="text-left lg:mt-6">
            <ul>
              {[
                { name: "Name", content: "Oscillo Strix" },
                { name: "Gender", content: "male" },
                { name: "Pronouns", content: "he/him" },
                { name: "Species", content: "Stilt Owl" },
                {
                  name: "Current Residence",
                  content: "Suburbia, Neighborville",
                },
                {
                  name: "Likes",
                  content:
                    "Unorthodox teaching methods, hoodies, deep but clean jokes, Chinese tea (esp. Oolong)",
                },
                // {
                // 	name: "Special",
                // 	content: "exhibits Ghost/Flying type behavior",
                // },
              ].map((charDetail, key) => (
                <li key={key} className="leading-8">
                  {charDetail.name}:{" "}
                  <span className="text-emerald-700">{charDetail.content}</span>
                </li>
              ))}
              <li className="mt-2 text-amber-700">
                Your average, not-so-old, not-so-wise, and inexperienced owl.
                While usually reserved, he has a keen interest in education and
                loves being a teacher figure. Definitely not that Grass-type
                Pokémon, if you happen to assume any resemblance. His favorite
                color isn't green either.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-left">
          <p className="italic">
            "The stilt-owls (Grallistrix) is an extinct genus of true owls which
            contains four species, all of which lived on the Hawaiian Islands."
            - Wikipedia
          </p>

          <p>
            "How the heck did this one hatch out of nowhere then?", you may ask.
            Also how do stilt owls act? The sheer number of questions you can
            think of really accentuate the long-standing conundrum behind how
            Oscillo initially hatched into existence. "I wish I knew," he
            postulates. "But I really do hope to find out some day. For now, I'm
            just winging it till that happens!"
          </p>

          <p>
            As an oddball amongst the others while growing up, making friends
            was tough for Oscillo. This, along with his upbringing has mostly
            shaped him to prefer to not be in the limelight in several
            situations. Given that he's naturally an introvert, however, it more
            or less worked out in his favor. "I also do end up learning to
            observe from a distance a lot, and it does pay off to be eventually
            heard in the end!"
          </p>

          <p>
            His go-to pastime activities include sudoku puzzles, casual video
            games, web dev, and seeking out relics of his childhood nostalgia.
            As an aspiring educator, he's also passionate about education and
            learning. He strives to give his all to ensure the next generations
            are better than he is. "Being on top isn't something that would
            satisfy me in the long run. It's seeing those lives I touch achieve
            more than I did that would satisfy me immensely. I think that's what
            I hoped my teachers I was blessed to have had felt when they taught
            me."
          </p>
        </div>
      </MyModal>
    </>
  );
};

// SnowTrap's Almanac Entry
const AboutSnowTrap = () => {
  const modalId = "modal_abtSnowtrap";
  const title = "About SnowTrap ❄️";

  // return (
  //   <>
  //     <button
  //       className="btn btn-secondary btn-outline m-2 transition-all ease-in-out hover:scale-110"
  //       onClick={() => {
  //         const modal = document.querySelector(
  //           `#${modalId}`
  //         ) as HTMLDialogElement;
  //         modal!.showModal();
  //       }}
  //     >
  //       {title}
  //     </button>
  //     <dialog id={modalId} className="modal">
  //       <form method="dialog" className="modal-backdrop">
  //         <button>close</button>
  //       </form>
  //       <div className={modalSizes.large}>
  //         <form method="dialog">
  //           {/* if there is a button in form, it will close the modal */}
  //           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
  //             ✕
  //           </button>
  //         </form>

  //         <h3>{title}</h3>

  //         <div className="lg:w-5/6 mx-auto">
  //           <div className="lg:flex">
  //             <div className="lg:w-1/2">
  //               <img
  //                 className="almanacPortrait"
  //                 src="/images/snowtrap_stroke.webp"
  //                 alt="SnowTrap"
  //                 // style={{ maxWidth: "400px" }}
  //               />
  //             </div>
  //             <div className="text-left lg:mt-6">
  //               <ul>
  //                 {[
  //                   { name: "Name", content: "SnowTrap" },
  //                   { name: "Pronouns", content: "he/him" },
  //                   { name: "Species", content: "Snow Pea" },
  //                   { name: "Damage", content: "normal, slows zombies" },
  //                   {
  //                     name: "Current Residence",
  //                     content: "Suburbia, Neighborville",
  //                   },
  //                   {
  //                     name: "Likes",
  //                     content: `The Fridge, orange-colored things, Chinese tea, "NO HOLDS BARD!!!"`,
  //                   },
  //                 ].map((charDetail, key) => (
  //                   <li key={key} className="leading-8">
  //                     {charDetail.name}:{" "}
  //                     <span className="text-blue-500">
  //                       {charDetail.content}
  //                     </span>
  //                   </li>
  //                 ))}
  //                 <li className="mt-2 text-blue-900">
  //                   Shoots frozen peas that damage and slow the enemy. Capable
  //                   of walking around, rarely seen without his signature snow
  //                   hat. Not a Bellsprout, and most certainly NOT A PET.
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>

  //           <hr className="my-4" />

  //           <div className="text-left">
  //             <p>
  //               SnowTrap was adopted from Crazetopher David Blazing III's lawn
  //               by Oscillo Strix in May 2009. He suddenly gained mobility in May
  //               2013 overnight - to this day, nobody (not even SnowTrap himself)
  //               knows how he managed to uproot himself and gain this ability.
  //             </p>

  //             <p>
  //               Like other fellow plants of his species, he hates puns related
  //               to the cold - "stay frosty", "chill out", you name it. He just
  //               requires generous amounts of sunlight, high-fiber CO<sub>2</sub>{" "}
  //               and lots of water to sustain himself in your average non-snowy
  //               climate. Luckily for him, most regard him as cute for a
  //               bizarrely sentient species of flora. "I'm perfectly okay with
  //               that," he assures. As for his fellow junior plants, they regard
  //               him as a dependable and kind big brother figure to them.
  //             </p>

  //             <p>
  //               Currently, he remains close with his adopter, tending to the
  //               house garden often and accompanying each other in many, many
  //               adventures. When asked about his relationship with the odd owl,
  //               he just shrugged and said, "I'm just besties with him. What more
  //               were you expecting?"
  //             </p>

  //             <p>
  //               Interestingly for a plant belonging to the Winter-mint family,
  //               he loves the color orange, hence his snow hat themed after an
  //               orange lolly. There exist rumors pointing to him having a
  //               possible connection to the plant renegade hero known as "The
  //               Tangerine Mist".
  //             </p>
  //           </div>

  //           <a
  //             className="btn btn-outline btn-primary"
  //             href="https://deeoscillostrix.github.io/snowtrap"
  //             target="_blank"
  //           >
  //             PvZ-style Almanac Entry
  //           </a>
  //         </div>
  //       </div>
  //     </dialog>
  //   </>
  // );

  return (
    <>
      <MyModal
        modalId={modalId}
        title={title}
        btnStyle="btn-secondary"
        modalSize="large"
      >
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <img
              className="almanacPortrait"
              src="/images/snowtrap_stroke.webp"
              alt="SnowTrap"
              // style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="text-left lg:mt-6">
            <ul>
              {[
                { name: "Name", content: "SnowTrap" },
                { name: "Pronouns", content: "he/him" },
                { name: "Species", content: "Snow Pea" },
                { name: "Damage", content: "normal, slows zombies" },
                {
                  name: "Current Residence",
                  content: "Suburbia, Neighborville",
                },
                {
                  name: "Likes",
                  content: `The Fridge, orange-colored things, Chinese tea, "NO HOLDS BARD!!!"`,
                },
              ].map((charDetail, key) => (
                <li key={key} className="leading-8">
                  {charDetail.name}:{" "}
                  <span className="text-blue-500">{charDetail.content}</span>
                </li>
              ))}
              <li className="mt-2 text-blue-900">
                Shoots frozen peas that damage and slow the enemy. Capable of
                walking around, rarely seen without his signature snow hat. Not
                a Bellsprout, and most certainly NOT A PET.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-left">
          <p>
            SnowTrap was adopted from Crazetopher David Blazing III's lawn by
            Oscillo Strix in May 2009. He suddenly gained mobility in May 2013
            overnight - to this day, nobody (not even SnowTrap himself) knows
            how he managed to uproot himself and gain this ability.
          </p>

          <p>
            Like other fellow plants of his species, he hates puns related to
            the cold - "stay frosty", "chill out", you name it. He just requires
            generous amounts of sunlight, high-fiber CO<sub>2</sub> and lots of
            water to sustain himself in your average non-snowy climate. Luckily
            for him, most regard him as cute for a bizarrely sentient species of
            flora. "I'm perfectly okay with that," he assures. As for his fellow
            junior plants, they regard him as a dependable and kind big brother
            figure to them.
          </p>

          <p>
            Currently, he remains close with his adopter, tending to the house
            garden often and accompanying each other in many, many adventures.
            When asked about his relationship with the odd owl, he just shrugged
            and said, "I'm just besties with him. What more were you expecting?"
          </p>

          <p>
            Interestingly for a plant belonging to the Winter-mint family, he
            loves the color orange, hence his snow hat themed after an orange
            lolly. There exist rumors pointing to him having a possible
            connection to the plant renegade hero known as "The Tangerine Mist".
          </p>
        </div>

        <a
          className="btn btn-outline btn-primary"
          href="https://deeoscillostrix.github.io/snowtrap"
          target="_blank"
        >
          PvZ-style Almanac Entry
        </a>
      </MyModal>
    </>
  );
};

// Milo's Almanac Entry
const AboutMilo = () => {
  const modalId = "modal_abtMilo";
  const title = "About Milo 🔥";

  // return (
  //   <>
  //     <button
  //       className="btn btn-secondary btn-outline m-2 transition-all ease-in-out hover:scale-110"
  //       onClick={() => {
  //         const modal = document.querySelector(
  //           `#${modalId}`
  //         ) as HTMLDialogElement;
  //         modal!.showModal();
  //       }}
  //     >
  //       {title}
  //     </button>
  //     <dialog id={modalId} className="modal">
  //       <form method="dialog" className="modal-backdrop">
  //         <button>close</button>
  //       </form>
  //       <div className={modalSizes.large}>
  //         <form method="dialog">
  //           {/* if there is a button in form, it will close the modal */}
  //           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
  //             ✕
  //           </button>
  //         </form>

  //         <h3>{title}</h3>

  //         <div className="lg:w-5/6 mx-auto">
  //           <div className="lg:flex">
  //             <div className="lg:w-1/2">
  //               {/* To replace image later */}
  //               <img
  //                 className="almanacPortrait"
  //                 src="/images/milo.webp"
  //                 alt="SnowTrap"
  //                 // style={{ maxWidth: "400px" }}
  //               />
  //             </div>
  //             <div className="text-left lg:mt-6">
  //               <ul>
  //                 {[
  //                   { name: "Name", content: "Milo" },
  //                   { name: "Pronouns", content: "she/her" },
  //                   { name: "Species", content: "Fire Pea" },
  //                   {
  //                     name: "Damage",
  //                     content: "normal, can cause burns at will",
  //                   },
  //                   {
  //                     name: "Current Residence",
  //                     content: "Suburbia, Neighborville",
  //                   },
  //                   {
  //                     name: "Likes",
  //                     content: `CHOCOLATE.`,
  //                   },
  //                 ].map((charDetail, key) => (
  //                   <li key={key} className="leading-8">
  //                     {charDetail.name}:{" "}
  //                     <span className="text-red-500">{charDetail.content}</span>
  //                   </li>
  //                 ))}
  //                 <li className="mt-2 text-red-900">
  //                   Shoots flaming peas and has impeccable control over fire and
  //                   of what she intends to heat up or burn, or not. Contrary to
  //                   what some may think, dousing her with water or fire
  //                   extinguishers do not kill or immobilize her - it only puts
  //                   out her fire temporarily. Also immune to caffeine effects,
  //                   apparently.
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>

  //           <hr className="my-4" />

  //           <div className="text-left">
  //             <p>
  //               Milo first got her name from Oscillo after he and pal SnowTrap
  //               found her enjoying a cup of hot chocolate that she made herself
  //               - from what was available in the kitchen. It was not until the
  //               three befriended each other when they realized that this
  //               sweetheart really, really loves anything chocolate.. she's
  //               mild-tempered and gentle, but we prefer not to find out how to
  //               cross the line to cross her. Best to keep away your chocolate
  //               treats while you can.
  //             </p>

  //             <p>
  //               It remains unclear when Milo was grown in Crazy Dave's lawn and
  //               up until she uprooted itself mysteriously like how SnowTrap did
  //               (this was found to be true upon consulting Crazy Dave); SnowTrap
  //               has no recollection of meeting her before prior to their first
  //               encounter. Regardless, they have since formed a strong
  //               sibling-like relationship, despite having opposing natural
  //               elements between each other. Between the two, SnowTrap often
  //               acts as the older brother to her.
  //             </p>

  //             <p>
  //               Like all fire peashooters, Milo started off as being a normal
  //               peashooter. However, she has an inner vitality that causes her
  //               to combust into her current form. As such, any acts of
  //               extinguishing her fire does not kill her, and her having that
  //               inner vitality means she would simply blaze herself back into
  //               her normal form in a moment's time. "It used to be fun watching
  //               them get terrified once they realize they can't kill me simply
  //               with water or fire extinguishers," she says. "Now it's more of
  //               an unwelcome nuisance to me. My hair sure doesn't appreciate
  //               that!"
  //             </p>

  //             <p>
  //               Speaking of her flaming hair, she has amazing fire control.
  //               Despite being unable to manifest blue fire willingly (only
  //               happens when she's unwell), she is able to burn anyone she
  //               chooses to or not, as well as being a lethal flamethrower if she
  //               chooses to do so. Her hair, being made up of flames on her head
  //               is skillfully groomed to her liking. She was not always this
  //               good with flame control, though. During her time learning to
  //               acquire the skill, she very frequently started insipid flames on
  //               various objects around her. However, that also led to her
  //               learning to be very quick and resourceful to settle such
  //               incidents. "Thankfully, I have never had a history of burning
  //               anyone by accident.. but if I had five bucks for each time I had
  //               to quickly douse a small fire I accidentally caused ON SOME
  //               OBJECT, I'd have enough to buy me a mansion to keep SO MUCH
  //               CHOCOLATE for myself."
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </dialog>
  //   </>
  // );

  return (
    <>
      <MyModal
        modalId={modalId}
        title={title}
        btnStyle="btn-secondary"
        modalSize="large"
      >
        <div className="lg:flex">
          <div className="lg:w-1/2">
            {/* To replace image later */}
            <img
              className="almanacPortrait"
              src="/images/milo.webp"
              alt="SnowTrap"
              // style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="text-left lg:mt-6">
            <ul>
              {[
                { name: "Name", content: "Milo" },
                { name: "Pronouns", content: "she/her" },
                { name: "Species", content: "Fire Pea" },
                {
                  name: "Damage",
                  content: "normal, can cause burns at will",
                },
                {
                  name: "Current Residence",
                  content: "Suburbia, Neighborville",
                },
                {
                  name: "Likes",
                  content: `CHOCOLATE.`,
                },
              ].map((charDetail, key) => (
                <li key={key} className="leading-8">
                  {charDetail.name}:{" "}
                  <span className="text-red-500">{charDetail.content}</span>
                </li>
              ))}
              <li className="mt-2 text-red-900">
                Shoots flaming peas and has impeccable control over fire and of
                what she intends to heat up or burn, or not. Contrary to what
                some may think, dousing her with water or fire extinguishers do
                not kill or immobilize her - it only puts out her fire
                temporarily. Also immune to caffeine effects, apparently.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-left">
          <p>
            Milo first got her name from Oscillo after he and pal SnowTrap found
            her enjoying a cup of hot chocolate that she made herself - from
            what was available in the kitchen. It was not until the three
            befriended each other when they realized that this sweetheart
            really, really loves anything chocolate.. she's mild-tempered and
            gentle, but we prefer not to find out how to cross the line to cross
            her. Best to keep away your chocolate treats while you can.
          </p>

          <p>
            It remains unclear when Milo was grown in Crazy Dave's lawn and up
            until she uprooted itself mysteriously like how SnowTrap did (this
            was found to be true upon consulting Crazy Dave); SnowTrap has no
            recollection of meeting her before prior to their first encounter.
            Regardless, they have since formed a strong sibling-like
            relationship, despite having opposing natural elements between each
            other. Between the two, SnowTrap often acts as the older brother to
            her.
          </p>

          <p>
            Like all fire peashooters, Milo started off as being a normal
            peashooter. However, she has an inner vitality that causes her to
            combust into her current form. As such, any acts of extinguishing
            her fire does not kill her, and her having that inner vitality means
            she would simply blaze herself back into her normal form in a
            moment's time. "It used to be fun watching them get terrified once
            they realize they can't kill me simply with water or fire
            extinguishers," she says. "Now it's more of an unwelcome nuisance to
            me. My hair sure doesn't appreciate that!"
          </p>

          <p>
            Speaking of her flaming hair, she has amazing fire control. Despite
            being unable to manifest blue fire willingly (only happens when
            she's unwell), she is able to burn anyone she chooses to or not, as
            well as being a lethal flamethrower if she chooses to do so. Her
            hair, being made up of flames on her head is skillfully groomed to
            her liking. She was not always this good with flame control, though.
            During her time learning to acquire the skill, she very frequently
            started insipid flames on various objects around her. However, that
            also led to her learning to be very quick and resourceful to settle
            such incidents. "Thankfully, I have never had a history of burning
            anyone by accident.. but if I had five bucks for each time I had to
            quickly douse a small fire I accidentally caused ON SOME OBJECT, I'd
            have enough to buy me a mansion to keep SO MUCH CHOCOLATE for
            myself."
          </p>
        </div>
      </MyModal>
    </>
  );
};

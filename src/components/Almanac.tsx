export const AboutOscillo = () => {
	const modalId = "modal_abtOscillo";
	const title = "About Oscillo 🦉";

	return (
		<>
			<button
				className="btn btn-secondary btn-outline m-2"
				onClick={() => {
					const modal = document.querySelector(
						`#${modalId}`,
					) as HTMLDialogElement;
					modal!.showModal();
				}}>
				{title}
			</button>
			<dialog id={modalId} className="modal">
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				<div className="modal-box w-full lg:w-11/12 max-w-7xl">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>

					<h3>{title}</h3>

					<div className="lg:w-5/6 mx-auto">
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
											name: "Residence",
											content: "Suburbia, Neighborville",
										},
										{
											name: "Special",
											content: "exhibits Ghost/Flying type behavior",
										},
									].map((charDetail, key) => (
										<li key={key} className="leading-8">
											{charDetail.name}:{" "}
											<span className="text-emerald-700">
												{charDetail.content}
											</span>
										</li>
									))}
									<li className="mt-2 text-amber-700">
										Your average, not-so-old, not-so-wise, and inexperienced
										owl. Definitely not that Grass-type Pokémon, if you happen
										to see and assume any resemblance. His favorite color isn't
										green either.
									</li>
								</ul>
							</div>
						</div>

						<hr className="my-4" />

						<div className="text-left">
							<p className="italic">
								"The stilt-owls (Grallistrix) is an extinct genus of true owls
								which contains four species, all of which lived on the Hawaiian
								Islands." - Wikipedia
							</p>

							<p>
								"How the heck did this one hatch out of nowhere then?", you may
								ask. Also how do stilt owls act? The sheer number of questions
								you can think of really accentuate the long-standing conundrum
								behind how Oscillo initially hatched into existence. In any
								case, he's just ready to wing it and find out these answers and
								more over time. Right now, he still doesn't know how exactly he
								came to be.. maybe that's how he got himself a sentient, mobile
								plant companion (how did that even happen?). Now if he could
								pull off a "Sinister Arrow Raid" or "Triple Arrows" attack..
							</p>

							<p>
								Oscillo has always been quite the oddball growing up. Not
								withstanding the fact that he's of an extinct species of owl, he
								often found himself ostracized a lot as a hatchling. Making
								friends used to be out of the question as his interests and
								personality never really aligned well with them. This, along
								with his upbringing has mostly shaped him to prefer to not be in
								the limelight in several situations. Given that he's naturally
								an introvert, however, it more or less worked out in his favor.
							</p>

							<p>
								His go-to pastime activities include sudoku puzzles, casual
								video games, web dev, and seeking out relics of his childhood
								nostalgia. As an aspiring educator, he's also passionate about
								education and learning. He strives to give his all to ensure the
								next generations are better than he is. "Being on top isn't
								something that would satisfy me in the long run. It's seeing
								those lives I touch achieve more than I did that would satisfy
								me immensely." He also attributes his passion to how he was
								blessed to have great teachers in school while growing up.
							</p>
						</div>
					</div>
				</div>
			</dialog>
		</>
	);
};

export const AboutSnowTrap = () => {
	const modalId = "modal_abtSnowtrap";
	const title = "About SnowTrap ❄️";

	return (
		<>
			<button
				className="btn btn-secondary btn-outline m-2"
				onClick={() => {
					const modal = document.querySelector(
						`#${modalId}`,
					) as HTMLDialogElement;
					modal!.showModal();
				}}>
				{title}
			</button>
			<dialog id={modalId} className="modal">
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				<div className="modal-box w-full lg:w-11/12 max-w-7xl">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>

					<h3>{title}</h3>

					<div className="lg:w-5/6 mx-auto">
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
											name: "Residence",
											content: "Suburbia, Neighborville",
										},
									].map((charDetail, key) => (
										<li key={key} className="leading-8">
											{charDetail.name}:{" "}
											<span className="text-blue-500">
												{charDetail.content}
											</span>
										</li>
									))}
									<li className="mt-2 text-blue-900">
										Shoots frozen peas that damage and slow the enemy. Capable
										of walking around, rarely seen without his signature snow
										hat. Not a Bellsprout, and most certainly NOT A PET.
									</li>
								</ul>
							</div>
						</div>

						<hr className="my-4" />

						<div className="text-left">
							<p>
								SnowTrap was adopted from Crazetopher David Blazing III's lawn
								by Oscillo Strix in May 2009. He suddenly gained mobility in May
								2013 overnight - to this day, nobody (not even SnowTrap himself)
								knows how he managed to uproot himself and gain this ability.
							</p>

							<p>
								Like other fellow plants of his species, he hates puns related
								to the cold - "stay frosty", "chill out", you name it. He just
								requires generous amounts of sunlight, high-fiber CO<sub>2</sub>{" "}
								and lots of water to sustain himself in your average non-snowy
								climate. Luckily for him, most regard him as cute for a
								bizarrely sentient species of flora. "I'm perfectly okay with
								that," he assures. As for his fellow junior plants, they regard
								him as a dependable and kind big brother figure to them.
							</p>

							<p>
								Currently, he remains close with his adopter, tending to the
								house garden often and accompanying each other in many, many
								adventures. When asked about his relationship with the odd owl,
								he just shrugged and said, "I'm just besties with him. What more
								were you expecting?"
							</p>

							<p>
								Interestingly for a plant belonging to the Winter-mint family,
								he loves the color orange, hence his snow hat themed after an
								orange lolly. There exist rumors pointing to him having a
								possible connection to the plant renegade hero known as "The
								Tangerine Mist".
							</p>
						</div>

						<a
							className="btn btn-primary"
							href="https://deeoscillostrix.github.io/snowtrap"
							target="_blank">
							PvZ-style Almanac Entry
						</a>
					</div>
				</div>
			</dialog>
		</>
	);
};

puts "destroying all seeds..."

Author.destroy_all
Book.destroy_all 
ContentWarning.destroy_all

puts "seeding authors..."

a1 = Author.create(
    name: "Karin Slaughter", 
    image: "https://images.squarespace-cdn.com/content/v1/575825619f72667650d0d34f/1559314443197-SC9TPAPLC86DZ1DYG3G8/Karin-Slaughter-Alison-Rosa.jpg?format=300w",
    bio: "Karin Slaughter is one of the world’s most popular and acclaimed storytellers. Published in 120 countries with more than 35 million copies sold across the globe, her 21 novels include the Grant County and Will Trent books, as well as the Edgar-nominated Cop Town and the instant New York Times bestselling stand-alone novels Pretty Girls, The Good Daughter, and Pieces of Her. Slaughter is the founder of the Save the Libraries project—a nonprofit organization established to support libraries and library programming. A native of Georgia, she lives in Atlanta. Her stand-alone novel Pieces of Her is in development with Netflix, starring Toni Collette, and the Grant County and Will Trent series are in development for television.")

a2 = Author.create(
    name: "Ryan C. Thomas", 
    image: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/dbq5kf2b4hudfnu3f1h6eqqsid._SX450_.jpg",
    bio: "Ryan C. Thomas is an award-winning journalist and editor living in San Diego, California. He is the author of 11 novels (including the cult classic, The Summer I Died), numerous novellas and short stories, and can often be found in the bars around Southern California playing rockabilly guitar. When he is not writing or rocking out, he is at home with his wife, son, daughter and two dogs watching really bad B-movies.")

a3 = Author.create(
    name: "Gregg Olsen", 
    image: "https://www.greggolsen.com/images/Gregg-Olsen-headshot.jpg",
    bio: "Throughout his career, Gregg Olsen has demonstrated an ability to create a detailed narrative that offers readers fascinating insights into the lives of people caught in extraordinary circumstances.\nA #1 New York Times, Amazon Charts, Wall Street Journal, Washington Post and USA Today bestselling author, Olsen has written ten nonfiction books, more than twenty novels, a novella, and contributed a short story to a collection edited by Lee Child.\nThe award-winning author has been a guest on dozens of national and local television shows, including educational programs for the History Channel, Learning Channel, and Discovery Channel. He has also appeared on Dateline NBC, William Shatner's Aftermath, Deadly Women on Investigation Discovery, Good Morning America, The Early Show, The Today Show, FOX News, CNN, Anderson Cooper 360, MSNBC, Entertainment Tonight, CBS 48 Hours, Oxygen's Snapped, Court TV's Crier Live, Inside Edition, Extra, Access Hollywood, and A&E's Biography.\nIn addition to television and radio appearances, he has been featured in Redbook, USA Today, People, Salon magazine, Seattle Times, Los Angeles Times and the New York Post.\nThe Deep Dark was named Idaho Book of the Year by the ILA and Starvation Heights was honored by Washington's Secretary of State for the book's contribution to Washington state history and culture. His Young Adult novel, Envy, was the official selection of Washington for the National Book Festival. The Boy She Left Behind was a finalist for the International Thriller Writers award for best YA novel in 2018.\nOlsen, a Seattle native, lives in Olalla, Washington with his wife, twin daughters, three chickens, Milo,an obedience school dropout cocker spaniel, and Suri, a mini dachshund so spoiled she wears a sweater.")

a4 = Author.create(
    name: "Kristopher Triana", 
    image: "http://kristophertriana.com/wp-content/uploads/2013/06/catacombs-2-300x267.png",
    bio: "Kristopher Triana is a Splatterpunk Award winning author. His works include Full Brutal, which was awarded Best Novel at the 2019 Splatterpunk Awards, Toxic Love, Shepherd of the Black Sheep, The Ruin Season, Body Art, The Detained and Growing Dark. His fiction has appeared in many magazines, anthologies, audio books and on websites, and has been translated to multiple languages. His fiction has drawn praise from Publisher’s Weekly, Rue Morgue Magazine, Cemetery Dance, Scream Magazine and such prominent authors as Brian Keene, Jack Ketchum, Bryan Smith and Ryan Harding. While primarily a horror writer, he also writes crime fiction, literary fiction, noir and westerns.\nBorn in New York in 1977, Triana was yanked down to Florida at the age of nine and was forced to grow up there, much to his chagrin. Luckily he had heavy metal music and John Carpenter movies to get by on. Once he was old enough, he escaped all that pesky sunshine and since then he has lived up and down the east coast, from New England to the rural Carolinas. He is obsessed with all aspects of the horror genre and has amassed a staggering collection of cult films, horror books, movie memorabilia, busts and Halloween masks. He also has a very strong love of animals—especially dogs.\nHe lives in Connecticut.")

a5 = Author.create(
    name: "Colleen Hoover", 
    image: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/3418322/408567071_th.jpg",
    bio: "Colleen Hoover is the #1 New York Times bestselling author of twenty two novels and novellas. Hoover’s novels fall into the New Adult and Young Adult contemporary romance categories, as well as psychological thriller.\nColleen Hoover is published by Montlake Romance and Atria Books. Colleen also has several indie titles, including her psychological thriller, Verity.\nIn 2015, Colleen’s novel CONFESS won the Goodreads Choice Award for Best Romance. That was followed up in 2016 with her latest title, It Ends With Us, also winning the Choice Award for Best Romance. In 2017, her title WITHOUT MERIT won best romance.\nHer novel CONFESS has been filmed as a series by Awestruck and is available on Prime Video via Amazon and iTunes. Katie Leclerc and Ryan Cooper star in the series.\nColleen founded The Bookworm Box, a charity subscription service and bookstore, with her family in 2015. The Bookworm Box is a subscription service that provides readers with an exciting opportunity to receive signed novels in the mail each month from authors all over the world. All profits from the subscription service are donated to various charities each month. To date, The Bookworm Box has donated over $1,000,000 to help those in need.")

a6 = Author.create(
    name: "Stephanie Meyer",
    image: "https://images-na.ssl-images-amazon.com/images/I/71z7CuhGBDL._SX450_.jpg",
    bio: "Stephenie Meyer's life changed dramatically on June 2, 2003. The stay-at-home mother of three young sons woke-up from a dream featuring seemingly real characters that she could not get out of her head\n'Though I had a million things to do (i.e. making breakfast for hungry children, dressing and changing the diapers of said children, finding the swimsuits that no one ever puts away in the right place), I stayed in bed, thinking about the dream. Unwillingly, I eventually got up and did the immediate necessities, and then put everything that I possibly could on the back burner and sat down at the computer to write--something I hadn't done in so long that I wondered why I was bothering.' Meyer invented the plot during the day through swim lessons and potty training, then writing it out late at night when the house was quiet. Three months later she finished her first novel, Twilight.\nTwilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list.Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults,' an Amazon.com 'Best Book of the Decade&So Far', and a Publishers Weekly Best Book of the Year.\nStephenie Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and sons.")

a7 = Author.create(
    name: "Elizabeth Scott",
    image: "https://images-na.ssl-images-amazon.com/images/I/31tR9hy786L._SX450_.jpg",
    bio: "Hey there, I'm Elizabeth. I write young adult novels. I've had a bunch of jobs over the years--I've sold pantyhose, hardware, and once spent three days burning cds during the dot.com boom (worst. job. ever.)--but hands down, writing is the best! You can read lots more about my books at my website, http://www.elizabethwrites.com")

a8 = Author.create(
    name: "M.L. Rio",
    image: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/1llmioo2vvk1ufs8dmlfbk13m8._SX450_.jpg",
    bio: "M. L. Rio is an author, but before she was an author she was an actor, and before she was an actor she was just a word nerd whose best friends were books. She holds a master's degree in Shakespeare Studies from King's College London and Shakespeare's Globe. She is currently pursuing her PhD in early modern English literature. Her first novel, IF WE WERE VILLAINS, was published in April 2017 by Flatiron Books.")


puts "seeding books..."

b1 = Book.create(
    title: "Pretty Girls",
    author_id: a1.id,
    image: "https://m.media-amazon.com/images/I/51OFjPHi6+L.jpg",
    pages: "548 pages",
    genre: "fiction mystery thriller",
    description: "Sisters. Strangers. Survivors.\nMore than twenty years ago, Claire and Lydia’s teenaged sister Julia vanished without a trace. The two women have not spoken since, and now their lives could not be more different. Claire is the glamorous trophy wife of an Atlanta millionaire. Lydia, a single mother, dates an ex-con and struggles to make ends meet. But neither has recovered from the horror and heartbreak of their shared loss—a devastating wound that's cruelly ripped open when Claire's husband is killed.\nThe disappearance of a teenage girl and the murder of a middle-aged man, almost a quarter-century apart: what could connect them? Forming a wary truce, the surviving sisters look to the past to find the truth, unearthing the secrets that destroyed their family all those years ago . . . and uncovering the possibility of redemption, and revenge, where they least expect it.\nPowerful, poignant, and utterly gripping, packed with indelible characters and unforgettable twists, Pretty Girls is a masterful novel from one of the finest writers working today.",
    publication_date: "September 29, 2015",
    publisher: "William Morrow")

b2 = Book.create(
    title: "False Witness",
    author_id: a1.id,
    image: "https://m.media-amazon.com/images/I/41jsSqYm8QL.jpg",
    pages: "448 pages",
    genre: "fiction crime thriller",
    description: "AN ORDINARY LIFE...\nLeigh Collier has worked hard to build what looks like a normal life. She’s an up-and-coming defense attorney at a prestigious law firm in Atlanta, would do anything for her sixteen-year-old daughter Maddy, and is managing to successfully coparent through a pandemic after an amicable separation from her husband Walter.\nHIDES A DEVASTATING PAST...\nBut Leigh’s ordinary life masks a childhood no one should have to endure … a childhood tarnished by secrets, broken by betrayal, and ultimately destroyed by a brutal act of violence.\nBUT NOW THE PAST IS CATCHING UP...\nOn a Sunday night at her daughter’s school play, she gets a call from one of the firm's partners who wants Leigh to come on board to defend a wealthy man accused of multiple counts of rape. Though wary of the case, it becomes apparent she doesn't have much choice if she wants to keep her job. They're scheduled to go to trial in one week. When she meets the accused face-to-face, she realizes that it’s no coincidence that he’s specifically asked for her to represent him. She knows him. And he knows her. More to the point, he may know what happened over twenty years ago, and why Leigh has spent two decades avoiding her past.  
    \nAND TIME IS RUNNING OUT.\nSuddenly she has a lot more to lose than this case. The only person who can help is her younger, estranged sister Callie—the last person Leigh would ever want to drag into this after all they’ve been through. But with the life-shattering truth in danger of being revealed, she has no choice...",
    publication_date: "July 20, 2021",
    publisher: "William Morrow")

b3 = Book.create(
    title: "The Good Daughter",
    author_id: a1.id,
    image: "https://m.media-amazon.com/images/I/41CflnQ4Y5L.jpg",
    pages: "519 pages",
    genre: "fiction mystery thriller",
    description: "Two girls are forced into the woods at gunpoint. One runs for her life. One is left behind...\nTwenty-eight years ago, Charlotte and Samantha Quinn's happy small-town family life was torn apart by a terrifying attack on their family home. It left their mother dead. It left their father — Pikeville's notorious defense attorney — devastated. And it left the family fractured beyond repair, consumed by secrets from that terrible night.\nTwenty-eight years later, and Charlie has followed in her father's footsteps to become a lawyer herself — the ideal good daughter. But when violence comes to Pikeville again — and a shocking tragedy leaves the whole town traumatized — Charlie is plunged into a nightmare. Not only is she the first witness on the scene, but it's a case that unleashes the terrible memories she's spent so long trying to suppress. Because the shocking truth about the crime that destroyed her family nearly thirty years ago won't stay buried forever...",
    publication_date: "August 8, 2017",
    publisher: "William Morrow")

b4 = Book.create(
    title: "The Summer I Died (The Roger Huntington Saga Book 1)",
    author_id: a2.id,
    image: "https://m.media-amazon.com/images/I/51dajI1M7QL.jpg",
    pages: "163 pages",
    genre: "fiction horror thriller",
    description: "When Roger Huntington comes home from college for the summer and is met by his best friend, Tooth, he knows they're going to have a good time. A summer full of beer, comic books, movies, laughs, and maybe even girls. The sun is high and the sky is clear as Roger and Tooth set out to shoot beer cans at Bobcat Mountain. Just two friends catching up on lost time, two friends thinking about their futures... two friends suddenly thrust into the middle of a nightmare. Forced to fight for their lives against a sadistic killer with an arsenal of razor sharp blades and a hungry dog by his side. If they are to survive, they must decide: are heroes born, or are they made? Or is something more powerful happening to them? And more importantly, how do you survive when all roads lead to death?",
    publication_date: "December 6, 2013",
    publisher: "Grand Mal Press")

b5 = Book.create(
    title: "Born to Bleed (The Roger Huntington Saga Book 2)",
    author_id: a2.id,
    image: "https://m.media-amazon.com/images/I/51L65F8tGHL.jpg",
    pages: "184 pages",
    genre: "fiction crime thriller",
    description: "Born to Bleed is the exciting sequel to the cult classic, The Summer I Died! It's been ten years since Roger Huntington suffered through the bloody events in Skinny Man's basement. Ten years since the game of chance, the dismemberment, the torture, and the grisly deaths. Roger has moved to California where he now works as a painter and pines after his co-worker, Victoria. It's a seemingly bland life, which is how he likes it. But just as he can't forget his past, he is about to discover that his future may hold far more terrifying events than anything he could possibly imagine.",
    publication_date: "July 23, 2013",
    publisher: "Grand Mal Press")

b6 = Book.create(
    title: "If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood",
    author_id: a3.id,
    image: "https://m.media-amazon.com/images/I/41nIJTI4vXL.jpg",
    pages: "431 pages",
    genre: "nonfiction crime true crime",
    description: "After more than a decade, when sisters Nikki, Sami, and Tori Knotek hear the word mom, it claws like an eagle’s talons, triggering memories that have been their secret since childhood. Until now.\nFor years, behind the closed doors of their farmhouse in Raymond, Washington, their sadistic mother, Shelly, subjected her girls to unimaginable abuse, degradation, torture, and psychic terrors. Through it all, Nikki, Sami, and Tori developed a defiant bond that made them far less vulnerable than Shelly imagined. Even as others were drawn into their mother’s dark and perverse web, the sisters found the strength and courage to escape an escalating nightmare that culminated in multiple murders.\nHarrowing and heartrending, If You Tell is a survivor’s story of absolute evil—and the freedom and justice that Nikki, Sami, and Tori risked their lives to fight for. Sisters forever, victims no more, they found a light in the darkness that made them the resilient women they are today—loving, loved, and moving on.",
    publication_date: "December 1, 2019",
    publisher: "Thomas & Mercer")

b7 = Book.create(
    title: "Gone to See The River Man",
    author_id: a4.id,
    image: "https://m.media-amazon.com/images/I/51TOb2BZAZL.jpg",
    pages: "182 pages",
    genre: "fiction horror",
    description: "Super fans. Groupies. Stalkers.\nThese people will give anything for the idols they worship, be they rock stars, actors or authors. Or even serial killers.\nLori is just such a fanatic. Her obsession is with Edmund Cox, a man of sadistic cruelty who butchered more than twenty women. She’s gone so far as to forge a relationship with him, visiting him in prison and sending him letters on a regular basis. She will do anything to get close to him, so when he gives her a task, she eagerly accepts it.\nShe has no idea of the horror that awaits her.\nEdmund tells her she must go to his cabin in the woods of Killen and retrieve a key to deliver to a mysterious figure known only as The River Man.\nIn her quest, she brings along her handicapped sister, and they journey through the deep, dark valley, beginning their trip upriver. The trip quickly becomes a surreal nightmare, one that digs up Lori’s personal demons, the ones she feels bonds her to Edmund. The river runs with flesh, the cabin is a vault of horrors, and ghostly blues music echoes through the mountains. Soon they will learn that The River Man is not quite fact or folklore, and definitely not human -- at least, not anymore. And the key is just the beginning of what is required of Lori to prove she’s worthy of a madman’s love.",
    publication_date: "March 12, 2020",
    publisher: "Cemetery Dance Publications")

b8 = Book.create(
    title: "Full Brutal",
    author_id: a4.id,
    image: "https://m.media-amazon.com/images/I/51aBQg0uP3L.jpg",
    pages: "264 pages",
    genre: "fiction horror",
    description: "Winner of the 2019 Splatterpunk Award for Best Horror Novel\nKim White is a very popular cheerleader. She's pretty, healthy, and comes from a well-off family. She has everything a girl of sixteen is supposed to want. And she's sick to death of it.\nIn search of something to pull her out of her suicidal thoughts, she begrudgingly decides to lose her virginity, having heard it's a life-changing event. But Kim doesn't want to do it the same way her peers do. She seduces one of her teachers, hoping to ruin his life just for the fun of it. This starts Kim on a runaway train of sadism, and she makes every effort to destroy the lives of those around her. But soon simple backstabbing is not enough to keep her excited, and she nosedives into sabotage, violence, and even murder.\nWhen Kim finds out she's pregnant with her teacher's child, a new madness overtakes her, and she realizes there's only one thing that will satisfy her baby's hunger...",
    publication_date: "June 12, 2018",
    publisher: "Grindhouse Press")

b9 = Book.create(
        title: "Verity",
        author_id: a5.id,
        image: "https://images.thestorygraph.com/g153sad130tfzk2z6sr3eufg67js",
        pages: "333 pages",
        genre: "fiction mystery thriller",
        description: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.\nLowen arrives at the Crawford home, ready to sort through years of Verity’s notes and outlines, hoping to find enough material to get her started. What Lowen doesn’t expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of the night her family was forever altered.\nLowen decides to keep the manuscript hidden from Jeremy, knowing its contents could devastate the already grieving father. But as Lowen’s feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife’s words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her.",
        publication_date: "October 5, 2021",
        publisher: "Grand Central Publishing")

b10 = Book.create(
    title: "It Ends With Us",
    author_id: a5.id,
    image: "https://images.thestorygraph.com/a358x5z6luhjt6iontwjk5nwh82k",
    pages: "384 pages",
    genre: "fiction contemporary romance",
    description: "Sometimes it is the one who loves you who hurts you the most.\nLily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true.\nRyle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place.\nAs questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.",
    publication_date: "August 2, 2016",
    publisher: "Atria")

b11 = Book.create(
        title: "Living Dead Girl",
        author_id: a7.id,
        image: "https://images-na.ssl-images-amazon.com/images/I/310AgjLFEYL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        pages: "176 pages",
        genre: "fiction horror young adult",
        description: "Once upon a time, I was a little girl who disappeared. Once upon a time, my name was not Alice. Once upon a time, I didn t know how lucky I was. When Alice was ten, Ray took her away from her family, her friends her life. She learned to give up all power, to endure all pain. She waited for the nightmare to be over. Now Alice is fifteen and Ray still has her, but he speaks more and more of her death. He does not know it is what she longs for. She does not know he has something more terrifying than death in mind for her. This is Alice's story. It is one you have never heard, and one you will never, ever forget.",
        publication_date: "September 8, 2009",
        publisher: "Simon & Schuster Books for Young Readers")

b12 = Book.create(
    title: "If We Were Villains",
    author_id: a8.id,
    image: "https://m.media-amazon.com/images/I/411eJEeZdOL._SY346_.jpg",
    pages: "370 pages",
    genre: "fiction contemporary lgbtqia+ mystery",
    description: "On the day Oliver Marks is released from jail, the man who put him there is waiting at the door. Detective Colborne wants to know the truth, and after ten years, Oliver is finally ready to tell it.\nA decade ago: Oliver is one of seven young Shakespearean actors at Dellecher Classical Conservatory, a place of keen ambition and fierce competition. In this secluded world of firelight and leather-bound books, Oliver and his friends play the same roles onstage and off: hero, villain, tyrant, temptress, ingénue, extras.\nBut in their fourth and final year, good-natured rivalries turn ugly, and on opening night real violence invades the students’ world of make-believe. In the morning, the fourth-years find themselves facing their very own tragedy, and their greatest acting challenge yet: convincing the police, each other, and themselves that they are innocent.",
    publication_date: "April 11, 2017",
    publisher: "Flatiron Books")

b13 = Book.create(
    title: "Twilight",
    author_id: a6.id,
    image: "https://images.thestorygraph.com/9ivelxjmykp72jsjhukz97f9e2uo",
    pages: "513 pages",
    genre: "fiction fantasy romance young adult",
    description: "Fall in love with the addictive, suspenseful love story between a teenage girl and a vampire with the book that sparked a 'literary phenomenon' and redefined romance for a generation (New York Times).\nIsabella Swan's move to Forks, a small, perpetually rainy town in Washington, could have been the most boring move she ever made. But once she meets the mysterious and alluring Edward Cullen, Isabella's life takes a thrilling and terrifying turn.\nUp until now, Edward has managed to keep his vampire identity a secret in the small community he lives in, but now nobody is safe, especially Isabella, the person Edward holds most dear. The lovers find themselves balanced precariously on the point of a knife -- between desire and danger.\nDeeply romantic and extraordinarily suspenseful, Twilight captures the struggle between defying our instincts and satisfying our desires. This is a love story with bite.",
    publication_date: "July 18, 2007",
    publisher: "Little, Brown Books for Young Readers")



puts "seeding content warnings..."

c1 = ContentWarning.create(
book_id: b1.id, #Pretty Girls
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "Yes", adult_minor_relationship: "No", alcohol: "Yes", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming:"Yes", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "No", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "Yes", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "Yes", dementia: "Yes", domestic_abuse: "No", drug_abuse: "Yes", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "Yes", fatphobia: "No", fire: "Yes", forced_institutionalization: "No", gaslighting: "Yes", genocide: "No", gore: "Yes", grief: "Yes", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "Yes", injury: "Yes", islamophobia: "No", kidnapping: "Yes", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "Yes", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "Yes", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "Yes", slavery: "No", stalking: "Yes", suicidal_thoughts: "Yes", suicide: "Yes", suicide_attempt: "No", terminal_illness: "No", torture: "Yes", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")

c2 = ContentWarning.create(
book_id: b2.id,  #False Witness
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "Yes", adult_minor_relationship: "Yes", alcohol: "No", alcoholism: "Yes", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "Yes", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "Yes", drug_abuse: "Yes", drug_use: "Yes", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "Yes", grief: "Yes", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "Yes", lesbophobia: "No", mass_shooting: "No", medical_content: "Yes", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "Yes", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "Yes", physical_abuse: "Yes", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "Yes", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "Yes", sexual_violence: "Yes", slavery: "No", stalking: "Yes", suicidal_thoughts: "Yes", suicide: "Yes", suicide_attempt: "Yes", terminal_illness: "No", torture: "Yes", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "Yes", war: "No", xenophobia:  "No")

c3 = ContentWarning.create(
book_id: b3.id, #The Good Daughter
abandonment: "No", ableism: "No", abortion: "Yes", acephobia: "No", addiction: "No", adult_minor_relationship: "Yes", alcohol: "Yes", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "No", bullying: "No", cancer: "Yes", cannibalism: "No", car_accident: "No", child_abuse: "Yes", child_death: "Yes", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "No", deadnaming: "No", death: "Yes", death_of_a_parent: "Yes", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "No", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "Yes", grief: "Yes", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "Yes", infidelity: "No", injury: "No", islamophobia: "No", kidnapping: "Yes", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "Yes", mental_illness: "No", miscarriage: "Yes", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "Yes", physical_abuse: "No", police_brutality: "Yes", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "Yes", self_harm: "No", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "Yes", slavery: "No", stalking: "No", suicidal_thoughts: "No", suicide: "Yes", suicide_attempt: "No", terminal_illness: "No", torture: "No", toxic_friendship: "No", toxic_relationship: "No", trafficking: "No", transphobia: "Yes", violence: "Yes", vomit: "Yes", war: "No", xenophobia: "No")

c4 = ContentWarning.create(
book_id: b4.id, #The Summer I Died
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "No", alcohol: "Yes", alcoholism: "No", animal_cruelty: "No", animal_death: "Yes", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "No", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "Yes", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "Yes", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "Yes", grief: "No", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "Yes", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "Yes", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "No", slavery: "No", stalking: "No", suicidal_thoughts: "No", suicide: "No", suicide_attempt: "No", terminal_illness: "No", torture: "Yes", toxic_friendship: "No", toxic_relationship: "No", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "Yes", war: "No", xenophobia: "No")

c5 = ContentWarning.create(
book_id: b5.id, # Born to Bleed
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "No", alcohol: "Yes", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "Yes", car_accident: "No", child_abuse: "No", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "No", excrement: "Yes", fatphobia: "No", fire: "Yes", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "Yes", grief: "No", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "Yes", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "No", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "Yes", slavery: "No", stalking: "No", suicidal_thoughts: "No", suicide: "No", suicide_attempt: "No", terminal_illness: "No", torture: "No", toxic_friendship: "No", toxic_relationship: "No", trafficking: "Yes", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia:  "No")

c6 = ContentWarning.create(
book_id: b6.id, #If You Tell
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "No", alcohol: "No", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "Yes", bullying: "Yes", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "Yes", child_death: "Yes", chronic_illness: "No", classism: "No", colonization: "No", confinement: "Yes", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "Yes", drug_abuse: "Yes", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "Yes", fatphobia: "Yes", fire: "No", forced_institutionalization: "No", gaslighting: "Yes", genocide: "No", gore: "Yes", grief: "No", gun_violence: "Yes", hate_crime: "No", homophobia: "Yes", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "Yes", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "Yes", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "No", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "No", sexual_harrassment: "No", sexual_violence: "No", slavery: "No", stalking: "No", suicidal_thoughts: "Yes", suicide: "No", suicide_attempt: "Yes", terminal_illness: "No", torture: "Yes", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")

c7 = ContentWarning.create(
book_id: b7.id, # Gone to See the River Man
abandonment: "No", ableism: "Yes", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "No", alcohol: "No", alcoholism: "No", animal_cruelty: "No", animal_death: "Yes", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "Yes", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "No", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "Yes", emotional_abuse: "Yes", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "Yes", grief: "No", gun_violence: "No", hate_crime: "No", homophobia: "No", incest: "Yes", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "No", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "Yes", slavery: "No", stalking: "No", suicidal_thoughts: "No", suicide: "No", suicide_attempt: "No", terminal_illness: "No", torture: "No", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")

c8 = ContentWarning.create(
book_id: b8.id, # Full Brutal
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "Yes", alcohol: "Yes", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "Yes", body_shaming: "No", bullying: "Yes", cancer: "No", cannibalism: "Yes", car_accident: "No", child_abuse: "No", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "Yes", cultural_appropriation: "No", cursing: "No", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "Yes", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "Yes", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "Yes", grief: "No", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "Yes", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "No", police_brutality: "No", pregnancy: "Yes", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "Yes", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "No", slavery: "No", stalking: "No", suicidal_thoughts: "Yes", suicide: "Yes", suicide_attempt: "No", terminal_illness: "No", torture: "Yes", toxic_friendship: "Yes", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")

c9 = ContentWarning.create(
book_id: b9.id, #Verity
abandonment: "No", ableism: "No", abortion: "Yes", acephobia: "No", addiction: "No", adult_minor_relationship: "No", alcohol: "No", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "No", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "Yes", child_abuse: "Yes", child_death: "Yes", chronic_illness: "Yes", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "Yes", dementia: "No", domestic_abuse: "Yes", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "Yes", genocide: "No", gore: "Yes", grief: "Yes", gun_violence: "No", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "Yes", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "No", medical_content: "Yes", medical_trauma: "Yes", mental_illness: "Yes", miscarriage: "Yes", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "Yes", police_brutality: "No", pregnancy: "Yes", racial_slur: "No", racism: "No", rape: "No", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "Yes", sexism: "No", sexual_assault: "No", sexual_harrassment: "No", sexual_violence: "No", slavery: "No", stalking: "No", suicidal_thoughts: "Yes", suicide: "No", suicide_attempt: "Yes", terminal_illness: "No", torture: "No", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "Yes", war: "No", xenophobia: "No")

c10 = ContentWarning.create(
book_id: b10.id, #It Ends With Us
abandonment: "Yes", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "No", alcohol: "Yes", alcoholism: "Yes", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "No", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: false, car_accident: false, child_abuse: "Yes", child_death: "Yes", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "Yes", deadnaming: "No", death: "Yes", death_of_a_parent: "Yes", dementia: "No", domestic_abuse: "Yes", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "Yes", genocide: "No", gore: "No", grief: "Yes", gun_violence: "Yes", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "No", medical_content: "Yes", medical_trauma: "Yes", mental_illness: "Yes", miscarriage: "No", misogyny: "No", murder: "No", outing: "No", panic_attack: "Yes", pedophilia: "No", physical_abuse: "Yes", police_brutality: "No", pregnancy: "Yes", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "Yes", sexual_violence: "Yes", slavery: "No", stalking: "No", suicidal_thoughts: "Yes", suicide: "Yes", suicide_attempt: "Yes", terminal_illness: "Yes", torture: "No", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")

c11 = ContentWarning.create(
book_id: b11.id, #Living Dead Girl
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "Yes", alcohol: "No", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "No", body_horror: "No", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "Yes", child_death:"Yes", chronic_illness: "No", classism: "No", colonization: "No", confinement: "Yes", cultural_appropriation: "No", cursing: "No", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "Yes", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "No", grief: "No", gun_violence: "No", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "No", islamophobia: "No", kidnapping: "Yes", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "No", outing: "No", panic_attack: "No", pedophilia: "Yes", physical_abuse: "No", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "Yes", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "Yes", sexual_harrassment: "No", sexual_violence: "Yes", slavery: "No", stalking: "No", suicidal_thoughts: "No", suicide: "No", suicide_attempt: "No", terminal_illness: "No", torture: "No", toxic_friendship: "No", toxic_relationship: "No", trafficking: "No", transphobia: "No", violence: "No", vomit: "No", war: "No", xenophobia: "No")

c12 = ContentWarning.create(
book_id: b12.id, #If We Were Villains
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "Yes", adult_minor_relationship: "No", alcohol: "Yes", alcoholism: "Yes", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "No", body_shaming: "No", bullying: "Yes", cancer: "No", cannibalism: "No", car_accident: "No", child_abuse: "No", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "No", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "Yes", drug_abuse: "Yes", drug_use: "Yes", dysphoria: "No", eating_disorder: "Yes", emotional_abuse: "Yes", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "No", genocide: "No", gore: "No", grief: "Yes", gun_violence: "No", hate_crime: "No", homophobia: "Yes", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "No", medical_content: "No", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "Yes", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "No", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "No", sexual_harrassment: "No", sexual_violence: "No", slavery: "No", stalking: "No", suicidal_thoughts: "No", suicide: "Yes", suicide_attempt: "No", terminal_illness: "No", torture: "No", toxic_friendship: "Yes", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")

c13 = ContentWarning.create(
book_id: b13.id, #Twilight
abandonment: "No", ableism: "No", abortion: "No", acephobia: "No", addiction: "No", adult_minor_relationship: "Yes", alcohol: "No", alcoholism: "No", animal_cruelty: "No", animal_death: "No", antisemitism: "No", biphobia: "No", blood: "Yes", body_horror: "No", body_shaming: "No", bullying: "No", cancer: "No", cannibalism: "No", car_accident: "Yes", child_abuse: "No", child_death: "No", chronic_illness: "No", classism: "No", colonization: "No", confinement: "No", cultural_appropriation: "No", cursing: "No", deadnaming: "No", death: "Yes", death_of_a_parent: "No", dementia: "No", domestic_abuse: "No", drug_abuse: "No", drug_use: "No", dysphoria: "No", eating_disorder: "No", emotional_abuse: "No", excrement: "No", fatphobia: "No", fire: "No", forced_institutionalization: "No", gaslighting: "Yes", genocide: "No", gore: "No", grief: "No", gun_violence: "No", hate_crime: "No", homophobia: "No", incest: "No", infertility: "No", infidelity: "No", injury: "Yes", islamophobia: "No", kidnapping: "No", lesbophobia: "No", mass_shooting: "No", medical_content: "Yes", medical_trauma: "No", mental_illness: "No", miscarriage: "No", misogyny: "No", murder: "Yes", outing: "No", panic_attack: "No", pedophilia: "No", physical_abuse: "No", police_brutality: "No", pregnancy: "No", racial_slur: "No", racism: "No", rape: "No", religious_bigotry: "No", schizophrenia: "No", school_shooting: "No", self_harm: "No", sexism: "No", sexual_assault: "No", sexual_harrassment: "No", sexual_violence: "No", slavery: "No", stalking: "Yes", suicidal_thoughts:  "No", suicide:  "No", suicide_attempt: "No", terminal_illness: "No", torture: "No", toxic_friendship: "No", toxic_relationship: "Yes", trafficking: "No", transphobia: "No", violence: "Yes", vomit: "No", war: "No", xenophobia: "No")


# c2 = ContentWarning.create(
# book_id: b7.id,
# abandonment:,
# ableism:,
# abortion:,
# acephobia:,
# addiction:,
# adult_minor_relationship:,
# alcohol: ,
# alcoholism:,
# animal_cruelty:,
# animal_death:,
# antisemitism:,
# biphobia:,
# blood: ,
# body_horror: ,
# body_shaming:,
# bullying:,
# cancer:,
# cannibalism:,
# car_accident:,
# child_abuse:,
# child_death:,
# chronic_illness:,
# classism:,
# colonization:,
# confinement: ,
# cultural_appropriation:,
# cursing: ,
# deadnaming:,
# death: ,
# death_of_a_parent: ,
# dementia: ,
# domestic_abuse:,
# drug_abuse: ,
# drug_use:,
# dysphoria:,
# eating_disorder:,
# emotional_abuse: ,
# excrement: ,
# fatphobia:,
# fire: ,
# forced_institutionalization:,
# gaslighting: ,
# genocide:,
# gore: ,
# grief: ,
# gun_violence: ,
# hate_crime:,
# homophobia:,
# incest:,
# infertility:,
# infidelity: ,
# injury: ,
# islamophobia:,
# kidnapping: ,
# lesbophobia:,
# mass_shooting:,
# medical_content:,
# medical_trauma:,
# mental_illness:,
# miscarriage:,
# misogyny:,
# murder: ,
# outing:,
# panic_attack:,
# pedophilia:,
# physical_abuse: ,
# police_brutality:,
# pregnancy:,
# racial_slur:,
# racism:,
# rape: ,
# religious_bigotry:,
# schizophrenia:,
# school_shooting:,
# self_harm: ,
# sexism:,
# sexual_assault: ,
# sexual_harrassment:,
# sexual_violence: ,
# slavery:,
# stalking: ,
# suicidal_thoughts: ,
# suicide: ,
# suicide_attempt:,
# terminal_illness:,
# torture: ,
# toxic_friendship:,
# toxic_relationship: ,
# trafficking:,
# transphobia:,
# violence: ,
# vomit:,
# war:,
# xenophobia: )

puts "✅ done seeding (:"

puts "destroying all seeds..."

Author.destroy_all
Book.destroy_all 

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
    bio: "Throughout his career, Gregg Olsen has demonstrated an ability to create a detailed narrative that offers readers fascinating insights into the lives of people caught in extraordinary circumstances.

    A #1 New York Times, Amazon Charts, Wall Street Journal, Washington Post and USA Today bestselling author, Olsen has written ten nonfiction books, more than twenty novels, a novella, and contributed a short story to a collection edited by Lee Child.
    
    The award-winning author has been a guest on dozens of national and local television shows, including educational programs for the History Channel, Learning Channel, and Discovery Channel. He has also appeared on Dateline NBC, William Shatner's Aftermath, Deadly Women on Investigation Discovery, Good Morning America, The Early Show, The Today Show, FOX News, CNN, Anderson Cooper 360, MSNBC, Entertainment Tonight, CBS 48 Hours, Oxygen's Snapped, Court TV's Crier Live, Inside Edition, Extra, Access Hollywood, and A&E's Biography.
    
    In addition to television and radio appearances, he has been featured in Redbook, USA Today, People, Salon magazine, Seattle Times, Los Angeles Times and the New York Post.
    
    The Deep Dark was named Idaho Book of the Year by the ILA and Starvation Heights was honored by Washington's Secretary of State for the book's contribution to Washington state history and culture. His Young Adult novel, Envy, was the official selection of Washington for the National Book Festival. The Boy She Left Behind was a finalist for the International Thriller Writers award for best YA novel in 2018.
    
    Olsen, a Seattle native, lives in Olalla, Washington with his wife, twin daughters, three chickens, Milo,an obedience school dropout cocker spaniel, and Suri, a mini dachshund so spoiled she wears a sweater.")

a4 = Author.create(
    name: "Catriona Ward", 
    image: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/93f6t4tt8q436c3jtqqh04gauk._SX450_.jpg",
    bio: "CATRIONA WARD was born in Washington, DC and grew up in the United States, Kenya, Madagascar, Yemen, and Morocco. She read English at St Edmund Hall, Oxford and is a graduate of the Creative Writing MA at the University of East Anglia.

    'The Last House on Needless Street' was a Times Book of the Month, Observer Book of the Month, March Editor’s Pick on Open Book, a Between the Covers BBC2 book club selection, a Times bestseller, and is being developed for film by Andy Serkis’s production company, The Imaginarium.
    
    'Little Eve' (Weidenfeld & Nicolson, 2018) won the 2019 Shirley Jackson Award and the August Derleth Prize for Best Horror Novel at the 2019 British Fantasy Awards, making her the only woman to have won the prize twice, and was a Guardian best book of 2018. Her debut Rawblood won Best Horror Novel at the 2016 British Fantasy Awards, was shortlisted for the Author’s Club Best First Novel Award and a WHSmith Fresh Talent title. Her short stories have appeared in numerous anthologies. She lives in London and Devon.")

a5 = Author.create(
    name: "Kristopher Triana", 
    image: "http://kristophertriana.com/wp-content/uploads/2013/06/catacombs-2-300x267.png",
    bio: "Kristopher Triana is a Splatterpunk Award winning author. His works include Full Brutal, which was awarded Best Novel at the 2019 Splatterpunk Awards, Toxic Love, Shepherd of the Black Sheep, The Ruin Season, Body Art, The Detained and Growing Dark. His fiction has appeared in many magazines, anthologies, audio books and on websites, and has been translated to multiple languages. His fiction has drawn praise from Publisher’s Weekly, Rue Morgue Magazine, Cemetery Dance, Scream Magazine and such prominent authors as Brian Keene, Jack Ketchum, Bryan Smith and Ryan Harding. While primarily a horror writer, he also writes crime fiction, literary fiction, noir and westerns.

    Born in New York in 1977, Triana was yanked down to Florida at the age of nine and was forced to grow up there, much to his chagrin. Luckily he had heavy metal music and John Carpenter movies to get by on. Once he was old enough, he escaped all that pesky sunshine and since then he has lived up and down the east coast, from New England to the rural Carolinas. He is obsessed with all aspects of the horror genre and has amassed a staggering collection of cult films, horror books, movie memorabilia, busts and Halloween masks. He also has a very strong love of animals—especially dogs.
    
    He lives in Connecticut.")

a6 = Author.create(
    name: "Colleen Hoover", 
    image: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/3418322/408567071_th.jpg",
    bio: "Colleen Hoover is the #1 New York Times bestselling author of twenty two novels and novellas. Hoover’s novels fall into the New Adult and Young Adult contemporary romance categories, as well as psychological thriller. 

    Colleen Hoover is published by Montlake Romance and Atria Books. Colleen also has several indie titles, including her psychological thriller, Verity.
    
    In 2015, Colleen’s novel CONFESS won the Goodreads Choice Award for Best Romance. That was followed up in 2016 with her latest title, It Ends With Us, also winning the Choice Award for Best Romance. In 2017, her title WITHOUT MERIT won best romance.
    
    Her novel CONFESS has been filmed as a series by Awestruck and is available on Prime Video via Amazon and iTunes. Katie Leclerc and Ryan Cooper star in the series.
    
    Colleen founded The Bookworm Box, a charity subscription service and bookstore, with her family in 2015. The Bookworm Box is a subscription service that provides readers with an exciting opportunity to receive signed novels in the mail each month from authors all over the world. All profits from the subscription service are donated to various charities each month. To date, The Bookworm Box has donated over $1,000,000 to help those in need.")

puts "seeding books..."

b1 = Book.create(
    title: "Pretty Girls",
    author_id: a1.id,
    image: "https://m.media-amazon.com/images/I/51OFjPHi6+L.jpg",
    pages: "548 pages",
    genre: "fiction mystery thriller",
    description: "Sisters. Strangers. Survivors.
 
    More than twenty years ago, Claire and Lydia’s teenaged sister Julia vanished without a trace. The two women have not spoken since, and now their lives could not be more different. Claire is the glamorous trophy wife of an Atlanta millionaire. Lydia, a single mother, dates an ex-con and struggles to make ends meet. But neither has recovered from the horror and heartbreak of their shared loss—a devastating wound that's cruelly ripped open when Claire's husband is killed.
     
    The disappearance of a teenage girl and the murder of a middle-aged man, almost a quarter-century apart: what could connect them? Forming a wary truce, the surviving sisters look to the past to find the truth, unearthing the secrets that destroyed their family all those years ago . . . and uncovering the possibility of redemption, and revenge, where they least expect it.
     
    Powerful, poignant, and utterly gripping, packed with indelible characters and unforgettable twists, Pretty Girls is a masterful novel from one of the finest writers working today.",
    publication_date: "September 29, 2015",
    publisher: "William Morrow")

b2 = Book.create(
    title: "False Witness",
    author_id: a1.id,
    image: "https://m.media-amazon.com/images/I/41jsSqYm8QL.jpg",
    pages: "448 pages",
    genre: "fiction crime thriller",
    description: "AN ORDINARY LIFE…

    Leigh Collier has worked hard to build what looks like a normal life. She’s an up-and-coming defense attorney at a prestigious law firm in Atlanta, would do anything for her sixteen-year-old daughter Maddy, and is managing to successfully coparent through a pandemic after an amicable separation from her husband Walter.
    
    HIDES A DEVASTATING PAST...
    
    But Leigh’s ordinary life masks a childhood no one should have to endure … a childhood tarnished by secrets, broken by betrayal, and ultimately destroyed by a brutal act of violence.
    
    BUT NOW THE PAST IS CATCHING UP…
    
    On a Sunday night at her daughter’s school play, she gets a call from one of the firm's partners who wants Leigh to come on board to defend a wealthy man accused of multiple counts of rape. Though wary of the case, it becomes apparent she doesn't have much choice if she wants to keep her job. They're scheduled to go to trial in one week. When she meets the accused face-to-face, she realizes that it’s no coincidence that he’s specifically asked for her to represent him. She knows him. And he knows her. More to the point, he may know what happened over twenty years ago, and why Leigh has spent two decades avoiding her past.  
    
    AND TIME IS RUNNING OUT.
    
    Suddenly she has a lot more to lose than this case. The only person who can help is her younger, estranged sister Callie—the last person Leigh would ever want to drag into this after all they’ve been through. But with the life-shattering truth in danger of being revealed, she has no choice...",
    publication_date: "July 20, 2021",
    publisher: "William Morrow")

b3 = Book.create(
    title: "The Good Daughter",
    author_id: a1.id,
    image: "https://m.media-amazon.com/images/I/41CflnQ4Y5L.jpg",
    pages: "519 pages",
    genre: "fiction mystery thriller",
    description: "Two girls are forced into the woods at gunpoint. One runs for her life. One is left behind…

    Twenty-eight years ago, Charlotte and Samantha Quinn's happy small-town family life was torn apart by a terrifying attack on their family home. It left their mother dead. It left their father — Pikeville's notorious defense attorney — devastated. And it left the family fractured beyond repair, consumed by secrets from that terrible night.
    
    Twenty-eight years later, and Charlie has followed in her father's footsteps to become a lawyer herself — the ideal good daughter. But when violence comes to Pikeville again — and a shocking tragedy leaves the whole town traumatized — Charlie is plunged into a nightmare. Not only is she the first witness on the scene, but it's a case that unleashes the terrible memories she's spent so long trying to suppress. Because the shocking truth about the crime that destroyed her family nearly thirty years ago won't stay buried forever…",
    publication_date: "August 8, 2017",
    publisher: "William Morrow")

b4 = Book.create(
    title: "The Summer I Died (The Roger Huntington Saga Book 1)",
    author_id: a2.id,
    image: "https://m.media-amazon.com/images/I/51dajI1M7QL.jpg",
    pages: "163 pages",
    genre: "fiction horror thriller",
    description: "When Roger Huntington comes home from college for the summer and is met by his best friend, Tooth, he knows they're going to have a good time. A summer full of beer, comic books, movies, laughs, and maybe even girls. The sun is high and the sky is clear as Roger and Tooth set out to shoot beer cans at Bobcat Mountain. Just two friends catching up on lost time, two friends thinking about their futures. . . two friends suddenly thrust into the middle of a nightmare. Forced to fight for their lives against a sadistic killer with an arsenal of razor sharp blades and a hungry dog by his side. If they are to survive, they must decide: are heroes born, or are they made? Or is something more powerful happening to them? And more importantly, how do you survive when all roads lead to death?",
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
    title: "Scars of the Broken (The Roger Huntington Saga Book 3)",
    author_id: a2.id,
    image: "https://m.media-amazon.com/images/I/51ulCM4VvKL.jpg",
    pages: "214 pages",
    genre: "fiction horror thriller",
    description: "Roger Huntington has made his way to Berlin where he is on the hunt for a notorious serial killer who’s eluded capture for years. With the help of some new friends, and the element of surprise on his side (for once), Roger just might be able to save the day before anything goes wrong.

    But that wouldn’t be Roger’s life now, would it?
    
    Turns out his new friends might not be who they say they are, the killer may be onto him, and the benefactor who brought him to Berlin could be hiding deadly secrets that will get everybody killed . . . unless Roger can figure out what the hell’s going on before it’s too late.",
    publication_date: "July 20, 2016",
    publisher: "Grand Mal Press")

b7 = Book.create(
    title: "If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood",
    author_id: a3.id,
    image: "https://m.media-amazon.com/images/I/41nIJTI4vXL.jpg",
    pages: "431 pages",
    genre: "nonfiction crime true crime",
    description: "After more than a decade, when sisters Nikki, Sami, and Tori Knotek hear the word mom, it claws like an eagle’s talons, triggering memories that have been their secret since childhood. Until now.

    For years, behind the closed doors of their farmhouse in Raymond, Washington, their sadistic mother, Shelly, subjected her girls to unimaginable abuse, degradation, torture, and psychic terrors. Through it all, Nikki, Sami, and Tori developed a defiant bond that made them far less vulnerable than Shelly imagined. Even as others were drawn into their mother’s dark and perverse web, the sisters found the strength and courage to escape an escalating nightmare that culminated in multiple murders.
    
    Harrowing and heartrending, If You Tell is a survivor’s story of absolute evil—and the freedom and justice that Nikki, Sami, and Tori risked their lives to fight for. Sisters forever, victims no more, they found a light in the darkness that made them the resilient women they are today—loving, loved, and moving on.",
    publication_date: "December 1, 2019",
    publisher: "Thomas & Mercer")

b8 = Book.create(
    title: "The Last Thing She Ever Did",
    author_id: a3.id,
    image: "https://m.media-amazon.com/images/I/519H3L8E94L.jpg",
    pages: "381 pages",
    genre: "fiction mystery thriller",
    description: "The community along Oregon’s Deschutes River is one of successful careers and perfect families. For years, up-and-comers Liz and Owen have admired their good friends and neighbors, Carole and David. They appear to have it all—security, happiness, and a beautiful young son, Charlie.

    Then Charlie vanishes without a trace, and all that seemed safe is shattered by a tragedy that is incomprehensible—except to Liz.
    
    It took one fleeting moment for her to change the lives of everyone she loves—a heartrending accident that can’t be undone. Neither can the second-worst mistake of her life: concealing it. As two marriages crack and buckle in grief and fear, Liz retreats into her own dark place of guilt, escalating paranoia—and betrayals even she can’t imagine. Because there’s another good neighbor who has his own secrets, his own pain, and his own reasons for watching Liz’s every move.
    
    And only he knows that the mystery of the missing boy on the Deschutes River is far from over.",
    publication_date: "January 1, 2018",
    publisher: "Thomas & Mercer")

b9 = Book.create(
    title: "The Last House on Needless Street",
    author_id: a4.id,
    image: "https://m.media-amazon.com/images/I/51Mec-tJa1L.jpg",
    pages: "326 pages",
    genre: "fiction horror thriller",
    description: "Catriona Ward's The Last House on Needless Street is a shocking and immersive read perfect for fans of Gone Girl and The Haunting of Hill House.

    In a boarded-up house on a dead-end street at the edge of the wild Washington woods lives a family of three.
    
    A teenage girl who isn’t allowed outside, not after last time.
    A man who drinks alone in front of his TV, trying to ignore the gaps in his memory.
    And a house cat who loves napping and reading the Bible.
    
    An unspeakable secret binds them together, but when a new neighbor moves in next door, what is buried out among the birch trees may come back to haunt them all.",
    publication_date: "September 28, 2021",
    publisher: "Tor Nightfire")

b10 = Book.create(
    title: "The Girl from Rawblood",
    author_id: a4.id,
    image: "https://m.media-amazon.com/images/I/51D7ku3TaKL.jpg",
    pages: "370 pages",
    genre: "fiction historical horror",
    description: "Young Iris Villarca is the last of her family's line. They are haunted by 'her,' a curse passed down through the generations that marks each Villarca for certain heartbreak and death. For generations, the Villarcas have died young, under mysterious circumstances.

    But Iris dares to fall in love, and the consequences of her choice are immediate and terrifying. As the world falls apart around her, she must take a final journey back to Rawblood where it all began, and where it must all end...
    
    Perfect for fans of Shirley Jackson, Susan Hill, and Silvia Moreno-Garcia, The Girl from Rawblood will pull readers through time into the early 1800s and 1900s, mesmerizing them with this lyrical story of cunning folk horror right until the breathtaking finish.",
    publication_date: "March 7, 2017",
    publisher: "Sourcebooks Landmark")

b11 = Book.create(
    title: "Gone to See The River Man",
    author_id: a5.id,
    image: "https://m.media-amazon.com/images/I/51TOb2BZAZL.jpg",
    pages: "182 pages",
    genre: "fiction horror",
    description: "Super fans. Groupies. Stalkers.

    These people will give anything for the idols they worship, be they rock stars, actors or authors. Or even serial killers.
    
    Lori is just such a fanatic. Her obsession is with Edmund Cox, a man of sadistic cruelty who butchered more than twenty women. She’s gone so far as to forge a relationship with him, visiting him in prison and sending him letters on a regular basis. She will do anything to get close to him, so when he gives her a task, she eagerly accepts it.
    
    She has no idea of the horror that awaits her.
    
    Edmund tells her she must go to his cabin in the woods of Killen and retrieve a key to deliver to a mysterious figure known only as The River Man.
    
    In her quest, she brings along her handicapped sister, and they journey through the deep, dark valley, beginning their trip upriver. The trip quickly becomes a surreal nightmare, one that digs up Lori’s personal demons, the ones she feels bonds her to Edmund. The river runs with flesh, the cabin is a vault of horrors, and ghostly blues music echoes through the mountains. Soon they will learn that The River Man is not quite fact or folklore, and definitely not human -- at least, not anymore. And the key is just the beginning of what is required of Lori to prove she’s worthy of a madman’s love.",
    publication_date: "March 12, 2020",
    publisher: "Cemetery Dance Publications")

b12 = Book.create(
    title: "Full Brutal",
    author_id: a5.id,
    image: "https://m.media-amazon.com/images/I/51aBQg0uP3L.jpg",
    pages: "264 pages",
    genre: "fiction horror",
    description: "Winner of the 2019 Splatterpunk Award for Best Horror Novel
    Kim White is a very popular cheerleader. She's pretty, healthy, and comes from a well-off family. She has everything a girl of sixteen is supposed to want. And she's sick to death of it.
    
    In search of something to pull her out of her suicidal thoughts, she begrudgingly decides to lose her virginity, having heard it's a life-changing event. But Kim doesn't want to do it the same way her peers do. She seduces one of her teachers, hoping to ruin his life just for the fun of it. This starts Kim on a runaway train of sadism, and she makes every effort to destroy the lives of those around her. But soon simple backstabbing is not enough to keep her excited, and she nosedives into sabotage, violence, and even murder.
    
    When Kim finds out she's pregnant with her teacher's child, a new madness overtakes her, and she realizes there's only one thing that will satisfy her baby's hunger...",
    publication_date: "June 12, 2018",
    publisher: "Grindhouse Press")

b13 = Book.create(
    title: "They All Died Screaming",
    author_id: a5.id,
    image: "https://m.media-amazon.com/images/I/41o0UX6VNxL.jpg",
    pages: "228 pages",
    genre: "fiction dystopian horror",
    description: "It’s called The Scream...

    Once you get it, you simply cannot stop screaming. 
    
    You can’t eat or sleep. It drives you more and more insane until you can’t stand to be alive a second longer.
    
    When the phenomenon hits Chuck's city, the chronically unemployed pervert joins a band of misfits to make his final stand.
    
    Can Chuck, a bitter bartender, a dockside prostitute, a conspiracy theorist, and a homeless man find a way out of the apocalypse…
    
    Or will they all die screaming?",
    publication_date: "October 31, 2020",
    publisher: "Blood Bound Books")

b14 = Book.create(
    title: "It Ends With Us",
    author_id: a6.id,
    image: "https://images.thestorygraph.com/a358x5z6luhjt6iontwjk5nwh82k",
    pages: "381 pages",
    genre: "fiction contemporary romance",
    description: "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up - she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.
  
    Ryle is assertive, stubborn, and maybe even a little arrogant. He's also sensitive, brilliant, and has a total soft spot for Lily, but Ryle's complete aversion to relationships is disturbing.
      
    As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan - her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.
      
    With this bold and deeply personal novel, Colleen Hoover delivers a heart-wrenching story that breaks exciting new ground for her as a writer. It Ends With Us is an unforgettable tale of love that comes at the ultimate price.
    
    This book contains graphic scenes and very sensitive subject matter.",
    publication_date: "August 2, 2016",
    publisher: "Atria Books")

b15 = Book.create(
        title: "Verity",
        author_id: a6.id,
        image: "https://images.thestorygraph.com/0f827myuc4iqb5g1n84tqizqfizc",
        pages: "333 pages",
        genre: "fiction mystery thriller",
        description: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.
 
        Lowen arrives at the Crawford home, ready to sort through years of Verity’s notes and outlines, hoping to find enough material to get her started. What Lowen doesn’t expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of the night her family was forever altered.
         
        Lowen decides to keep the manuscript hidden from Jeremy, knowing its contents could devastate the already grieving father. But as Lowen’s feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife’s words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her.",
        publication_date: "October 5, 2021",
        publisher: "Grand Central Publishing")

b16 = Book.create(
    title: "Regretting You",
    author_id: a6.id,
    image: "https://images.thestorygraph.com/3ubk5rk7fkfjnxfg1uwdn3dg20ng",
    pages: "365 pages",
    genre: "fiction contemporary romance",
    description: "Morgan Grant and her sixteen-year-old daughter, Clara, would like nothing more than to be nothing alike.

    Morgan is determined to prevent her daughter from making the same mistakes she did. By getting pregnant and married way too young, Morgan put her own dreams on hold. Clara doesn’t want to follow in her mother’s footsteps. Her predictable mother doesn’t have a spontaneous bone in her body.
    
    With warring personalities and conflicting goals, Morgan and Clara find it increasingly difficult to coexist. The only person who can bring peace to the household is Chris—Morgan’s husband, Clara’s father, and the family anchor. But that peace is shattered when Chris is involved in a tragic and questionable accident. The heartbreaking and long-lasting consequences will reach far beyond just Morgan and Clara.
    
    While struggling to rebuild everything that crashed around them, Morgan finds comfort in the last person she expects to, and Clara turns to the one boy she’s been forbidden to see. With each passing day, new secrets, resentment, and misunderstandings make mother and daughter fall further apart. So far apart, it might be impossible for them to ever fall back together.
    
    Read less",
    publication_date: "December 10, 2019",
    publisher: "Montlake")

puts "✅ done seeding (:"

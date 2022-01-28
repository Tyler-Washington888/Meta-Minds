# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'GuestTester', email: 'hummbirdssss@email.com', password: 'GuestTester123')

puts "#{User.count} users created"

# Atari in the meta verse -mana
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637099479/Meta-Minds/oooo_oulkzy.jpg',
  category: 'Mana',
  title: 'Atari To Launch Virtual Casino',
  subtitle: 'Japanese video game company plans to open cryptocurrency Casino in Decentraland',
  content: "Atari has revealed that the company will be unveiling an Ethereum blockchain online casino designed around iconic Atari themed games. Recognising the popular and sought-after nature of cryptocurrencies right now, an online cryptocurrency casino might be a good idea for the company to venture into.

  A cryptocurrency casino, or simply crypto-casino is similar to regular casinos but with the rule that bets are accepted and winnings are rewarded in cryptocurrency only. Such systems come with a number of other aspects to be considered for players, including the winnings not being taxable.

  Online casinos that accept cryptocurrencies are not exactly new, with numerous sites out there offering functioning on cryptocurrency and rewarding the same. Atari’s venture could be one of its biggest moves in recent years.The game-maker will be partnering with Decentral Games and will be offering a number of arcade games on the platform. In its blog, the company reveals that users will be able to find nostalgic titles along with some new ones that will be based-on luck.
  There will also be games where the winners will be determined based on a combination of luck and skill",
  user: @admin
)
# wreck it ralph
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637600762/Meta-Minds/Raplh_iimvxj.jpg',
  category: 'Film',
  title: 'Ralph Travels the Internet',
  subtitle: 'What this movie says about the importance of interconnectedness in the metaverse',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# oculus -meta
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1636997473/Meta-Minds/Oculus_lswy6o.png',
  category: 'Meta',
  title: 'Quest 2 Flying Off the Shelves',
  subtitle: 'Facebook latest headset has outsoled all other products combined',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# avatar
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637965280/Meta-Minds/what_tqgne4.jpg',
  category: 'Film',
  title: 'Breaking Down Avatar',
  subtitle: 'What the box office hits may tell us about the future of the internet',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# soccer
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637963912/Meta-Minds/soccer_ldkuy1.png',
  category: 'Mana',
  title: 'Moonshot World Cup',
  subtitle: 'Prepare yourself for the virtual sporting event of the year',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# illuvium
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637136569/Meta-Minds/illuuuvium_p2sdfg.jpg',
  category: 'Crypto',
  title: 'Everything About Illuvium',
  subtitle: 'A thorough breakdown of the first AAA game to hit the Ethereum blockchain',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# atlas spaceship
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637137856/Meta-Minds/Atlas_lkrixb.jpg',
  category: 'Crypto',
  title: 'Galactic Asset Offering',
  subtitle: 'Meta Platform Star Atlas Launches the Next Generation of NFTs',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# sandbox
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637626776/Meta-Minds/Saaaaaand_usrlxl.jpg',
  category: 'Crypto',
  title: "$450K to be Snoop Dogg's Neighbor",
  subtitle: 'Purchase exemplifies the growing demand for digital real-estate in the Metaverse',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# spacejam
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637714108/Meta-Minds/lebron_james_wh3tbg.jpg',
  category: 'Film',
  title: 'LeBron Enters the Server-verse',
  subtitle: "Warner Bros. sends basketball's 21st century king into the virtual realm",
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# nikeland
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637298637/Meta-Minds/Niikkke_uzoqw6.jpg',
  category: 'Crypto',
  title: 'Nike Creates NIKELAND on Roblox',
  subtitle: 'The sneaker & sports apparel giant enters the metaverse.',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# haptic hand
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637134577/Meta-Minds/Hand_fq3js7.jpg',
  category: 'Meta',
  title: "Meta's Haptic Glove Prototype",
  subtitle: 'A new sci-fi interface that could change social interactions forever',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# mana plot sold
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637099573/Meta-Minds/koooooo_sm8zqr.png',
  category: 'Mana',
  title: 'How to Buy Land in Decentraland',
  subtitle: 'Everything you need to know to purchase digital real-estate in Decentraland',
  content: Faker::Quote.famous_last_words,
  user: @admin
)
# axie infinity
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637134484/Meta-Minds/axie_infinity_z8nqbw.jpg',
  category: 'Crypto',
  title: 'Banker Ditches Wallstreet For Lunacia',
  subtitle: '27-year-old leaves Goldman Sachs to become a crypto capitalist',
  content: "Sam Peurifoy left his job at Goldman Sachs to seek wealth as a crypto capitalist in the video-game world.
  He's a bit of a banker in his new role, too, according to the Oct. 30 story from Bloomberg News titled 'Into the Metav
  e
  rse: Where Crypto, Gaming and Capitalism Collide.' In the video game known as Axie Infinity, which is based on the eth
  e
  reum blockchain, players can earn tokens called Smooth Love Potions, as well as NFTs called Axies, both of which can b
  e
   sold on a crypto exchange.
  But to start playing the game, players need three Axies, which totals about $1,000, Bloomberg said. As the quasi-banker
  ,

   Peurifoy lends his NFTs to new players, who earn more cryptocurrency and split the winnings with him.
  Players from the developing world have flocked to this play-to-earn game, Insider wrote previously, noting that Vietna
  m
  -based Axie Infinity brought in $485 million in revenue from July to August. In this gaming world, Peurifoy is known as
  the 'captain' in charge of what he calls a gang of 'kapitalist pirates.' His online persona is 'Das Kapitalist,' a refe
  rence to Karl Marx's Das Kapital.
  'Marx probably does not appreciate the joke,' he wrote in messages to Insider.

  Peurifoy, who earned his PhD in chemistry from Columbia University, told Insider that gaming is just an evening and we
  e
  kend hobby right now while he works full-time as a director at crypto-custody-and-execution firm Floating Point Group.
  Even so, he said if his 'magic internet money' were converted to US dollars, his annual income from the gaming ecosyst
  em exceeds his salary and bonus at the research division at Goldman Sachs.
  'I left GS because of my conviction that 2020 would be a landmark year for institutional crypto, and we'd see a real s
  tructural shift in sentiment towards widespread adoption given better connectivity, use cases, and compliance tools,'
  he told Insider.",
  user: @admin
)
# zuckerberg -meta
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1636762266/Meta-Minds/uuuuuuu_acqcah.jpg',
  category: 'Meta',
  title: 'Zucks Strategic Shift',
  subtitle: 'Facebook makes name change to take leadership role in Web3',
  content: 'On Thursday, the social networking giant took an unmistakable step toward an overhaul, de-emphasizing Faceboo
  k’s name and rebranding itself as Meta. The change was accompanied by a new corporate logo designed like an infinity-sh
  aped symbol that was slightly askew. Facebook and its other apps, such as Instagram and WhatsApp, will remain but under
   the Meta umbrella.

  The move punctuates how Mark Zuckerberg, the chief executive, plans to refocus his Silicon Valley company on what he s
  ees as the next digital frontier, which is the unification of disparate digital worlds into something called the metav
  erse. At the same time, renaming Facebook may help distance the company from the social networking controversies it is
   facing, including how it is used to spread hate speech and misinformation.

  “I’ve been thinking a lot about our identity” with this new chapter, Mr. Zuckerberg said, speaking at a virtual event
  on Thursday to showcase Facebook’s technological bets on the future. “Over time, I hope we’re seen as a metaverse com
  pany.”


  With the change, Mr. Zuckerberg telegraphed that his company was going beyond today’s social networking, which Faceboo
  k has been built on since it was founded 17 years ago. Having Facebook as the corporate name when the company now owne
  d many apps and was fundamentally about connecting people was no longer tenable, he said.

  That was especially the case, Mr. Zuckerberg said, as Facebook has committed to building a composite universe melding
  online, virtual and augmented worlds that people can seamlessly traverse. He has said that this concept, known as the
   metaverse, can be the next major social platform and that several tech companies will build it over the next 10-plus
   years. On Monday, Facebook had signaled its intent to be a big player when it separated its virtual reality and augm
   ented reality business into a division known as Facebook Reality Labs',
  user: @admin
)
# readyplayerone
Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637123958/Meta-Minds/ready_player_one_eol12i.jpg',
  category: 'Film',
  title: 'The Movie That Explains It All',
  subtitle: 'Ready Player One is a must watch for metaverse newcomers',
  content: 'Set in 2045, Ready Player One focuses on the virtual platform of OASIS. While the physical world continues
  to diminish into ruin, an unlikely hero, Wade Watts, is determined in the treasure hunt of OASIS searching for the fortune
  left behind by the deceased creator of OASIS, James Halliday.
  Ready Player One is most often considered the movie “explaining the metaverse” despite the fact that it assumes that
  a single company would end up controlling everything. This is a notion that is critiqued elsewhere, because it is important
  to realize that the metaverse will not be a single virtual space.
  Nevertheless, the movie does a great job of showing what immersive experiences in VR might be like some day. You might also
  enjoy the book, which is a love-letter to fans of Dungeons & Dragons and pop culture.',
  user: @admin
)

# roller coaster -mana
@first_post = Post.create!(
  image: 'https://res.cloudinary.com/tylerwashington98/image/upload/v1637099605/Meta-Minds/roll_whok3u.jpg',
  category: 'Mana',
  title: ' Mining in the WonderZone',
  subtitle: 'Mining and crafting in the metaverse',
  content: Faker::Quote.famous_last_words,
  user: @admin
)

puts "#{Post.count} posts created"

5.times do
  Comment.create!(
    content: Faker::FunnyName.name,
    user: @admin,
    post: @first_post
  )
end

puts "#{Comment.count} comments  created"

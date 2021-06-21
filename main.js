const title = document.getElementById("title");
const aka = document.getElementById("aka");
const director = document.getElementById("director");
const runtime = document.getElementById("runtime");
const img = document.getElementById("image");
const content = document.getElementById("content");
const whereto = document.getElementById("whereto");
const platformButton = document.getElementById("platformButton");


const movieArray = [
    {
        "title": "Akira",
        "year": 1988,
        "aka": "",
        "director": "Katsuhiro Otomo",
        "runtime": "124m",
        "imgSrc": "akira.jpg",
        "content": "Un joven telépata deambula por las calles de Tokio al darse cuenta de que los poderes que posee son asombrosos.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60021103"
    },
    {
        "title": "Aladdin ",
        "year": 1992,
        "aka": "",
        "director": "Ron Clements, John Musker",
        "runtime": "90m",
        "imgSrc": "aladdin.jpg",
        "content": "Aladdin es un ingenioso joven que vive en una extrema pobreza, y que sueña con casarse con la bella hija del sultán, la princesa Yasmine. El destino interviene cuando el astuto visir del Sultán, Yafar, recluta a Aladdin para que le ayude a recuperar una lámpara mágica de las profundidades de la Cueva de las Maravillas. Aladdin encuentra una lámpara maravillosa con un genio dentro, y sus deseos comienzan a hacerse realidad.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/aladdin/2SngByljXESE"
    },
    {
        "title": "All Dogs Go to Heaven",
        "year": 1989,
        "aka": "Todos los perros van al cielo",
        "director": "Don Bluth",
        "runtime": "89m",
        "imgSrc": "all the dogs.jpg",
        "content": "Un perro artista empieza a tener problemas cuando su mejor amigo intenta entrometerse en sus negocios turbios.",
        "platform": "Qubit",
        "platformLink": "https://www.qubit.tv/pelicula/todos-los-perros-van-al-cielo/f0a7fc8b-6e4f-43d6-893d-eb9ecd1fba7b_TodosLosPerrosVanAlCielo/detalle"
    },
    {
        "title": "Alice in Wonderland",
        "year": 1951,
        "aka": "Alicia en el país de las maravillas",
        "director": "Clyde Geronimi, Hamilton Luske, Wilfred Jackson",
        "runtime": "75m",
        "imgSrc": "alice.jpg",
        "content": "La pequeña protagonista de Lewis Carroll cae en la guarida de un conejo que la lleva a un mundo de criaturas mágicas.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/alice-in-wonderland/2l0X3WdCxQ4F"
    },
    {
        "title": "Alvin and the Chipmunks",
        "year": 2007,
        "aka": "Alvin y las ardillas",
        "director": "Tim Hill",
        "runtime": "92m",
        "imgSrc": "alvin.jpg",
        "content": "Después de probar suerte con un desesperanzado compositor, tres ardillas muy peculiares, Alvin, Simon y Theodore, deciden convencer a Dave de que pueden cantar.",
        "platform": "Prime",
        "platformLink": "https://www.primevideo.com/detail/0PQG0CX04E9KLGY4YKSX5MF46V/"
    },
    {
        "title": "Back to the Future",
        "year": 1985,
        "aka": "Volver al futuro",
        "director": "Robert Zemeckis",
        "runtime": "116m",
        "imgSrc": "volver al futuro.jpg",
        "content": "Una máquina del tiempo transporta a un adolescente a los años 50, cuando sus padres todavía estudiaban en la secundaria.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60010110"
    },
    {
        "title": "Bambi ",
        "year": 1942,
        "aka": "",
        "director": "David Hand",
        "runtime": "65m",
        "imgSrc": "bambi.jpg",
        "content": "Un cervatillo crece en el bosque junto al conejo Thumper, Flor el zorrillo y un búho.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/bambi/2s64jMJasyNO"
    },
    {
        "title": "Beauy and the Beast",
        "year": 1991,
        "aka": "La bella y la bestia",
        "director": "Gary Trousdale, Kirk Wise",
        "runtime": "84m",
        "imgSrc": "beauty and the beast.jpg",
        "content": "Una doncella francesa toma el lugar de su padre secuestrado en el castillo encantado de un príncipe embrujado, el amor es lo único que podrá devolverle su forma humana.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/beauty-and-the-beast/3oEh78YRc9VN"
    },
    {
        "title": "Beavis and Butt-Head Do America",
        "year": 1996,
        "aka": "Beavis y Butt-Head recorren America",
        "director": "Mike Judge",
        "runtime": "81m",
        "imgSrc": "beavis and butt head do america.jpg",
        "content": "Unos adolescentes ineptos investigan el robo de su televisión y son secuestrados por unos distribuidores de armas.",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/beavis-and-butt-head-do-america/"
    },
    {
        "title": "Bolt",
        "year": 2008,
        "aka": "",
        "director": "Chris Williams, Byron Howard",
        "runtime": "98m",
        "imgSrc": "bolt.jpg",
        "content": "Pensando que él tiene superpoderes de verdad, una estrella canina de un exitoso programa de televisión viaje a través del país, desde Hollywood hasta Nueva York, para rescatar a su dueña, la otra estrella de su espectáculo televisivo.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/bolt/3rv7GKMZTggh"
    },
    {
        "title": "Cars",
        "year": 2006,
        "aka": "",
        "director": "John Lasseter",
        "runtime": "117m",
        "imgSrc": "cars.jpg",
        "content": "El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/cars/41KYquQjLwge"
    },
    {
        "title": "Casper",
        "year": 1995,
        "aka": "",
        "director": "Brad Silberling",
        "runtime": "100m",
        "imgSrc": "casper.jpg",
        "content": "Durante una visita a la mansión de una heredera, una joven huérfana ayuda a un fantasma amistoso llamado Gasparín.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60030118"
    },
    {
        "title": "The Cat in the Hat",
        "year": 2003,
        "aka": "El gato y su sombrero mágico",
        "director": "Bo Welch",
        "runtime": "82m",
        "imgSrc": "the cat in the hat.jpg",
        "content": "Un travieso felino, en busca de diversión, irrumpe en el hogar de dos niños aprovechando la ausencia de la madre.",
        "platform": "Movistar",
        "platformLink": "https://www.play.movistar.com.ar/details/movie/4991690"
    },
    {
        "title": "A Charlie Brown Christmas",
        "year": 1965,
        "aka": "La Navidad de Charlie Brown",
        "director": "Bill Melendez",
        "runtime": "25m",
        "imgSrc": "charlie brown.jpg",
        "content": "Decepcionado por el consumismo navideño, Charlie Brown intenta dirigir una obra con sus amigos, pero ellos parecen preferir el baile y los regalos. ¿Logrará superar las dificultades, encontrar el árbol perfecto y recuperar el sentido de la Naviadad?",
        "platform": "Apple",
        "platformLink": "https://tv.apple.com/ar/movie/umc.cmc.mbxalimrwrtq72wj4h601pyf"
    },
    {
        "title": "Chicken Little",
        "year": 2005,
        "aka": "",
        "director": "Mark Dindal",
        "runtime": "81m",
        "imgSrc": "chicken little.jpg",
        "content": "Un joven pollito y sus amigos se unen para salvar a los escépticos habitantes de su comunidad de un ataque extraterrestre. ",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/chicken-little/4xcV4EkW6b37"
    },
    {
        "title": "Chicken Run",
        "year": 2000,
        "aka": "Pollitos en fuga",
        "director": "Nick Park, Peter Lord",
        "runtime": "84m",
        "imgSrc": "chicken run.jpg",
        "content": "Esta divertida aventura hecha con las técnicas stop-motion y claymation cuenta la historia de un gallo americano que se enamora de una hermosa gallina en una granja británica. La pareja decide huir de la granja, pero ellos primero tienen que enfrentarse a la malvada granjera quien intenta mantenerlos bajo control. Los pollos deciden intentar un escape para no terminar convertidos en pasteles de carne de pollo.",
        "platform": "Movistar",
        "platformLink": "https://www.play.movistar.com.ar/details/movie/1510041"
    },
    {
        "title": "Cinderella",
        "year": 1950,
        "aka": "Cenicienta",
        "director": "Hamilton Luske, Wilfred Jackson",
        "runtime": "74m",
        "imgSrc": "cinderella.jpg",
        "content": "Con una malvada madrastra y dos hermanastras celosas que la mantienen esclavizada y en harapos, Cenicienta no tiene oportunidad de asistir al baile real, hasta que aparece su hada madrina.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/cinderella/VJPw3bEy9iHj"
    },
    {
        "title": "Cloudy with a Chance of Meatballs",
        "year": 2009,
        "aka": "Lluvia de hamburguesas",
        "runtime": "90m",
        "director": "Phil Lord, Christopher Miller",
        "imgSrc": "cloudy with a chance of meatballs.jpg",
        "content": "Flint Lockwood, un inventor fracasado, trata de solucionar la falta de alimentos en su pueblo con una máquina que hace caer comida del cielo. Sin embargo, el aparato se descontrola y amenaza con enterrar a todo el mundo bajo grandes cantidades de comida.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/70113007"
    },
    {
        "title": "Coraline ",
        "year": 2009,
        "aka": "Los mundos de Coraline",
        "director": "Henry Selick",
        "runtime": "100m",
        "imgSrc": "coraline.jpg",
        "content": "Una niña descubre una puerta secreta en su nueva casa y entra a una realidad alterna que la refleja fielmente de muchas formas.",
        "platform": "Apple",
        "platformLink": "https://itunes.apple.com/ar/movie/coraline-y-la-puerta-secreta/id1518691896"
    },
    {
        "title": "Corpse Bride",
        "year": 2005,
        "aka": "El cadáver de la novia",
        "director": "Tim Burton, Mike Johnson",
        "runtime": "77m",
        "imgSrc": "corpse bride.jpg",
        "content": "En la Europa del siglo XIX, un talentoso pianista se casa accidentalmente con una mujer muerta que lo lleva a otro mundo.",
        "platform": "HBO",
        "platformLink": "https://ar.hbogola.com/content/485ab629-c7b5-11eb-82bd-16e3d9e31261"
    },
    {
        "title": "Daria in ‘Is It College Yet?’",
        "year": 2002,
        "aka": "Daria",
        "director": "Karen Disher",
        "runtime": "65m",
        "imgSrc": "daria.jpg",
        "content": "Daria, Jane y el resto de las personas mayores de Lawndale High se enfrentan a la graduación y a la universidad, en este largometraje final de la serie. ",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/daria-in-is-it-college-yet/"
    },
    {
        "title": "Dumbo",
        "year": 1941,
        "aka": "",
        "director": "Ben Sharpsteen",
        "runtime": "64m",
        "imgSrc": "dumbo.jpg",
        "content": "El bebé elefante de un circo tiene orejas grandes, es ridiculizado y luego aprende a volar.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/dumbo/3lAXKmGUOnjh"
    },
    {
        "title": "The Adventures of Elmo in Grouchland",
        "year": 1999,
        "aka": "Elmo en la tierra de los gruñones",
        "director": "Gary Halvorson",
        "runtime": "73m",
        "imgSrc": "elmo.jpg",
        "content": "Elmo tiene que recuperar su colcha de manos de un malvado monstruo en Grouchlan d, quien no sabe compartir.",
        "platform": "Claro",
        "platformLink": "https://www.clarovideo.com/argentina/vcard/629846"
    },
    {
        "title": "The Emperor’s New Groove",
        "year": 2000,
        "aka": "Las locuras del emperador",
        "director": "Mark Dindal",
        "runtime": "78m",
        "imgSrc": "emperors new groove.jpg",
        "content": "Yzma, la consejera del arrogante emperador Kuzco, lo transforma en llama. Para regresar a su forma humana, deberá aceptar la ayuda de Pacha.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/the-emperors-new-groove/3jFGExhfWgxg"
    },
    {
        "title": "E.T. the Extra-Terrestrial",
        "year": 1982,
        "aka": "E.T. El ExtraTerrestre",
        "director": "Steven Spielberg",
        "imgSrc": "et.jpg",
        "runtime": "115",
        "content": "El encuentro cercano de un niño con un alienígena perdido deriva en una amistad única.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60022398"
    },
    {
        "title": "Fantasia",
        "year": 1940,
        "aka": "Fantasía",
        "director": "David Hand, James Algar",
        "imgSrc": "fantasia.jpg",
        "runtime": "124m",
        "content": "Este filme estrenado en 1940, representa el experimento más audaz de Disney hasta la fecha. En el mismo se plasma la visión de Disney al mezclar la imaginación animada con la música clásica. Lo que había comenzado como un vehículo para mejorar la carrera de Mickey Mouse, se ha convertido en todo un clásico de la animación.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/fantasia/7lt6sjm8nbud"
    },
    {
        "title": "Fantastic Mr. Fox",
        "year": 2009,
        "aka": "El fantástico Sr. Zorro",
        "runtime": "87m",
        "director": "Wes Anderson",
        "imgSrc": "fantastic mr fox.jpg",
        "content": "Tres malvados granjeros le declaren la guerra a un zorro y este anima a sus vecinos animales a defenderse.",
        "platform": "Prime",
        "platformLink": "https://www.primevideo.com/detail/0NHG64SVZNOS6V3SB8D2M5XCJ8"
    },
    {
        "title": "Finding Nemo",
        "year": 2003,
        "aka": "Buscando a Nemo",
        "director": "Andrew Stanton",
        "runtime": "100m",
        "imgSrc": "finding nemo.jpg",
        "content": "Nemo, un pequeño pececillo, muy querido y protegido por su padre, se pierde fuera de la gran barrera del arrecife australiano, después de ser capturado por este arrecife, Nemo terminará en una pecera en Sidney. Su padre, un pez payaso, parte en su búsqueda y se embarca en una peligrosa aventura con Dory, un pez con muy poca memoria. Al mismo tiempo, Nemo y sus nuevos amigos ya traman un plan para escapar de la pecera.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/finding-nemo/5Gpj2XqF7BV2"
    },
    {
        "title": "Garfield",
        "year": 2004,
        "aka": "",
        "director": "Peter Hewitt",
        "runtime": "80m",
        "imgSrc": "garfield.jpg",
        "content": "Un gato anaranjado intenta salvar al nuevo perro de su dueño después de que una personalidad de la televisión lo secuestra.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/garfield/47ED0pNkOvym"
    },
    {
        "title": "Happy Feet",
        "year": 2006,
        "aka": "Happy feet: El pingüino",
        "director": "George Miller",
        "runtime": "108m",
        "imgSrc": "happy feet.jpg",
        "content": "Mumble, un joven pingüino emperador, vive en la Antártida. Como otros animales de su especie, él necesita saber cantar para atraer a una pareja, pero tiene una voz horrible. En su lugar, Mumble debe expresarse a sí mismo y atraer a las hembras a través de su increíble talento para bailar tap.",
        "platform": "Movistar",
        "platformLink": "https://www.play.movistar.com.ar/details/movie/11955333"
    },
    {
        "title": "Harry Potter and the Philosopger's Stone",
        "year": 2001,
        "aka": "Harry Potter y la Piedra Filosofal",
        "director": "Chris Columbus",
        "runtime": "152m",
        "imgSrc": "harry potter.jpg",
        "content": "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.",
        "platform": "Movistar",
        "platformLink": "https://www.play.movistar.com.ar/details/movie/13496461"
    },
    {
        "title": "Hercules",
        "year": 1997,
        "aka": "",
        "director": "Ron Clements, John Musker",
        "runtime": "93m",
        "imgSrc": "hercules.jpg",
        "content": "Hércules, hijo de Hera y el dios Zeus, es robado del Olimpo por los secuaces de Hades para llevarlo a la Tierra y despojarlo de su inmortalidad. Sin embargo, el plan no resulta como se esperaba y el niño aun conserva algunos poderes divinos. Durante su adolescencia, Hércules deberá demostrar que es digno de volver a ascender al Olimpo con los otros dioses. Con la ayuda del sátiro Filoctetes, Hércules aprenderá a usar su fuerza para luchar contra una serie de criaturas malvadas.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/hercules/2e02rZ2TfE0"
    },
    {
        "title": "Home Alone",
        "year": 1990,
        "aka": "Mi pobre angelito",
        "director": "Chris Columbus",
        "runtime": "103m",
        "imgSrc": "home alone.jpg",
        "content": "Un encantador niño de 8 años desafía a un torpe par de ladrones cuando, accidentalmente, sus padres lo olvidan en casa.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/home-alone/3v4vqKPG2jSr"
    },
    {
        "title": "The Hunchback of Notre Dame",
        "year": 1996,
        "aka": "El jorobado de Notre Dame",
        "director": "Gary Trousdale, Kirk Wise",
        "runtime": "91m",
        "imgSrc": "hunchback of notre dame.jpg",
        "content": "En lo alto de la catedral de Notre Dame, oculto de las miradas de todos los ciudadanos de París, vive Quasimodo. Su tutor, el juez Frollo, no le permite que baje del campanario. Quasimodo pasa sus días acompañado de sus tres amigas gárgolas de piedra, Victor, Hugo y Laverne, observando el bullicio de las calles de París. Un día decide salir de la catedral a escondidas y conoce a la bella gitana Esmeralda, con la que vivirá su mayor aventura.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/the-hunchback-of-notre-dame/796BIJb9AlES"
    },
    {
        "title": "Ice Age",
        "year": 2002,
        "aka": "La era del hielo",
        "director": "Chris Wedge",
        "runtime": "81m",
        "imgSrc": "ice age.jpg",
        "content": "Un mamut gruñón y sus amigos prehistóricos entran en acción para ayudar a un pequeño perdido a regresar con su padre.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/ice-age/3vXFwnBqfylt"
    },
    {
        "title": "The Incredibles",
        "year": 2004,
        "aka": "Los Increíbles",
        "director": "Brad Bird",
        "runtime": "115m",
        "imgSrc": "incredibles.jpg",
        "content": "Un superhéroe retirado lucha contra el aburrimiento y, junto a su familia, tiene la oportunidad de salvar al mundo.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/the-incredibles/4jfOKErlmVcJ"
    },
    {
        "title": "The Iron Giant",
        "year": 1999,
        "aka": "El gigante de hierro",
        "director": "Brad Bird",
        "runtime": "86m",
        "imgSrc": "the iron giant.jpg",
        "content": "Un malévolo agente gubernamental amenaza con destruir la amistad entre un chico y un robot alienígena gigante en Maine en 1957.",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/the-iron-giant/"
    },
    {
        "title": "The Jungle Book",
        "year": 1967,
        "aka": "El libro de la selva",
        "director": "Wolfgang Reitherman",
        "runtime": "78m",
        "imgSrc": "the jungle book.jpg",
        "content": "Después de ser rescatado por la pantera Bagheera en la selva, una manada de lobos cría al recién nacido Mowgli. La vida feliz y apacible de Mowgli junto a su familia adoptiva se rompe en mil pedazos cuando llega el peligroso tigre Shere Khan.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/the-jungle-book/5trzAb4Rz3F9"
    },
    {
        "title": "Lady and the Tramp",
        "year": 1955,
        "aka": "La dama y el vagabundo",
        "director": "Hamilton Luske, Wilfred Jackson",
        "runtime": "76m",
        "imgSrc": "lady and the tramp.jpg",
        "content": "La historia clásica animada de Walt Disney, sobre un romance entre una perrita mimada y un perro vagabundo.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/lady-and-the-tramp/5C1EXtD5Z5xv"
    },
    {
        "title": "Lilo & Stitch",
        "year": 2002,
        "aka": "Lilo y Stitch",
        "director": "Chris Sanders, Dean DeBlois",
        "runtime": "85m",
        "imgSrc": "lilostitch.jpg",
        "content": "Una niña solitaria adopta a un perro que en realidad es un extraterrestre travieso que se esconde de unos cazadores intergalácticos.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/lilo-stitch/1KQztXx3gPGi"
    },
    {
        "title": "The Lion King",
        "year": 1994,
        "aka": "El rey león",
        "director": "Roger Allers, Rob Minkoff",
        "runtime": "89m",
        "imgSrc": "the lion king.jpg",
        "content": "Tras la muerte de su padre, Simba vuelve a enfrentar a su malvado tío, Scar, y reclamar el trono de rey.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/the-lion-king/1HqwiEcje6Nj"
    },
    {
        "title": "The Little Mermaid",
        "year": 1989,
        "aka": "La sirenita",
        "director": "Ron Clements, John Musker",
        "runtime": "83m",
        "imgSrc": "the little mermaid.jpg",
        "content": "La sirena Ariel está fascinada por el mundo de los humanos, pero su padre le prohíbe relacionarse con ellos. En un viaje secreto, se enamora de un humano y recurre a una perversa hechicera para que, mediante un conjuro, su amor triunfe.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/the-little-mermaid/5MpPFhS8FTXh"
    },
    {
        "title": "Madagascar ",
        "year": 2005,
        "aka": "",
        "director": "Eric Darnell, Tom McGrath",
        "runtime": "86m",
        "imgSrc": "madagascar.jpg",
        "content": "Cuatro animales muy mimados del zoo de Nueva York naufragan en la isla de Madagascar y deben aprender a sobrevivir en un mundo salvaje.",
        "platform": "Movistar",
        "platformLink": "https://www.play.movistar.com.ar/details/movie/2002194"
    },
    {
        "title": "Monsters, Inc.",
        "year": 2001,
        "aka": "",
        "director": "Pete Docter",
        "runtime": "92m",
        "imgSrc": "monsters inc.jpg",
        "content": "Monsters, Incorporated es la fábrica de sustos más grande en el mundo de los monstruos y James P. Sullivan es uno de sus mejores asustadores. Sullivan es un monstruo grande e intimidante de piel azul, grandes manchas color púrpura y cuernos. Su asistente, mejor amigo y compañero de cuarto es Mike Wazowski, un pequeño y alegre monstruo verde con un solo ojo. Boo, una niña pequeña visita lugares en donde nunca antes había estado un ser humano.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/monsters-inc/5vQuMGjgTZz5"
    },
    {
        "title": "Mulan",
        "year": 1998,
        "aka": "Mulán",
        "director": "Tony Bancroft, Barry Cook",
        "runtime": "88m",
        "imgSrc": "mulan.jpg",
        "content": "El ejército de los Hunos, encabezado por el malvado Shun Yiu, quiere conquistar China. El emperador, para impedírselo, ha mandado a filas a todos los varones con el fin de proteger el imperio. Por otra parte, Mulán es una chica joven y valiente que vive en una aldea. Su padre está enfermo pero a pesar de ello quiere luchar por su país. Mulán no lo va a consentir y se fugará de casa con la intención de hacerse pasar por un chico y combatir en lugar de su padre.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/mulan/85wmj4hahA0B"
    },
    {
        "title": "My Neighbors the Yamadas",
        "year": 1999,
        "aka": "Mis vecinos los Yamada",
        "director": "Isao Takahata",
        "runtime": "104m",
        "imgSrc": "my neighbors the yamadas.jpg",
        "content": "Historias de la vida diaria de una típica familia de clase media de Tokio, Japón.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/70035035"
    },
    {
        "title": "My Neighbor Totoro",
        "year": 1988,
        "aka": "Mi vecino Totoro",
        "director": "Hayao Miyazaki",
        "runtime": "86m",
        "imgSrc": "my neighbor totoro.jpg",
        "content": "Esta historia animada sigue a las estudiantes y hermanas Satsuke y Mei mientras se establecen en su casa de campo con su padre y esperan a que su madre se recupere de una enfermedad en un hospital del área. Cuando las hermanas exploran su nueva casa, descubren y hacen amistad con unos duendes juguetones, y en el bosque cercano encuentran a una enorme criatura conocida como Totoro.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60032294"
    },
    {
        "title": "The Nightmare Before Christmas",
        "year": 1993,
        "aka": "El extraño mundo de Jack",
        "director": "Henry Selick",
        "runtime": "76m",
        "imgSrc": "the nightmare before christmas.jpg",
        "content": "El rey de las calabazas en el pueblo de las brujas planea secuestrar a Santa Claus y al mismo tiempo llevar pánico en vez de alegría.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/tim-burtons-the-nightmare-before-christmas/5GjwOj5Rkpz2"
    },
    {
        "title": "One Hundred and One Dalmatians",
        "year": 1961,
        "aka": "101 dálmatas",
        "director": "Hamilton Luske, Wolfgang Reitherman",
        "runtime": "79m",
        "imgSrc": "one hundred and one dalmatians.jpg",
        "content": "Obsesionada por obtener la auténtica piel de dálmatas para crear su nueva línea de moda, Cruella de Vil no se detiene ante nada. Cuando Anita, una de sus mejores diseñadoras, le cuenta lo contentos que están ella y su marido Roger, porque su pareja de dálmatas, Pongo y Perlita, van a tener cachorros, la mente de Cruella empieza a maquinar para hacerse con los pequeños.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/101-dalmatians/7NOwGGV7R7kE"
    },
    {
        "title": "Perfect Blue",
        "year": 1997,
        "aka": "",
        "director": "Satoshi Kon",
        "runtime": "81m",
        "imgSrc": "perfect blue.jpg",
        "content": "Una cantante deja su banda para convertirse en actriz y se deshace de su imagen de 'niña buena'.",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/perfect-blue/"
    },
    {
        "title": "Peter Pan",
        "year": 1953,
        "aka": "",
        "director": "Hamilton Luske, Wilfred Jackson",
        "runtime": "77m",
        "imgSrc": "peter pan.jpg",
        "content": "Wendy y sus hermanos vivirán fantásticas aventuras cuando Peter Pan, el héroe de sus cuentos, les guía hacia el mágico mundo de Nunca Jamás junto a su inseparable Campanilla. En su viaje a 'la segunda estrella a la derecha', conocerán la guarida secreta de Peter y a los traviesos Niños Perdidos y tendrán que enfrentarse con el famoso Capitán Garfio y sus piratas. ",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/peter-pan/20a1PB36VPVF"
    },
    {
        "title": "Pinocchio",
        "year": 1940,
        "aka": "Pinocho",
        "director": "Ben Sharpsteen, Hamilton Luske",
        "runtime": "88m",
        "imgSrc": "pinocchio.jpg",
        "content": "Pepe Grillo cuenta la historia de una marioneta de madera que tiene la oportunidad de convertirse en un chico real.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/pinocchio/3awzEJp1S6xg"
    },
    {
        "title": "Pocahontas",
        "year": 1940,
        "aka": "",
        "runtime": "85m",
        "director": "Mike Gabriel, Eric Goldberg",
        "imgSrc": "pocahontas.jpg",
        "content": "Pocahontas es la hija de Powhatan, el jefe de una tribu india de América del Norte. Un día observa la llegada de un grupo de colones ingleses, encabezados por el ambicioso gobernador Radcliff y el valiente capitán John Smith. Acompañada de sus compañeros animales, Pocahontas entabla una amistad con el capitán John Smith. Sin embargo, la ambición de los colonos hace que surjan tensiones entre las dos culturas. Entonces Pocahontas deberá encontrar una manera de lograr la paz entre los dos bandos.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/pocahontas/2WjLTJt9dM5C"
    },
    {
        "title": "Porco Rosso",
        "year": 1992,
        "aka": "",
        "director": "Hayao Miyazaki",
        "runtime": "94m",
        "imgSrc": "porco rosso.jpg",
        "content": "Un piloto es transformado en un puerco humanoide y deja la isla sólo para rescatar a víctimas de los piratas aéreos.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/70019060"
    },
    {
        "title": "The Powerpuff Girls Movie",
        "year": 2002,
        "aka": "Las chicas superpoderosas",
        "director": "Craig McCracken",
        "runtime": "77m",
        "imgSrc": "the porwerpuff girls.jpg",
        "content": "Tres pequeñas niñas con super poderes enfrentan a un mono malvado y a su ejército de primates modificados.",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/the-powerpuff-girls-movie/"
    },
    {
        "title": "Ratatouille ",
        "year": 2007,
        "aka": "",
        "director": "Brad Bird",
        "runtime": "111m",
        "imgSrc": "ratatouille.jpg",
        "content": "Remy es un residente de París que aprecia la buena comida y tiene un paladar bastante sofisticado. Él desea convertirse en un chef para crear y disfrutar de diversas obras de arte culinarias. El único problema es que Remy es una rata. Y cuando termina en las alcantarillas debajo de uno de los restaurantes más finos de París, el roedor se siente en el lugar perfecto para convertir su sueño en una realidad.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/ratatouille/4zRnUvYGbUZG"
    },
    {
        "title": "Recess: School’s Out",
        "year": 2001,
        "aka": "Llegó el recreo",
        "director": "Chuck Sheetz",
        "runtime": "82m",
        "imgSrc": "recess.jpg",
        "content": "Un grupo de niños lucha por sus vacaciones de verano ante los planes de un exdirector de crear un invierno permanente.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/recess-schools-out/6XMSvba0mQaj"
    },
    {
        "title": "Robin Hood",
        "year": 1973,
        "aka": "",
        "director": "Wolfgang Reitherman",
        "runtime": "83m",
        "imgSrc": "robin hood.jpg",
        "content": "La historia animada de Disney sobre un zorro astuto que rescata a los animales del bosque Sherwood de un tirano.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/robin-hood/5ACMz1bJJwwZ"
    },
    {
        "title": "The Rugrats Movie",
        "year": 1998,
        "aka": "Rugrats, aventuras en pañales",
        "director": "Norton Virgien, Igor Kovalyov",
        "runtime": "78m",
        "imgSrc": "rugrats.jpg",
        "content": "Tommy, Carlitos, Phil, Lil y el bebé recién nacido Dil se pierden en el bosque.",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/rugrats-in-paris-the-movie/"
    },
    {
        "title": "Shrek ",
        "year": 2001,
        "aka": "",
        "director": "Andrew Adamson, Vicky Jenson",
        "runtime": "90m",
        "imgSrc": "shrek.jpg",
        "content": "Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60020686"
    },
    {
        "title": "Sleeping Beauty",
        "year": 1959,
        "aka": "La bella durmiente",
        "runtime": "75m",
        "director": "Eric Larson, Wolfgang Reitherman",
        "imgSrc": "sleeping beauty.jpg",
        "content": "Tres hadas madrinas y un apuesto príncipe salvan a la princesa Aurora de la maldición de la bruja Maléfica.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/sleeping-beauty/1rc2EavpNV7U"
    },
    {
        "title": "Snow White and the Seven Dwarfs",
        "year": 1937,
        "aka": "Blancanieves y los siente enanitos",
        "director": "David Hand",
        "runtime": "83m",
        "imgSrc": "snow white.jpg",
        "content": "La malvada madrastra de Blancanieves no puede soportar que la belleza de la joven sea superior a la suya y decide acabar con su vida. La bellísima Blancanieves consigue refugiarse en una minúscula cabaña del bosque en la que habitan siete simpáticos enanitos. A pesar de todo, la cruel madrastra consigue dar con su paradero y la envenena con una manzana. El veneno sumirá a la joven en un sueño eterno del que tan sólo un príncipe azul podrá despertarla.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/snow-white-and-the-seven-dwarfs/7X592hsrOB4X"
    },
    {
        "title": "Spirited Away",
        "year": 2001,
        "aka": "El viaje de Chihiro",
        "director": "Hayao Miyazaki",
        "runtime": "125m",
        "imgSrc": "spirited.jpg",
        "content": "Perdida en el bosque, una niña de 10 años conoce animales, fantasmas y criaturas extrañas.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/60023642"
    },
    {
        "title": "Stuart Little",
        "year": 1999,
        "aka": "Stuart Little, un ratón en la familia",
        "director": "Rob Minkoff",
        "imgSrc": "stuart little.jpg",
        "runtime": "84m",
        "content": "La familia Stuart adopta al pequeño ratón llamado Stuart al que consideran como a su hijo. Mr. y Mrs. Little están encantados con la manera de ser de Stuart, pero su hijo mayor, George, no sabe qué hacer con su nuevo `hermano' y el gato de la familia, Snowbell, improvisa un plan para echar a Stuart de casa para siempre.",
        "platform": "Netflix",
        "platformLink": "https://www.netflix.com/title/28631029"
    },
    {
        "title": "The SpongeBob SquarePants Movie",
        "year": 2004,
        "aka": "Bob esponja",
        "director": "Stephen Hillenburg",
        "runtime": "87m",
        "imgSrc": "spongebob squarepants.jpg",
        "content": "Bob Esponja y Patrick viajan a ciudad Shell para recuperar la corona de Neptuno y salvar la vida del Don Cangrejo",
        "platform": "Prime",
        "platformLink": "https://www.primevideo.com/detail/0GQGD5K7NCFZ53BFWQL3B6IZXN/"
    },
    {
        "title": "Tarzan ",
        "year": 1999,
        "aka": "Tarzán",
        "director": "Kevin Lima, Chris Buck",
        "runtime": "89m",
        "imgSrc": "tarzan.jpg",
        "content": "La gorila Kala encuentra un niño huérfano en la jungla y lo adopta como su propio hijo a pesar de la oposición de Kerchak, el jefe de la manada. El joven Tarzán crecerá en la jungla desarrollando los instintos de los animales y aprendiendo a deslizarse por los árboles a una gran velocidad. El joven vive como un animal hasta que una expedición se adentra en la jungla y conoce a Jane, que le hará descubrir quién es realmente y cuál es el mundo al que pertenece.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/tarzan/1aKEyYDmGDLb"
    },
    {
        "title": "Toy Story",
        "year": 1995,
        "aka": "",
        "director": "John Lasseter",
        "runtime": "81m",
        "imgSrc": "toy story.jpg",
        "content": "Woody, el juguete favorito de Andy, se siente amenazado por la inesperada llegada de Buzz Lightyear, el guardián del espacio.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/toy-story/1Ye1nzUgtF7d"
    },
    {
        "title": "Up",
        "year": 2009,
        "aka": "",
        "director": "Pete Docter",
        "runtime": "96m",
        "imgSrc": "up.jpg",
        "content": "Carl Fredricksen es un vendedor de globos de 78 años de edad dispuesto a cumplir su sueño: atar miles de globos a su casa y volar a Sudamérica. Sin embargo, descubre demasiado tarde a un joven e inesperado polizón. Lo que en principio será recelo, acabará por tornarse simpatía hacia el muchacho mientras juntos pasan fascinantes aventuras en exóticos lugares.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/up/3XiRSXriK0E8"
    },
    {
        "title": "Wallace & Gromit: The Curse of the Were-Rabbit",
        "year": 2005,
        "aka": "Wallace y Gromit - La batalla de los vegetales",
        "director": "Nick Park, Steve Box",
        "runtime": "85m",
        "imgSrc": "the curse of the were rabbit.jpg",
        "content": "Se acerca el Concurso Anual de Verduras Gigantes y se desata una auténtica 'vegetalmanía' en el pueblo donde residen Wallace y Gromit. Los dos amigos, tan emprendedores como siempre, se están haciendo de oro con su nuevo invento, el sistema 'Anti-Pesto', una forma humanitaria de controlar a los conejos que intentan invadir los preciados huertos. De pronto, todo se viene abajo cuando una enorme, misteriosa y voraz 'bestia' empieza a aterrorizar al vecindario, atacando los huertos de noche y destrozándolo todo a su paso.",
        "platform": "Movistar",
        "platformLink": "https://www.play.movistar.com.ar/details/movie/1969739"
    },
    {
        "title": "WALL·E",
        "year": 2008,
        "aka": "",
        "director": "Andrew Stanton",
        "runtime": "98m",
        "imgSrc": "wall e.jpg",
        "content": "Luego de pasar años limpiando la Tierra desierta, el robot Wall-E conoce a EVA y la sigue por toda la galaxia.",
        "platform": "Disney",
        "platformLink": "https://www.disneyplus.com/movies/wall-e/5G1wpZC2Lb6I",
    },
    {
        "title": "Willy Wonka & the Chocolate Factory",
        "year": 1971,
        "aka": "Willy Wonka y la fábrica de chocolate",
        "director": "Mel Stuart",
        "runtime": "100m",
        "imgSrc": "willly wonka.jpg",
        "content": "Un niño pobre y su abuelo ganan un recorrido por la fabricante del enigmático fabricante de dulces Willy Wonka.",
        "platform": "Play",
        "platformLink": "https://letterboxd.com/film/willy-wonka-the-chocolate-factory/"
    }

]

let randomNum = Math.floor(Math.random() * movieArray.length);
title.innerHTML = movieArray[randomNum].title + " (" + movieArray[randomNum].year + ")";
aka.innerHTML = movieArray[randomNum].aka;
director.innerHTML = "Director: " + movieArray[randomNum].director;
img.src = "./images/" + movieArray[randomNum].imgSrc;
content.innerHTML = movieArray[randomNum].content;
whereto.href = movieArray[randomNum].platformLink;
runtime.innerHTML = "Duración: " + movieArray[randomNum].runtime;


if(movieArray[randomNum].platform === "Apple"){
    platformButton.src = "./platform/apple.png"
}else if(movieArray[randomNum].platform === "Claro"){
    platformButton.src = "./platform/claro.png" 
}else if(movieArray[randomNum].platform === "Disney"){
    platformButton.src = "./platform/disney.png" 
}else if(movieArray[randomNum].platform === "HBO"){
    platformButton.src = "./platform/hbo.png" 
}else if(movieArray[randomNum].platform === "Movistar"){
    platformButton.src = "./platform/movistar.png" 
}else if(movieArray[randomNum].platform === "Netflix"){
    platformButton.src = "./platform/netflix.png" 
}else if(movieArray[randomNum].platform === "Prime"){
    platformButton.src = "./platform/prime.png" 
}else if(movieArray[randomNum].platform === "Quibit"){
    platformButton.src = "./platform/qubit.png" 
}else{
    platformButton.src = "./platform/play.png" 
}
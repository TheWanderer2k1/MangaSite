-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2023 at 03:12 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_manga`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `ID_chapter` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`ID_chapter`, `name`) VALUES
(1, 'Chap_1_Monster'),
(2, 'Chap_1_test1'),
(3, 'Chap_2_test1');

-- --------------------------------------------------------

--
-- Table structure for table `comment_on_manga`
--

CREATE TABLE `comment_on_manga` (
  `id` int(11) NOT NULL,
  `ID_manga` int(11) NOT NULL,
  `ID_reader` int(11) NOT NULL,
  `cmt` varchar(1000) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment_on_manga`
--

INSERT INTO `comment_on_manga` (`id`, `ID_manga`, `ID_reader`, `cmt`, `date`) VALUES
(10, 1, 1, 'hello minna san', '2023-01-24'),
(11, 1, 2, 'konichiwa test1 :))', '2023-01-24'),
(12, 3, 2, 'まだコンテンツがないね', '2023-01-24'),
(13, 1, 1, 'This manga seems interesting', '2023-01-24'),
(14, 1, 1, 'hello', '2023-01-24'),
(15, 4, 1, 'just test some comment here', '2023-01-24'),
(16, 4, 3, 'comment service seems ok', '2023-01-24'),
(17, 3, 9, 'Sign in successful', '2023-01-24'),
(18, 3, 16, 'I\'ll add chapter later. Please be patient :))', '2023-01-24');

-- --------------------------------------------------------

--
-- Table structure for table `contain`
--

CREATE TABLE `contain` (
  `ID_chapter` int(11) NOT NULL,
  `ID_img` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contain`
--

INSERT INTO `contain` (`ID_chapter`, `ID_img`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(2, 32),
(2, 33),
(2, 34),
(3, 35),
(3, 36);

-- --------------------------------------------------------

--
-- Table structure for table `has_chapter`
--

CREATE TABLE `has_chapter` (
  `ID_manga` int(11) NOT NULL,
  `ID_chapter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `has_chapter`
--

INSERT INTO `has_chapter` (`ID_manga`, `ID_chapter`) VALUES
(1, 1),
(2, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `image_content`
--

CREATE TABLE `image_content` (
  `ID_img` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image_content`
--

INSERT INTO `image_content` (`ID_img`, `path`) VALUES
(1, 'https://drive.google.com/uc?export=view&id=1IsoWDKMZy5QFxwv8TEtXC6q4otoi_cId'),
(2, 'https://drive.google.com/uc?export=view&id=1jdCxfMFlsPC7cUj5Qke5ZHZ-tgQqeo-0'),
(3, 'https://drive.google.com/uc?export=view&id=1xmJzl34XbTLtGw78xXQnyxWBzv6bguOh'),
(4, 'https://drive.google.com/uc?export=view&id=17f61NXBh4p5I0PHlgoj-W4vh8veYX1JG'),
(5, 'https://drive.google.com/uc?export=view&id=1L-Oyy-ivphI_1At9CYIcMmTGKefPVfIL'),
(6, 'https://drive.google.com/uc?export=view&id=1K52q5PCmI4t_atAzguQeVRbfYw9nziNS'),
(7, 'https://drive.google.com/uc?export=view&id=10fOGwmzkT4PVugqj4iPBVqFoNatwMhes'),
(8, 'https://drive.google.com/uc?export=view&id=1eSVdVHW7z_gRfz-V4A-cCUs6FCHkuEIV'),
(9, 'https://drive.google.com/uc?export=view&id=1h79eEr8G2qKo6QPzBuQTm98xj3FjGcZs'),
(10, 'https://drive.google.com/uc?export=view&id=1mRq-PS406Ia3RwDPQ8WJTzVSU9Kj3G4r'),
(11, 'https://drive.google.com/uc?export=view&id=1lEW8EIMev2Z3bJq1m9zhsVUlqXJ2PFto'),
(12, 'https://drive.google.com/uc?export=view&id=1MhPk7P8aRxcUPLCUSkYnCmK8glN2cZ26'),
(13, 'https://drive.google.com/uc?export=view&id=15G4jaFHZfZ30p2-ogLud_7xp-nsiROV_'),
(14, 'https://drive.google.com/uc?export=view&id=1Gxqj4HFOFcmsHBohcEA-AyM8L0BpQo0f'),
(15, 'https://drive.google.com/uc?export=view&id=1JOVdwAPCXPCtzNGpBCILzt93-wc5Jguz'),
(16, 'https://drive.google.com/uc?export=view&id=13f1il8xPS0UL26T-gkuqVAml4dg2y1Fr'),
(17, 'https://drive.google.com/uc?export=view&id=1hiailg5_z8oGrmky4hEZRoePjRaA3hR_'),
(18, 'https://drive.google.com/uc?export=view&id=1HKP0UDw2wuU-3vKAEHHwX2tfILAmUdDG'),
(19, 'https://drive.google.com/uc?export=view&id=1RCAX18uBNS7pAM-s_caRGFAdC4RE-3L0'),
(20, 'https://drive.google.com/uc?export=view&id=13jzmQuqBit8malHye-hU-aQPMc5t4ucs'),
(21, 'https://drive.google.com/uc?export=view&id=1ed6SItL1w8Toe61dqMk0wdNe4l7RR888'),
(22, 'https://drive.google.com/uc?export=view&id=17cdsN0sa4g2_yE9lujNz3Ay1kDFljAXi'),
(23, 'https://drive.google.com/uc?export=view&id=1iur9isMDnYqanN5su29JyrCi81epAo9j'),
(24, 'https://drive.google.com/uc?export=view&id=1DYYn7NP3TW9oYUQzJ73P5eZ8tgcbppjr'),
(25, 'https://drive.google.com/uc?export=view&id=1XTbQZx-z4fnnMKJ2f0QkVvR3rpLpawFF'),
(26, 'https://drive.google.com/uc?export=view&id=1PTcf_NLVA90e_kpWa72qxKETjKc-xguw'),
(27, 'https://drive.google.com/uc?export=view&id=1GCg7x74gyY-BMAd53lMvvsQ3QE1lfVoi'),
(28, 'https://drive.google.com/uc?export=view&id=1EcDcc2dv5Lp8zREn0h1EtnA7ezNNy0Tb'),
(29, 'https://drive.google.com/uc?export=view&id=1Rx0gzxqhlFeZZPYsp6EZJXufR_SLTxkd'),
(30, 'https://drive.google.com/uc?export=view&id=1D_cMhJuXiptxQxHr7CWqHSpLpKsMhymY'),
(31, 'https://drive.google.com/uc?export=view&id=1kZqLDzGkNQaCDMjnihzAB3HZzeCcjMVK'),
(32, 'img1_of_chapter1_test1'),
(33, 'img2_of_chapter1_test1'),
(34, 'img3_of_chapter1_test1'),
(35, 'img1_of_chapter2_test1'),
(36, 'img2_of_chapter2_test1');

-- --------------------------------------------------------

--
-- Table structure for table `manga`
--

CREATE TABLE `manga` (
  `ID_manga` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `genre` varchar(500) NOT NULL,
  `numberOfRead` int(11) NOT NULL,
  `thumbnail` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manga`
--

INSERT INTO `manga` (`ID_manga`, `name`, `author`, `genre`, `numberOfRead`, `thumbnail`, `description`) VALUES
(1, 'Monster', 'Urasawa Naoki', 'action, drama', 0, 'https://drive.google.com/uc?export=view&id=1tAar0d3LlUktrYWcIuXownEM8r91cf4G', 'Trong thế giới ngành y đầy dẫy bất công, mạng sống con người không bình đẳng, các bệnh nhân nổi tiếng và nhiều tiền được ưu tiên chữa trị, bác sĩ Tenma ngày nọ quyết định cãi lại cấp trên, làm theo lương tâm mình để cứu sống một bé trai mồ côi. Không ngờ hành động này lại vô tình thả một con quái vật mất tính người ra ngoài và gây ra nhiều hậu quả khủng khiếp mười năm sau.'),
(2, 'Fire punch', 'Fujimoto Tatsuki', 'action, drama, supernatural', 0, 'https://drive.google.com/uc?export=view&id=1nLn2zDGK62V_urit46DNl8bF1tPpJBEZ', 'The world was turned by the \"Ice Witch\" into that of snow, starvation and madness. Freezing people naturally seeked flame. The \"blessing\" that was bestowed upon Agni, is it a hope or maybe a curse?'),
(3, 'Doraemon', 'Fujiko F. Fujio', 'comedy, slice of life, fantasy', 0, 'https://drive.google.com/uc?export=view&id=1Qb9T-SLuT6qWRwUT490qSq28HLaQEV55', 'Đô-rê-mon thì chắc ai cũng biết rồi :v'),
(4, 'Boku no Hero Academia', 'Horikoshi Kouhei', 'action, fantasy, comedy', 0, 'https://drive.google.com/uc?export=view&id=19fcvFxecb7gpEXm_ASHFKvCtf6b4_0FL', 'The appearance of \"quirks,\" newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shape-shifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual. Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku\'s unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might\'s quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor.\r\nEnduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year\'s freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainou'),
(5, 'Spy x family', 'Endou Tatsuya', 'comedy, slice of life, action, historical', 0, 'https://drive.google.com/uc?export=view&id=1zc1qObiHqGC-huYWEk5KJ_ILyq9JJoUv', 'The master spy codenamed has spent his days on undercover missions, all for the dream of a better world. But one day, he receives a particularly difficult new order from command. For his mission, he must form a temporary family and start a new life?! A Spy/Action/Comedy about a one-of-a-kind family!'),
(6, 'Rurounin kenshin', 'Watsuki Nobuhiro', 'action, drama, historical, martial art', 0, 'https://drive.google.com/uc?export=view&id=1ak1eMDM8k8uT83CYPWZoKjCv7_9zisU7', '140 years ago in Kyoto, with the coming of the American \"Black Ships,\" there arose a warrior who, felling men with his bloodstained blade, gained the name Hitokiri, man slayer! His killer blade helped close the turbulent Bakumatsu era and slashed open the progressive age known as Meiji . Then he vanished, and with the flow of years, became legend.\r\nTen years later, a young woman\'s life is saved when she happens upon a strange wandering swordsman named Kenshin. The young woman accepts the wanderer into her dojo, despite his secretive past, and the two become fast friends. As their relationship grows, they meet and make more friends (as well as enemies), and they grow accustomed to their life together.\r\nHowever, one man can only run from his past for so long, and it isn\'t long before Kenshin is forced to face the life he thought he\'d left behind. Now, together with his friends, he must fight the ghosts of his past if he wants the people he loves to have any kind of future.'),
(7, 'Gantz', 'Oku Hiroya', 'action, drama, horror, supernatural, romance', 0, 'https://drive.google.com/uc?export=view&id=184IZvVB_fcKnonwSS7G8Xscaz0BOmXnN', 'Somewhere in Tokyo, there is a room. In that room is a black sphere. Periodically, people who should otherwise have died are transferred to the room. There, the sphere gives them special suits and weapons and sends them out on a mission to kill aliens here on Earth. While these missions take place, the rest of the world is largely oblivious to them. These missions are lethal and few participants survive them. The sphere calls the shots and it\'s not the slightest bit nice. Its name: Gantz.'),
(8, 'Death note', 'Ohba Tsugumi, Obata Takeshi', 'drama, fantasy, supernatural', 0, 'https://drive.google.com/uc?export=view&id=1ib-bCctwQg31JlDuMNz2lfhXcTYuXcTI', 'Light Yagami is an ace student with great prospects--and he\'s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami. Any human whose name is written in the notebook dies, and now Light has vowed to use the power of the Death Note to rid the world of evil. But when criminals begin dropping dead, the authorities send the legendary detective L to track down the killer. With L hot on his heels, will Light lose sight of his noble goal or his life?'),
(9, 'Chainsaw man', 'Fujimoto Tatsuki', 'action, drama, supernatural', 0, 'https://drive.google.com/uc?export=view&id=1c8nwD0xWivV0bX_qEMuYgGuUFRiV2bS2', 'There\'s a new hero in town and he\'s got a bad attitude and a chainsaw dog demon! A dangerous combo.'),
(10, 'Berserk', 'Miura Kentaro', 'action, drama, historical, fantasy, martial art', 0, 'https://drive.google.com/uc?export=view&id=1FhZnw47nFtEbao8Snch3LvhRgH80L6S9', 'Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, and also vengeance against the man who branded him as an unholy sacrifice. Aided only by his titanic strength gained from a harsh childhood lived with mercenaries, a gigantic sword, and an iron prosthetic left hand, Guts must struggle against his bleak destiny, all the while fighting with a rage that might strip him of his humanity.');

-- --------------------------------------------------------

--
-- Table structure for table `reader`
--

CREATE TABLE `reader` (
  `ID_reader` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `pwd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reader`
--

INSERT INTO `reader` (`ID_reader`, `username`, `pwd`) VALUES
(1, 'test1', '123'),
(2, 'reader2', '123456'),
(3, 'reader3', '123456'),
(4, 'bla', '123'),
(9, 'test2', '123'),
(16, 'hoanganh', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`ID_chapter`);

--
-- Indexes for table `comment_on_manga`
--
ALTER TABLE `comment_on_manga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cmt_manga` (`ID_manga`),
  ADD KEY `fk_cmt_reader` (`ID_reader`);

--
-- Indexes for table `contain`
--
ALTER TABLE `contain`
  ADD KEY `chapter_has_img_fk` (`ID_chapter`),
  ADD KEY `img_in_chapter_fk` (`ID_img`);

--
-- Indexes for table `has_chapter`
--
ALTER TABLE `has_chapter`
  ADD KEY `manga_has_chapter_fk` (`ID_manga`),
  ADD KEY `chapter_in_manga` (`ID_chapter`);

--
-- Indexes for table `image_content`
--
ALTER TABLE `image_content`
  ADD PRIMARY KEY (`ID_img`);

--
-- Indexes for table `manga`
--
ALTER TABLE `manga`
  ADD PRIMARY KEY (`ID_manga`);

--
-- Indexes for table `reader`
--
ALTER TABLE `reader`
  ADD PRIMARY KEY (`ID_reader`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chapter`
--
ALTER TABLE `chapter`
  MODIFY `ID_chapter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comment_on_manga`
--
ALTER TABLE `comment_on_manga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `image_content`
--
ALTER TABLE `image_content`
  MODIFY `ID_img` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `manga`
--
ALTER TABLE `manga`
  MODIFY `ID_manga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reader`
--
ALTER TABLE `reader`
  MODIFY `ID_reader` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment_on_manga`
--
ALTER TABLE `comment_on_manga`
  ADD CONSTRAINT `fk_cmt_manga` FOREIGN KEY (`ID_manga`) REFERENCES `manga` (`ID_manga`),
  ADD CONSTRAINT `fk_cmt_reader` FOREIGN KEY (`ID_reader`) REFERENCES `reader` (`ID_reader`);

--
-- Constraints for table `contain`
--
ALTER TABLE `contain`
  ADD CONSTRAINT `chapter_has_img_fk` FOREIGN KEY (`ID_chapter`) REFERENCES `chapter` (`ID_chapter`),
  ADD CONSTRAINT `img_in_chapter_fk` FOREIGN KEY (`ID_img`) REFERENCES `image_content` (`ID_img`);

--
-- Constraints for table `has_chapter`
--
ALTER TABLE `has_chapter`
  ADD CONSTRAINT `chapter_in_manga` FOREIGN KEY (`ID_chapter`) REFERENCES `chapter` (`ID_chapter`),
  ADD CONSTRAINT `manga_has_chapter_fk` FOREIGN KEY (`ID_manga`) REFERENCES `manga` (`ID_manga`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

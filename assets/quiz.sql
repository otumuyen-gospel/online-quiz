-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 26, 2023 at 02:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`) VALUES
(21, 'otumsgosepel@gmail.com', '25d55ad283aa400af464c76d713c07ad');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(11) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer` varchar(100) NOT NULL,
  `option1` varchar(100) NOT NULL,
  `option2` varchar(100) NOT NULL,
  `option3` varchar(100) NOT NULL,
  `option4` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `question`, `answer`, `option1`, `option2`, `option3`, `option4`) VALUES
(14, 'HOW ARE YOU?', 'FINE', 'FINE', 'YOU', 'ME', 'YES'),
(15, 'DO YOU LOVE MUSIC?', 'YES', 'FINE', 'YOU', 'ME', 'YES'),
(16, 'HOW ARE YOU?', 'FINE', 'FINE', 'YOU', 'ME', 'YES'),
(17, 'DO YOU LOVE MUSIC?', 'YES', 'FINE', 'YOU', 'ME', 'YES'),
(18, 'HOW ARE YOU?', 'FINE', 'FINE', 'YOU', 'ME', 'YES'),
(19, 'DO YOU LOVE MUSIC?', 'YES', 'FINE', 'YOU', 'ME', 'YES'),
(20, 'HOW ARE YOU?', 'FINE', 'FINE', 'YOU', 'ME', 'YES'),
(21, 'DO YOU LOVE MUSIC?', 'YES', 'FINE', 'YOU', 'ME', 'YES'),
(22, 'HOW ARE YOU?', 'FINE', 'FINE', 'YOU', 'ME', 'YES'),
(23, 'DO YOU LOVE MUSIC?', 'YES', 'FINE', 'YOU', 'ME', 'YES');

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `id` int(100) NOT NULL,
  `date` date NOT NULL,
  `userid` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`id`, `date`, `userid`, `score`) VALUES
(58, '2023-12-26', 21, 20),
(59, '2023-12-26', 21, 20),
(60, '2023-12-26', 21, 10),
(61, '2023-12-26', 21, 30),
(62, '2023-12-26', 21, 20),
(63, '2023-12-26', 21, 10),
(64, '2023-12-26', 21, 20),
(65, '2023-12-26', 21, 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

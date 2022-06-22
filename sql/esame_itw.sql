-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Creato il: Giu 22, 2022 alle 19:38
-- Versione del server: 8.0.28
-- Versione PHP: 8.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esame_itw`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `documents`
--

CREATE TABLE `documents` (
  `id` int NOT NULL,
  `owner` int NOT NULL,
  `parent` int NOT NULL,
  `name` text NOT NULL,
  `summary` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `type` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `url` text,
  `created` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dump dei dati per la tabella `documents`
--

INSERT INTO `documents` (`id`, `owner`, `parent`, `name`, `summary`, `type`, `url`, `created`) VALUES
(1, 1, 1, 'Documento 1.pdf', 'Documento 1 testo di prova', 'pdf', '/uploads/Documento%201.pdf', '2022-05-22 01:07:53'),
(2, 1, 1, 'Documento 2.pdf', 'Documento 2 di prova', 'pdf', '/uploads/Documento%202.pdf', '2022-05-22 01:43:45');

-- --------------------------------------------------------

--
-- Struttura della tabella `folders`
--

CREATE TABLE `folders` (
  `id` int NOT NULL,
  `owner` int NOT NULL,
  `parent` int DEFAULT NULL,
  `name` text NOT NULL,
  `created` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dump dei dati per la tabella `folders`
--

INSERT INTO `folders` (`id`, `owner`, `parent`, `name`, `created`) VALUES
(1, 1, NULL, 'Cartella 1', '2022-05-22 01:19:55'),
(2, 1, NULL, 'Cartella 2', '2022-05-22 01:42:37'),
(3, 1, 1, 'Cartella 11', '2022-05-22 21:16:07'),
(4, 1, 1, 'Cartella 12', '2022-05-22 21:16:07'),
(5, 1, NULL, 'Cartella 3', '2022-06-22 16:16:18'),
(6, 1, 1, 'Cartella 13', '2022-06-22 16:16:49'),
(7, 1, 2, 'Cartella 21', '2022-06-22 16:16:49'),
(8, 1, 5, 'Cartella 31', '2022-06-22 16:16:59');

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'riccardosacco', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'riccardosacco2', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OWNER_DOC` (`owner`),
  ADD KEY `PARENT_FOLDER_DOC` (`parent`);

--
-- Indici per le tabelle `folders`
--
ALTER TABLE `folders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PARENT_FOLDER` (`parent`),
  ADD KEY `OWNER` (`owner`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `folders`
--
ALTER TABLE `folders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `OWNER_DOC` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `PARENT_FOLDER_DOC` FOREIGN KEY (`parent`) REFERENCES `folders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limiti per la tabella `folders`
--
ALTER TABLE `folders`
  ADD CONSTRAINT `OWNER` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `PARENT_FOLDER` FOREIGN KEY (`parent`) REFERENCES `folders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


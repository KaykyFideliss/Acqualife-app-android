-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/08/2025 às 22:03
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `acqualife`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_user` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp(),
  `data_atualizacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ativo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_user`, `nome`, `telefone`, `email`, `senha`, `data_criacao`, `data_atualizacao`, `ativo`) VALUES
(15, 'KAYKY FIDELIS HILARIO', '31995156341', 'kayky.fid@gmail.com', '$2y$10$SvzyzGBLmSE6PkPu2Ql1yeQLVGMJyy1q.ruE6c7c0o5EPqaN9H6Rq', '2025-08-23 03:00:40', '2025-08-23 03:00:40', 1),
(16, 'Pele celt', '11111111111', 'kayk111y.fid@gmail.com', '$2y$10$chA4zrUaYJGjjW1ifuiKpuvE4cQ4wiF6yM315wN9dx9XsY3veVgSm', '2025-08-23 03:19:37', '2025-08-23 03:19:37', 1),
(17, 'camarao', '44444444444', 'joao@gmail.com', '$2y$10$Zh61pjnQuRtV3RqwXXoG5et.I.KrlcOnbkBk/Tc/Lx605fV1f8i7G', '2025-08-23 03:24:45', '2025-08-23 03:24:45', 1),
(18, 'cortuar', '55555555555', 'cinco@gmail.com', '$2y$10$oauPIAvk8P6Mwh.MrVLXo.GWPor/F5LBAbTY6TDzto9c25eClF2eq', '2025-08-23 03:25:23', '2025-08-23 03:25:23', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

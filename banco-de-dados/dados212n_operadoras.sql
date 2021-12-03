-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: dados212n
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `operadoras`
--

DROP TABLE IF EXISTS `operadoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operadoras` (
  `ope_codigo` int NOT NULL AUTO_INCREMENT,
  `ope_nome` varchar(40) DEFAULT NULL,
  `ope_fantasia` varchar(20) DEFAULT NULL,
  `ope_prefixo` int DEFAULT NULL,
  `ope_cidade` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ope_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operadoras`
--

LOCK TABLES `operadoras` WRITE;
/*!40000 ALTER TABLE `operadoras` DISABLE KEYS */;
INSERT INTO `operadoras` VALUES (1,'Claro LTDA','Claro que não',16,'Franca'),(2,'Cemig LTDA','Cemig',35,'Cassia'),(3,'Vivo LTDA','Vivo',11,'Campinas'),(4,'Telefonica LTDA','Telefonica',11,'Franca'),(5,'Telefonica LTDA','Telefonica',11,'Franca'),(6,'Telefonica LTDA','Telefonica',11,'Franca'),(7,'Telefonica LTDA','Telefonica',11,'Franca'),(8,'Telefonica LTDA','Telefonica',11,'Franca'),(9,'Telefonica LTDA','Telefonica',11,'Franca'),(10,'Telefonica LTDA','Telefonica',11,'Franca'),(11,'Telefonica LTDA','Telefonica',11,'Franca'),(12,'Telefonica LTDA','Telefonica',11,'Franca'),(13,'Telefonica LTDA','Telefonica',11,'Franca'),(14,'Telefonica LTDA','Telefonica',11,'Franca'),(15,'Telefonia 1234','Ajax',25,'Ribs Black');
/*!40000 ALTER TABLE `operadoras` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-03  9:30:01

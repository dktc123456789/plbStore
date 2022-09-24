-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2022 at 07:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE `catalog` (
  `idCate` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catalog`
--

INSERT INTO `catalog` (`idCate`, `name`) VALUES
(1, 'Sách thể thao'),
(2, 'Sách kinh tế'),
(3, 'Sách ngoại ngữ');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `images` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` double NOT NULL,
  `year` double NOT NULL,
  `author` varchar(200) NOT NULL,
  `isbn` varchar(255) NOT NULL,
  `idCate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `images`, `description`, `price`, `year`, `author`, `isbn`, `idCate`) VALUES
(1, 'Tiếng Anh giao tiếp', '1648710320672-english_3.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 70000, 2022, 'Barrack Obama', '978-1980842439 ', 3),
(2, 'Ngữ pháp tiếng Anh', '1649735380056-ifix_2.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 7000, 2022, 'Barrack Obama', '978-1980842439 ', 3),
(6, 'Cấu trúc tiếng Anh ', '1648660470816-english_1.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 10000, 2022, 'Barrack Obama', '978-1980842439 ', 3),
(7, 'Ngữ pháp tiếng Anh', '1648660857435-english_5.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 70000, 2022, 'Barrack Obama', '978-1980842439 ', 3),
(8, 'Minimap tiếng Anh', '1648660889520-english_4.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 10000, 2022, 'Barrack Obama', '978-1980842439 ', 3),
(9, 'Học chơi cờ vua', '1648661066511-chess_1.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 70000, 2022, 'Barrack Obama', '978-1980842439 ', 1),
(10, 'Học chơi cờ vua', '1648661098485-chess_2.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 70000, 2022, 'Barrack Obama', '978-1980842439 ', 1),
(11, 'Học Yoga', '1648661123744-yoga_1.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 70000, 2022, 'Barrack Obama', '978-1980842439 ', 1),
(12, 'Học chơi golf', '1648661159264-golf_1.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 10000, 2022, 'Barrack Obama', '978-1980842439 ', 1),
(13, 'Học chơi golf', '1648661188224-golf_2.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 10000, 2022, 'Barrack Obama', '978-1980842439 ', 1),
(14, 'Học làm giàu 1', '1648661257920-kinhte_1.jpg', 'Sách học làm giàuThe world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 777, 2022, 'Barrack Obama', '978-1980842439 ', 2),
(15, 'Học làm giàu 2', '1648661275057-kinhte_2.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 7000, 2022, 'Barrack Obama', '978-1980842439 ', 2),
(16, 'Học làm giàu 3', '1648661288800-kinhte_3.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 7000, 2022, 'Barrack Obama', '978-1980842439 ', 2),
(17, 'Học làm giàu 4', '1648661304665-kinhte_4.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 10000, 2022, 'Barrack Obama', '978-1980842439 ', 2),
(18, 'Học làm giàu 5', '1648661319426-kinhte_5.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 7000, 2022, 'Barrack Obama', '978-1980842439 ', 2),
(25, 'Từ điển Oxford ', '1649956820837-oxford_1.jpg', 'The world\'s best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world\'s best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This \'with answers\' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.\r\n\r\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 10000, 2022, 'Barrack Obama', '978-1980842439', 3);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `review_count` int(11) DEFAULT NULL,
  `average_score` double DEFAULT NULL,
  `review_content` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `review_count`, `average_score`, `review_content`) VALUES
(1, NULL, 7, 'macOS Monterey unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.13 And work across Mac and your other Apple devices with Universal Control (Beta). macOS Monterey also includes industry-leading privacy features and best‑in‑class security.'),
(2, NULL, 6, 'macOS Monterey unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.13 And work across Mac and your other Apple devices with Universal Control (Beta). macOS Monterey also includes industry-leading privacy features and best‑in‑class security.'),
(3, NULL, 7, 'macOS Monterey unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.13 And work across Mac and your other Apple devices with Universal Control (Beta). macOS Monterey also includes industry-leading privacy features and best‑in‑class security.'),
(4, NULL, 7, 'macOS Monterey unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.13 And work across Mac and your other Apple devices with Universal Control (Beta). macOS Monterey also includes industry-leading privacy features and best‑in‑class security.'),
(5, NULL, 7, 'macOS Monterey unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.13 And work across Mac and your other Apple devices with Universal Control (Beta). macOS Monterey also includes industry-leading privacy features and best‑in‑class security.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `typeUser` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `fullname`, `phone`, `age`, `gender`, `password`, `typeUser`, `createdAt`, `updatedAt`) VALUES
('aaa@aaa.com', 'Barrack Obama ', 123456789, 1000, 1, '$2a$12$I4VI1VbilWSGSmNlkFPD8eaYMeXCqFTbzEzo6UTQgeoRFTTfV.68.', 0, '2022-04-13 10:32:35', '2022-04-14 17:50:00'),
('obama@usa.com', 'Barrack Obama', 123456789, 1000, 1, '$2a$12$MF882MwQ6qRqW0p2LvNpR.SaeNcVPdNJ3lHnxeP2.qWGGMOt.Fgpa', 0, '2022-04-12 07:23:21', '2022-04-12 07:23:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`idCate`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalog`
--
ALTER TABLE `catalog`
  MODIFY `idCate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

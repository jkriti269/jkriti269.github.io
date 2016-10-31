<!DOCTYPE html>
<?php 
include("functions/functions.php");
?>
<html>
	<head>
		<title>My online Shop</title>
		
		<link rel="stylesheet" href="styles/style.css" media="all"/>
	</head>
<body>
	<!-- Main Container starts here -->
	<div class="main_wrapper">
	
		<!-- Header starts here -->
		<div class="header_wrapper">
			
			<a href="index.php"><img id="logo" src="images/logo.png" />
			<img id="banner" src="images/ad_banner.jpg" />
		
		</div>
		<!-- Header ends here -->
		
		<!-- Navigation bar starts here -->
		<div class="menubar">	
         
			<ul id="menu">
				<li><a href="index.php">Home</a></li>
				<li><a href="all_products.php">All Products</a></li>
				<li><a href="customer/my_account.php">My Account</a></li>
				<li><a href="#">Sign Up</a></li>
				<li><a href="cart.php">Shopping Cart</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		
		<div id="form">
			<form method="get" action="results.php" enctype="multipart/form.data">
				<input type="text" name="User_query" placeholder="Search a product" />
				<input type="submit" name="Search" value="Search"/>
				
			</form>
		</div>
		
		</div>
		
		
		<!-- Navigation bar ends here -->
		
		<!-- Content wrapper starts here -->
		<div class="content_wrapper">
		
		
		<div id="sidebar">
		
			<div id="sidebar_title">Categories</div>
			
			<ul id="cats">
			
			<?php getCats(); ?>
			
			
			
			
			</ul>
				
			
			<div id="sidebar_title">Brands</div>
			
			<ul id="cats">
				<?php getBrands(); ?>
				
			
			
			</ul>
				
				
		
		
		
		</div>
		
		<div id="content_area">
		
		<?php cart(); ?>
		
		<div id="shopping_cart">
			<span style="float:right; font-size:18px; padding:5px; line-height:40px;">
			
			
			Welcome Guest! <b style="color:yellow">Shopping Cart</b> Total Items: Total Price: <a href="cart.php" style="color:yellow" >Go to Cart</a>
			
			
			</span>
		
		</div>
		
		
		
			<div id="products_box">
			
			<?php getPro(); ?>
			<?php getCatPro(); ?>
			<?php getBrandsPro(); ?>
			
			</div>
		
		</div>
		
		</div>
		
		<!-- Content Wrapper ends here -->
		
		<div id="footer">
		<h2 style="text-align:center; padding-top:30px;">&copy; 2014 by www.kriti.com</h2>
		</div>
	
	</div>
	<!-- Main Container ends here -->
	
	
</body>
</html>
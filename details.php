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
			
			<img id="logo" src="images/logo.png" />
			<img id="banner" src="images/ad_banner.jpg" />
		
		</div>
		<!-- Header ends here -->
		
		<!-- Navigation bar starts here -->
		<div class="menubar">	
         
			<ul id="menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">All Products</a></li>
				<li><a href="#">My Account</a></li>
				<li><a href="#">Sign Up</a></li>
				<li><a href="#">Shopping Cart</a></li>
				<li><a href="#">Sign Up</a></li>
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
		
		<div id="shopping_cart">
			<span style="float:right; font-size:18px; padding:5px; line-height:40px;">
			
			
			Welcome Guest! <b style="color:yellow">Shopping Cart</b> Total Items: Total Price: <a href="cart.php" style="color:yellow" >Go to Cart</a>
			
			
			</span>
		
		</div>
		
		
	
	<?php
	if(isset($_GET['pro_id'])){
		
		$product_id = $_GET['pro_id'];
			
		$get_pro="select * from products where product_id='$product_id'";
	//local variable get_pro equal to a query in which we are getting 6 of the total products
	
	$run_pro=mysqli_query($con,$get_pro);
	//to execute query
	
	while($row_pro=mysqli_fetch_array($run_pro))
	{
		$pro_id = $row_pro['product_id'];
		//to get the product id in a variable named pro_id
		
		
		$pro_title = $row_pro['product_title'];
		$pro_price = $row_pro['product_price'];
		$pro_image = $row_pro['product_image'];
		$pro_desc = $row_pro['product_desc'];
		
		//we do not need product descrption and keywords in our homepage
		
		echo "
				<div id='single_product'>
				
					<h3>$pro_title</h3>
					<img src='admin_area/product_images/$pro_image' width='400' height='300' />
					<p><b> Rs $pro_price </b></p>
					<p>$pro_desc</p>
					<a href='index.php' style='float:left'>Go Back</a>
					
					<a href='index.php?pro_id=$pro_id'><button style='float:right'>Add to Cart</button></a>
				</div>
		
		
		";
	}
	}
	?>
			
		
			
		
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
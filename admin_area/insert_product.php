<!DOCTYPE html>

<?php

include("includes/db.php");

?>
<html>
	<head>
		<title>Inserting Product</title>
		
	</head>
	
<body bgcolor="skyblue">


	<form action="insert_product.php" method="post" enctype="multipart/form-data">
		
		<table align="center" width="600" border="2" bgcolor="orange">
		
			<tr align="center">
				<td colspan="7"><h2>Insert New Post Here</h2></td>
			</tr>
			
			<tr>
				<td align="right"><b>Product Title:</b></td>
				<td><input type="text" name="product_title" size="60" /></td>
				
			</tr>
			
			<tr>
				<td align="right"><b>Product Category:</b></td>
				<td>
				<select name="product_cat">
					<option>Select a Category</option>
					<?php
		$get_cats = "select * from categories";
	
		$run_cats = mysqli_query($con,$get_cats);
	
		while ($row_cats=mysqli_fetch_array($run_cats)){
		
		$cat_id = $row_cats['cat_id'];
		$cat_title = $row_cats['cat_title'];
		
		echo "<option value='$cat_id'>$cat_title</option>";
					}
	
					
					?>
				</select>
				
				
				</td>
				
			</tr>
			
			<tr>
				<td align="right"><b>Product Brand:</b></td>
				<td>
				<select name="product_brand">
					<option>Select a Brand </option>
					<?php
					$get_brands = "select * from brands";
	
					$run_brands = mysqli_query($con,$get_brands);
	
					while ($row_brands=mysqli_fetch_array($run_brands)){
		
					$brand_id = $row_brands['brand_id'];
					$brand_title = $row_brands['brand_title'];
		
					echo "<option value='$brand_id'>$brand_title</option>";
				}
				?>
				</select>
				</td>
				
			</tr>
			
			<tr>
				<td align="right"><b>Product Image:</b></td>
				<td><input type="file" name="product_image" /></td>
			
			</tr>
			
			<tr>
				<td align="right"><b>Product Price:</b></td>
				<td><input type="text" name="product_price" /></td>
				
			</tr>
			
			<tr>
				<td align="right"><b>Product Description:</b></td>
				<td><textarea name="product_desc" cols="20" rows="10" ></textarea> </td>
				
			</tr>
			
			<tr>
				<td align="right"><b>Product Keywords:</b></td>
				<td><input type="text" name="product_keywords" size="50" /></td>
				
			</tr>
			
			<tr>
				<tr align="center">
				<td colspan="7"><input type="submit" name="insert_post" value="Insert Product Now" /></td>
				
			</tr>
		</table>
	</form>
</body>
</html>


<?php
	//inserting data using php
  
	if(isset($_POST['insert_post'])){
		//isset=if something is set or something is active 
		//we are targeting here the name we have given to our submit button 
		//i.e. insert_post 
		//Using post method (method of the form is already defined as $_POST)
		//it says post this i.e. post insert_post which is Clicked then rest of 
		//the code inside if statement is executed
		//if nothing is happened to the insert_post then do not execute the code
		//getting the text data from the fields
		//if (isset()) - this is the function
		//$_POST is global predefined variable
		//inside $_POST[ ] we are defining a value or a point from the form or the page
		//if that thing is clicked or set then the statmnt under if condtns will b executed
		
		
	 
		$product_title = $_POST['product_title'];
		//we save this local variable product_title in another variable $_POST
		//i.e. we are getting this value of local variable from Post method
		$product_cat = $_POST['product_cat'];
		$product_brand = $_POST['product_brand'];
		$product_price = $_POST['product_price'];
		$product_desc = $_POST['product_desc'];
		$product_keywords = $_POST['product_keywords'];
		
		//we have taken the data from the text fields and stored them in local variable
		
		//getting the image from the fields
		$product_image = $_FILES['product_image']['name'];
		//an image has multiple things associated with it its name,style,size 
		//so we need name to specify an image
		$product_image_tmp = $_FILES['product_image']['tmp_name'];
		//we need a temporary name of the image for our server 
		//for the system image name will be tmp_name which will b default name
		
		//echo $insert_product = "insert into products (product_cat,product_brand,product_title,product_price,product_desc,product_image,product_keywords) values ('$product_cat','$product_brand','$product_title','$product_price','$product_desc','$product_image','$product_keywords')";
		//to view the query 
		//we need to upload the image to the folder
		move_uploaded_file($product_image_tmp,"product_images/$product_image"); 
		//we use a fun to upload image $product_image to the folder product_images
		
		
		$insert_product = "insert into products (product_cat,product_brand,product_title,product_price,product_desc,product_image,product_keywords) values ('$product_cat','$product_brand','$product_title','$product_price','$product_desc','$product_image','$product_keywords')";
		
		//to execute the query
		$insert_pro = mysqli_query($con, $insert_product);
		//two parameters are 1.connection variable and second is the query we like to fire
		if($insert_pro){
			
			echo "<script>alert('Product has been inserted')</script>";
			//now we are writing javascript code
			//to give somekind of msg to the person we used alert
			
			echo "<script>window.open('insert_product.php','_self')</script>";
			//now we are directing the person to the same page again after insert data
		}			
	}
?>
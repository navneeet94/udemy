const homePage = `
<!doctype html>
<html lang="en">
<head>
<title>Page Not-Found</title>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="container pt-5 pb-5">
<h1>Hello welcome to Proxima Nova Website</h1>
<p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique, distinctio hic delectus sint, repellendus cum assumenda ipsa dolorum laborum dignissimos eius.</p>
<form action="/create-user" method="POST" class="card p-4 shadow text-center align-items-center">
<input type="text" class="form-control" name="username" placeholder="Enter user name" />
<button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>
</div>
</body>
</html>
`

module.exports.html = homePage
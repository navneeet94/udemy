const pageNotFound = `
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
<div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="jumbotron text-center w-100" style="max-width: 615px;">
        <h1 class="mb-4">Page Not Found</h1>
        <a href="/" class="btn btn-primary">Go Back</a>
    </div>
</div>
</body>
</html>
`

module.exports.html = pageNotFound
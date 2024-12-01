<?php
include 'config.php';

// Fetch all videos
$stmt = $pdo->query("SELECT * FROM videos ORDER BY id DESC");
$videos = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show YouTube Videos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/realestate.css">
    <link rel="stylesheet" href="all-village.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />



    <style>
        .video-title {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            margin-top: 10px;
        }
        h2{
            margin-top:120px;
        }

        
    </style>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.html"><img src="assets/images/logo/builditnew  logo-02.png" alt="" class="logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../index.html">HOME</a>
                    </li>
    
                    <!-- Real Estate Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="../realestate.html" id="realestateDropdown" role="button" aria-expanded="false">
                            REALESTATE
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="realestateDropdown">
                            <li><a class="dropdown-item" href="../realestate-location-wise/realestate-location.html">REALESTATE NEAR ME</a></li>
                        </ul>
                    </li>
    
                    <!-- Interior Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="../interior.html" id="interiorDropdown" role="button" aria-expanded="false">
                            INTERIOR 
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="interiorDropdown">
                            <li><a class="dropdown-item" href="../interior-locatrion-wise/interior-location.html">INTERIOR NEAR ME</a></li>
                        </ul>
                    </li>
    
                    <!-- Construction Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="../construction/construction.html" id="constructionDropdown" role="button" aria-expanded="false">
                            CONSTRUCTION
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="constructionDropdown">
                            <li><a class="dropdown-item" href="../construction-location-wise/construction-location.html">CONSTRUCTION NEAR ME</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   
<div class="container">
    <h2 class="text-center mb-4 ">All YouTube Videos</h2>
    <div class="row g-4">
        <?php foreach ($videos as $video): ?>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card border-0 shadow-sm">
                    <div class="ratio ratio-16x9">
                        <iframe src="<?= htmlspecialchars(str_replace('watch?v=', 'embed/', $video['youtube_link'])); ?>" 
                                frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="card-body p-2">
                        <p class="video-title"><?= htmlspecialchars($video['title']); ?></p>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<div class="footer-bottom"></div>

<script src="script.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

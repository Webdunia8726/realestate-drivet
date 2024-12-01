<?php
session_start();
include 'config.php';

// Authenticate user
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}

// Handle video addition
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_video'])) {
    $title = $_POST['title'];
    $youtube_link = $_POST['youtube_link'];

    if (!filter_var($youtube_link, FILTER_VALIDATE_URL) || strpos($youtube_link, 'youtube.com/watch') === false) {
        $error = "Please enter a valid YouTube link.";
    } else {
        $stmt = $pdo->prepare("INSERT INTO videos (title, youtube_link) VALUES (:title, :youtube_link)");
        $stmt->execute(['title' => $title, 'youtube_link' => $youtube_link]);
        $success = "Video added successfully!";
    }
}

// Handle video deletion
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];

    // Delete video from the database
    $stmt = $pdo->prepare("DELETE FROM videos WHERE id = :id");
    $stmt->execute(['id' => $id]);

    // Redirect to avoid re-triggering the delete action
    header("Location: dashboard.php");
    exit;
}

// Fetch all videos
$stmt = $pdo->query("SELECT * FROM videos ORDER BY id DESC");
$videos = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h1 class="text-center">Welcome, <?= htmlspecialchars($_SESSION['user']); ?>!</h1>
    <div class="d-flex justify-content-between align-items-center mb-4">
        <a href="logout.php" class="btn btn-danger">Logout</a>
        <a href="show-videos.php" class="btn btn-info">Show Videos</a>
    </div>

    <!-- Add Video Section -->
    <h2>Add YouTube Video</h2>
    <?php if (!empty($error)): ?>
        <div class="alert alert-danger"><?= $error ?></div>
    <?php elseif (!empty($success)): ?>
        <div class="alert alert-success"><?= $success ?></div>
    <?php endif; ?>
    <form method="POST" action="">
        <div class="mb-3">
            <label for="title" class="form-label">Video Title</label>
            <input type="text" name="title" id="title" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="youtube_link" class="form-label">YouTube Link</label>
            <input type="url" name="youtube_link" id="youtube_link" class="form-control" required>
        </div>
        <button type="submit" name="add_video" class="btn btn-primary">Add Video</button>
    </form>

    <!-- Display Videos Section -->
    <h2 class="mt-5">All YouTube Videos</h2>
    <div class="row g-4">
        <?php foreach ($videos as $video): ?>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card shadow-sm">
                    <div class="ratio ratio-16x9">
                        <iframe src="<?= htmlspecialchars(str_replace('watch?v=', 'embed/', $video['youtube_link'])); ?>" 
                                frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title"><?= htmlspecialchars($video['title']); ?></h5>
                        <a href="dashboard.php?delete=<?= $video['id']; ?>" class="btn btn-danger"
                           onclick="return confirm('Are you sure you want to delete this video?');">Delete</a>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

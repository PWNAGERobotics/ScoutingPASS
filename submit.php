<?php
header("Content-Type: text/plain; charset=UTF-8");

$raw = file_get_contents("php://input");
if ($raw === false || trim($raw) === "") {
    http_response_code(400);
    echo "No data received";
    exit;
}

// If it looks like a form-encoded post (e.g. "data=..."), extract the "data" field.
// Otherwise treat the raw body as the TSV.
$data = $raw;
if (strpos($raw, "data=") === 0) {
    $post = [];
    parse_str($raw, $post);
    $data = isset($post["data"]) ? $post["data"] : "";
}

$data = trim($data);
if ($data === "") {
    http_response_code(400);
    echo "No data received";
    exit;
}

// Normalize newlines, then ensure exactly one trailing newline
$data = str_replace("\r\n", "\n", $data);
if (substr($data, -1) !== "\n") {
    $data .= "\n";
}

// Append to data.txt (in the SAME directory as submit.php)
$csvFile = __DIR__ . DIRECTORY_SEPARATOR . "data.txt";

if (file_put_contents($csvFile, $data, FILE_APPEND | LOCK_EX) === false) {
    http_response_code(500);
    echo "Error appending data";
    exit;
}

echo "Data appended successfully";
?>

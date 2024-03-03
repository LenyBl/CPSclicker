<?php

$this->extend('templates/layout');

$this->section('content');

?>
    <div class="my-4">
        <h1 class="text-center text-light">CPSclicker</h1>
    </div>
    <div class="container d-flex justify-content-center align-items-center mb-4">
        <button type="button" class="btn button btn-dark w-50" id="start-button">Start</button>
    </div>
    <div class="container clicker" id="zone-click">
        <h3 class="text-center text-light">Click to start</h3>
    </div>

    <script src="assets/js/clicker.js"></script>

<?php

$this->endSection();

?>
<?php

$this->extend('templates/layout');

$this->section('content');

?>
    <div class="my-4">
        <h1 class="text-center text-light">CPSclicker</h1>
    </div>
    <div class="container d-flex justify-content-center align-items-center mb-4">
        <button type="button" class="time-button btn button btn-dark" id="time-button1">5s</button>
        <button type="button" class="time-button btn button btn-dark mx-4 active" id="time-button2">10s</button>
        <button type="button" class="time-button btn button btn-dark" id="time-button3">30s</button>
    </div>
    <div class="d-flex justify-content-center align-items-center mb-4">
        <div id="timer" class="text-light">00:10:00</div>
    </div>
    <div class="container clicker-start" id="zone-click">
        <h3 class="text-center text-light">Click to start</h3>
    </div>

    <script src="assets/js/clicker.js"></script>

<?php

$this->endSection();

?>
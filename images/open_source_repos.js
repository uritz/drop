'use strict';

$(document).ready(function () {
    $.getJSON('scripts/open_source_repos.json', function (repos) {
            Object.keys(repos).forEach(repo => {
        $("#repos-select").append(new Option(repo, repos[repo]));
    });
    $('#repos-select').select2();
    $('#repos-select').select2("val", selectedRepo);
    });

});

function searchRepo() {
    window.location.replace($("#repos-select").val() + '.html');
}

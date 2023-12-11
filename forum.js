document.addEventListener("DOMContentLoaded", function() {
    // Function to load forum content
    window.loadForum = function(forumId) {
        // Menyembunyikan semua forum
        var forums = document.querySelectorAll('.forum-container');
        forums.forEach(function(forum) {
            forum.classList.remove('active');
        });

        // Menampilkan forum yang dipilih
        var selectedForum = document.getElementById(forumId);
        if (selectedForum) {
            selectedForum.classList.add('active');
        }
    };

    // Initial load (you can set the default forum to load here)
    window.loadForum('sellerForum');
});

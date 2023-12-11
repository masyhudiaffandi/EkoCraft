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

        // Menghapus kelas 'active' dari semua tautan navigasi
        var navLinks = document.querySelectorAll('.forum-nav a');
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // Menambahkan kelas 'active' ke tautan navigasi yang dipilih
        var selectedNavLink = document.querySelector('.forum-nav a[href="javascript:void(0);"][onclick="loadForum(\'' + forumId + '\')"]');
        if (selectedNavLink) {
            selectedNavLink.classList.add('active');
        }
    };

    // Initial load (you can set the default forum to load here)
    window.loadForum('sellerForum');
});

function toggleReadMore() {
    var hiddenParagraphs = document.querySelectorAll('.about-text .hidden');
    hiddenParagraphs.forEach(function (paragraph) {
        paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
    });

    var readMoreBtn = document.getElementById('read-more-btn');
    readMoreBtn.innerHTML = (readMoreBtn.innerHTML === 'Read More') ? 'Read Less' : 'Read More';
}
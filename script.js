// Function for handling button download triggers
function downloadAlert(itemName) {
    alert("Downloading " + itemName + "... Your file will start downloading shortly.");
}

// Logic for Interactive Forum Submissions
document.getElementById('doubtForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Browser page reload stop karne ke liye

    // Fetch dynamic input variables
    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const questionText = document.getElementById('questionText').value;

    // Create a new feed item element box
    const newDoubt = document.createElement('div');
    newDoubt.className = 'feed-item';

    // Inject layout mapping inner text safely
    newDoubt.innerHTML = `
        <div class="feed-header">
            <span class="feed-user">${studentName}</span>
            <span class="feed-tag">${subject}</span>
        </div>
        <p class="feed-question">${questionText}</p>
        <div class="status-waiting">
            ⏳ <strong>Status:</strong> Waiting for a verified volunteer mentor to respond...
        </div>
    `;

    // Append standard component card at top of container feed list
    const doubtFeed = document.getElementById('doubtFeed');
    doubtFeed.insertBefore(newDoubt, doubtFeed.firstChild);

    // Form clear fields reset execution
    document.getElementById('studentName').value = '';
    document.getElementById('questionText').value = '';

    alert("Aapka doubt live board panel pe register ho gaya hai!");
});